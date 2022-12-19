import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import orderReducer from './slices/orderSlice';
import createSagaMiddleware from '@redux-saga/core';
import { Sagas } from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(Sagas);
