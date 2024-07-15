'use client';

import { tokensList } from '@/constants/mockLists';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFilterValues, IHistoryResponse } from 'src/constants/types';

interface ITransactions {
  filterValues: IFilterValues;
  history: IHistoryResponse[];
  loading: boolean;
}

const initialState: ITransactions = {
  filterValues: {
    stream: true,
    single: true,
    vesting: true,
    active: true,
    completed: true,
    cancelled: true,
    selectedTokens: tokensList.map((token) => ({
      ...token,
      checked: true,
    })),
  },
  history: [],
  loading: true,
};
export interface IChangeCheckbox {
  key: 'stream' | 'single' | 'vesting' | 'completed' | 'cancelled' | 'active';
  value: boolean;
}

export const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    loadHistory: (state, action: PayloadAction<IHistoryResponse[]>) => {
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
