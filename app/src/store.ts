import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const middlewares = [thunk];

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];

if (
  process.env.NODE_ENV === "development" &&
  window["__REDUX_DEVTOOLS_EXTENSION__"]
) {
  enhancers.push(window["__REDUX_DEVTOOLS_EXTENSION__"]());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store);
