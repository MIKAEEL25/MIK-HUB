import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FavoriteType } from './Types';



const initialFavorites : FavoriteType[] = [] ;

const favoriteMovieSlice = createSlice({
  name: 'favorites',
  initialState: initialFavorites,
  reducers: {
    favoritePush(state , actions : PayloadAction<FavoriteType>) {
      state.unshift(actions.payload)
    }
  },
});

export const favoritesActions = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer;
