import { PayloadItem } from '@/models';

interface CustomTooltipProps {
  active?: boolean;
  payload?: PayloadItem[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/85 px-3 py-4 rounded-lg">
        <p>{`Amount: $ ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
