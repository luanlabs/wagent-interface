'use client';

import { useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

import { DonutChartDataType } from '@/models';

interface CDonutChartProps {
  chartData: (data: DonutChartDataType[]) => void;
}

const pieData = [
  { name: 'XLM', value: 12 },
  { name: 'DAI', value: 9 },
  { name: 'USDC', value: 6 },
  { name: 'USDT', value: 4 },
  { name: 'ETH', value: 3 },
];

const CDonutChart = ({ chartData }: CDonutChartProps) => {
  useEffect(() => {
    const updatedChartData = pieData.map((entry, index) => ({
      value: entry.value,
      name: entry.name,
    }));

    if (chartData) {
      chartData(updatedChartData);
    }
  }, [pieData]);

  const COLORS = ['#00C17E', '#6938EF', '#D0D5DD', '#026AA2', '#F79009'];

  return (
    <div>
      <PieChart width={170} height={170}>
        <Pie
          data={pieData}
          innerRadius={60}
          outerRadius={80}
          cornerRadius={3}
          paddingAngle={3}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default CDonutChart;
