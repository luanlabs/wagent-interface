import productImage from 'public/images/p.jpg';
import hoodie from 'public/images/hoodie.png';

import { IProductItemCard, IHistoryResponse, TokensType } from './types';

const usdc: TokensType = {
  symbol: 'usdc',
  logo: require(`/public/images/tokens/usdc.svg`),
};

const dai: TokensType = {
  symbol: 'dai',
  logo: require(`/public/images/tokens/dai.svg`),
};

const xlm: TokensType = {
  symbol: 'xlm',
  logo: require(`/public/images/tokens/xlm.svg`),
};

export const tokenList: TokensType[] = [
  {
    symbol: 'usdc',
    logo: require(`/public/images/tokens/usdc.svg`),
  },
  {
    symbol: 'xlm',
    logo: require(`/public/images/tokens/xlm.svg`),
  },
  {
    symbol: 'dai',
    logo: require(`/public/images/tokens/dai.svg`),
  },
];

export const products: IProductItemCard[] = [
  {
    title: 'Purple Hoodie',
    method: ['single', 'stream'],
    id: '1',
    tokens: tokenList,
    amount: '$100000005',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '345837',
    tokens: tokenList,
    amount: '$1500',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting', 'stream'],
    id: '345',
    tokens: tokenList,
    amount: '$2544445',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654333355',
    tokens: tokenList,
    amount: '$34510',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '54654',
    tokens: tokenList,
    amount: '$15',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654',
    tokens: tokenList,
    amount: '$15',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654',
    tokens: tokenList,
    amount: '$15',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '546545555',
    tokens: tokenList,
    amount: '$15',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: 'stream',
    id: '54654',
    tokens: tokenList,
    amount: '$1544444',
    image: productImage,
  },
];

export const history: IHistoryResponse[] = [
  {
    title: 'XXXXXXXXXXXX Hoodie',
    method: 'single',
    id: '1',
    token: usdc,
    amount: '$15',
    image: productImage,
    date: Date.now(),
    cancellableAfter: Date.now() - 200,
    status: 'active',
    sender: '0x600',
    progress: 90,
  },
  {
    title: 'XXXXXX Hoodie',
    method: 'vesting',
    id: '345837',
    token: dai,
    amount: '$1500',
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
    amount: '$1500000',
    image: hoodie,
    date: Date.now(),
    status: 'cancelled',
    sender: '0x600',
    progress: 20,
  },
  {
    title: 'XXXXXXXXXXXX Hoodie',
    method: 'single',
    id: '12',
    token: xlm,
    amount: '$15',
    image: productImage,
    date: Date.now(),
    status: 'active',
    sender: '0x600',
  },
  {
    title: 'XXXXXX Hoodie',
    method: 'vesting',
    id: '222',
    token: dai,
    amount: '$1500',
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
    amount: '$1500000',
    image: hoodie,
    date: Date.now(),
    status: 'cancelled',
    sender: '0x600',
  },
  {
    title: 'X Hoodie',
    method: 'stream',
    id: '33334',
    token: dai,
    amount: '$1500000',
    image: hoodie,
    date: Date.now(),
    status: 'cancelled',
    sender: '0x600',
  },
  {
    title: 'X Hoodie',
    method: 'stream',
    id: '322334',
    token: xlm,
    amount: '$1500000',
    image: hoodie,
    date: Date.now(),
    status: 'cancelled',
    sender: '0x600',
  },
  {
    title: 'X Hoodie',
    method: 'stream',
    id: '2312',
    token: usdc,
    amount: '$1500000',
    image: hoodie,
    date: Date.now(),
    status: 'cancelled',
    sender: '0x600',
  },
];
