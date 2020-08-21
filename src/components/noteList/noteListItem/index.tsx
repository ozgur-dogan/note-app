import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { RouterAction } from "react-router-redux";
import { push } from "react-router-redux";
import { ApplicationState } from "../../../store";
import NoteListItemProps from "./props";
import NoteListItemView from "./view";

const NoteListItem: React.FunctionComponent<NoteListItemProps> = (props: NoteListItemProps) => {
  return <NoteListItemView {...props} />;
};

const mapStateToProps = (store: ApplicationState, ownProps: NoteListItemProps) => {
  const { id } = ownProps;
  return { note: store.note.notes[id] };
};

const mapDispatchToProps = (dispatch: Dispatch<RouterAction>, ownProps: NoteListItemProps) => {
  const { id } = ownProps;
  return {
    onClick: () => {
      dispatch(push(`/${id}`));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NoteListItem);
