import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  value: {
    isNavOpen: boolean;
  };
};

const initialState: InitialState = {
  value: {
    isNavOpen: false,
  },
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setOpen: (state: InitialState) => {
      state.value.isNavOpen = !state.value.isNavOpen;
    },
  },
});

export const { setOpen } = navigationSlice.actions;

export default navigationSlice.reducer;
