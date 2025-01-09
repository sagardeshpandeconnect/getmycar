import { createSlice } from "@reduxjs/toolkit";

export const initialState = "";

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      return action.payload; // Return the new state for primitive values
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
