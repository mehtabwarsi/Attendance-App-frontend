import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
       state.push(action.payload)
    },
    login: (state, action) => {},
  },
});

export const { register, login } = authSlice.actions;

export default authSlice.reducer;
