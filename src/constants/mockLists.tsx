import productImage from 'public/images/p.jpg';
import hoodie from 'public/images/hoodie.png';

import { IProductItemCard, IHistoryResponse, TokensType } from './types';

const usdc: TokensType = {
  value: 'usdc',
  logo: require(`/public/images/tokens/usdc.svg`),
};

const dai: TokensType = {
  value: 'dai',
  logo: require(`/public/images/tokens/dai.svg`),
};

const xlm: TokensType = {
  value: 'xlm',
  logo: require(`/public/images/tokens/xlm.svg`),
};

export const tokensList = [
  { value: 'xlm', label: 'Stellar', logo: 'public/images/tokens/xlm.svg' },
  { value: 'dai', label: 'Dai', logo: 'public/images/tokens/dai.svg' },
  { value: 'usdt', label: 'Tether', logo: 'public/images/tokens/usdt.svg' },
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
    method: ['vesting'],
    id: '345837',
    tokens: tokensList,
    amount: '1500',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting', 'stream'],
    id: '345',
    tokens: tokensList,
    amount: '2000',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting'],
    id: '345837',
    tokens: tokensList,
    amount: '1500',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting', 'stream'],
    id: '345',
    tokens: tokensList,
    amount: '2000',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting'],
    id: '345837',
    tokens: tokensList,
    amount: '1500',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting', 'stream'],
    id: '345',
    tokens: tokensList,
    amount: '2000',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting'],
    id: '345837',
    tokens: tokensList,
    amount: '1500',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting', 'stream'],
    id: '345',
    tokens: tokensList,
    amount: '2000',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting'],
    id: '345837',
    tokens: tokensList,
    amount: '1500',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting', 'stream'],
    id: '345',
    tokens: tokensList,
    amount: '2000',
    image: productImage,
  },
];

export const history: IHistoryResponse[] = [
  {
    title: 'XXX Hoodie',
    method: 'single',
    id: '1',
    token: usdc,
    amount: '15',
    image: productImage,
    date: Date.now(),
    cancellableAfter: Date.now() - 200,
    status: 'active',
    sender: '0x600',
    progress: 90,
  },
  {
    title: 'XX Hoodie',
    method: 'vesting',
    id: '345837',
    token: dai,
    amount: '1500',
    image: hoodie,
    date: Date.now(),
    status: 'completed',
    sender: '0x600',
    progress: 30,
  },
  {
    title: 'X Hoodie',
    method: 'stream',
    id: '3422',
    token: xlm,
    amount: '1500000',
    image: hoodie,
    date: Date.now(),
    status: 'cancelled',
    sender: '0x600',
    progress: 20,
  },
  {
    title: 'XXX Hoodie',
    method: 'single',
    id: '12',
    token: xlm,
    amount: '15',
    image: productImage,
    date: Date.now(),
    status: 'active',
    sender: '0x600',
  },
  {
    title: 'XX Hoodie',
    method: 'vesting',
    id: '222',
    token: dai,
    amount: '1500',
    image: hoodie,
    date: Date.now(),
    status: 'completed',
    sender: '0x600',
  },
  {
    title: 'X Hoodie',
    method: 'stream',
    id: '3334',
    token: dai,
    amount: '1500000',
    image: hoodie,
    date: Date.now(),
    status: 'cancelled',
    sender: '0x600',
  },
];
