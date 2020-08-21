import { Action } from "redux";

export enum ActionEnum {
  "SET_NOTE" = "SET_NOTE",
  "REMOVE_NOTE" = "REMOVE_NOTE",
}

export interface NoteState {
  notes: { [noteID: string]: NoteInterface };
}
export interface NoteInterface {
  id: string;
  lastUpdated: Date;
  content: string;
}

export interface SetNoteAction extends Action {
  type: ActionEnum.SET_NOTE;
  args: NoteInterface;
}

export interface RemoveNoteAction extends Action {
  type: ActionEnum.REMOVE_NOTE;
  args: {
    id: string;
  };
}

export type NoteActions = RemoveNoteAction | SetNoteAction;
