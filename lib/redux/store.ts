import { combineReducers, configureStore, Action } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';
import globalSlice from './slices/globalSlice';

const rootReducer = combineReducers({
  global: globalSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
