import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme || 'light-theme';
    } else {
      return 'light-theme';
    }
  });
  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    setTheme(newTheme);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove(
        theme === 'light-theme' ? 'dark-theme' : 'light-theme'
      );
      root.classList.add(
        theme === 'light-theme' ? 'light-theme' : 'dark-theme'
      );
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
