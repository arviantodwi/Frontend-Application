import { combineReducers } from "redux";
import tabReducer from "./reducers/tab";
import productReducer from "./reducers/product";
import userReducer from "./reducers/user";

export default combineReducers({
  tabReducer,
  productReducer,
  userReducer,
});
