import Single from '@/assets/Single';
import Stream from '@/assets/Stream';
import Vesting from '@/assets/Vesting';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

export type MethodType = 'single' | 'stream' | 'vesting';

interface CMethodProps {
  method: MethodType;
}

const CMethod = ({ method }: CMethodProps) => {
  return (
    <div className="flex items-center select-none text-cadetBlue text-[14px]">
      <div className="w-6">
        {method === 'single' ? <Single /> : method === 'stream' ? <Stream /> : <Vesting />}
      </div>
      <span className={`${method === 'vesting'}`}>{capitalizeFirstLetter(method)}</span>
    </div>
  );
};

export default CMethod;
