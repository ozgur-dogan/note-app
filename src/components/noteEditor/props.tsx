interface NoteEditorProps {
  id: string;
  content?: string;
  onChange?: (content: string) => void;
}

export default NoteEditorProps;
