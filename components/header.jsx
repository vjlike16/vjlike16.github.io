'use client';
import Link from 'next/link';
const Header = () => {
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
    <div style={{ backgroundColor: '#d1fae5' }}>
      <div className='container px-4 px-sm-3 px-lg-5'>
        <header className='d-flex flex-wrap justify-content-end py-3'>
          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <a
                href='#main'
                className='nav-link text-dark'
                aria-current='page'
              >
                Home
              </a>
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
                Project
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
