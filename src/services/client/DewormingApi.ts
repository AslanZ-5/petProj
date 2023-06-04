import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from 'store/store';

type DewormingId = number;

export interface IDewormingDTO {
  id: DewormingId;
  date: string;
  medicineId: number;
  medicineBatchNumber: string;
  isPeriodical: boolean;
  periodDays: number;
}

export const dewormingApi = createApi({
  reducerPath: 'dewormingApi',
  tagTypes: ['dewormingApi'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/client/procedure/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice.user?.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getDewormingById: build.query<IDewormingDTO, DewormingId>({
      query: (id: DewormingId) => ({ url: `deworming/${id}` }),
      providesTags: ['dewormingApi'],
    }),
    getDewormingByPetId: build.query<IDewormingDTO[], DewormingId>({
      query: (id: DewormingId) => ({
        url: 'deworming',
        params: { petId: id },
      }),
      providesTags: ['dewormingApi'],
    }),
    createDeworming: build.mutation<IDewormingDTO, Omit<IDewormingDTO, 'id'>>({
      query: (body) => ({
        url: 'devorming',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['dewormingApi'],
    }),
    updateDeworming: build.mutation<IDewormingDTO, IDewormingDTO>({
      query: ({ id, ...body }) => ({
        url: `devorming/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['dewormingApi'],
    }),
    deleteDeworming: build.mutation<void, IDewormingDTO>({
      query: (id) => ({
        url: `devorming/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['dewormingApi'],
    }),
  }),
});

export const {
  useGetDewormingByIdQuery,
  useGetDewormingByPetIdQuery,
  useCreateDewormingMutation,
  useDeleteDewormingMutation,
} = dewormingApi;
