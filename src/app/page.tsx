import React from 'react';
import dynamic from 'next/dynamic';
const page = () => {
  const Test = dynamic(() => import('../containers/Test'), { ssr: false });
  return (
    <div>
      <Test />
    </div>
  );
};

export default page;
