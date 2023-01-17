import products from "./fetchReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products
});

export default rootReducer;
