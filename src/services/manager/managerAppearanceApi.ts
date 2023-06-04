import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAppearence } from 'types/ManagerDTO/ManagerDTO';
import { RootState } from 'store/store';

export const managerAppearanceApi = createApi({
  reducerPath: 'AppearanceApi',
  tagTypes: ['color', 'breed'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/manager/appearance',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getColor: builder.query<IAppearence, void>({
      query: () => '/color',
      providesTags: ['color'],
    }),
    getBreed: builder.query<IAppearence, void>({
      query: () => '/breed',
      providesTags: ['breed'],
    }),
    addColor: builder.mutation<IAppearence, IAppearence>({
      query: (body: IAppearence) => ({
        url: '/color',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['color'],
    }),
    addBreed: builder.mutation<IAppearence, IAppearence>({
      query: (body: IAppearence) => ({
        url: '/breed',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['breed'],
    }),
    deleteColor: builder.mutation<IAppearence, IAppearence>({
      query: (body: IAppearence) => ({
        url: '/color',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['color'],
    }),
    deleteBreed: builder.mutation<IAppearence, IAppearence>({
      query: (body: IAppearence) => ({
        url: '/breed',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['breed'],
    }),
  }),
});

export const {
  useGetColorQuery,
  useGetBreedQuery,
  useAddBreedMutation,
  useAddColorMutation,
  useDeleteBreedMutation,
  useDeleteColorMutation,
} = managerAppearanceApi;
