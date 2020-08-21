// ./src/store/chat/reducer.ts

import { Reducer } from "redux";
import { NoteState, NoteActions, ActionEnum, SetNoteAction, RemoveNoteAction } from "./types";

export const initialState: NoteState = {
  notes: {},
};

const reducer: Reducer<NoteState, NoteActions> = (state: NoteState = initialState, action: NoteActions) => {
  switch ((action as NoteActions).type) {
    case ActionEnum.REMOVE_NOTE:
      const newState: NoteState = { ...state };
      const argsRemove = (action as RemoveNoteAction).args;
      delete newState.notes[argsRemove.id];
      return newState;
    case ActionEnum.SET_NOTE:
      const argsSet = (action as SetNoteAction).args;
      return { ...state, notes: { ...state.notes, [argsSet.id]: argsSet.content } } as NoteState;
    default:
      return state;
  }
};

export default reducer;
