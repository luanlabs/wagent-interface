import { MultiValue } from 'react-select';
import { IUserInfo, ITransaction } from './constants/types';

export type ErrorType = {
  title: string;
  message: string;
};

export type DonutChartDataType = {
  value: number;
  name: string;
};

export type PayloadItem = {
  value: string;
};

export type CBarChartType = {
  name: string;
  amount: number;
};

export interface TooltipProps {
  active?: boolean;
  payload?: {
    payload: CBarChartType;
    value: number;
    dataKey: string;
  }[];
}

export interface BasicOptionType<T> {
  value: T;
  label: string;
  id?: string;
}

export interface OptionType extends BasicOptionType<string> {
  logo: string;
}

export type MultiSelectType = MultiValue<OptionType> | null;

export type UserDataProps = {
  user: IUserInfo;
  txs: ITransaction[];
};
