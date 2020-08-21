import { combineReducers, Reducer } from "redux";
import { routerReducer, RouterState, RouterAction } from "react-router-redux";
import { NoteState, NoteActions } from "./note/types";
import noteReducer from "./note/reducer";

export interface ApplicationState {
  router: RouterState;
  note: NoteState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  router: routerReducer,
  note: noteReducer,
});

export type ApplicationAction = NoteActions | RouterAction;
