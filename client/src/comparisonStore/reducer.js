import { combineReducers } from "@reduxjs/toolkit";
import comparisonReducer from "./compareSlice";

export default combineReducers({
  compare: comparisonReducer,
});
