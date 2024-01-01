import Image from 'next/image';

const About = () => {
  let experience = '0 Years';
  const diffInMilliseconds = Math.abs(new Date('2020-01-01') - new Date());
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const millisecondsInMonth = millisecondsInYear / 12;

  let years = Math.floor(diffInMilliseconds / millisecondsInYear);
  const months = Math.floor(
    (diffInMilliseconds % millisecondsInYear) / millisecondsInMonth
  );

  let result = '';
  if (years > 0) result += years + (years === 1 ? '+ year ' : '+ years ');
  if (months >= 11) years += 1;
  experience = result.trim();

  return (
    <>
      <div style={{ backgroundColor: '#fff' }}>
        <div className='container py-4 px-4 px-sm-3 px-lg-5' id='about'>
          <main className='row justify-content-between align-items-center py-4'>
            <div className='d-none d-md-block col-md-6'>
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
            <div className='col-12 col-md-6 text-dark'>
              <h3>About Me</h3>
              <hr />
              <p className='text-justify'>
                Efficient professional with {experience} of experience and a
                proven knowledge of document imaging, desktop technology and
                emerging technologies. Dedicated professional with proven
                performance in management, leadership and communication. Detail
                oriented in problem-solving and planning. Ready to make an
                immediate contribution to your organisation. Dedicated worker
                with excellent communication, time management and computer
                skills. Frequently praised as hardworking by my peers, I can be
                relied upon to help you achieve your goals.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default About;
