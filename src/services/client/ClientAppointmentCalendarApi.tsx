import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAppointmentCallendarDto } from 'types/ClientDTO/ClientDTO';
import { RootState } from 'store/store';
import { TUniqueId } from 'types/UserDTO/UserDTO';

interface IGetCalendarWithFreeSlotsQueries {
  doctorId: TUniqueId,
  date: string,
}

export const clientAppointmentCalendarApi = createApi({
  reducerPath: 'clientAppointmentCalendar',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/client/appointment',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getCalendarWithFreeSlots: build.query<IAppointmentCallendarDto, IGetCalendarWithFreeSlotsQueries>({
      query: ({ doctorId, date }:IGetCalendarWithFreeSlotsQueries) => ({ url: `?doctorId=${doctorId}&date=${date}` }),
    }),
  }),
});

export const { useGetCalendarWithFreeSlotsQuery } = clientAppointmentCalendarApi;
