import { ActionTypes } from "./action.types";
import { createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  hidden: true,
  cartItems: {}
};

const cartReducer = createReducer(INITIAL_STATE, {
  [ActionTypes.TOGGLE_DROP_DOWN]: state => ({
    ...state,
    hidden: !state.hidden
  }),
  [ActionTypes.ADD_TO_CART]: (state, action) => {
    const { cartItems } = state;
    const { id, ...otherProps } = action.payload;

    if (cartItems[id]) {
      cartItems[id].itemCount = cartItems[id].itemCount + 1;
    } else {
      cartItems[id] = otherProps;
      cartItems[id].itemCount = 1;
    }
  },
  [ActionTypes.REMOVE_CART_ITEM]: (state, action) => {
    const { cartItems } = state;
    const id = action.payload;

    delete cartItems[id.toString()];
  }
});

export default cartReducer;
