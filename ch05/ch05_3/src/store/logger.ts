import type { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("state before next", store.getState());
  console.log("action", action);
  const returedAction = next(action);
  console.log("state after next", store.getState());
  return returedAction;
};

export default logger;
