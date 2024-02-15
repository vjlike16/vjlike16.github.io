import Image from 'next/image';
import Link from 'next/link';
const Website = () => {
  const allWebsites = [
    {
      title: 'VoiceStar',
      content:
        'Built using Loopback and MongoDB as backend services, EJS as frontend templating engine and third party libraries like Stripe, Google.',
      image: '/voicestar.jpg',
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
      image: '/2030orBust.jpg',
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
      image: '/lever5.jpg',
      imageAlt: 'Lever5',
      websiteLink: 'https://lever5.com/',
      imageWidth: '100%',
    },
    {
      title: 'OyoApp',
      content:
        'Built using Express and MongoDB as backend services, EJS as templating engine and third party libraries like Facebook, Google, LinkedIn, Stripe.',
      image: '/oyoApp.png',
      imageAlt: 'OyoApp',
      websiteLink: 'https://system.oyoapp.com/',
      imageWidth: '100%',
    },
    {
      title: 'Klikidy Pay',
      content:
        'Built using Express, CouchDB and HyperLedger Fabric (Blockchain) as backend services, EJS as templating engine and third party libraries like Authorize.net, Twilio.',
      image: '/klikidyPay.png',
      imageAlt: 'Klikidy Pay',
      websiteLink: 'http://18.189.96.178:8383/merchant/',
      imageWidth: '100%',
    },
    {
      title: 'Weather Co-op',
      content:
        'Built using Express, MongoDB as backend services, EJS as templating engine and third party libraries like Stripe, VisualCrossing, Twilio.',
      image: '/weatherApp.png',
      imageAlt: 'Weather Co-op',
      websiteLink: 'http://159.89.234.66:9051/',
      imageWidth: '100%',
    },
  ];
  return (
    <>
      <div id='website'>
        <div className='container py-5 px-4 px-sm-3 px-lg-5'>
          <h3 className='mb-4'>Projects</h3>
          <hr />
          <div className='row g-4 mt-3'>
            {allWebsites.map((data, index) => {
              return (
                <div key={index} className='col-12 col-sm-6 col-md-4'>
                  <div className='card shadow-sm h-100'>
                    <Image
                      src={data.image}
                      alt={data.imageAlt}
                      width={100}
                      height={100}
                      style={{
                        width: `${data.imageWidth}`,
                        height: '200px',
                        padding: data?.imagePadding
                          ? `${data.imagePadding}`
                          : '0',
                      }}
                      quality={100}
                      className='mb-1 card-img-top mx-auto'
                    />
                    <div className='card-body'>
                      <h5>
                        <Link
                          href={data.websiteLink}
                          target='blank'
                          style={{ marginRight: '1rem' }}
                        >
                          {data.title}
                        </Link>
                      </h5>
                      <p className='card-text text-justify'>{data.content}</p>
                    </div>
                    <div className='px-3 pb-3'>
                      <div className='btn-group'>
                        <Link
                          href={data.websiteLink}
                          target='blank'
                          style={{ marginRight: '1rem' }}
                        >
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
