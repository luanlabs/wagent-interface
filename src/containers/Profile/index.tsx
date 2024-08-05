import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import { RootState } from '@/store';

interface ProfileProp {
  isMinimizedAside?: boolean;
}

const Profile = ({ isMinimizedAside }: ProfileProp) => {
  const [isHidden, setIsHidden] = useState(true);

  const profile = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isMinimizedAside) {
      timeout = setTimeout(() => setIsHidden(false), 140);
    } else {
      setIsHidden(true);
    }
    return () => clearTimeout(timeout);
  }, [isMinimizedAside]);

  return (
    <div className="flex items-center">
      <div
        className={cn('h-[44px] w-[44px] object-cover mr-4 transition-all', {
          'h-[33px] w-[33px]': isMinimizedAside,
        })}
      >
        <Image
          src={profile.storeLogo}
          width={0}
          height={0}
          alt="Store Logo"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <label
        className={cn('text-[14px] text-darkBlue transition-opacity duration-1000', {
          'opacity-0': isMinimizedAside,
          'opacity-100': !isMinimizedAside,
          hidden: isHidden,
        })}
      >
        {profile.storeName}
      </label>
    </div>
  );
};

export default Profile;
