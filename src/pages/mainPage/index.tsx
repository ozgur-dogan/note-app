import React from "react";
import NoteList from "../../components/noteList";
import { useParams } from "react-router-dom";
import RouteParams from "../../router/params";
import NoteEditor from "../../components/noteEditor";

const MainPage: React.FunctionComponent<{}> = () => {
  const { noteID } = useParams<RouteParams>();
  const editor = noteID ? <NoteEditor key={noteID} id={noteID} /> : null;
  return (
    <div>
      <NoteList />
      {editor}
    </div>
  );
};

export default MainPage;
