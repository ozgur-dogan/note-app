import { NoteInterface } from "../../store/note/types";
interface NoteListProps {
  notes: NoteInterface[];
  createNew: () => void;
}

export default NoteListProps;
