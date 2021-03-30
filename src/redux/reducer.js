import { combineReducers } from "redux";
import tabReducer from "./reducers/tab";
import productReducer from "./reducers/product";

export default combineReducers({
  tabReducer,
  productReducer,
});
