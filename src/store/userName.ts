import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserName {
  uName: string | null;
}

const initialNameState: UserName = {
  uName: null,
};

const userNameSlicie = createSlice({
  name: 'userName',
  initialState: initialNameState,
  reducers: {
    userNameStore(state, actions: PayloadAction<string>) {
      state.uName = actions.payload;
    },
  },
});

export const userNameActions = userNameSlicie.actions;
export default userNameSlicie.reducer;
