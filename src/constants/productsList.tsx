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
    amount: '$15',
    image: productImage,
  },
  {
    title: 'Purple Hoodie',
    method: ['vesting'],
    id: '345837',
    tokens: tokensUser,
    amount: '$1500',
    image: hoodiImage,
  },
];
