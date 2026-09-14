import type { ReactNode } from "react";
import { PublicClientApplication, EventType, type EventMessage, type AuthenticationResult } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig, msAuthConfigured } from "./msalConfig";

let msalInstance: PublicClientApplication | undefined;

if (msAuthConfigured) {
  msalInstance = new PublicClientApplication(msalConfig);
  msalInstance.initialize().then(() => {
    const active = msalInstance!.getActiveAccount();
    if (!active && msalInstance!.getAllAccounts().length > 0) {
      msalInstance!.setActiveAccount(msalInstance!.getAllAccounts()[0]);
    }
    msalInstance!.addEventCallback((message: EventMessage) => {
      if (message.eventType === EventType.LOGIN_SUCCESS) {
        const result = message.payload as AuthenticationResult;
        if (result?.account) msalInstance!.setActiveAccount(result.account);
      }
    });
  });
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  if (!msalInstance) return <>{children}</>;
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}
