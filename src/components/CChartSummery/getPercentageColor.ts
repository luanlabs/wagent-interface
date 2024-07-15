import BN from '@/utils/BN';
import BigNumber from 'bignumber.js';

const getPercentageColor = (percentage: BigNumber | undefined) => {
  if (!percentage) return 'text-black';
  return new BN(percentage).isGreaterThan(0) ? 'text-green-500' : 'text-red-500';
};

export default getPercentageColor;
