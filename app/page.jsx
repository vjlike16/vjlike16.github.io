'use client';
import React, { useState } from 'react';
import Main from '@/components/main';
import Header from '@/components/header';
import Skill from '@/components/skill';
import Website from '@/components/website';
import About from '@/components/about';
import Certificate from '@/components/certificate';
import useTheme from '@/hooks/theme';

export default function Home() {
  const [theme, toggleTheme] = useTheme();
  return (
    <body className={theme}>
      <div id='body'>
        <Header theme={theme} toggleTheme={toggleTheme}></Header>
        <Main theme={theme}></Main>
        <Skill theme={theme}></Skill>
        <About theme={theme}></About>
        <Website theme={theme}></Website>
        <Certificate theme={theme}></Certificate>
      </div>
    </body>
  );
}
