import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from 'store/store';
import { EctoparaziteDto } from 'types/PetsDTO/EctoparaziteDto/EctoparaziteDto';

export const ectoparaziteApi = createApi({
  reducerPath: 'ectoparazite',
  tagTypes: ['ectoparazite'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/client/procedure/external',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice.user?.jwtToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    deleteEctoparazite: build.mutation<void, EctoparaziteDto['id']>({
      query: (id) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ectoparazite'],
    }),

    getEctoparazite: build.query<EctoparaziteDto, EctoparaziteDto['id']>({
      query: (id) => ({ url: `${id}` }),
      providesTags: ['ectoparazite'],
    }),

    getAllEctoparazite: build.query<EctoparaziteDto[], EctoparaziteDto['id']>({
      query: (id) => ({ url: `?petId=${id}` }),
      providesTags: ['ectoparazite'],
    }),

    addEctoparazite: build.mutation<EctoparaziteDto, EctoparaziteDto>({
      query: ({ id, ...body }) => ({
        url: `?petId=${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['ectoparazite'],
    }),

    updataEctoparazite: build.mutation<EctoparaziteDto, EctoparaziteDto>({
      query: ({ id, ...body }) => ({
        url: `${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['ectoparazite'],
    }),
  }),
});

export const {
  useGetEctoparaziteQuery,
  useGetAllEctoparaziteQuery,
  useUpdataEctoparaziteMutation,
  useAddEctoparaziteMutation,
  useDeleteEctoparaziteMutation,
} = ectoparaziteApi;
