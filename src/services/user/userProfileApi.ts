import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// eslint-disable-next-line import/no-cycle
import { RootState } from 'store/store';
import { IProfileDto } from 'types/UserDTO/UserDTO';

export const userProfileApi = createApi({
  reducerPath: 'userProfileApi',
  tagTypes: ['profileApi'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/user/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (build) => ({
    getProfile: build.query({
      query: () => 'profile',
      providesTags: ['profileApi'],
    }),
    updProfile: build.mutation({
      query: (body: IProfileDto) => ({
        url: 'profile',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['profileApi'],
    }),
  }),
});

export const { useGetProfileQuery, useUpdProfileMutation } = userProfileApi;
