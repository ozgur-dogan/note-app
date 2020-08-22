import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { SetNoteAction, NoteInterface } from "../../store/note/types";
import { setNote } from "../../store/note/actions";
import NoteEditorProps from "./props";
import NoteEditorView from "./view";

const NoteEditor: React.FunctionComponent<NoteEditorProps> = (props) => {
  return <NoteEditorView {...props} key={props.id} />;
};

const mapStateToProps = (store: ApplicationState, ownProps: NoteEditorProps) => {
  const id: string = ownProps.id;
  const note: NoteInterface = store?.note?.notes[id];
  const content = note.content;
  const title = note.title;
  const props: NoteEditorProps = {
    id,
    content,
    title,
  };
  return props;
};

const mapDispatchToProps = (dispatch: Dispatch<SetNoteAction>, ownProps: NoteEditorProps) => {
  const id: string = ownProps.id;
  return {
    onChange: (content: string, title: string) => {
      dispatch(setNote(id, content, title));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor);
