import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { officialDeadlines } from "../../data/officialData";
import { Card } from "../../components/Card";
import StatusBadge from "../../components/StatusBadge";
import ContentOriginBadge from "../../components/ContentOriginBadge";
import { addDays, formatNL, startOfWeek } from "../../lib/date";
import "./Deadlines.css";

type Filter = "alles" | "deze_week" | "deze_maand" | "lowstakes" | "midstakes" | "ingeleverd" | "openstaand";

const filters: { key: Filter; label: string }[] = [
  { key: "alles", label: "Alles" },
  { key: "deze_week", label: "Deze week" },
  { key: "deze_maand", label: "Deze maand" },
  { key: "lowstakes", label: "Lowstakes" },
  { key: "midstakes", label: "Midstakes" },
  { key: "ingeleverd", label: "Ingeleverd" },
  { key: "openstaand", label: "Openstaand" },
];

export default function Deadlines() {
  const [filter, setFilter] = useState<Filter>("alles");
  const today = useMemo(() => new Date(), []);
  const weekStart = startOfWeek(today);
  const weekEnd = addDays(weekStart, 6);

  const sorted = useMemo(() => [...officialDeadlines].sort((a, b) => a.date.localeCompare(b.date)), []);

  const filtered = sorted.filter((d) => {
    const date = new Date(d.date);
    switch (filter) {
      case "deze_week":
        return date >= weekStart && date <= weekEnd;
      case "deze_maand":
        return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
      case "lowstakes":
        return d.projectType === "Lowstake";
      case "midstakes":
        return d.projectType === "Midstake";
      case "ingeleverd":
        return d.status === "ingeleverd" || d.status === "afgerond";
      case "openstaand":
        return d.status !== "ingeleverd" && d.status !== "afgerond";
      default:
        return true;
    }
  });

  const openDeadlines = sorted.filter((d) => d.status !== "ingeleverd" && d.status !== "afgerond");
  const nextUp = openDeadlines[0];

  return (
    <div className="deadlines">
      <div className="deadlines-header">
        <div>
          <h1>Deadlines</h1>
          <p>
            Overzicht van alles wat ingeleverd moet worden, met prioriteit voor wat het eerst komt. Bron:{" "}
            <a href="https://fabianb88.github.io/minor-ce-studentenhandleiding/planning.html" target="_blank" rel="noreferrer">
              studentenhandleiding - planning
            </a>
            .
          </p>
        </div>
        <ContentOriginBadge origin="OFFICIAL_CONTENT" />
      </div>

      <Card className="whatnow-card">
        <div className="whatnow-header">
          <Sparkles size={16} />
          <h2>Wat moet ik nu doen?</h2>
        </div>
        {nextUp ? (
          <p>
            Eerstvolgende deadline: <strong>{nextUp.title}</strong> op {formatNL(new Date(nextUp.date))}
            {nextUp.remainingWork ? ` — ${nextUp.remainingWork}.` : "."} Je hebt nog{" "}
            <strong>{openDeadlines.length}</strong> openstaande deadline(s).
          </p>
        ) : (
          <p>Geen openstaande deadlines — goed bezig.</p>
        )}
        <p className="whatnow-disclaimer">Dit is een ondersteunende suggestie, geen officiële studie-instructie.</p>
      </Card>

      <div className="filter-row">
        {filters.map((f) => (
          <button key={f.key} className={filter === f.key ? "active" : ""} onClick={() => setFilter(f.key)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="deadline-list">
        {filtered.length === 0 && <p className="muted">Geen deadlines in dit filter.</p>}
        {filtered.map((d) => (
          <Card key={d.id} className="deadline-card">
            <div className="deadline-card-top">
              <div>
                <div className="deadline-title">{d.title}</div>
                <div className="deadline-meta">
                  {d.description && <span>{d.description}</span>}
                  {d.projectType && <span className="tag">{d.projectType}</span>}
                </div>
              </div>
              <StatusBadge status={d.status} />
            </div>
            <div className="deadline-card-bottom">
              <span>{formatNL(new Date(d.date))}</span>
              {d.remainingWork && <span className="deadline-remaining">{d.remainingWork}</span>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
