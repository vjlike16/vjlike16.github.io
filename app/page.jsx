'use client';
import React, { useState } from 'react';
import Main from '@/components/main';
import Header from '@/components/header';
import Skill from '@/components/skill';
import Website from '@/components/website';
import About from '@/components/about';
export default function Home() {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    setTheme(theme == 'light-theme' ? 'dark-theme' : 'light-theme');
  };
  return (
    <body className={theme}>
      <div id='body'>
        <Header theme={theme} toggleTheme={toggleTheme}></Header>
        <Main theme={theme}></Main>
        <Skill theme={theme}></Skill>
        <About theme={theme}></About>
        <Website theme={theme}></Website>
      </div>
    </body>
  );
}
