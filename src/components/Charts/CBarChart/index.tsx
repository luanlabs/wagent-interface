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

import customLabel from './customLabel';
import customAxisTick from './customAxisTick';

export type CBarChartType = {
  name: string;
  revenue: number;
};

const data: CBarChartType[] = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4780 },
  { name: 'May', revenue: 5890 },
  { name: 'Jun', revenue: 4390 },
  { name: 'Jul', revenue: 4490 },
  { name: 'Aug', revenue: 3790 },
  { name: 'Sep', revenue: 3490 },
  { name: 'Oct', revenue: 5490 },
  { name: 'Nov', revenue: 6090 },
  { name: 'Dec', revenue: 7000 },
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
    <ResponsiveContainer minWidth={574}>
      <BarChart width={574} height={230} data={data} className="-mt-3">
        <XAxis
          dataKey="name"
          tick={(props) => customAxisTick(props, activeIndex)}
          stroke="#D0D5DD"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip trigger="hover" cursor={false} />

        <Bar
          dataKey="revenue"
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
          <LabelList dataKey="revenue" content={(props) => customLabel(props, data, activeIndex)} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CBarChart;
