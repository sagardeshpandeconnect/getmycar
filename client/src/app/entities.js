import { combineReducers } from "@reduxjs/toolkit";
import comparisonReducer from "@features/comparison/comparisonSlice";
import authReducer from "@features/auth/authSlice";

export default combineReducers({
  comparison: comparisonReducer,
  auth: authReducer,
});
