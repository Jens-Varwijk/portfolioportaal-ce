import { useEffect, useState } from "react";
import { Mail, LogIn, LogOut, AlertCircle } from "lucide-react";
import { Card } from "../../components/Card";
import EmptyState from "../../components/EmptyState";
import { useMsAuth } from "../../auth/useMsAuth";
import "./Outlook.css";

interface GraphMessage {
  id: string;
  subject: string;
  from?: { emailAddress?: { name?: string } };
  receivedDateTime: string;
  bodyPreview: string;
}

interface GraphEvent {
  id: string;
  subject: string;
  start: { dateTime: string };
  end: { dateTime: string };
  location?: { displayName?: string };
}

export default function Outlook() {
  const { configured, isAuthenticated, account, login, logout, getAccessToken } = useMsAuth();
  const [messages, setMessages] = useState<GraphMessage[] | null>(null);
  const [events, setEvents] = useState<GraphEvent[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return;
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const token = await getAccessToken();
        if (!token) throw new Error("Kon geen token ophalen.");
        const headers = { Authorization: `Bearer ${token}` };

        const [msgRes, evtRes] = await Promise.all([
          fetch("https://graph.microsoft.com/v1.0/me/messages?$top=5&$select=subject,from,receivedDateTime,bodyPreview&$orderby=receivedDateTime desc", { headers }),
          fetch("https://graph.microsoft.com/v1.0/me/calendarview?startdatetime=" + new Date().toISOString() + "&enddatetime=" + new Date(Date.now() + 14 * 86400000).toISOString() + "&$select=subject,start,end,location&$top=10", { headers }),
        ]);

        if (!msgRes.ok) throw new Error(`Graph mail-fout: ${msgRes.status}`);
        if (!evtRes.ok) throw new Error(`Graph agenda-fout: ${evtRes.status}`);

        const msgData = await msgRes.json();
        const evtData = await evtRes.json();
        setMessages(msgData.value ?? []);
        setEvents(evtData.value ?? []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Onbekende fout bij ophalen van Outlook-data.");
      } finally {
        setLoading(false);
      }
    })();
  }, [isAuthenticated]);

  if (!configured) {
    return (
      <EmptyState
        icon={<AlertCircle size={22} />}
        title="Microsoft-login nog niet geconfigureerd"
        description="Er ontbreken VITE_MS_CLIENT_ID en/of VITE_MS_TENANT_ID. Registreer de app in Microsoft Entra ID en vul deze waarden in (zie README.md - Microsoft-integratie)."
      />
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="outlook-login">
        <Mail size={32} />
        <h2>Log in met Microsoft</h2>
        <p>Koppel je Outlook-mailbox en agenda om je recente mails en afspraken hier te zien.</p>
        <button className="btn-primary" onClick={login}>
          <LogIn size={14} /> Inloggen met Microsoft
        </button>
      </div>
    );
  }

  return (
    <div className="outlook">
      <div className="outlook-header">
        <div>
          <h1>Outlook</h1>
          <p>Ingelogd als {account?.username}</p>
        </div>
        <button className="btn-ghost" onClick={logout}>
          <LogOut size={14} /> Uitloggen
        </button>
      </div>

      {error && <EmptyState icon={<AlertCircle size={22} />} title="Kon Outlook-data niet ophalen" description={error} />}
      {loading && <p className="muted">Laden...</p>}

      {!error && !loading && (
        <div className="outlook-grid">
          <Card title="Recente mails">
            {messages && messages.length === 0 && <p className="muted">Geen mails gevonden.</p>}
            <ul className="mail-list">
              {messages?.map((m) => (
                <li key={m.id} className="mail-row">
                  <div className="mail-from">{m.from?.emailAddress?.name ?? "Onbekend"}</div>
                  <div className="mail-subject">{m.subject}</div>
                  <div className="mail-preview">{m.bodyPreview}</div>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Komende afspraken (14 dagen)">
            {events && events.length === 0 && <p className="muted">Geen afspraken gevonden.</p>}
            <ul className="mail-list">
              {events?.map((e) => (
                <li key={e.id} className="mail-row">
                  <div className="mail-subject">{e.subject}</div>
                  <div className="mail-preview">
                    {new Date(e.start.dateTime).toLocaleString("nl-NL")}
                    {e.location?.displayName ? ` - ${e.location.displayName}` : ""}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
}
