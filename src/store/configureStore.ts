import { createStore, applyMiddleware, Store } from "redux";
import { routerMiddleware } from "react-router-redux";
import { History } from "history";
import { composeWithDevTools } from "redux-devtools-extension";

import { ApplicationState, ApplicationAction, reducers } from ".";
const composeEnhancers = composeWithDevTools({});

export default function configureStore(history: History): Store<ApplicationState> {
  return createStore<ApplicationState, ApplicationAction, any, any>(
    reducers,
    undefined,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
}
