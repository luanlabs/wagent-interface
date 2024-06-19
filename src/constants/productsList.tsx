import { CItemCardProps } from '@/components/CItemCard';

import productImage from 'public/images/p.jpg';
import hoodiImage from 'public/images/hoodie.png';

const tokens = (
  <div className="flex space-x-2">
    <div>USDC</div>
    <div>USDT</div>
    <div>XLM</div>
  </div>
);

export const products: CItemCardProps[] = [
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '1',
    token: tokens,
    amount: '$15',
    variant: 'product',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '345837',
    token: tokens,
    amount: '$1500',
    variant: 'product',
    image: hoodiImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'stream',
    id: '345',
    token: tokens,
    amount: '$255',
    variant: 'product',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654333355',
    token: tokens,
    amount: '$34510',
    variant: 'product',
    image: hoodiImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '54654',
    token: tokens,
    amount: '$15',
    variant: 'product',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654',
    token: tokens,
    amount: '$15',
    variant: 'product',
    image: hoodiImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654',
    token: tokens,
    amount: '$15',
    variant: 'product',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '54654',
    token: tokens,
    amount: '$15',
    variant: 'product',
    image: hoodiImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'stream',
    id: '54654',
    token: tokens,
    amount: '$15',
    variant: 'product',
    image: productImage,
  },
];
