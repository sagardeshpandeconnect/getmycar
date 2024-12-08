import { combineReducers } from "@reduxjs/toolkit";
import comparisonReducer from "@features/comparison/comparisonSlice";

export default combineReducers({
  comparison: comparisonReducer,
});
