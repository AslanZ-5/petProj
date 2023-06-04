import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from 'store/store';
import {
  PetResponceDto,
  PetId,
} from 'types/PetsDTO/PetResponseDto/PetResponseDto';

export const petClientApi = createApi({
  reducerPath: 'petClient',
  tagTypes: ['petClient'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/client/pet',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice.user?.jwtToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    deletePetClient: build.mutation<void, PetId>({
      query: (id: PetId) => ({
        url: `?petId=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['petClient'],
    }),

    getPetClient: build.query<PetResponceDto, PetId>({
      query: (id: PetId) => ({ url: `?petId=${id}` }),
      providesTags: ['petClient'],
    }),

    getAllPetClient: build.query<PetResponceDto[], void>({
      query: () => ({ url: '' }),
      providesTags: ['petClient'],
    }),

    addPetClient: build.mutation<PetResponceDto, PetResponceDto>({
      query: ({ ...body }: PetResponceDto) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['petClient'],
    }),

    updataPetClient: build.mutation<PetResponceDto, PetResponceDto>({
      query: ({ id, ...body }) => ({
        url: `?petId=${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['petClient'],
    }),
  }),
});

export const {
  useGetPetClientQuery,
  useAddPetClientMutation,
  useDeletePetClientMutation,
  useUpdataPetClientMutation,
  useGetAllPetClientQuery,
} = petClientApi;
