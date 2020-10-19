import React, { ReactNode, useState } from "react";
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
    height: `calc(100vh - ${theme.spacing(3)}px)`,
    boxSizing: "border-box",
  },
  container: {
    padding: theme.spacing(2),
  },
  titleInput: {
    width: "100%",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    boxSizing: "border-box",
  },
  richButtons: {
    paddingLeft: theme.spacing(2),
    "& > button": {
      paddingLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

const richButtons = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
  // { label: "H1", style: "header-one" },
  // { label: "H2", style: "header-two" },
  // { label: "H3", style: "header-three" },
  // { label: "H4", style: "header-four" },
  // { label: "H5", style: "header-five" },
  // { label: "H6", style: "header-six" },
  // { label: "Blockquote", style: "blockquote" },
  // { label: "UL", style: "unordered-list-item" },
  // { label: "OL", style: "ordered-list-item" },
  // { label: "Code Block", style: "code-block" },
];

const NoteEditorView: React.FunctionComponent<NoteEditorProps> = (props: NoteEditorProps) => {
  const classes = useStyles(props);
  const initialEditor: EditorState = props.content
    ? EditorState.createWithContent(convertFromRaw(JSON.parse(props.content)))
    : EditorState.createEmpty();
  const [title, setTitle] = useState(props.title || "");
  const [editor, setEditor] = useState(initialEditor);

  const updateDatabase = (editorValue: EditorState, titleValue: string) => {
    if (props.onChange) {
      const rawState: RawDraftContentState = convertToRaw(editorValue.getCurrentContent());
      const newContent = JSON.stringify(rawState);
      props.onChange(newContent, titleValue);
    }
  };
  const onEditorChange = (newEditor: EditorState) => {
    setEditor(newEditor);
    updateDatabase(newEditor, title);
  };
  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState: EditorState | null = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onEditorChange(newState);
      return "handled";
    }
    return "not-handled";
  };
  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    updateDatabase(editor, newTitle);
  };
  const onRichButtonClicked = (style: string) => {
    onEditorChange(RichUtils.toggleInlineStyle(editor, style));
  };
  const arr: ReactNode[] = [];
  richButtons.forEach((button: { label: string; style: string }) => {
    const element:ReactNode = <button onClick={() => onRichButtonClicked(button.style)}>{button.label}</button>;
    arr.push(element);
  });

  return (
    <Paper className={classes.paper}>
      <TextField value={title} onChange={onTitleChange} className={classes.titleInput} placeholder="Title" />
      <div className={classes.richButtons}>{arr}</div>
      <Container className={classes.container}>
        <Editor
          handleKeyCommand={handleKeyCommand}
          editorState={editor}
          onChange={onEditorChange}
          placeholder="Please type your note"
        />
      </Container>
    </Paper>
  );
};
export default NoteEditorView;
