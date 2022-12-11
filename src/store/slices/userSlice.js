import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  isSuccess: false,
  profile: {},
  token: null,
  error: null,
};

if (localStorage.token) {
  initialState.isLoggedIn = true;
  initialState.token = localStorage.token;
}

if (localStorage.profile) {
  initialState.profile = JSON.parse(localStorage.profile);
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authRequest: state => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },
    authSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    authError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setProfileCardRequest: state => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },
    setProfileCardSuccess: (state, action) => {
      state.profile.card = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    setProfileCardError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getProfileCardRequest: state => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },
    getProfileCardSuccess: (state, action) => {
      state.profile.card = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    getProfileCardError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.profile = {};
      state.token = null;
    },
    reset: state => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = null;
    },
  },
});

export const {
  authRequest,
  authSuccess,
  authError,
  setProfileCardRequest,
  setProfileCardSuccess,
  setProfileCardError,
  getProfileCardRequest,
  getProfileCardSuccess,
  getProfileCardError,
  logout,
  reset,
} = userSlice.actions;

export default userSlice.reducer;
