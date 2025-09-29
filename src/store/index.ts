import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";
import { localStorageMiddleware } from "./localStorage";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, localStorageMiddleware))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
