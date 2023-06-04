import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store/store';

type Id = number;

export const userNotificationApi = createApi({
  reducerPath: 'notificationApi',
  tagTypes: ['notificationApi'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/user/notification/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllNotifications: build.query({
      query: () => '',
      providesTags: ['notificationApi']

    }),
    getNotification: build.query({
      query: (id: Id) => `${id}`,
      providesTags: ['notificationApi']

    }),
    markNotificationAsRead: build.mutation({
      query: (id: Id) => ({
        url: `${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['notificationApi']
    }),
  }),
});

export const { useGetAllNotificationsQuery, useGetNotificationQuery, useMarkNotificationAsReadMutation } =
  userNotificationApi;
