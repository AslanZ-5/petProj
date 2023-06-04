import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store/store';
import { IUserNotificationDto } from '../../types/UserDTO/UserDTO';

export const userNotificationApi = createApi({
  reducerPath: 'userNotificationApi',
  tagTypes: ['notification'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/user/notification',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUserNotifications: builder.query<IUserNotificationDto[], void>({
      query: () => '',
      providesTags: ['notification'],
    }),
    getUserNotification: builder.query<IUserNotificationDto, number>({
      query: (id: number) => `/${id}`,
      providesTags: ['notification'],
    }),
    putUserNotificationAsRead: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['notification'],
    }),
  }),
});

export const {
  useGetAllUserNotificationsQuery,
  useGetUserNotificationQuery,
  usePutUserNotificationAsReadMutation,
} = userNotificationApi;
