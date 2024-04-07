'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { themes } from '@/components/themes';
const Header = ({ theme, toggleTheme }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div id='header'>
      <div className='container px-4 px-sm-3 px-lg-5'>
        <header className='d-flex flex-wrap justify-content-end align-items-center py-3'>
          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <Link
                href='#skill'
                className='nav-link text-dark'
                onClick={handleScroll}
              >
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='#about'
                className='nav-link text-dark'
                onClick={handleScroll}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='#website'
                className='nav-link text-dark'
                onClick={handleScroll}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='#certificate'
                className='nav-link text-dark'
                onClick={handleScroll}
              >
                Certifications
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <div
        className='position-fixed d-flex flex-column align-items-center justify-content-between'
        id='backToTopContainer'
      >
        {isClient && (
          <>
            <Image
              src={themes[theme].changeTheme}
              alt='Change Theme'
              width={35}
              height={35}
              onClick={toggleTheme}
              className='cursor-pointer mb-3'
            />
            <Link href='#body' aria-current='page' onClick={handleScroll}>
              <Image
                src={themes[theme].caretUp}
                alt='Back to Top'
                width={40}
                height={40}
                className='mb-3 mx-auto'
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
