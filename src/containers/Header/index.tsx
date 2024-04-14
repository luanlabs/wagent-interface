import React from 'react';

import Typography from 'src/assets/Typography';

const Header = () => {
  return (
    <header className="flex justify-between w-full items-center py-5 px-6">
      <div className="inline-flex mobile:hidden gap-[14px] cursor-pointer">
        <Typography />
      </div>
    </header>
  );
};

export default Header;
