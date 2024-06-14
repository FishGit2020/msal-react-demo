import { useMsal } from "@azure/msal-react";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export const WelcomeName = () => {
  const [username, setUsername] = useState("");
  const { instance } = useMsal();

  useEffect(() => {
    const currentaccount = instance.getActiveAccount();

    if (currentaccount) {
      setUsername(currentaccount.username);
    }
  }, [instance]);

  return <Typography variant="h6">Welcome, {username}</Typography>;
};
