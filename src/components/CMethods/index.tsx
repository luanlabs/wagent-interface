import Single from '@/assets/Single';
import Stream from '@/assets/Stream';
import Vesting from '@/assets/Vesting';

import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

export type MethodType = 'single' | 'stream' | 'vesting';

interface CMethodsProps {
  method: MethodType | MethodType[];
}

const CMethods = ({ method }: CMethodsProps) => {
  const getMethodComponent = (method: MethodType) => {
    switch (method) {
      case 'stream':
        return <Stream />;
      case 'vesting':
        return <Vesting />;
      default:
        return <Single />;
    }
  };

  const methodsArray = Array.isArray(method) ? method : [method];

  return (
    <div className="flex space-x-3 w-full">
      {methodsArray.map((method, index) => (
        <div key={index} className="flex items-center select-none text-cadetBlue text-[14px]">
          <div className="w-6">{getMethodComponent(method)}</div>
          <span>{capitalizeFirstLetter(method)}</span>
        </div>
      ))}
    </div>
  );
};

export default CMethods;
