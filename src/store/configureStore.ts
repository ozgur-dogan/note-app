import { createStore, applyMiddleware, Store } from "redux";
import { routerMiddleware } from "react-router-redux";
import { History } from "history";
import { composeWithDevTools } from "redux-devtools-extension";

import { ApplicationState, ApplicationAction, reducers } from ".";
import { setStorage, getStorage } from "./localStorage";
const composeEnhancers = composeWithDevTools({});

export default function configureStore(history: History): Store<ApplicationState> {
  const store = createStore<ApplicationState, ApplicationAction, any, any>(
    reducers,
    getStorage(),
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
  store.subscribe(() => {
    setStorage(store.getState());
  });
  return store;
}
