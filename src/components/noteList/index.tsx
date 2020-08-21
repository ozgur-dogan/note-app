import React, { Dispatch } from "react";
import { v4 as uuidv4 } from "uuid";
import { ApplicationState, ApplicationAction } from "../../store";
import { connect } from "react-redux";
import { setNote } from "../../store/note/actions";
import { push } from "react-router-redux";
import NoteListView from "./view";
import NoteListProps from "./props";

const NoteList: React.FunctionComponent<NoteListProps> = (props) => {
  return <NoteListView {...props} />;
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
