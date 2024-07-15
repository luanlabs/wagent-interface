import { Metadata } from 'next';

import ProductPage from '@/containers/ProductsContainer';

export const metadata: Metadata = {
  title: 'Wagent - Products',
};

const Products = () => {
  return <ProductPage />;
};

export default Products;
