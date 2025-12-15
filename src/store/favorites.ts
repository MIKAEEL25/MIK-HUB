import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AllMovie } from '@/components/MovieCard/Type';

const initialFavorites: AllMovie[] = [];

const favoriteMovieSlice = createSlice({
  name: 'favorites',
  initialState: initialFavorites,
  reducers: {
    favoritePush(state, actions: PayloadAction<AllMovie>) {
      state.unshift(actions.payload);
    },
  },
});

export const favoritesActions = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer;
