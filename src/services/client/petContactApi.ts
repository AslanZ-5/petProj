import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store/store';
import { PetResponceDto } from 'types/PetsDTO/PetResponseDto/PetResponseDto';
import { IPets, PetUpdateRequestDto } from 'types/PetsDTO/PetsDTO';

export const petContactApi = createApi({
  reducerPath: 'petContactApi',
  tagTypes: ['Pets'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/client/pet',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPets: builder.query<PetResponceDto[], void>({
      query: () => '',
      providesTags: (res) => (res
        ? [
          ...res.map(({ id }) => ({ type: 'Pets' as const, id })),
          { type: 'Pets', id: 'PETS' },
        ]
        : [{ type: 'Pets', id: 'PETS' }]
      )
    }),
    getPetById: builder.query<PetResponceDto, number>({
      query: (id: number) => `/${id}`,
    }),
    addNewPet: builder.mutation<PetResponceDto, IPets>({
      query: (body: IPets) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Pets', id: 'PETS' }],
    }),
    editPet: builder.mutation<PetResponceDto, PetUpdateRequestDto>({
      query: ({ id, body }: PetUpdateRequestDto) => ({
        url: `/${id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (res, err, arg) => [{ type: 'Pets', id: arg.id }],
    }),
    deletePet: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (res, err, id) => [{ type: 'Pets', id }],
    }),
  }),
});

export const {
  useGetAllPetsQuery,
  useGetPetByIdQuery,
  useEditPetMutation,
  useDeletePetMutation,
  useAddNewPetMutation,
} = petContactApi;
