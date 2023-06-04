import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line import/no-cycle
import { RootState } from 'store/store';

import { ITopicDto, ICommentDto, TUniqueId } from 'types/UserDTO/UserDTO';

type CreateTopic = Pick<ITopicDto, 'title' | 'content'>;

interface IAddComment {
  id: TUniqueId,
  body: string,
}

interface IUpdateTopic {
  id: TUniqueId,
  body: {
    title: string,
    content: string,
  }
}

export const topicApi = createApi({
  reducerPath: 'topic',
  tagTypes: ['topic'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/user/',
    prepareHeaders: (
      headers: Headers,
      { getState }: { getState: () => unknown }
    ) => {
      const state = getState() as RootState;
      if (state.authSlice.user?.jwtToken || localStorage.getItem('token')) {
        headers.set(
          'Authorization',
          `Bearer ${
            state.authSlice.user?.jwtToken || localStorage.getItem('token')
          }`
        );
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getTopicById: build.query<ITopicDto, TUniqueId>({
      query: (id: TUniqueId) => ({ url: `topic/${id}` }),
    }),
    getAllYourTopics: build.query<ITopicDto[], void>({
      query: () => ({ url: 'topic/yourTopics' }),
      providesTags: (result) => (result
        ?
        [
          ...result.map(({ id }) => ({ type: 'topic', id } as const)),
          { type: 'topic', id: 'LIST' },
        ]
        :
        [{ type: 'topic', id: 'LIST' }]),
    }),
    getAllBaseTopics: build.query<ITopicDto[], void>({
      query: () => ({
        url: 'topic/allTopics',
      }),
      providesTags: (result) => (result
        ?
        [
          ...result.map(({ id }) => ({ type: 'topic', id } as const)),
          { type: 'topic', id: 'LIST' },
        ]
        :
        [{ type: 'topic', id: 'LIST' }]),
    }),
    deleteTopicById: build.mutation<void, TUniqueId>({
      query: (id: TUniqueId) => ({
        url: `topic/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['topic'],
    }),
    createTopic: build.mutation<ITopicDto, CreateTopic>({
      query: (body:CreateTopic) => ({
        url: 'topic',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['topic'],
    }),
    addCommentToTopic: build.mutation<ICommentDto, IAddComment>({
      query: ({ id, body }) => ({
        url: `topic/${id}/addComment`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['topic'],
    }),
    updateTopic: (build).mutation<ICommentDto, IUpdateTopic>({
      query: ({ id, body }) => ({
        url: `topic/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['topic'],
    }),
  }),
});

export const {
  useUpdateTopicMutation,
  useCreateTopicMutation,
  useAddCommentToTopicMutation,
  useDeleteTopicByIdMutation,
  useGetAllYourTopicsQuery,
  useGetAllBaseTopicsQuery,
  useGetTopicByIdQuery,
} = topicApi;
