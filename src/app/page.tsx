import type { Metadata } from 'next';

import CPageCard from '@/components/CPageCard';
import CBarChart from '@/components/Charts/CBarChart';
import CCard from '@/components/CCard';
import CPieChartContainer from '@/containers/CPieChartContainer';

export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  return (
    <CPageCard borderStatus="bordered" title="Dashboard">
      <div className="flex space-x-7 h-[286px] mobile:h-full justify-between mobile:justify-center mobile:flex-col mobile:space-x-0 mobile:space-y-3 overflow-hidden">
        <div className="w-full xxl:w-[30%] h-full">
          <CPieChartContainer />
        </div>
        <CCard
          label="Revenue Chart"
          className="h-full w-full xxl:w-fit px-4 py-6 mobile:w-full mobile:overflow-x-auto"
        >
          <CBarChart />
        </CCard>
      </div>
    </CPageCard>
  );
}
