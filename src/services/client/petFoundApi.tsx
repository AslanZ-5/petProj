import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IPetFoundClientDto } from 'types/ClientDTO/ClientDTO';
import { RootState } from 'store/store';
import { TUniqueId } from 'types/UserDTO/UserDTO';

export const petFoundApi = createApi({
  reducerPath: 'petFound',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/client/petFound',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getPetFoundHistory: build.query<IPetFoundClientDto[], TUniqueId>({
      query: (id: TUniqueId) => ({ url: `?petId=${id}` }),
    }),
  }),
});

export const { useGetPetFoundHistoryQuery } = petFoundApi;
