import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from 'store/store';
import {
  Pet,
  VaccinationDto,
} from 'types/PetsDTO/VaccinationDto/VaccinationDto';

export const vaccinationApi = createApi({
  reducerPath: 'vaccination',
  tagTypes: ['vaccination'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/client/procedure/vaccination',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice.user?.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    deleteVaccinationById: build.mutation<void, Pet>({
      query: (id: Pet) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['vaccination'],
    }),
    getVaccinationById: build.query<VaccinationDto, Pet>({
      query: (id: Pet) => ({
        url: `${id}`,
      }),
      providesTags: ['vaccination'],
    }),
    getAllVaccination: build.query<VaccinationDto[], Pet>({
      query: (id: Pet) => ({ url: `?petId=${id.id}` }),
      providesTags: ['vaccination'],
    }),
    addVaccination: build.mutation<VaccinationDto, VaccinationDto>({
      query: ({ id, ...body }) => ({
        url: `?petId=${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['vaccination'],
    }),
    updateVaccination: build.mutation<VaccinationDto, VaccinationDto>({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['vaccination'],
    }),
  }),
});

export const {
  useDeleteVaccinationByIdMutation,
  useGetVaccinationByIdQuery,
  useGetAllVaccinationQuery,
  useAddVaccinationMutation,
  useUpdateVaccinationMutation,
} = vaccinationApi;
