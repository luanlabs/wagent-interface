import cn from 'classnames';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import shop from 'public/images/shop.svg';
import { Pages } from '@/constants/pages';
import { IUserInfo } from '@/constants/types';
import signout from 'public/images/signout.svg';
import { useAppSelector } from '@/hooks/useRedux';

interface ProfileProp {
  isMinimizedAside?: boolean;
}

const Profile = ({ isMinimizedAside }: ProfileProp) => {
  const router = useRouter();

  const [isHidden, setIsHidden] = useState(true);
  const [showSignOut, setShowSignOut] = useState(false);

  const getUser = useAppSelector((state) => state.userApi.queries['getUser(undefined)']);
  const userData: any = getUser?.data;
  const user = userData.result as IUserInfo;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isMinimizedAside) {
      timeout = setTimeout(() => setIsHidden(false), 140);
    } else {
      setIsHidden(true);
      setShowSignOut(false);
    }
    return () => clearTimeout(timeout);
  }, [isMinimizedAside]);

  const handleProfileClick = () => {
    setShowSignOut((prev) => !prev);
  };

  const handleSignOut = () => {
    Cookies.remove('token');
    setTimeout(() => {
      router.push(Pages.SIGNIN);
    }, 1000);
  };

  return (
    <>
      <div className="w-full transition-all duration-500">
        <div
          className="flex items-center py-1.5 px-2 border cursor-pointer border-[#e9e9e9] rounded-xl w-full hover:bg-[#F4F4F4] transition-all duration-500"
          onClick={handleProfileClick}
        >
          <div
            className={cn('mr-4 transition-all', {
              'mr-0 short:!mr-0': isMinimizedAside,
            })}
          >
            <Image
              src={user.logo || shop}
              priority
              width={isMinimizedAside ? 30 : 44}
              height={isMinimizedAside ? 30 : 44}
              alt="Store Logo"
              className={cn(`rounded-full object-cover transition-all duration-500`, {
                'w-[33px] h-[33px]': isMinimizedAside,
                'w-[44px] h-[44px]': !isMinimizedAside,
              })}
            />
          </div>
          <div
            className={cn('text-sm font-medium text-darkBlue transition-opacity duration-1000', {
              'opacity-0': isMinimizedAside,
              'opacity-100': !isMinimizedAside,
              hidden: isHidden,
            })}
          >
            {user.name}
          </div>
        </div>

        <div
          className={cn('transition-all duration-500 ease-in-out overflow-hidden', {
            'max-h-0 opacity-0': !showSignOut,
            'max-h-[80px] opacity-100': showSignOut,
          })}
        >
          <div className="mt-2">
            <button
              onClick={handleSignOut}
              className="w-full h-[50px] px-4 border border-[#e9e9e9] text-darkBlue bg-[#F4F4F4] 
              hover:text-error select-none text-sm font-medium hover:border-lightRed  hover:bg-lightestRed rounded-xl transition-all duration-500"
            >
              {isMinimizedAside ? (
                <Image
                  src={signout}
                  width={16}
                  height={16}
                  alt="Store Logo"
                  className="transition-all duration-500"
                />
              ) : (
                'Sign Out'
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
