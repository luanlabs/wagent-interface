'use client';

import React, { useState } from 'react';
import CModal from '@/components/CModal';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-64 rounded-lg text-mintGreen bg-darkGreen"
      >
        Click here
      </button>

      <CModal title="Add payment" isOpen={isOpen} onClose={onClose}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas minus, rerum enim praesentium
        nostrum deserunt, amet officia quasi possimus earum dicta voluptate fugiat ad voluptatem
        impedit molestias non quae repellendus.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Odio ullam consequuntur nemo
        similique non! Alias, autem praesentium ipsa quibusdam similique ipsum expedita sint! In ex
        nihil ratione voluptates explicabo molestias.
      </CModal>
    </div>
  );
};

export default Test;
