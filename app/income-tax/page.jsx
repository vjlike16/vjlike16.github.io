'use client';
import useThemeStore from '@/hooks/theme';

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <body className={theme}>
      <div id='body'>income tax calculator</div>
    </body>
  );
}
