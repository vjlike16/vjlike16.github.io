import Image from 'next/image';
const About = () => {
  return (
    <>
      <div style={{ backgroundColor: '#fff' }}>
        <div className='container py-4 px-4 px-sm-3 px-lg-5' id='about'>
          <main className='row justify-content-between align-items-center py-4'>
            <div className='d-none d-sm-block col-sm-6'>
              <div className='row'>
                <div className='col-12'>
                  <Image
                    src='/aboutWall.svg'
                    alt='Main Logo'
                    width={350}
                    height={350}
                  />
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 text-dark'>
              <h3>About Me</h3>
              <hr />
              <p className='text-capitalize' style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                maiores itaque doloribus asperiores dolorum quas voluptates
                distinctio, porro beatae quam provident libero animi totam,
                praesentium voluptatem corrupti dignissimos ipsum accusantium!
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default About;
