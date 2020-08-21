import React from "react";
import { List, ListItem } from "@material-ui/core";
import NoteListItem from "./noteListItem";
import NoteListProps from "./props";

const NoteListView: React.FunctionComponent<NoteListProps> = ({ notes, createNew }) => {
  const elements = notes.map((note) => <NoteListItem id={note.id} key={note.id} />);
  const newElement = (
    <ListItem button key="new">
      New
    </ListItem>
  );
  return (
    <List>
      {newElement}
      {elements}
    </List>
  );
};

export default NoteListView;
