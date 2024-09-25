import Cookies from 'js-cookie';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiData } from '@/constants/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
    prepareHeaders: (headers) => {
      const token = Cookies.get('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<IApiData, void>({
      query: () => '/users',
    }),
  }),
});

export const { useGetUserQuery } = userApi;
