'use client';
import Link from 'next/link';
import Image from 'next/image';
const Header = ({ theme, toggleTheme }) => {
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
                href='#body'
                className='nav-link text-dark'
                aria-current='page'
                onClick={handleScroll}
              >
                Home
              </Link>
            </li>
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
          </ul>
        </header>
      </div>
      <div
        className='position-fixed d-flex flex-column align-items-center justify-content-between'
        id='backToTopContainer'
      >
        {theme == 'light-theme' && (
          <Image
            src='moon.svg'
            alt='Dark Mode'
            width={35}
            height={35}
            onClick={toggleTheme}
            className='cursor-pointer mb-3 '
          />
        )}
        {theme == 'dark-theme' && (
          <Image
            src='sun.svg'
            alt='Light Mode'
            width={35}
            height={35}
            onClick={toggleTheme}
            className='cursor-pointer mb-3 '
          />
        )}
        <Link href='#body' aria-current='page' onClick={handleScroll}>
          <Image
            src={theme == 'light-theme' ? 'caretUp.svg' : 'caretUp-dark.svg'}
            alt='Back to Top'
            width={40}
            height={40}
            className='mb-3 mx-auto'
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
