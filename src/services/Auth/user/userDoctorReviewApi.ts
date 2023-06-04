import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store/store';
import { IDoctorReviewDto } from 'types/UserDTO/UserDTO';

type Id = number;

export const userDoctorReviewApi = createApi({
  reducerPath: 'doctorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/user/doctor/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllReviews: build.query<IDoctorReviewDto, Id>({
      query: (id: Id) => `${id}/review`,
    }),
  }),
});

export const { useGetAllReviewsQuery } = userDoctorReviewApi;
