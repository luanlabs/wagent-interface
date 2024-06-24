'use client';

import React, { useState } from 'react';
import CModal from '@/components/CModal';

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(!showModal)}
        className="h-10 w-64 rounded-lg text-mintGreen bg-darkGreen"
      >
        Click here
      </button>

      <CModal title="Add payment" showModal={showModal} handleCloseModal={handleCloseModal}>
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
