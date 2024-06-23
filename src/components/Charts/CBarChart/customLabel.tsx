import { CBarChartType } from '.';

import BN from '@/utils/BN';

const CustomLabel = (props: any, data: CBarChartType[], activeIndex: number) => {
  const { x, y, width, value, index } = props;
  const maxRevenue = Math.max(...data.map((item) => item.amount));

  if (index === activeIndex) {
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
  }
  return null;
};

export default CustomLabel;
