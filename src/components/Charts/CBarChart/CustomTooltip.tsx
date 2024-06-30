import { CBarChartType } from '@/models';

export interface CustomTooltipProps {
  active?: boolean;
  payload: {
    payload: CBarChartType;
    value: number;
    dataKey: string;
  }[];
}

const CustomTooltip = ({ payload }: CustomTooltipProps) => {
  return (
    <div className="bg-white/85 px-3 py-4 rounded-lg">
      <p>{`Amount: $ ${payload[0].value}`}</p>
    </div>
  );
};

export default CustomTooltip;
