import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from 'services/Auth/AuthAPI';
import type { IAuthResponse } from 'types/AuthDTO/AuthDTO';

interface IUser {
  user: IAuthResponse | null;
}

const initialState = {
  user: null,
} as IUser;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login
    builder
      .addMatcher(
        isAnyOf(authApi.endpoints.getTokenWithRole.matchFulfilled),
        (state, { payload }) => {
          state.user = payload;
          localStorage.setItem('token', payload.jwtToken);
        }
      )
      // Reload Token
      .addMatcher(
        authApi.endpoints.requestRole.matchFulfilled,
        (state, { payload }) => {
          // Убрать этот матчер после того как поправят бэкенд, сейчас на данный эдпоинт присылают токен с префиксом
          const jwtToken = payload.jwtToken.replace('Bearer ', '');
          state.user = {
            jwtToken,
            role: payload.role,
          };
          localStorage.setItem('token', jwtToken);
        }
      )
      // Logout or Rejected ReloadToken
      .addMatcher(
        isAnyOf(
          authApi.endpoints.requestRole.matchRejected,
          authApi.endpoints.logOut.matchFulfilled
        ),
        (state) => {
          state.user = null;
          localStorage.clear();
        }
      );
  },
});

export default authSlice.reducer;
