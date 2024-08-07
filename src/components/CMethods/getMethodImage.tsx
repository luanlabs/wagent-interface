import Single from '@/assets/Single';
import Stream from '@/assets/Stream';
import Vesting from '@/assets/Vesting';

import { MethodType } from '@/constants/types';

interface getMethodImageProp {
  method: MethodType;
  fill: string;
}

export const getMethodImage = ({ method, fill }: getMethodImageProp) => {
  switch (method) {
    case 'stream':
      return <Stream fill={fill} />;
    case 'vesting':
      return <Vesting fill={fill} />;
    default:
      return <Single fill={fill} />;
  }
};
