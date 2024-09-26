import Cookies from 'js-cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiRes, ISettingData, IUpdateUserPayload } from '@/constants/types'; // Assume types are defined in your project

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
    getUser: builder.query<IApiRes<ISettingData>, void>({
      query: () => '/users',
    }),

    updateUser: builder.mutation<IApiRes<ISettingData>, IUpdateUserPayload>({
      query: (payload) => ({
        url: `/users`,
        method: 'PUT',
        body: JSON.stringify(payload),
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
