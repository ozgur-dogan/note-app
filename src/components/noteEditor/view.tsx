import React, { useEffect, useMemo, useState } from "react";
import { Paper } from "@material-ui/core";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import NoteEditorProps from "./props";

const NoteEditorView: React.FunctionComponent<NoteEditorProps> = ({ content, onChange }) => {
  const emptyState: Node[] = [];
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(emptyState);
  return (
    <Paper style={{ height: 350 }}>
      <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
        
      </Slate>
    </Paper>
  );
};
export default NoteEditorView;
