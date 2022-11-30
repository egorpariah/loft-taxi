import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    token: null,
    error: null,
  },
  reducers: {
    authRequest: state => (state.error = null),
    registerRequest: state => (state.error = null),
    authSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    authError: (state, action) => {
      state.error = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { authRequest, registerRequest, authSuccess, authError, logout } =
  authSlice.actions;
export default authSlice.reducer;
