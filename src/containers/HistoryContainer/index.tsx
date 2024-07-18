'use client';

import React from 'react';

import HistoryItem from './HistoryItem';
import FilterHistory from './FilterHistory';
import { HistoryListHeader } from './ListHeader';

import CPageCard from '@/components/CPageCard';
import { useAppSelector } from '@/hooks/useRedux';
import filterHistoryByValues from '@/utils/filterHistoryByValues';

const pageTitle = (
  <div className="flex justify-between items-center w-full -my-1">
    <h1>History</h1>
    <FilterHistory />
  </div>
);
const HistoryContainer = () => {
  const history = useAppSelector((state) => state.transactions.history);
  const values = useAppSelector((state) => state.transactions.filterValues);

  const filteredHistory = filterHistoryByValues(history, values);

  return (
    <CPageCard title={pageTitle} className="h-full relative overflow-hidden">
      {filteredHistory.length === 0 ? (
        <p className="text-cadetBlue flex h-full justify-center items-center text-lg">
          No transactions found
        </p>
      ) : (
        <div>
          <HistoryListHeader />
          <div className="space-y-2 mobile:space-y-[6px] pb-3 max-h-[calc(100vh-270px)] desktopMax:max-h-[calc(100vh-265px)] w-full overflow-hidden overflow-y-auto">
            {filteredHistory.map((item) => (
              <HistoryItem key={item.id} data={item} />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      )}
    </CPageCard>
  );
};

export default HistoryContainer;
