import React from 'react';

import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

type status = 'active' | 'completed' | 'cancelled';

const getStatusStyle = (status: status) => {
  if (status === 'active') {
    return 'text-warning border-lightOrange bg-lightestOrange';
  } else if (status === 'completed') {
    return 'text-success border-lightGreen bg-lightestGreen';
  } else {
    return 'text-error border-lightRed bg-lightestRed';
  }
};

const CStatusCard = (status: status) => {
  return (
    <div
      className={`${getStatusStyle(
        status,
      )} flex justify-center items-center w-[113px] h-7 border rounded-[50px]`}
    >
      {capitalizeFirstLetter(status)}
    </div>
  );
};

export default CStatusCard;
