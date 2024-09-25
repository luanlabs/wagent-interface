import { ITransaction, IFilterValues } from '@/constants/types';

const filterHistoryByValues = (history: ITransaction[], values: IFilterValues) => {
  const filteredHistory = history.filter((tx) => {
    const methodMatch =
      (values.single && tx.method === 'single') ||
      (values.stream && tx.method === 'stream') ||
      (values.vesting && tx.method === 'vesting');

    const statusMatch =
      (values.completed && tx.order.status === 'completed') ||
      (values.expired && tx.order.status === 'expired') ||
      (values.pending && tx.order.status === 'pending');
    // (values.active && tx.order.status === 'active') ||
    // (values.cancelled && tx.order.status === 'cancelled');

    const tokenMatch = values.selectedTokens.some(
      (token) => token.checked && token.value === tx.token.symbol,
    );

    return methodMatch && statusMatch && tokenMatch;
  });

  return filteredHistory;
};

export default filterHistoryByValues;
