import { ActionCreator } from "redux";
import { SetNoteAction, RemoveNoteAction, ActionEnum, NoteInterface } from "./types";

export const setNote: ActionCreator<SetNoteAction> = (id: string, content: string, title: string) => {
  const note: NoteInterface = {
    id,
    content,
    title,
    lastUpdated: new Date(),
  };
  return {
    type: ActionEnum.SET_NOTE,
    args: note,
  };
};

export const removeNote: ActionCreator<RemoveNoteAction> = (id: string) => ({
  type: ActionEnum.REMOVE_NOTE,
  args: {
    id,
  },
});
