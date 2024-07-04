'use client';

import React, { useState } from 'react';

import CButton from '@/components/CButton';
import CPageCard from '@/components/CPageCard';
import { products } from '@/constants/productsList';
import CProductItemCard from '@/components/CProductItemCard';

import AddProductModal from '../AddProductModal';

const ProductPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ModalOnClose = () => {
    setIsOpen(false);
  };

  const pageTitle = (
    <div className="flex justify-between items-center w-full">
      <h1>Products</h1>
      <CButton
        variant="add"
        text="Add product"
        className="!w-[145px] text-base"
        onClick={() => setIsOpen(true)}
      />
    </div>
  );

  return (
    <CPageCard
      borderStatus="bordered"
      title={pageTitle}
      className="h-[100%] relative overflow-hidden"
    >
      <h1 className="text-2xl py-4 font-medium">Products list</h1>

      <ul className="flex justify-between items-center rounded-[10px] bg-lightGray text-cadetBlue h-[42px] px-4 mb-4">
        <li className="text-black">Product name</li>
        <li className="mobile:hidden">Method</li>
        <li className="mobile:hidden">ID</li>
        <li className="w-1/5 mobile:hidden">Token</li>
        <li>Amount</li>
      </ul>

      <div className="space-y-3 pb-3 max-h-[calc(100vh-350px)] desktopMax:max-h-[calc(100vh-330px)] w-full overflow-hidden overflow-y-auto">
        {products.map((item) => (
          <CProductItemCard
            key={item.id}
            title={item.title}
            method={item.method}
            id={item.id}
            tokens={item.tokens}
            amount={item.amount}
            image={item.image}
          />
        ))}
      </div>

      <AddProductModal isOpen={isOpen} onClose={ModalOnClose} />

      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </CPageCard>
  );
};

export default ProductPage;
