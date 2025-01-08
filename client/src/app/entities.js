import { combineReducers } from "@reduxjs/toolkit";
import comparisonReducer from "@features/comparison/comparisonSlice";
import authReducer from "@features/auth/authSlice";
import languageReducer from "@features/language/languageSlice";

export default combineReducers({
  comparison: comparisonReducer,
  auth: authReducer,
  language: languageReducer,
});
