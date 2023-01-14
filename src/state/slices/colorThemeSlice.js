import { createSlice } from '@reduxjs/toolkit';

import { getInitialColorTheme } from '../../utils';

export const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState: {
    isColorThemeDark: getInitialColorTheme() || false,
  },
  reducers: {
    setIsColorThemeDark: (state) => {
      state.isColorThemeDark = !state.isColorThemeDark;
      localStorage.setItem('isDarkTheme', state.isColorThemeDark);
    },
  },
});

export const { setIsColorThemeDark } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;
