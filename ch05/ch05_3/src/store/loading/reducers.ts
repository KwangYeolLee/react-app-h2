import * as T from "./types";
const initalState: T.State = false;
export const reducer = (state: T.State = initalState, action: T.Actions) => {
  switch (action.type) {
    case "@loading/setLoadingAction":
      return action.payload;
  }
  return state;
};
