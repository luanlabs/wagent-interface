import Cookies from 'js-cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IApiRes,
  IUserInfo,
  ITokenServerType,
  ITransaction,
  IUpdateUserPayload,
  IApiData,
} from '@/constants/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      const token = Cookies.get('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<IApiRes<IUserInfo>, void>({
      query: () => '/users',
    }),

    getTransactions: builder.query<IApiRes<ITransaction[]>, void>({
      query: () => ({
        url: `/users/transactions`,
      }),
    }),

    getTokens: builder.query<IApiRes<ITokenServerType[]>, void>({
      query: () => ({
        url: `/tokens`,
        method: 'GET',
      }),
    }),

    sendFcmToken: builder.mutation<IApiRes<IApiData>, string>({
      query: (token) => ({
        url: `/users/notification`,
        method: 'POST',
        body: { token },
      }),
    }),

    updateApiKey: builder.mutation<IApiRes<string>, void>({
      query: () => ({
        url: `/users/api-key`,
        method: 'PUT',
      }),
    }),

    updateUser: builder.mutation<IApiRes<IUserInfo>, IUpdateUserPayload>({
      query: (payload) => ({
        url: `/users`,
        method: 'PUT',
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdateApiKeyMutation,
  useGetTransactionsQuery,
  useGetTokensQuery,
  useSendFcmTokenMutation,
} = userApi;
