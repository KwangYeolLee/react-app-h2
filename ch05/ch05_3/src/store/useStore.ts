import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { rootReducer } from "./rootReducer";
// import logger from "./logger";
import logger from "redux-logger";
// import { thunk } from "redux-thunk";

const useLogger = import.meta.env.DEV;

const initalizeStore = () => {
  const middlewares: Middleware[] = [];
  if (useLogger) {
    middlewares.push(logger);
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware();
      return defaultMiddleware.concat(middlewares);
    },
  });
  return store;
};

export function useStore() {
  const store = useMemo(() => initalizeStore(), []);
  return store;
}
