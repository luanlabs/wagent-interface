import productImage from 'public/images/p.jpg';
import hoodie from 'public/images/hoodie.png';

import { IProductItemCard, TokensType } from './types';

const usdc: TokensType = {
  value: 'usdc',
  logo: 'public/images/tokens/usdc.svg',
};

const dai: TokensType = {
  value: 'dai',
  logo: 'public/images/tokens/dai.svg',
};

const xlm: TokensType = {
  value: 'xlm',
  logo: 'public/images/tokens/xlm.svg',
};

export const tokensList = [
  { value: 'xlm', label: 'Stellar', logo: 'public/images/tokens/xlm.svg' },
  { value: 'dai', label: 'Dai', logo: 'public/images/tokens/dai.svg' },
  { value: 'usdt', label: 'Tether', logo: 'public/images/tokens/usdt.svg' },
];

export const allTokensList = [
  { value: 'xlm', label: 'Stellar', logo: 'public/images/tokens/xlm.svg' },
  { value: 'dai', label: 'Dai', logo: 'public/images/tokens/dai.svg' },
  { value: 'usdt', label: 'Tether', logo: 'public/images/tokens/usdt.svg' },
  { value: 'usdc', label: 'USDC', logo: 'public/images/tokens/usdc.svg' },
  { value: 'eth', label: 'ETH', logo: 'public/images/tokens/eth.svg' },
];

export const methodTabs = [
  { value: 'stream', label: 'Stream' },
  { value: 'single', label: 'Single' },
  { value: 'vesting', label: 'Vesting' },
];

export const products: IProductItemCard[] = [
  {
    title: 'Purple Hoodie',
    method: ['single', 'stream'],
    id: '1',
    tokens: tokensList,
    amount: '1000',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['single', 'stream'],
    id: '2',
    tokens: tokensList,
    amount: '2000',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['single', 'stream'],
    id: '3',
    tokens: tokensList,
    amount: '1000',
    image: productImage,
  },
];
