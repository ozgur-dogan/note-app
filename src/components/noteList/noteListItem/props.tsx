import { NoteInterface } from "../../../store/note/types";
interface NoteListItemProps {
  id: string;
  note?: NoteInterface;
  onClick?: () => void;
}
export default NoteListItemProps;
