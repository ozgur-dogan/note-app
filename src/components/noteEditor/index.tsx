import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { SetNoteAction } from "../../store/note/types";
import { setNote } from "../../store/note/actions";
import NoteEditorProps from "./props";
import NoteEditorView from "./view";

const NoteEditor: React.FunctionComponent<NoteEditorProps> = ({ id, content, onChange }) => {
  return <NoteEditorView content={content} onChange={onChange} id={id}/>
};

const mapStateToProps = (store: ApplicationState, ownProps: NoteEditorProps) => {
  const id: string = ownProps.id;
  const content: string = store?.note?.notes[id]?.content;
  const props: NoteEditorProps = {
    id,
    content,
  };
  return props;
};

const mapDispatchToProps = (dispatch: Dispatch<SetNoteAction>, ownProps: NoteEditorProps) => {
  const id: string = ownProps.id;
  return {
    onChange: (content: string) => {
      dispatch(setNote(id, content));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor);
