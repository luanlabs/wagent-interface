import CProductItemCard, { TokensType } from '@/components/CProductItemCard';

import productImage from 'public/images/p.jpg';
import hoodiImage from 'public/images/hoodie.png';

const tokensUser: TokensType[] = [
  {
    value: 'dai',
    label: 'Dai',
    logo: '',
  },
  {
    value: 'usdt',
    label: 'Usdt',
    logo: '',
  },
  {
    value: 'eth',
    label: 'Eth',
    logo: '',
  },
];

export const initialProducts: CProductItemCard[] = [
  {
    title: 'Purple Hoodie',
    method: ['single', 'stream'],
    id: '1',
    tokens: tokensUser,
    amount: '15',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting'],
    id: '345837',
    tokens: tokensUser,
    amount: '1500',
    image: hoodiImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting', 'single', 'stream'],
    id: '345837',
    tokens: tokensUser,
    amount: '100500',
    image: hoodiImage,
  },
];

export const methodTabs = [
  { value: 'stream', label: 'Stream' },
  { value: 'single', label: 'Single' },
  { value: 'vesting', label: 'Vesting' },
];

export const tokensList = [
  { value: 'eth', label: 'Ethereum', logo: 'public/images/tokens/eth.svg' },
  { value: 'xlm', label: 'Stellar', logo: 'public/images/tokens/xlm.svg' },
  { value: 'dai', label: 'Dai', logo: 'public/images/tokens/dai.svg' },
  { value: 'usdc', label: 'USD Coin', logo: 'public/images/tokens/usdc.svg' },
  { value: 'usdt', label: 'Tether', logo: 'public/images/tokens/usdt.svg' },
];
