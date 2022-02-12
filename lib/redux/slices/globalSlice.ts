import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserSliceProps {
  backgroundColor: string;
}

const initialState: UserSliceProps = {
  backgroundColor: 'black',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    SET_BG_COLOR: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const setBgColor = (color: string) => {
  return async (dispatch: any) => {
    dispatch(SET_BG_COLOR(color));
  };
};

export const { SET_BG_COLOR } = globalSlice.actions;
export const selectGlobal = (state: RootState) => state.global;

export default globalSlice.reducer;
