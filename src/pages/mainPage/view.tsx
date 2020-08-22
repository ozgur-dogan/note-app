import React from "react";
import { Grid } from "@material-ui/core";
import NoteList from "../component/noteList";
import NoteEditor from "../../components/noteEditor";
import MainPageProps from "./props";

const MainPageView: React.FunctionComponent<MainPageProps> = ({ noteID }) => {
  const editor = noteID ? <NoteEditor key={noteID} id={noteID} /> : null;
  return (
    <Grid container>
      <Grid item xs={12} md={4} lg={3}>
        <NoteList />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        {editor}
      </Grid>
    </Grid>
  );
};

export default MainPageView;
