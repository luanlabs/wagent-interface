import { StaticImageData } from 'next/image';

export enum ErrorMsg {
  SERVER_ERROR = 'Internal server error.',
  EXPIRED_TOKEN = 'Invalid or expired token.',
  ALREADY_VERIFIED = 'Email is already verified.',
  AUTH_FAILED = 'Authentication failed, please try again.',
  EMAIL_NOT_FOUND = 'Verification failed. User not found.',
  INVALID_EMAIL = 'Invalid email address, Please try again.',
  REGISTRATION_FAILED = 'Registration failed, please try again.',
  INVALID_CREDENTIALS = 'Validation failed due to invalid fields.',
  USER_ALREADY_EXISTS = 'Email is already registered. Please sign in.',
  VERIFICATION_FAILED = 'Request verification token failed. Please try again.',
  TOO_MANY_REQUESTS = 'You can only request a token verification every 5 minutes.',
  USER_NOT_FOUND = 'Invalid email or password. Please try again or reset your password.',
  EMAIL_NOT_VERIFIED = 'Email not verified. Please check your inbox or verify your email.',
}

export enum HttpStatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500,
}

export interface CNavLinkProps {
  url: string;
  title: string;
  isMinimized?: boolean;
  icon: JSX.Element | React.ReactNode;
  activeIcon: JSX.Element | React.ReactNode;
}

export interface IUser extends Document {
  name: string;
  logo?: string;
  email: string;
  apiKey: string;
  password: string;
  isAdmin: boolean;
  isVerified: boolean;
  isSubscribed: boolean;
  methods: MethodsNumerical;
  verificationToken: string;
  verificationTokenExpiration: number;
  resetPasswordToken?: string;
  resetPasswordTokenExpiration?: number;
  subscribeToken: string;
  minimumCancellableStreamDuration: number;
  matchPassword: (enteredPassword: string) => Promise<boolean>;
  notificationTokens: string[];
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

export type MethodsNumerical = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type MethodType = 'single' | 'stream' | 'vesting';

export interface IApiResponse {
  data: IApiData;
  response: Response;
}

export interface IProduct {
  name: string;
  logo?: string;
  count: number;
  amount: number;
}

export interface IOrder {
  _id: string;
  user: object;
  amount: string;
  redirectUrl: string;
  products?: IProduct[];
  expiredTimestamp: number;
  status: 'pending' | 'completed' | 'expired';
}

export interface ITokenServerType {
  _id: string;
  logo: string;
  symbol: string;
  address: string;
}

export interface ITransaction {
  _id: string;
  hash: string;
  method: string;
  payerEmail: string;
  submittedAt: number;
  payerAddress: string;
  order: IOrder;
  token: ITokenServerType;
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

export type IApiData<T = null> = {
  message: object | string;
  result?: object | string | T;
  error?: {
    message: string;
    extras?: any;
  };
};

export interface CustomResponse {
  status: 'success' | 'error' | '';
  title: string;
  message: string;
}
