import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import NoteListItemProps from "./props";

const NoteListItemView: React.FunctionComponent<NoteListItemProps> = (props: NoteListItemProps) => {
  return (
    <ListItem onClick={props.onClick}>
      <ListItemText>{props?.note?.content || ""}</ListItemText>
    </ListItem>
  );
};
export default NoteListItemView;
