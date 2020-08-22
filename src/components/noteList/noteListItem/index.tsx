import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { RouterAction } from "react-router-redux";
import { ApplicationState } from "../../../store";
import NoteListItemProps from "./props";
import NoteListItemView from "./view";
import { useParams } from "react-router-dom";
import RouteParams from "../../../router/params";

const NoteListItem: React.FunctionComponent<NoteListItemProps> = ({ id, title }) => {
  const currentNoteID: string | undefined = useParams<RouteParams>().noteID;
  return <NoteListItemView id={id} title={title} isSelected={currentNoteID === id} />;
};

const mapStateToProps = (store: ApplicationState, ownProps: NoteListItemProps) => {
  const { id } = ownProps;
  return { title: store.note?.notes[id]?.title };
};

const mapDispatchToProps = (dispatch: Dispatch<RouterAction>, ownProps: NoteListItemProps) => {
  return {};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NoteListItem);
