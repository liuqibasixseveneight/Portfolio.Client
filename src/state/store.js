import { configureStore } from '@reduxjs/toolkit';

import colorThemeReducer from './slices/colorThemeSlice';

export default configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
  },
});
