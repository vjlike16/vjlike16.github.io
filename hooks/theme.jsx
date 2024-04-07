import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme === 'light' ? 'light' : 'dark');
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
