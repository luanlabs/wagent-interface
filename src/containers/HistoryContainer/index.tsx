'use client';

import React from 'react';
import HistoryItem from './HistoryItem';
import FilterHistory from './FilterHistory';
import { HistoryListHeader } from './ListHeader';
import CPageCard from '@/components/CPageCard';
import { ITransaction } from '@/constants/types';
import { useAppSelector } from '@/hooks/useRedux';
import filterTransactions from '@/utils/filterHistoryByValues';
import { useGetTransactionsQuery } from '@/services/userApi';

const HistoryPageHeader = () => (
  <div className="flex justify-between items-center w-full -my-1">
    <h1>History</h1>
    <FilterHistory />
  </div>
);

const HistoryContainer = () => {
  const { data: transactionsData, isLoading } = useGetTransactionsQuery(undefined, {
    pollingInterval: 3000,
  });
  const filterValues = useAppSelector((state) => state.transactions.filterValues);

  const filteredTransactions = transactionsData?.result
    ? filterTransactions(transactionsData.result as ITransaction[], filterValues)
    : [];

  return (
    <CPageCard title={<HistoryPageHeader />} className="h-full relative overflow-hidden">
      {isLoading ? (
        <p className="text-cadetBlue flex h-full justify-center items-center text-lg">
          Loading transaction history...
        </p>
      ) : filteredTransactions.length === 0 ? (
        <p className="text-cadetBlue flex h-full justify-center items-center text-lg">
          No transactions found
        </p>
      ) : (
        <div>
          <HistoryListHeader />
          <div className="space-y-2 mobile:space-y-[6px] pb-3 max-h-[calc(100vh-270px)] desktopMax:max-h-[calc(100vh-265px)] w-full overflow-hidden overflow-y-auto">
            {filteredTransactions.map((transaction) => (
              <HistoryItem key={transaction._id} data={transaction} />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      )}
    </CPageCard>
  );
};

export default HistoryContainer;
