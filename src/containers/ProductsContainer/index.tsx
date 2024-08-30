'use client';

import React, { useState } from 'react';

import CButton from '@/components/CButton';
import CPageCard from '@/components/CPageCard';

import { ErrorType } from '@/models';
import { IProductItemCard } from '@/constants/types';
import { products as productsList } from '@/constants/mockLists';

import CProductItemCard from './ProductItem';
import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';

const ProductsContainer = () => {
  const [AddProductIsOpen, setAddProductIsOpen] = useState(false);
  const [EditProductIsOpen, setEditProductIsOpen] = useState(false);
  const [products, setProducts] = useState<IProductItemCard[]>(productsList);
  const [selectedProduct, setSelectedProduct] = useState<IProductItemCard>();
  const [error, setError] = useState<ErrorType>();

  const handleError = () => {
    setError({ title: 'Error', message: 'Something went wrong' });
  };

  const ModalOnClose = () => {
    setAddProductIsOpen(false);
    setEditProductIsOpen(false);
  };

  const handleAddProduct = (newProduct: IProductItemCard) => {
    setProducts([...products, newProduct]);
    setAddProductIsOpen(false);
  };

  const openEditModal = (product: IProductItemCard) => {
    setSelectedProduct(product);

    setEditProductIsOpen(true);
  };

  const handleSaveProduct = (updatedProduct: IProductItemCard) => {
    setProducts(
      products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)),
    );

    setEditProductIsOpen(false);
    setSelectedProduct(undefined);
  };

  const pageTitle = (
    <div className="flex justify-between items-center w-full">
      <h1>Products</h1>
      <div className="flex space-x-4">
        <CButton
          variant="add"
          text="Add product"
          className="w-[145px] text-base"
          onClick={() => setAddProductIsOpen(true)}
        />
        <CButton variant="outline" onClick={handleError} className="w-[145px]">
          Show Error
        </CButton>
      </div>
    </div>
  );

  return (
    <CPageCard
      borderStatus="bordered"
      title={pageTitle}
      className="h-[100%] relative overflow-hidden"
      error={error}
    >
      <ul className="flex mobile:justify-between items-center rounded-[10px] bg-lightGray text-cadetBlue h-[42px] px-4 mb-4">
        <li className="text-black w-[20%] bigScreen:w-[19%] whitespace-nowrap">Product name</li>
        <li className="mobile:hidden w-[65%] max-w-[28%]">Method</li>
        <li className="mobile:hidden w-[11%] bigScreen:w-[12%]">ID</li>
        <li className="w-[36%] mobile:hidden">Token</li>
        <li>Amount</li>
      </ul>
      <div className="space-y-2 mobile:space-y-[6px] pb-3 max-h-[calc(100vh-270px)] desktopMax:max-h-[calc(100vh-265px)] w-full overflow-hidden overflow-y-auto">
        {products.map((item) => (
          <div key={item.id} onClick={() => openEditModal(item)}>
            <CProductItemCard
              title={item.title}
              method={item.method}
              id={item.id}
              tokens={item.tokens}
              amount={item.amount}
              image={item.image}
            />
          </div>
        ))}
      </div>
      <AddProductModal
        isOpen={AddProductIsOpen}
        onClose={ModalOnClose}
        onAddProduct={handleAddProduct}
      />
      <EditProductModal
        isOpen={EditProductIsOpen}
        onClose={ModalOnClose}
        onSaveProduct={handleSaveProduct}
        product={selectedProduct!}
      />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </CPageCard>
  );
};

export default ProductsContainer;
