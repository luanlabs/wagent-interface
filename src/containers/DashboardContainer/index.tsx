'use client';

import React, { useEffect } from 'react';

import CCard from '@/components/CCard';
import CPageCard from '@/components/CPageCard';
import CBarChart from '@/components/Charts/CBarChart';

import HistoryItemCard from '@/containers/HistoryItemCard';
import DonutChartContainer from '@/containers/DonutChartContainer';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { history as historyMock } from '@/constants/mockLists';

import { HistoryListHeader } from '../HistoryContainer';
import { loadHistory } from '@/reducers/transactions';

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
            <div className="space-y-2 pb-3 mobile:space-y-[6px] w-full overflow-y-auto bigScreen:max-h-fit bigScreen:pb-0 desktop:max-h-[150px] short:h-[100px]">
              {history.slice(0, 5).map((item) => (
                <HistoryItemCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  method={item.method}
                  status={item.status}
                  token={item.token}
                  date={item.date}
                  amount={item.amount}
                  image={item.image}
                  sender={item.sender}
                  progress={item.progress}
                  cancellableAfter={item.cancellableAfter}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </CPageCard>
  );
};

export default DashboardContainer;
