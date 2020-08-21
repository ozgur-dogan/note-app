import React, { Dispatch } from "react";
import { v4 as uuidv4 } from "uuid";
import { NoteInterface } from "../../store/note/types";
import { ApplicationState, ApplicationAction } from "../../store";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setNote } from "../../store/note/actions";
import { push } from "react-router-redux";
interface NoteListProps {
  notes: NoteInterface[];
  createNew: () => void;
}

const NoteList: React.FunctionComponent<NoteListProps> = ({ notes, createNew }) => {
  const elements = notes.map((note: NoteInterface) => (
    <Link to={`/${note.id}`}>
      <li key={note.id}>{note.content.substr(0, 100)}</li>
    </Link>
  ));
  const newElement = (
    <li key="new" onClick={createNew}>
      New
    </li>
  );
  return (
    <ul id="noteList">
      {newElement}
      {elements}
    </ul>
  );
};
const mapStateToProps = (store: ApplicationState) => {
  return { notes: Object.values(store.note.notes) };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationAction>) => {
  return {
    createNew: () => {
      const uuid = uuidv4();
      dispatch(setNote(uuid));
      dispatch(push(`/${uuid}`));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NoteList);
