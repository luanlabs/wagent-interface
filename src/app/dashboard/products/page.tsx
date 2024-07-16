import { Metadata } from 'next';

import ProductsContainer from '@/containers/ProductsContainer';

export const metadata: Metadata = {
  title: 'Wagent - Products',
};

export default function Products() {
  return <ProductsContainer />
  
}
