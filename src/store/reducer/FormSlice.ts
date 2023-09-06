import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FormStatus = 'loading' | 'completed' | 'rejected' | undefined;
export type FormData = { name: string; email: string; message: string };
type InitialState = {
  data: FormData;
  status: FormStatus;
};

const initialState: InitialState = {
  data: { name: '', email: '', message: '' },
  status: undefined,
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    setFormData: (data, action: PayloadAction<FormData>) => {
      return { ...data, data: action.payload };
    },
    setFormStatus: (status, action: PayloadAction<FormStatus>) => {
      return { ...status, status: action.payload };
    },
  },
});

export default formSlice.reducer;
export const { setFormData, setFormStatus } = formSlice.actions;
