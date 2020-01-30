import { ActionTypes } from "./action.types";

export const setCurrentUser = user => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user
});
