import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const comparisonSlice = createSlice({
  name: "comparison",
  initialState,
  reducers: {
    addToComparison: (state, action) => {
      state.push(action.payload);
    },
    removeFromComparison: (state, action) => {
      return (state = state.filter((car) => car._id !== action.payload));
    },
    resetStore: () => {
      return initialState;
    },
  },
});

export const { addToComparison, removeFromComparison, resetStore } =
  comparisonSlice.actions;

export default comparisonSlice.reducer;
