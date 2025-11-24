import type { Action } from "redux";

export type State = number;
export type SetCountAction = Action<"@counter/setCounter"> & {
  payload: State;
};
export type Actions = SetCountAction;
