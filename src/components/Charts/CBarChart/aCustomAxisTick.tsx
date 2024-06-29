import { PayloadItem } from '@/models';

interface CustomAxisTickProps {
  x: number;
  y: number;
  payload: PayloadItem;
  index: number;
}

const CustomAxisTick = ({ x, y, payload, index }: CustomAxisTickProps, activeIndex: number) => {
  return (
    <text
      x={x}
      y={y + 16}
      textAnchor="middle"
      fill={index === activeIndex ? '#000' : '#D0D5DD'}
      className="lg:text-[13px]"
    >
      {payload.value}
    </text>
  );
};

export default CustomAxisTick;
