import { ApplicationState } from ".";
import { NoteState } from "./note/types";

const STORAGE_KEY = "note";

const setStorage = (state: ApplicationState): void => {
  const note: NoteState = state.note;
  const obj = JSON.stringify(note);
  localStorage.setItem(STORAGE_KEY, obj);
};

const getStorage = (): ApplicationState | undefined => {
  const storageVal: string | null = localStorage.getItem(STORAGE_KEY);
  if (!storageVal) {
    return undefined;
  }
  const noteState: NoteState = JSON.parse(storageVal);

  const state: ApplicationState = {
    note: noteState,
    router: { location: null },
  };
  return state;
};
export { getStorage, setStorage };
