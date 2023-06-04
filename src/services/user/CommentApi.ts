import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store/store';
import { ICommentDto } from 'types/UserDTO/UserDTO';

type Id = number;

interface ILikeBody {
  id: Id,
  positive: boolean,
}

interface ICommentBody {
  id: Id,
  body: { content: string }
}

export const commentApi = createApi({
  reducerPath: 'commentApi',
  tagTypes: ['commentApi'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/user/comment/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    toggleLike: build.mutation<void, ILikeBody>({
      query: ({ id, positive }: ILikeBody) => ({
        url: `${id}/${positive}`,
        method: 'PUT',
      }),
      invalidatesTags: ['commentApi']
    }),
    updateComment: build.mutation<ICommentDto, ICommentBody>({
      query: ({ id, body }) => ({
        url: `${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['commentApi']

    }),
    deleteComment: build.mutation<ICommentDto, Id>({
      query: (id: Id) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['commentApi']

    }),
  }),
});

export const { useToggleLikeMutation, useUpdateCommentMutation, useDeleteCommentMutation } =
 commentApi;
