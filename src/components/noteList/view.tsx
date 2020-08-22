import React from "react";
import { List,  Paper } from "@material-ui/core";
import NoteListItem from "./noteListItem";
import AddItem from "./addItem";
import NoteListProps from "./props";

const NoteListView: React.FunctionComponent<NoteListProps> = ({ notes, createNew }) => {
  const elements = notes.map((note) => <NoteListItem id={note.id} key={note.id} />);
  return (
    <Paper>
      <List>
        <AddItem />
        {elements}
      </List>
    </Paper>
  );
};

export default NoteListView;
