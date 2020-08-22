interface NoteEditorProps {
  id: string;
  content?: string;
  title?: string;
  onChange?: (content: string, title: string) => void;
}

export default NoteEditorProps;
