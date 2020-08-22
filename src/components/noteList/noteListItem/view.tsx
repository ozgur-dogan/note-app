import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import NoteListItemProps from "./props";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

const NoteListItemView: React.FunctionComponent<NoteListItemProps> = (props: NoteListItemProps) => {
  return (
    <ListItem onClick={props.onClick} button>
      <ListItemIcon>
        <TurnedInIcon />
      </ListItemIcon>
      <ListItemText>{props?.note?.content || ""}</ListItemText>
    </ListItem>
  );
};
export default NoteListItemView;
