import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import userReducer from './userName';
import favoriteReducer from './favorites';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  favorite: favoriteReducer,
});

const store = configureStore({
  reducer: { rootReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
