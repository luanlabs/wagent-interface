'use client';

import React, { useEffect, useState } from 'react';

import CCard from '@/components/CCard';
import CPageCard from '@/components/CPageCard';
import CBarChart from '@/components/Charts/CBarChart';

import generateChartData from '@/containers/ChartTimeStamps/generateChartData';
import DonutChartContainer from '@/containers/DashboardContainer/DonutChart';
import { HistoryListHeader } from '@/containers/HistoryContainer/ListHeader';
import RevenueChart from '@/containers/DashboardContainer/RevenueChart';
import HistoryItem from '@/containers/HistoryContainer/HistoryItem';
import ChartTimeStamps from '@/containers/ChartTimeStamps';

import { loadHistory } from '@/reducers/transactions';
import { history as historyMock } from '@/constants/mockLists';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

import { BasicOptionType, CBarChartType } from '@/models';
import useRequest from '@/hooks/useRequest';

const DashboardContainer = () => {
  const [CBarChartData, setCBarChartData] = useState<CBarChartType[]>(generateChartData('1d'));
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.transactions.history);
  const { error, isLoading, data, response } = useRequest('/users/transactions', {
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + document.cookie,
    },
  });

  useEffect(() => {
    dispatch(loadHistory(historyMock));
  }, [dispatch]);

  const handleChartTimeStampsChange = (e: BasicOptionType<string>) => {
    setCBarChartData(generateChartData(e.value));
  };

  return (
    <CPageCard title="Dashboard" className="overflow-y-auto">
      <div className=" flex mb-[15px] space-x-4 w-full mobile:flex-col mobile:space-x-0 mobile:space-y-2">
        <RevenueChart title="Total Revenue" amount="32331.93" percentage={12.31} />
        <RevenueChart
          title="Monthly Revenue"
          amount="4312.23"
          percentage={28.31}
          summaryText="25 Active Streams"
        />
        <RevenueChart title="Monthly Growth" amount="3233193" percentage={-12.31} />
      </div>
      <div
        className="flex space-x-4 h-[286px] w-full mobile:h-full justify-between
        mobile:justify-center mobile:flex-col mobile:space-x-0 mobile:space-y-3 overflow-hidden"
      >
        <div className="h-full xxl:w-[30%] lg:!w-[50%] desktop:w-[55%]">
          <DonutChartContainer />
        </div>
        <CCard
          label="Revenue Chart"
          className="h-full w-full xxl:w-[65%] xl:!w-4/5 px-4 py-6 mobile:w-full lg:w-[66%] mobile:overflow-x-auto relative"
          borderColor="#E4E7EC"
        >
          <div className="w-[50%] absolute top-4 right-4">
            <ChartTimeStamps onChange={handleChartTimeStampsChange} />
          </div>
          <CBarChart data={CBarChartData} />
        </CCard>
      </div>
      <div className="mt-5 overflow-hidden">
        <h1 className="text-2xl mb-[10px] font-medium">Recent transactions</h1>
        {history.length === 0 ? (
          <p className="text-cadetBlue mt-4 bigScreen:mt-24 text-center text-lg">
            No transactions found
          </p>
        ) : (
          <>
            <HistoryListHeader />
            <div
              className="space-y-2 pb-3 mobile:space-y-[6px] w-full overflow-y-auto
              bigScreen:max-h-fit bigScreen:pb-0 desktop:min-h-[100px] short:h-[80px]"
            >
              {history.slice(0, 4).map((item) => (
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
