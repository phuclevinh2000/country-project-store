import { combineReducers } from "redux";

import counter from "./counter";
import countries from "./country";

const createRootReducer = () =>
  combineReducers({
    counter,
    countries
  })

export default createRootReducer