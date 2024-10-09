'use Client';

import Link from 'next/link';

import CareRight from 'src/assets/CareRight';
import { CNavLinkProps as Type } from 'src/constants/types';

import useIsActive from './useIsActive';

const CNavLink = ({ title, icon, activeIcon, url, isMinimized = false }: Type) => {
  const isActive = useIsActive(url);

  return (
    <Link
      as={url}
      href={url}
      prefetch
      passHref
      className={`select-none w-full items-center rounded-xl px-[12px] h-[48px] cursor-pointer overflow-hidden
      ${isMinimized ? 'flex justify-start' : 'inline-flex justify-between mobile:justify-center'}
      ${isActive && ' desktop:bg-mintGreen transition-all duration-500'}`}
    >
      <div className="flex justify-between items-center w-full overflow-hidden whitespace-nowrap">
        <span className="inline-flex gap-2 !items-center text-lg text-darkGreen mobile:text-base whitespace-nowrap">
          {isActive ? activeIcon : icon}
          <span className="mobile:hidden">{title}</span>
        </span>
        <span className="xxl:block hidden">
          <CareRight />
        </span>
      </div>
      {isActive && (
        <div className="mobile:bg-darkGreen mobile:h-[2px] mobile:rounded-full  mobile:w-[50px] mobile:absolute mobile:bottom-0" />
      )}
    </Link>
  );
};

export default CNavLink;
