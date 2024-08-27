import cn from 'classnames';

import { MethodType } from '@/constants/types';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

import { getMethodImage } from './getMethodImage';

interface CMethodsProps {
  method: MethodType | MethodType[];
  className?: string;
  suffix?: string;
  fill?: string;
}

const CMethods = ({ method, className, suffix = '', fill }: CMethodsProps) => {
  const methodsArray = Array.isArray(method) ? method : [method];
  return (
    <div className="flex space-x-3 w-full">
      {methodsArray.map((method, index) => (
        <div
          key={index}
          className={cn(
            className,
            `flex items-center select-none gap-1 text-cadetBlue text-[14px]`,
          )}
        >
          <div>{getMethodImage({ method, fill })}</div>
          <span>
            {capitalizeFirstLetter(method)} {suffix && suffix}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CMethods;
