'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IHistoryResponse } from 'src/constants/types';

interface ITransactions {
  history: IHistoryResponse[];
  loading: boolean;
}

const initialState: ITransactions = {
  history: [],
  loading: true,
};

export const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    loadHistory: (state, action: PayloadAction<IHistoryResponse[]>) => {
      state.history = action.payload;
      state.loading = false;
    },
  },
});

export const { loadHistory } = transactions.actions;

export default transactions.reducer;
