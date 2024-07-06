import type { Metadata } from 'next';

import CCard from '@/components/CCard';
import CPageCard from '@/components/CPageCard';
import CBarChart from '@/components/Charts/CBarChart';
import DonutChartContainer from '@/containers/DonutChartContainer';

import { history } from '@/constants/mockLists';
import { HistoryListHeader } from './history/page';
import CHistoryItemCard from '@/containers/CHistoryItemCard';

export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
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
        <HistoryListHeader />
        <div className="space-y-2 pb-3 mobile:space-y-[6px] w-full overflow-y-auto bigScreen:max-h-fit bigScreen:pb-0 desktop:max-h-[150px] short:h-[100px]">
          {history.slice(0, 5).map((item) => (
            <CHistoryItemCard
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
      </div>
    </CPageCard>
  );
}
