import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store/store';
import {
  ManagerNewsResponseDto,
  ManagerNewsRequestDto,
  ManagerNewsEditDto,
  ManagerNewsAddPictureRequest,
} from '../../types/ManagerDTO/ManagerDTO';

export const managerNewsApi = createApi({
  reducerPath: 'managerNewsApi',
  tagTypes: ['News'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/manager/news',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice.user?.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllNews: builder.query<ManagerNewsResponseDto[], void>({
      query: () => '',
      providesTags: (result) => (
        result
          ? [
            ...result.map(({ id }) => ({ type: 'News' as const, id })),
            { type: 'News', id: 'LIST' },
          ]
          : [{ type: 'News', id: 'LIST' }]
      )
    }),
    getNewsDetails: builder.query<ManagerNewsResponseDto, number>({
      query: (id: number) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'News', id }],
    }),
    deleteNews: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'News', id }],
    }),
    addNews: builder.mutation<ManagerNewsResponseDto, ManagerNewsRequestDto>({
      query: (body: ManagerNewsRequestDto) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'News', id: 'LIST' }],
    }),
    editNews: builder.mutation<ManagerNewsResponseDto, ManagerNewsEditDto>({
      query: ({ body, id }: ManagerNewsEditDto) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'News', id: arg.id }],
    }),
    addNewsPictures: builder.mutation<void, ManagerNewsAddPictureRequest>({
      query: ({ pictures: body, id }: ManagerNewsAddPictureRequest) => ({
        url: `/${id}/pictures`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'News', id: arg.id }],
    }),
    publishNews: builder.mutation<void, number[]>({
      query: (body: number[]) => ({
        url: '/publish',
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'News', id: 'LIST' }],
    }),
    unpublishNews: builder.mutation<void, number[]>({
      query: (body: number[]) => ({
        url: '/unpublish',
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'News', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetNewsDetailsQuery,
  useDeleteNewsMutation,
  useAddNewsMutation,
  useAddNewsPicturesMutation,
  useEditNewsMutation,
  usePublishNewsMutation,
  useUnpublishNewsMutation,
} = managerNewsApi;
