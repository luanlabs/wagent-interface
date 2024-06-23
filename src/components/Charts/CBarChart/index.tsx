'use client';

import { useCallback, useState } from 'react';
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import customLabel from './CustomLabel';
import customAxisTick from './CustomAxisTick';
import CustomTooltip from './CustomTooltip';

export type CBarChartType = {
  name: string;
  amount: number;
};

const data: CBarChartType[] = [
  { name: 'Jan', amount: 4000 },
  { name: 'Feb', amount: 3000 },
  { name: 'Mar', amount: 5000 },
  { name: 'Apr', amount: 4780 },
  { name: 'May', amount: 5890 },
  { name: 'Jun', amount: 4390 },
  { name: 'Jul', amount: 4490 },
  { name: 'Aug', amount: 3790 },
  { name: 'Sep', amount: 3490 },
  { name: 'Oct', amount: 5490 },
  { name: 'Nov', amount: 6090 },
  { name: 'Dec', amount: 7000 },
];

const CBarChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex],
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer minHeight={230} width="100%" height="100%">
        <BarChart data={data} className="-mt-3" height={230}>
          <XAxis
            dataKey="name"
            tick={(props) => customAxisTick(props, activeIndex)}
            stroke="#D0D5DD"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip trigger="hover" cursor={false} content={<CustomTooltip />} />

          <Bar
            dataKey="amount"
            onClick={handleClick}
            radius={5}
            activeBar={<Rectangle fill="#00C17E" />}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? '#00C17E' : '#E4E7EC'}
                key={`cell-${index}`}
              />
            ))}
            <LabelList
              dataKey="amount"
              content={(props) => customLabel(props, data, activeIndex)}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CBarChart;
