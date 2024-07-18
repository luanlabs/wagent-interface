import Single from '@/assets/Single';
import Stream from '@/assets/Stream';
import Vesting from '@/assets/Vesting';

import { MethodType } from '@/constants/types';

export const getMethodImage = (method: MethodType) => {
  switch (method) {
    case 'stream':
      return <Stream />;
    case 'vesting':
      return <Vesting />;
    default:
      return <Single />;
  }
};
