import productImage from 'public/images/p.jpg';
import hoodie from 'public/images/hoodie.png';

import { IProductItemCard, IHistoryItemCard, TokensType } from './types';

const userTokens: TokensType[] = [
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
const singleToken: TokensType = {
  symbol: 'dai',
  logo: require(`/public/images/tokens/dai.svg`),
};

export const products: IProductItemCard[] = [
  {
    title: 'Purple Hoodie',
    method: ['single', 'stream'],
    id: '1',
    tokens: userTokens,
    amount: '$100000005',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '345837',
    tokens: userTokens,
    amount: '$1500',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting', 'stream'],
    id: '345',
    tokens: userTokens,
    amount: '$2544445',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654333355',
    tokens: userTokens,
    amount: '$34510',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '54654',
    tokens: userTokens,
    amount: '$15',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654',
    tokens: userTokens,
    amount: '$15',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: 'single',
    id: '54654',
    tokens: userTokens,
    amount: '$15',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: 'vesting',
    id: '546545555',
    tokens: userTokens,
    amount: '$15',
    image: hoodie,
  },
  {
    title: 'Purple Hoodie',
    method: 'stream',
    id: '54654',
    tokens: userTokens,
    amount: '$1544444',
    image: productImage,
  },
];

export const history: IHistoryItemCard[] = [
  {
    title: 'XXXXXXXXXXXX Hoodie',
    method: 'single',
    id: '1',
    token: singleToken,
    amount: '$15',
    image: productImage,
    date: Date.now(),
    status: 'active',
  },
  {
    title: 'XXXXXX Hoodie',
    method: 'vesting',
    id: '345837',
    token: singleToken,
    amount: '$1500',
    image: hoodie,
    date: Date.now(),
    status: 'completed',
  },
  {
    title: 'X Hoodie',
    method: 'stream',
    id: '3422',
    token: singleToken,
    amount: '$1500000',
    image: hoodie,
    date: Date.now(),
    status: 'cancelled',
  },
];
