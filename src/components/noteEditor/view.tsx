import React, { useState } from "react";
import { Paper, TextField, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NoteEditorProps from "./props";
import {
  Editor,
  EditorState,
  RawDraftContentState,
  convertToRaw,
  convertFromRaw,
  RichUtils,
  DraftHandleValue,
} from "draft-js";
import "draft-js/dist/Draft.css";
const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100vh",
  },
  container: {
    padding: theme.spacing(2),
  },
  titleInput: {
    width: "100%",
    padding: theme.spacing(2),
  },
}));

const NoteEditorView: React.FunctionComponent<NoteEditorProps> = (props: NoteEditorProps) => {
  const classes = useStyles(props);
  const initialState: EditorState = props.content
    ? EditorState.createWithContent(convertFromRaw(JSON.parse(props.content)))
    : EditorState.createEmpty();
  const [title, setTitle] = useState(props.title || "");
  const [state, setState] = useState(initialState);
  const onChange = () => {
    if (props.onChange) {
      const rawState: RawDraftContentState = convertToRaw(state.getCurrentContent());
      const newContent = JSON.stringify(rawState);
      props.onChange(newContent, title);
    }
  };
  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState: EditorState = RichUtils.handleKeyCommand(editorState, command) || editorState;
    onStateChange(newState);
    return "handled";
  };
  const onStateChange = (newState: EditorState) => {
    setState(newState);
    onChange();
  };
  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    onChange();
  };

  return (
    <Paper className={classes.paper}>
      <TextField value={title} onChange={onTitleChange} className={classes.titleInput} placeholder="Title" />
      <Container>
        <Editor
          handleKeyCommand={handleKeyCommand}
          editorState={state}
          onChange={onStateChange}
          placeholder="Your Note Here"
        />
      </Container>
    </Paper>
  );
};
export default NoteEditorView;
