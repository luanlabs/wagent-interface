'use client';

import { allTokensList } from '@/constants/mockLists';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFilterValues, ITransaction } from 'src/constants/types';

interface ITransactionsReducer {
  filterValues: IFilterValues;
  history: ITransaction[];
  loading: boolean;
}

const initialState: ITransactionsReducer = {
  filterValues: {
    stream: true,
    single: true,
    vesting: true,
    pending: true,
    completed: true,
    expired: true,
    selectedTokens: allTokensList.map((token) => ({
      ...token,
      checked: true,
    })),
  },
  history: [],
  loading: true,
};
export interface IChangeCheckbox {
  key: 'stream' | 'single' | 'vesting' | 'completed' | 'expired' | 'pending';
  value: boolean;
}

export const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    loadHistory: (state, action: PayloadAction<ITransaction[]>) => {
      state.history = action.payload;
      state.loading = false;
    },
    setCheckBox: (state, action: PayloadAction<IChangeCheckbox>) => {
      state.filterValues[action.payload.key] = action.payload.value;
    },
    setTokenCheckBox: (state, action: PayloadAction<string>) => {
      const tokenIndex = state.filterValues.selectedTokens.findIndex(
        (token) => token.value === action.payload,
      );
      if (tokenIndex !== -1) {
        state.filterValues.selectedTokens[tokenIndex].checked =
          !state.filterValues.selectedTokens[tokenIndex].checked;
      }
    },
  },
});

export const { loadHistory, setCheckBox, setTokenCheckBox } = transactions.actions;

export default transactions.reducer;
