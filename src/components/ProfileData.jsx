import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const ProfileData = ({ graphData }) => {
  //   {
  //     "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity",
  //     "businessPhones": [],
  //     "displayName": "Youpeng Huang",
  //     "givenName": "Youpeng",
  //     "jobTitle": null,
  //     "mail": null,
  //     "mobilePhone": null,
  //     "officeLocation": null,
  //     "preferredLanguage": "en",
  //     "surname": "Huang",
  //     "userPrincipalName": "youpenghuang_outlook.com#EXT#@youpenghuangoutlook067.onmicrosoft.com",
  //     "id": "a89f2a89-7e71-448f-aadd-9725cac9649e"
  // }

  return (
    <List className="profileData">
      <NameListItem name={graphData.displayName} />
      <JobTitleListItem jobTitle={graphData.jobTitle} />
      <MailListItem mail={graphData.mail} />
      <PhoneListItem phone={graphData.businessPhones[0]} />
      <LocationListItem location={graphData.officeLocation} />
    </List>
  );
};

const NameListItem = ({ name }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Name" secondary={name} />
  </ListItem>
);

const JobTitleListItem = ({ jobTitle }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <WorkIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Title" secondary={jobTitle} />
  </ListItem>
);

const MailListItem = ({ mail }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <MailIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Mail" secondary={mail} />
  </ListItem>
);

const PhoneListItem = ({ phone }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <PhoneIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Phone" secondary={phone} />
  </ListItem>
);

const LocationListItem = ({ location }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <LocationOnIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Location" secondary={location} />
  </ListItem>
);
