import Grid from "@mui/material/Grid";
import { PageLayout } from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

function App({ msalInsance }) {
  return (
    <MsalProvider instance={msalInsance}>
      <PageLayout>
        <Grid container justifyContent="center">
          <Pages />
        </Grid>
      </PageLayout>
    </MsalProvider>
  );
}

const Pages = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // If the user is not authenticated, attempt to sign them in
  useEffect(() => {
    if (!isAuthenticated) {
      instance
        .ssoSilent({
          scopes: ["user.read"],
          loginHint: "youpenghuang@outlook.com",
        })
        .then((res) => {
          instance.setActiveAccount(res.account);
        })
        .catch((err) => {
          if (err instanceof InteractionRequiredAuthError) {
            instance.loginRedirect({
              scopes: ["user.read"],
            });
          }
        });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
