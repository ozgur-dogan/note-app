import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { SetNoteAction } from "../../store/note/types";
import { setNote } from "../../store/note/actions";

interface NoteEditorProps {
  id: string;
  content?: string;
}

const NoteEditor: React.FunctionComponent<NoteEditorProps> = (props: NoteEditorProps) => {
  return <div id="noteEditro"></div>;
};

const mapStateToProps = (store: ApplicationState, ownProps: NoteEditorProps) => {
  const id: string = ownProps.id;
  const content: string = store?.note?.notes[id].content;
  const props: NoteEditorProps = {
    id,
    content,
  };
  return props;
};

const mapDispatchToProps = (dispatch: Dispatch<SetNoteAction>, ownProps: NoteEditorProps) => {
  const id: string = ownProps.id;
  return {
    update: (content: string) => {
      dispatch(setNote(id, content));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NoteEditor);
