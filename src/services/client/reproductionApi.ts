import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store/store';
import {
  ReproductionDto,
  GetReproductionByIdDto,
  AddReproductionRequestDto,
  EditReproductionRequestDto,
} from 'types/ClientDTO/ClientDTO';

export const reproductionApi = createApi({
  reducerPath: 'reproduction',
  tagTypes: ['Reproduction'],
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
  endpoints: (builder) => ({
    getAllReproductions: builder.query<ReproductionDto[], number>({
      query: (id: number) => `/${id}/reproduction`,
      providesTags: (result) => (
        result
          ? [
            ...result.map(({ id }) => ({
              type: 'Reproduction' as const,
              id,
            })),
            { type: 'Reproduction', id: 'LIST' },
          ]
          : [{ type: 'Reproduction', id: 'LIST' }]
      )
    }),
    getReproduction: builder.query<ReproductionDto, GetReproductionByIdDto>({
      query: ({ petId, repId }: GetReproductionByIdDto) => `/${petId}/reproduction/${repId}`,
      providesTags: (result, error, arg) => [
        { type: 'Reproduction', id: arg.repId },
      ],
    }),
    addReproduction: builder.mutation<ReproductionDto, AddReproductionRequestDto>({
      query: ({ petId, body }: AddReproductionRequestDto) => ({
        url: `/${petId}/reproduction`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Reproduction', id: 'LIST' }],
    }),
    editReproduction: builder.mutation<
    ReproductionDto,
    EditReproductionRequestDto
    >({
      query: ({ petId, repId, body }: EditReproductionRequestDto) => ({
        url: `/${petId}/reproduction/${repId}`,
        metohd: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Reproduction', id: arg.repId },
      ],
    }),
    deleteReprudction: builder.mutation<void, GetReproductionByIdDto>({
      query: ({ petId, repId }: GetReproductionByIdDto) => ({
        url: `/${petId}/reproduction/${repId}`,
        metohd: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Reproduction', id: arg.repId },
      ],
    }),
  }),
});

export const {
  useGetAllReproductionsQuery,
  useGetReproductionQuery,
  useAddReproductionMutation,
  useEditReproductionMutation,
  useDeleteReprudctionMutation,
} = reproductionApi;
