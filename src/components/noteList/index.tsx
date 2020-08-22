import React, { Dispatch } from "react";

import { ApplicationState, ApplicationAction } from "../../store";
import { connect } from "react-redux";
import NoteListView from "./view";
import NoteListProps from "./props";

const NoteList: React.FunctionComponent<NoteListProps> = (props) => {
  return <NoteListView {...props} />;
};
const mapStateToProps = (store: ApplicationState) => {
  return { notes: Object.values(store.note.notes) };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationAction>) => {
  return {};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NoteList);
