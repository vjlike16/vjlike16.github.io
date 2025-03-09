'use client';
import Image from 'next/image';
import Link from 'next/link';
import { themes } from '@/components';
import useThemeStore from '@/hooks/theme';

const Website = () => {
  const { theme } = useThemeStore();
  const allWebsites = [
    {
      title: 'VoiceStar',
      content:
        'Built using Loopback and MongoDB as backend services, EJS as frontend templating engine and third party libraries like Stripe, Google.',
      image: '/website/voicestar.jpg',
      imageAlt: 'VoiceStar',
      websiteLink: 'https://starbar.ai/',
      imageWidth: '100%',
    },
    {
      title: '26Miles',
      content:
        'Built using Loopback and MongoDB as backend services, EJS as frontend templating engine and third party libraries like Stripe.',
      image: '/www.svg',
      imagePadding: '20px',
      imageAlt: '26Miles',
      websiteLink: '#',
      imageWidth: '200px',
    },
    {
      title: '2030 or Bust',
      content:
        'Built using Express and MongoDB as backend services, HTML and CSS as frontend and Gulp JS to bundle JavaScript.',
      image: '/website/2030orBust.jpg',
      imageAlt: '2030orBust',
      websiteLink: 'https://www.2030orbust.org/',
      imageWidth: '100%',
    },
    {
      title: 'Synando App',
      content:
        'Built using Loopback and MongoDB as backend services to provide support to mobile apis and third party libraries like Google, Socket io.',
      image: '/www.svg',
      imagePadding: '20px',
      imageAlt: 'Synando',
      websiteLink: '#',
      imageWidth: '200px',
    },
    {
      title: 'Lever5',
      content:
        'Built using Express and SQL as backend services, Vue JS as frontend framework and third party libraries like PayPal, Quotemedia, Stripe, Socket io.',
      image: '/website/lever5.jpg',
      imageAlt: 'Lever5',
      websiteLink: 'https://lever5.com/',
      imageWidth: '100%',
    },
    {
      title: 'OyoApp',
      content:
        'Built using Express and MongoDB as backend services, EJS as templating engine and third party libraries like Facebook, Google, LinkedIn, Stripe.',
      image: '/website/oyoApp.png',
      imageAlt: 'OyoApp',
      websiteLink: 'https://system.oyoapp.com/',
      imageWidth: '100%',
    },
    {
      title: 'Klikidy Pay',
      content:
        'Built using Express, CouchDB and HyperLedger Fabric (Blockchain) as backend services, EJS as templating engine and third party libraries like Authorize.net, Twilio.',
      image: '/website/klikidyPay.png',
      imageAlt: 'Klikidy Pay',
      websiteLink: 'http://18.189.96.178:8383/merchant/',
      imageWidth: '100%',
    },
    {
      title: 'Weather Co-op',
      content:
        'Built using Express, MongoDB as backend services, Angular as frontend framework and third party libraries like Stripe, VisualCrossing, Twilio.',
      image: '/website/weatherApp.png',
      imageAlt: 'Weather Co-op',
      websiteLink: 'http://159.89.234.66:9051/',
      imageWidth: '100%',
    },
  ];
  return (
    <>
      <div id='website'>
        <div className='container py-5 px-4 px-sm-3 px-lg-5'>
          <h3 className='mb-4 text-dark'>Projects</h3>
          <hr />
          <div className='row g-4 mt-3'>
            {allWebsites.map((data, index) => {
              return (
                <div key={index} className='col-12 col-sm-6 col-md-4'>
                  <div className='card shadow-sm h-100'>
                    <Image
                      src={
                        data.image != '/www.svg'
                          ? data.image
                          : themes[theme].www
                      }
                      alt={data.imageAlt}
                      width={100}
                      height={100}
                      style={{
                        width: `${data.imageWidth}`,
                        height: '100%',
                        padding: data?.imagePadding
                          ? `${data.imagePadding}`
                          : '0',
                      }}
                      quality={100}
                      className='mb-1 card-img-top mx-auto'
                    />
                    <div className='card-body'>
                      <h5 className='text-dark'>
                        <Link
                          href={data.websiteLink}
                          target='blank'
                          style={{ marginRight: '1rem' }}
                        >
                          {data.title}
                        </Link>
                      </h5>
                      <p className='text-justify mb-0'>{data.content}</p>
                    </div>
                    <div className='px-3 pb-3'>
                      <div className='btn-group'>
                        <Link
                          href={data.websiteLink}
                          target='blank'
                          style={{ marginRight: '1rem' }}
                        >
                          <Image
                            src={themes[theme].website}
                            alt='Website Logo'
                            width={25}
                            height={25}
                          />
                        </Link>
                        <Link href='https://github.com/vjlike16' target='blank'>
                          <Image
                            src={themes[theme].github}
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
