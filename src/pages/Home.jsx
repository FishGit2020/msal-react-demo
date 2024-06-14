import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Typography from "@mui/material/Typography";

export const Home = () => {
  return (
    <>
      <AuthenticatedTemplate>
        <Typography variant="h6">
          You are signed-in.
        </Typography>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Typography variant="h6">
          Please sign-in.
        </Typography>
      </UnauthenticatedTemplate>
    </>
  );
};
