import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});
