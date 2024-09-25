'use client';

import profile from './reducers/profile';
import transactions from './reducers/transactions';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userApi } from '@/services/userApi'; // Import your RTK Query API

const rootReducer = combineReducers({
  transactions,
  profile,
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
