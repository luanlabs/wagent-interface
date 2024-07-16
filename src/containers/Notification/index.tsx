import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import hoodieImage from 'public/images/hoodie.png';

interface NotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const notificationData = [
  {
    id: '1',
    title: 'Purple Hoodie',
    amount: '$14',
    image: '',
  },
  {
    id: '2',
    title: 'Purple Hoodie',
    amount: '$14',
    image: '',
  },
];

const Notification = ({ isOpen, onClose }: NotificationProps) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);

      const handleClickOutside = (event: MouseEvent) => {
        if ((event.target as HTMLElement).closest('.notification') === null) {
          onClose();
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    } else {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        'transition-opacity duration-500 ease-in-out',
        isOpen ? 'opacity-100' : 'opacity-0 ',
      )}
      style={{ visibility: show ? 'visible' : 'hidden' }}
    >
      <div className="absolute top-[65px] right-6 px-4 pb-1 divide-y-[1px] divide-[#EBEBEB] w-80 mobile:w-[280px] border border-customGray bg-white shadow-lg rounded-[10px] ">
        {notificationData.map((item) => (
          <div key={item.id} className="flex flex-col text-[14px] mb-3">
            <p className="text-darkBlue/50 py-3">New order received</p>
            <div className="flex items-center space-x-3 hover:bg-offWhite cursor-pointer rounded transition">
              <Image src={hoodieImage} alt="Purple Hoodie" className="w-9 rounded-full" />
              <div className="flex justify-between w-full">
                <p>{item.title}</p>
                <p>{item.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
