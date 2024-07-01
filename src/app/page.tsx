import type { Metadata } from 'next';

import CPageCard from '@/components/CPageCard';
import CBarChart from '@/components/Charts/CBarChart';
import CCard from '@/components/CCard';
import DonutChartContainer from '@/containers/DonutChartContainer';
import Test from '@/containers/Test';

export const metadata: Metadata = {
  title: 'Wagent - Dashboard',
};

export default function Dashboard() {
  return (
    <CPageCard
      borderStatus="bordered"
      title="Dashboard"
      className="overflow-y-auto"
      errorMessage="asdasd"
      errorTitle="dafsdfsdf"
    >
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
      <Test />
    </CPageCard>
  );
}
