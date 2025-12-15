import { createSlice } from '@reduxjs/toolkit';
import type { LoginState } from './Types';



const initialAuthState: LoginState = { isLogin: false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
