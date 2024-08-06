import cn from 'classnames';

import CCard from '@/components/CCard';
import humanizeAmount from '@/utils/humanizeAmount';
import CChartSummery from '@/components/CChartSummery';
import CircularProgressBar from '@/components/CircularProgressBar';

interface RevenueChartProps {
  title: string;
  amount: string;
  percentage: number;
  summaryText?: string;
}

const RevenueChart = ({ title, amount, percentage, summaryText }: RevenueChartProps) => {
  return (
    <CCard
      className="flex items-center rounded-[10px] px-6 h-[124px] w-full lg:px-4"
      bgColor="#FCFCFD"
    >
      <div className="flex justify-between w-full items-center">
        <div className="space-y-[6px]">
          <h2 className="text-cadetBlue text-base">{title}</h2>
          <p className="text-2xl font-medium text-darkblue">${humanizeAmount(amount)}</p>
          <CChartSummery
            percentage={summaryText ? undefined : percentage}
            text={summaryText}
            className={cn(
              `py-[2px]`,
              { 'bg-white': percentage <= 0 },

              { 'bg-[#F2F4F7]': percentage >= 0 },
              { 'px-2 lg:px-0 text-sm': summaryText },
            )}
          />
        </div>
        <div className="flex items-center">
          <CircularProgressBar percentage={percentage} />
        </div>
      </div>
    </CCard>
  );
};

export default RevenueChart;
