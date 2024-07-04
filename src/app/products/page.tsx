import ProductPage from '@/containers/ProductPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wagent - Products',
};

const Products = () => {
  return (
    <>
      <ProductPage />
    </>
  );
};

export default Products;
