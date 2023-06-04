import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store/store';
import { IDoctorReviewDto } from 'types/UserDTO/UserDTO';

export const userDoctorReviewsApi = createApi({
  reducerPath: 'userDoctorReviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/user/doctor',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDoctorReviews: builder.query<IDoctorReviewDto[], number>({
      query: (id: number) => `/${id}/review`,
    }),
  }),
});

export const { useGetDoctorReviewsQuery } = userDoctorReviewsApi;
