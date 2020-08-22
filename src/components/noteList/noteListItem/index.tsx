import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { RouterAction } from "react-router-redux";
import { ApplicationState } from "../../../store";
import NoteListItemProps from "./props";
import NoteListItemView from "./view";
import { useParams } from "react-router-dom";
import RouteParams from "../../../router/params";

const NoteListItem: React.FunctionComponent<NoteListItemProps> = ({ id, content }) => {
  let params = useParams<RouteParams>();
  const currentNoteID: string | undefined = useParams<RouteParams>().noteID;
  console.log({ currentNoteID, params });
  return <NoteListItemView id={id} content={content} isSelected={currentNoteID === id} />;
};

const mapStateToProps = (store: ApplicationState, ownProps: NoteListItemProps) => {
  const { id } = ownProps;
  return { content: store.note?.notes[id]?.content };
};

const mapDispatchToProps = (dispatch: Dispatch<RouterAction>, ownProps: NoteListItemProps) => {
  return {};
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NoteListItem);
