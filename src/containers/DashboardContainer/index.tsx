'use client';

import React, { useEffect } from 'react';

import CCard from '@/components/CCard';
import CPageCard from '@/components/CPageCard';
import CBarChart from '@/components/Charts/CBarChart';

import DonutChartContainer from '@/containers/DashboardContainer/DonutChart';
import HistoryItem from '@/containers/HistoryContainer/HistoryItem';

import { loadHistory } from '@/reducers/transactions';
import { history as historyMock } from '@/constants/mockLists';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

import { HistoryListHeader } from '../HistoryContainer/ListHeader';

const DashboardContainer = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.transactions.history);

  useEffect(() => {
    dispatch(loadHistory(historyMock));
  }, [dispatch]);

  return (
    <CPageCard title="Dashboard" className="overflow-y-auto">
      <div
        className="flex space-x-4 h-[286px] w-full mobile:h-full justify-between
        mobile:justify-center mobile:flex-col mobile:space-x-0 mobile:space-y-3 overflow-hidden"
      >
        <div className="h-full xxl:w-[30%] lg:!w-[50%] desktop:w-[55%]">
          <DonutChartContainer />
        </div>
        <CCard
          label="Revenue Chart"
          className="h-full w-full xxl:w-[65%] xl:!w-4/5 px-4 py-6 mobile:w-full lg:w-[66%] mobile:overflow-x-auto"
          borderColor="#E4E7EC"
        >
          <CBarChart />
        </CCard>
      </div>
      <div className="mt-[31px] overflow-hidden">
        <h1 className="text-2xl mb-4 font-medium">Recent transactions</h1>
        {history.length === 0 ? (
          <p className="text-cadetBlue mt-4 bigScreen:mt-24 text-center text-lg">
            No transactions found
          </p>
        ) : (
          <>
            <HistoryListHeader />
            <div className="space-y-2 pb-3 mobile:space-y-[6px] w-full overflow-y-auto bigScreen:max-h-fit bigScreen:pb-0 desktop:max-h-[150px] short:h-[80px]">
              {history.slice(0, 5).map((item) => (
                <HistoryItem key={item.id} data={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </CPageCard>
  );
};

export default DashboardContainer;
