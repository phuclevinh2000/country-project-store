import { combineReducers } from "redux";
import countries from "./country";
import favorites from "./favorites";

const createRootReducer = () =>
  combineReducers({
    favorites,
    countries,
  })

export default createRootReducer