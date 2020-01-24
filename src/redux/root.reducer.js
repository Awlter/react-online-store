import { combineReducers } from "reduc";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer
});
