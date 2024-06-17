'use client';

import { useState } from 'react';
import CCard from '@/components/CCard';
import CCoinLabel from '@/components/CCoinLabel';
import CPieChart from '@/components/Charts/CPieChart';
import { PieChartDataType } from '@/models';

const CPieChartContainer = () => {
  const [chartData, setChartData] = useState<PieChartDataType[]>();

  const handleChartData = (data: PieChartDataType[]) => {
    setChartData(data);
  };

  console.log(chartData?.map((e) => e.name));

  return (
    <div>
      <CCard label="Revenue Distribution" className="w-full h-[286px] px-4 pt-6 pb-2">
        <div className="flex justify-between h-full ">
          <div className="flex justify-center items-center">
            <CPieChart onChartDataChange={handleChartData} />
          </div>

          <div className="space-y-3 mt-5 mr-3">
            {chartData?.map((data) => (
              <CCoinLabel
                key={data.name}
                name={data.name}
                logo={require(`/public/images/tokens/${data.name.toLowerCase()}.svg`)}
              />
            ))}
          </div>
        </div>
      </CCard>
    </div>
  );
};

export default CPieChartContainer;
