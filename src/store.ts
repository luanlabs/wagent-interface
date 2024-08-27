'use client';

import profile from './reducers/profile';
import transactions from './reducers/transactions';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  transactions,
  profile,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
