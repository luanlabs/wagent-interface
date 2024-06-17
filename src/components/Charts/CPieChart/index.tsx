'use client';

import { useEffect, useState } from 'react';

import { Tooltip, PieChart, Pie, Cell } from 'recharts';

import { PieChartDataType } from '@/models';

interface CPieChartProps {
  onChartDataChange: (data: PieChartDataType[]) => void;
}

const pieData = [
  { name: 'XLM', value: 12 },
  { name: 'DAI', value: 9 },
  { name: 'USDC', value: 6 },
  { name: 'USDT', value: 4 },
  { name: 'ETH', value: 3 },
];

const CPieChart = ({ onChartDataChange }: CPieChartProps) => {
  const [chartData, setChartData] = useState<PieChartDataType[]>([]);

  useEffect(() => {
    const updatedChartData = pieData.map((entry, index) => ({
      value: entry.value,
      name: entry.name,
    }));

    setChartData(updatedChartData);

    if (onChartDataChange) {
      onChartDataChange(updatedChartData);
    }
  }, [pieData]);

  const COLORS = ['#00C17E', '#6938EF', '#D0D5DD', '#026AA2', '#F79009'];

  return (
    <div>
      <PieChart width={170} height={170}>
        <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={3} dataKey="value">
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default CPieChart;
