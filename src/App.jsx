import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Home } from '@portfolio/pages';
import { Navbar } from '@portfolio/ui';
import { darkTheme, lightTheme } from './themes';
import { Wrapper } from './App.styles';

export default function App() {
  const isColorThemeDark = useSelector(
    (state) => state?.colorTheme?.isColorThemeDark
  );

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(isColorThemeDark));
  }, [isColorThemeDark]);

  return (
    <ThemeProvider theme={isColorThemeDark ? darkTheme : lightTheme}>
      <Wrapper>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
}
