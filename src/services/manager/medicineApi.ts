import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store/store';

import {
  MedicineSearchParamsDto,
  MedicineResponseDto,
  MedicineEditDto,
  MedicineDosageResponseDto,
  DosageDeleteParams,
  MedicineRequestDto,
  MedicineDosageRequestDto,
} from 'types/ManagerDTO/ManagerDTO';

export const medicineApi = createApi({
  reducerPath: 'medicineApi',
  tagTypes: ['dosage', 'medicine'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/manager/medicine',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchMedicine: builder.query<MedicineResponseDto[], MedicineSearchParamsDto>({
      query: (params: MedicineSearchParamsDto) => ({
        url: '',
        method: 'GET',
        params,
      }),
      providesTags: [{ type: 'medicine', id: 'LIST' }],
    }),
    getMedicineById: builder.query<MedicineResponseDto, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: (res, err, id) => [{ type: 'medicine', id }],
    }),
    getMedicineDosageById: builder.query<MedicineDosageResponseDto, number>({
      query: (id: number) => ({
        url: `/${id}/dosage`,
        method: 'GET',
      }),
      providesTags: (res, err, id) => [{ type: 'dosage', id }],
    }),
    createMedicine: builder.mutation<MedicineResponseDto, MedicineRequestDto>({
      query: (body: MedicineRequestDto) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'medicine', id: 'LIST' }],
    }),
    createMedicineDosage: builder.mutation<void, MedicineDosageRequestDto>({
      query: ({ id, body }: MedicineDosageRequestDto) => ({
        url: `/${id}/dose`,
        method: 'POST',
        body,
      }),
    }),
    editMedicineDosage: builder.mutation<MedicineResponseDto, MedicineEditDto>({
      query: ({ id, body }: MedicineEditDto) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (res, err, arg) => [{ type: 'dosage', id: arg.id }],
    }),
    deleteMedicine: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (res, err, id) => [{ type: 'medicine', id }],
    }),
    deleteMedicineDosage: builder.mutation<void, DosageDeleteParams>({
      query: ({ medicineId, dosageId }: DosageDeleteParams) => ({
        url: `/${medicineId}/dosage/${dosageId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (res, err, arg) => [
        { type: 'dosage', id: arg.dosageId },
      ],
    }),
  }),
});

export const {
  useSearchMedicineQuery,
  useGetMedicineByIdQuery,
  useGetMedicineDosageByIdQuery,
  useCreateMedicineDosageMutation,
  useCreateMedicineMutation,
  useEditMedicineDosageMutation,
  useDeleteMedicineDosageMutation,
  useDeleteMedicineMutation,
} = medicineApi;
