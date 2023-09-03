import { configureStore } from '@reduxjs/toolkit';

import navigationSlice from './reducer/NavigationReducer';
import themeSlice from './reducer/ThemeReducer';

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
