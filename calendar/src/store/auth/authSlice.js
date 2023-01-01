import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    user: {},
    errorMessages: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessages = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessages = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin } = authSlice.actions;
