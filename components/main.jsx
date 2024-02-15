import Link from 'next/link';
import Image from 'next/image';
const Main = () => {
  return (
    <div id='main'>
      <div className='container py-5 px-4 px-sm-3 px-lg-5 '>
        <main className='row justify-content-between align-items-center py-4'>
          <div className='col-12 col-sm-6'>
            <h1 style={{ fontSize: '3rem' }}>Hi, I&apos;m</h1>
            <h1 style={{ fontSize: '4rem' }}>
              <b>Vijay Sharma</b>
            </h1>
            <h3 className='text-capitalize'>Full Stack Developer</h3>
            <p className='text-capitalize'>
              Turning Ideas Into Interactive Applications
            </p>
            <div className='row' style={{ gap: '.25rem' }}>
              <div className='col-1'>
                <Link href='https://github.com/vjlike16' target='blank'>
                  <Image
                    src='/github.svg'
                    alt='Github Logo'
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
              <div className='col-1'>
                <Link
                  href='https://www.linkedin.com/in/vjlike16/'
                  target='blank'
                >
                  <Image
                    src='/linkedin.svg'
                    alt='LinkedIn Logo'
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='d-none d-sm-flex col-sm-6 justify-content-center align-items-center'>
            <Image src='/wall.svg' alt='Main Logo' width={280} height={280} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
