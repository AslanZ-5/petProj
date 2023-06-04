import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store/store';

import { IAuthRequest, IAuthResponse } from 'types/AuthDTO/AuthDTO';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api',
    prepareHeaders: (
      headers: Headers,
      { getState }: { getState: () => unknown }
    ) => {
      const state = getState() as RootState;
      if (state.authSlice.user?.jwtToken || localStorage.getItem('token')) {
        headers.set(
          'Authorization',
          `Bearer ${
            state.authSlice.user?.jwtToken || localStorage.getItem('token')
          }`
        );
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getTokenWithRole: build.mutation<IAuthResponse, IAuthRequest>({
      query: (body: IAuthRequest) => ({
        url: 'auth',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['auth'],
    }),
    tokenVerification: build.mutation({
      query: (token: string) => ({
        url: 'auth/token',
        method: 'POST',
        body: token,
      }),
      invalidatesTags: ['auth'],
    }),
    logOut: build.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['auth'],
    }),
    requestRole: build.query<IAuthResponse, void>({
      query: () => ({
        url: 'auth/getCurrent',
      }),
      providesTags: () => ['auth'],
    }),
  }),
});

export const {
  useGetTokenWithRoleMutation,
  useLogOutMutation,
  useTokenVerificationMutation,
  useRequestRoleQuery,
  useLazyRequestRoleQuery
} = authApi;
