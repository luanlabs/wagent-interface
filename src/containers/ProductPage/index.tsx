'use client';

import React, { useState } from 'react';

import CButton from '@/components/CButton';
import CPageCard from '@/components/CPageCard';
import { initialProducts } from '@/constants/productsList';
import CProductItemCard from '@/components/CProductItemCard';

import AddProductModal from '../AddProductModal';
import EditProductModal from '../EditProductModal';

const ProductPage = () => {
  const [AddProductIsOpen, setAddProductIsOpen] = useState(false);
  const [EditProductIsOpen, setEditProductIsOpen] = useState(false);
  const [products, setProducts] = useState<CProductItemCard[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<CProductItemCard>();

  const ModalOnClose = () => {
    setAddProductIsOpen(false);
    setEditProductIsOpen(false);
  };

  const handleAddProduct = (newProduct: CProductItemCard) => {
    setProducts([...products, newProduct]);
    setAddProductIsOpen(false);
  };

  const openEditModal = (product: CProductItemCard) => {
    setSelectedProduct(product);

    setEditProductIsOpen(true);
  };

  const handleSaveProduct = (updatedProduct: CProductItemCard) => {
    setProducts(
      products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)),
    );

    setEditProductIsOpen(false);
    setSelectedProduct(undefined);
  };

  const pageTitle = (
    <div className="flex justify-between items-center w-full">
      <h1>Products</h1>
      <CButton
        variant="add"
        text="Add product"
        className="!w-[145px] text-base"
        onClick={() => setAddProductIsOpen(true)}
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

export default ProductPage;
