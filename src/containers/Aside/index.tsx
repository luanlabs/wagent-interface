'use client';

import CNavLink from 'src/components/CNavLink';
import { navLinks } from 'src/constants/navbarLinks';

import SquareHalf from 'src/assets/SquareHalf';

type AsideProps = {
  isMinimized: boolean;
  onMinimized: () => void;
};

const Aside = ({ isMinimized, onMinimized }: AsideProps) => {
  return (
    <aside
      className="mobile:!bg-white overflow-hidden mobile:h-16 flex flex-col
      mobile:flex-row  mobile:w-full mobile:items-center"
    >
      <div className="cursor-pointer select-none mobile:hidden ml-[10px]" onClick={onMinimized}>
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
    </aside>
  );
};

export default Aside;
