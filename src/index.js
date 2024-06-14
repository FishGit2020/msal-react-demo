import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import {
  EventType,
  PublicClientApplication,
  LogLevel,
} from "@azure/msal-browser";

const clientId = "c0aa5856-f9cf-42d4-9f48-b5765ca86d8b";
const tenantId = "455fc020-6467-4490-9017-bc50dfd49378";

const clientId2 = "f4064b09-24cb-428b-9933-ccc35e636b88";
const tenantId2 = "72f988bf-86f1-41af-91ab-2d7cd011db47";

// ourside of the component to avoid re-renders
const pca = new PublicClientApplication({
  auth: {
    clientId: clientId,
    redirectUri: "/",
    authority: "https://login.microsoftonline.com/" + tenantId,
  },
  cache: {
    cacheLocation: "localStorage", // tokens will be cached indefinitely
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        console.log(message);
      },
      logLevel: LogLevel.Info,
    },
  },
});

// set the active account when the user logs in
pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    pca.setActiveAccount(event.payload.account);
  }
});

pca.initialize().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App msalInsance={pca} />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
});
