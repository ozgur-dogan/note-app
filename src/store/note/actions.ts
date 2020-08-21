// ./src/store/chat/actions.ts

import { ActionCreator } from "redux";
import { SetNoteAction, RemoveNoteAction, ActionEnum } from "./types";

export const setNote: ActionCreator<SetNoteAction> = (id: string, content: string) => ({
  type: ActionEnum.SET_NOTE,
  args: {
    id,
    content,
  },
});

export const removeNote: ActionCreator<RemoveNoteAction> = (id: string) => ({
  type: ActionEnum.REMOVE_NOTE,
  args: {
    id,
  },
});

