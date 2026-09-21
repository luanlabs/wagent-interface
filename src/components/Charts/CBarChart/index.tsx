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

import { CBarChartType } from '@/models';

import CustomLabel from './CustomLabel';
import CustomAxisTick from './CustomAxisTick';
import CustomTooltip, { CustomTooltipProps } from './CustomTooltip';

interface CBarChartProp {
  data: CBarChartType[];
}

const CBarChart = ({ data }: CBarChartProp) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex],
  );

  // recharts types its custom `content` render props loosely; we read the two
  // fields we need and narrow to our own CustomTooltip shape.
  const renderCustomTooltip = (props: { active?: boolean; payload?: unknown }) => {
    const { active, payload } = props;
    const items = payload as CustomTooltipProps['payload'] | undefined;
    if (active && items && items.length) {
      return <CustomTooltip payload={items} />;
    }
    return null;
  };

  const maxRevenue = Math.max(...data.map((item) => item.amount));

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer minHeight={230} width="100%" height="100%">
        <BarChart data={data} className="-mt-3" height={230}>
          <XAxis
            dataKey="name"
            tick={(props: any) => CustomAxisTick(props, activeIndex)}
            stroke="#D0D5DD"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip trigger="hover" cursor={false} content={renderCustomTooltip} />

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
              content={(props) =>
                props.index === activeIndex ? (
                  <CustomLabel {...props} maxRevenue={maxRevenue} />
                ) : null
              }
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CBarChart;
