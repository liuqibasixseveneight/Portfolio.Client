function getPrefColorTheme() {
  // Looks for user's preferred color scheme
  if (!window.matchMedia) return;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function getInitialColorTheme() {
  // If returning user expressed preference for darkTheme previously,
  // ... theme === darkTheme
  // ... otherwise, theme === lightTheme
  const isReturningUser = 'dark' in localStorage;
  const savedTheme = JSON.parse(localStorage.getItem('dark'));
  const userPrefersDark = getPrefColorTheme();

  if (isReturningUser) {
    return savedTheme;
  } else if (userPrefersDark) {
    return true;
  } else {
    return false;
  }
}
