import BN from '@/utils/BN';

const CustomLabel = ({ x, y, width, value, maxRevenue }: any) => {
  const percentage = new BN(value).div(maxRevenue).times(100).toFixed(0) + '%';

  return (
    <text
      x={x + width / 2}
      y={y - 10}
      fill="#00C17E"
      fontWeight="normal"
      textAnchor="middle"
      fontSize={13}
    >
      {percentage}
    </text>
  );
};

export default CustomLabel;
