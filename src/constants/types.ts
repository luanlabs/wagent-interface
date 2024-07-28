import { StaticImageData } from 'next/image';

export interface CNavLinkProps {
  url: string;
  title: string;
  isMinimized?: boolean;
  icon: JSX.Element | React.ReactNode;
  activeIcon: JSX.Element | React.ReactNode;
}

export type FormValues = {
  store: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SvgProps = {
  fill?: string;
};

export type TokensType = {
  value: string;
  logo: string;
  checked?: boolean;
  label?: string;
};

export type ReducerTokensType = {
  value: string;
  logo: string;
  checked: boolean;
};

export type MethodType = 'single' | 'stream' | 'vesting';

export interface IHistoryResponse {
  id?: string;
  date: number;
  title: string;
  amount: string;
  sender: string;
  progress?: number;
  token: TokensType;
  cancellableAfter?: number;
  image: string | StaticImageData;
  method: 'single' | 'stream' | 'vesting';
  status: 'active' | 'completed' | 'cancelled';
}

export interface IProductItemCard {
  title: string;
  image: string | StaticImageData;
  id: string;
  tokens: TokensType[];
  amount: string;
  method: MethodType[];
}

export interface IFilterValues {
  stream: boolean;
  single: boolean;
  vesting: boolean;
  active: boolean;
  completed: boolean;
  cancelled: boolean;
  selectedTokens: ReducerTokensType[];
}
