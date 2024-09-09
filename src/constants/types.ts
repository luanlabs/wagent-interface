import { StaticImageData } from 'next/image';

export enum ErrorMsg {
  SERVER_ERROR = 'Internal server error.',
  AUTH_FAILED = 'Authentication failed, please try again.',
  REGISTRATION_FAILED = 'Registration failed, please try again.',
  INVALID_CREDENTIALS = 'Validation failed due to invalid fields.',
  USER_ALREADY_EXISTS = 'Email is already registered. Please sign in.',
  USER_NOT_FOUND = 'Invalid email or password. Please try again or reset your password.',
  EMAIL_NOT_VERIFIED = 'Email not verified. Please check your inbox or verify your email.',
  VERIFICATION_FAILED = 'Request verification token failed. Please try again.',
  ALREADY_VERIFIED = 'Email is already verified.',
  EMAIL_NOT_FOUND = 'Verification failed. User not found.',
  INVALID_EMAIL = 'Invalid email address, Please try again.',
  TOO_MANY_REQUESTS = 'You can only request a token verification every 5 minutes.',
}
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

export interface IHistoryResponse extends IApiResponse {
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

export type AuthCredentials = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  remember?: boolean;
};

export interface IUserAuth {
  id: string;
  email: string;
  name: string;
  storeImage: string;
  token: string;
}

export type IApiData = {
  message: object | string;
  result?: object | string;
  error?: {
    message: string;
    extras?: any;
  };
};

export interface IApiResponse {
  data: IApiData;
  response: Response;
}

export interface CustomResponse {
  status: 'success' | 'error' | '';
  title: string;
  message: string;
}
