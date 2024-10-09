'use client';

import { useState } from 'react';

import CCard from '@/components/CCard';
import SquareHalf from '@/assets/SquareHalf';
import CNavLink from '@/components/CNavLink';
import { navLinks } from '@/constants/navbarLinks';
import Profile from '../Profile';

const Aside = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const onMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <CCard
      className={`desktop:relative mobile:fixed mobile:bottom-0 
        mobile:h-16 mobile:right-0 mobile:left-0 overflow-hidden 
        mobile:rounded-none mobile:border-b-0 z-30 px-[15px] py-[19px] mobile:p-0
        transition-all duration-300 ease-in-out transform                   
        ${isMinimized ? 'basis-[84px]' : 'basis-[24%] lg:basis-[20%]'}`}
      borderColor="rgba(5, 1, 66, 0.10)"
      bgColor="white"
    >
      <aside
        className="mobile:!bg-white overflow-hidden mobile:h-16 flex flex-col
        mobile:flex-row w-full h-full mobile:items-center desktop:justify-between"
      >
        <div className="desktop:flex desktop:flex-col desktop:justify-start mobile:w-full">
          <div
            className="cursor-pointer select-none mobile:hidden ml-[12.5px]"
            onClick={onMinimized}
          >
            <SquareHalf />
          </div>
          <hr className="mt-[18px] mb-3 mobile:hidden border-[#0501421A] " />
          <div className="desktop:space-y-1 mobile:flex mobile:flex-row mobile:justify-around mobile:w-full">
            {navLinks.map((item) => (
              <div key={item.title}>
                <CNavLink {...item} isMinimized={isMinimized} />
              </div>
            ))}
          </div>
        </div>

        <div className="desktop:flex desktop:justify-end desktop:items-end mobile:hidden desktop:w-full">
          <Profile isMinimizedAside={isMinimized} />
        </div>
      </aside>
    </CCard>
  );
};

export default Aside;
