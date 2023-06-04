import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IAuthResponse, Role } from 'types/AuthDTO/AuthDTO';

const initialState = {
  jwtToken: '',
  role: Role.UNVERIFIED_CLIENT,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    pushAuth(state, action: PayloadAction<IAuthResponse>) {
      state.jwtToken = action.payload.jwtToken;
      state.role = action.payload.role;
    },
    logout(state) {
      state.jwtToken = initialState.jwtToken;
      state.role = initialState.role;
    }
  }
});

export const { pushAuth, logout } = userSlice.actions;
