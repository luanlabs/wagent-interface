import CProductItemCard, { TokensType } from '@/components/CProductItemCard';

import productImage from 'public/images/p.jpg';
import hoodiImage from 'public/images/hoodie.png';

const tokensUser: TokensType[] = [
  {
    symbol: 'dai',
    logo: '',
  },
  {
    symbol: 'usdt',
    logo: '',
  },
  {
    symbol: 'xlm',
    logo: '',
  },
];

export const products: CProductItemCard[] = [
  {
    title: 'Purple Hoodie',
    method: ['single', 'stream'],
    id: '1',
    tokens: tokensUser,
    amount: '$15',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '345837',
    tokens: tokensUser,
    amount: '$1500',
    image: hoodiImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting', 'stream'],
    id: '345',
    tokens: tokensUser,
    amount: '$255',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654333355',
    tokens: tokensUser,
    amount: '$34510',
    image: hoodiImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '54654',
    tokens: tokensUser,
    amount: '$15',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654',
    tokens: tokensUser,
    amount: '$15',
    image: hoodiImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654',
    tokens: tokensUser,
    amount: '$15',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '54654',
    tokens: tokensUser,
    amount: '$15',
    image: hoodiImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'stream',
    id: '54654',
    tokens: tokensUser,
    amount: '$15',
    image: productImage,
  },
];
