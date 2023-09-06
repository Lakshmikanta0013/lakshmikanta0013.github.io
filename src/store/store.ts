import { configureStore } from '@reduxjs/toolkit';

import formSlice from './reducer/FormSlice';
import navigationSlice from './reducer/NavigationReducer';
import themeSlice from './reducer/ThemeReducer';

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    theme: themeSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
