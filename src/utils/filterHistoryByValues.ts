import { IHistoryResponse, IFilterValues } from '@/constants/types';

const filterHistoryByValues = (history: IHistoryResponse[], values: IFilterValues) => {
  const filteredHistory = history.filter((tx) => {
    const methodMatch =
      (values.single && tx.method === 'single') ||
      (values.stream && tx.method === 'stream') ||
      (values.vesting && tx.method === 'vesting');

    const statusMatch =
      (values.active && tx.status === 'active') ||
      (values.completed && tx.status === 'completed') ||
      (values.cancelled && tx.status === 'cancelled');

    const tokenMatch = values.selectedTokens.some(
      (token) => token.checked && token.value === tx.token.value,
    );

    return methodMatch && statusMatch && tokenMatch;
  });

  return filteredHistory;
};

export default filterHistoryByValues;
