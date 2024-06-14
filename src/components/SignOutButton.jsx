import { useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect();
  };
  return (
    <Button color="inherit" onClick={handleLogout}>
      Sign out
    </Button>
  );
};
