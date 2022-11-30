import { configureStore } from '@reduxjs/toolkit';
import { loginMiddleware, registerMiddleware } from './middlewares';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loginMiddleware, registerMiddleware),
});
