import { ActionTypes } from "./action.types";

export const toggleDropdown = () => ({
  type: ActionTypes.TOGGLE_DROP_DOWN
});

export const addToCart = props => ({
  type: ActionTypes.ADD_TO_CART,
  payload: props
});

export const removeCartItem = id => ({
  type: ActionTypes.REMOVE_CART_ITEM,
  payload: id
});

export const descreaseCartItems = id => ({
  type: ActionTypes.DECREASE_QUANTITY,
  payload: id
});
