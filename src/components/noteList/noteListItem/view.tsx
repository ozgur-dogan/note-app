import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import NoteListItemProps from "./props";

const NoteListItemView: React.FunctionComponent<NoteListItemProps> = ({ isSelected, id, title }) => {
  return (
    <ListItem component={Link} to={`/${id}`} button selected={isSelected}>
      <ListItemIcon>
        <TurnedInIcon />
      </ListItemIcon>
      <ListItemText>{title || ""}</ListItemText>
    </ListItem>
  );
};
export default NoteListItemView;
