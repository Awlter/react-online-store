import { ActionTypes } from "./action.types";

export const toggleDropdown = () => ({
  type: ActionTypes.TOGGLE_DROP_DOWN
});

export const addToCart = props => ({
  type: ActionTypes.ADD_TO_CART,
  payload: props
});
