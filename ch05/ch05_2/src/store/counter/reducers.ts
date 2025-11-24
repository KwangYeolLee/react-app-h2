import * as T from "./types";
const initalState: T.State = 0;

export const reducer = (state: T.State = initalState, action: T.Actions) => {
  switch (action.type) {
    case "@counter/setCounter":
      return state + action.payload;
  }
  return state;
};
