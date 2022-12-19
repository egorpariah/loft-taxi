import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isSuccess: false,
  addresses: [],
  route: [],
  error: null,
};

export const orderSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAddressListRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    getAddressListSuccess: (state, action) => {
      state.addresses = action.payload;
      state.isLoading = false;
    },
    getRouteRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    getRouteSuccess: (state, action) => {
      state.route = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    requestError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    reset: state => {
      state.isLoading = false;
      state.route = [];
      state.isSuccess = false;
      state.error = null;
    },
  },
});

export const {
  getAddressListRequest,
  getAddressListSuccess,
  getRouteRequest,
  getRouteSuccess,
  requestError,
  reset,
} = orderSlice.actions;

export default orderSlice.reducer;
