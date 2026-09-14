import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { graphScopes, msAuthConfigured } from "./msalConfig";

export function useMsAuth() {
  // useMsal() vereist een MsalProvider - alleen aanroepen wanneer geconfigureerd.
  const msal = msAuthConfigured ? useMsal() : null;
  const isAuthenticated = msAuthConfigured ? useIsAuthenticated() : false;

  async function login() {
    if (!msal) return;
    await msal.instance.loginPopup({ scopes: graphScopes });
  }

  function logout() {
    if (!msal) return;
    msal.instance.logoutPopup();
  }

  async function getAccessToken(): Promise<string | null> {
    if (!msal) return null;
    const account = msal.instance.getActiveAccount();
    if (!account) return null;
    try {
      const result = await msal.instance.acquireTokenSilent({ scopes: graphScopes, account });
      return result.accessToken;
    } catch (err) {
      if (err instanceof InteractionRequiredAuthError) {
        const result = await msal.instance.acquireTokenPopup({ scopes: graphScopes });
        return result.accessToken;
      }
      throw err;
    }
  }

  return {
    configured: msAuthConfigured,
    isAuthenticated,
    account: msal?.instance.getActiveAccount() ?? null,
    login,
    logout,
    getAccessToken,
  };
}
