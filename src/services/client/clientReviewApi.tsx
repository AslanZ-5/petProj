import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from 'store/store';
import { TUniqueId, IDoctorReviewDto } from 'types/UserDTO/UserDTO';

interface IAddReview {
  doctorId: TUniqueId,
  content: string,
}

export const clientReviewApi = createApi({
  reducerPath: 'clientReview',
  tagTypes: ['clientReview'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/client/doctor/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getReview: build.query<IDoctorReviewDto, TUniqueId>({
      query: (doctorId: TUniqueId) => ({ url: `${doctorId}/review` }),
      providesTags: ['clientReview']
    }),
    deleteReview: build.mutation<void, TUniqueId>({
      query: (doctorId: TUniqueId) => ({
        url: `${doctorId}/review`,
        method: 'DELETE',
      }),
      invalidatesTags: ['clientReview']
    }),
    addReview: build.mutation<IDoctorReviewDto, IAddReview>({
      query: ({ doctorId, content }: IAddReview) => ({
        url: `${doctorId}/review?text=${content}`,
        method: 'POST',
      }),
      invalidatesTags: ['clientReview']
    }),
    updateReview: build.mutation<IDoctorReviewDto, IAddReview>({
      query: ({ doctorId, content }: IAddReview) => ({
        url: `${doctorId}/review`,
        method: 'PUT',
        body: content,
      }),
      invalidatesTags: ['clientReview']
    }),
  }),
});

export const { useAddReviewMutation, useDeleteReviewMutation, useUpdateReviewMutation, useGetReviewQuery } = clientReviewApi;
