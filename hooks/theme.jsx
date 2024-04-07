import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light-theme';
  });
  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(
      theme === 'light-theme' ? 'dark-theme' : 'light-theme'
    );
    root.classList.add(theme === 'light-theme' ? 'light-theme' : 'dark-theme');
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
