'use client';

import { useState } from 'react';

import CCard from '@/components/CCard';
import CTokenLabel from '@/components/CTokenLabel';
import CDonutChart from '@/components/Charts/CDonutChart';
import CStatusCard from '@/components/CStatusCard';

import { DonutChartDataType } from '@/models';

const DonutChartContainer = () => {
  const [chartData, setChartData] = useState<DonutChartDataType[]>([]);

  const handleChartData = (data: DonutChartDataType[]) => {
    setChartData(data);
  };

  return (
    <CCard
      label="Revenue Distribution"
      className="!w-full h-[286px] px-4 pt-6 pb-2"
      borderColor="#E4E7EC"
    >
      <div className="flex justify-between h-full">
        <div className="flex justify-center items-center">
          <CDonutChart chartData={handleChartData} />
        </div>

        <div className="flex justify-center space-x-4 mobile:space-x-2 lg:space-x-2 items-center mb-3">
          <div className="space-y-3 ">
            {chartData.map((data) => (
              <CTokenLabel
                key={data.name}
                symbol={data.name}
                logo={require(`/public/images/tokens/${data.name.toLowerCase()}.svg`)}
                rounded
              />
            ))}
          </div>

          <div className="flex flex-col space-y-5 text-[14px]">
            {chartData.map((data) => (
              <CStatusCard
                key={data.name}
                text={`${data.value}%`}
                className="w-8 font-medium"
                transparent
              />
            ))}
          </div>
        </div>
      </div>
    </CCard>
  );
};

export default DonutChartContainer;
