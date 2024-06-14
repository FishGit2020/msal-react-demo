import { ProfileData } from "../components/ProfileData";
import { useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { fetchData } from "../fetch";
import React, { useEffect, useState } from "react";

export const Profile = () => {
  const [graphData, setGraphData] = useState(null);
  const { result, error } = useMsalAuthentication(InteractionType.Popup, {
    scopes: ["user.read"],
  });

  // fetch the user's profile data when the user logs in
  useEffect(() => {
    if (!!graphData) {
      return;
    }

    if (!!error) {
      console.error(error);
      return;
    }

    if (result) {
      const { accessToken } = result;

      fetchData("https://graph.microsoft.com/v1.0/me", accessToken)
        .then((data) => {
          setGraphData(data);
          console.log(data);
        })
        .catch((error) => console.error(error));
    }
  }, [graphData, error, result]);

  return <>{graphData && <ProfileData graphData={graphData} />}</>;
};
