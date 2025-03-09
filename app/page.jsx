'use client';
import { Main, Header, Skill, Website, About, Certificate } from '@/components';
import useThemeStore from '@/hooks/theme';

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <body className={theme}>
      <div id='body'>
        <Header />
        <Main />
        <Skill />
        <About />
        <Website />
        <Certificate />
      </div>
    </body>
  );
}
