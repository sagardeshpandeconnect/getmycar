import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isUserSignedIn: false, user: null },
  reducers: {
    login(state, action) {
      state.isUserSignedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isUserSignedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
