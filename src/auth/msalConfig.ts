import type { Configuration } from "@azure/msal-browser";

// Vite env vars zijn build-time en landen in de publieke bundel. Client ID en
// Tenant ID zijn per ontwerp geen geheimen (MSAL SPA-flow, PKCE) - er wordt hier
// dus nooit een client secret of service-role key gebruikt (master prompt sectie 7).
const clientId = import.meta.env.VITE_MS_CLIENT_ID as string | undefined;
const tenantId = import.meta.env.VITE_MS_TENANT_ID as string | undefined;
const redirectUri = (import.meta.env.VITE_MS_REDIRECT_URI as string | undefined) ?? window.location.origin + import.meta.env.BASE_URL;

export const msAuthConfigured = Boolean(clientId && tenantId);

export const msalConfig: Configuration = {
  auth: {
    clientId: clientId ?? "",
    authority: tenantId ? `https://login.microsoftonline.com/${tenantId}` : undefined,
    redirectUri,
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
};

export const graphScopes = ["User.Read", "Mail.Read", "Calendars.Read", "Calendars.ReadWrite"];
