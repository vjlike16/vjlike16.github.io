import Image from 'next/image';
import Link from 'next/link';
const Website = () => {
  const allWebsites = [
    {
      title: 'VoiceStar',
      content:
        'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
      image: '/website.jpg',
      imageAlt: 'VoiceStar',
    },
    {
      title: '26Miles',
      content:
        'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
      image: '/website.jpg',
      imageAlt: '26Miles',
    },
    {
      title: 'Lever5',
      content:
        'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
      image: '/website.jpg',
      imageAlt: 'Lever5',
    },
    {
      title: 'OyoApp',
      content:
        'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
      image: '/website.jpg',
      imageAlt: 'OyoApp',
    },
    {
      title: 'Klikidy Pay',
      content:
        'Advanced proficiency in Vue, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
      image: '/website.jpg',
      imageAlt: 'Klikidy Pay',
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: '#f8fafc' }}>
        <div className='container py-5 px-4 px-sm-3 px-lg-5' id='website'>
          <h3 className='mb-4'>Web Creations</h3>
          <hr />
          <div class='row g-4 mt-3'>
            {allWebsites.map((data, index) => {
              return (
                <div key={index} className='col-12 col-sm-6 col-md-4'>
                  <div className='card shadow-sm h-100'>
                    <Image
                      cla
                      src={data.image}
                      alt={data.imageAlt}
                      width={75}
                      height={75}
                      objectFit='contain'
                      style={{ width: '200px', height: '200px' }}
                      className='mb-3 card-img-top mx-auto'
                    />
                    <div className='card-body'>
                      <h5>{data.title}</h5>
                      <p className='card-text' style={{ textAlign: 'justify' }}>
                        {data.content}
                      </p>
                    </div>
                    <div className='px-3 pb-3'>
                      <div className='btn-group'>
                        <Link href='#' style={{ marginRight: '1rem' }}>
                          <Image
                            src='/website.svg'
                            alt='Website Logo'
                            width={25}
                            height={25}
                          />
                        </Link>
                        <Link href='https://github.com/vjlike16' target='blank'>
                          <Image
                            src='/github.svg'
                            alt='Github Logo'
                            width={25}
                            height={25}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Website;
