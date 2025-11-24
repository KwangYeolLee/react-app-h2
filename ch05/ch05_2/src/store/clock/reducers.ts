import * as T from "./types";

const initalState: T.State = new Date().toISOString();
export const reducer = (state: T.State = initalState, action: T.Actions) => {
  switch (action.type) {
    case "@clock/setClock":
      return action.payload;
  }
  return state;
};
