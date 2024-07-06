import { StaticImageData } from 'next/image';
import { MethodType } from '@/components/CMethods';

export interface CNavLinkProps {
  url: string;
  title: string;
  isMinimized?: boolean;
  icon: JSX.Element | React.ReactNode;
  activeIcon: JSX.Element | React.ReactNode;
}

export type SvgProps = {
  fill?: string;
};

export type TokensType = {
  symbol: string;
  logo: string;
};

export interface IHistoryItemCard {
  id?: string;
  date: number;
  title: string;
  amount: string;
  sender: string;
  progress?: number;
  token: TokensType;
  cancellableAfter?: number;
  image: string | StaticImageData;
  method: MethodType | MethodType[];
  status: `active` | `completed` | `cancelled`;
}

export interface IProductItemCard {
  title: string;
  image: string | StaticImageData;
  id: string;
  tokens: TokensType[];
  amount: string;
  method: MethodType | MethodType[];
}
