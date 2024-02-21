import Image from 'next/image';
import Link from 'next/link';
const Certificate = ({ theme }) => {
  const allWebsites = [
    {
      title: 'Next JS',
      credImg: 'UC-3031c5e7-1e51-4d31-816c-b62e580803ab.jpg',
      imageAlt: 'Next.js Certificate',
      credLink:
        'https://www.udemy.com/certificate/UC-3031c5e7-1e51-4d31-816c-b62e580803ab/',
      imageWidth: '100%',
    },
    {
      title: 'Javascript',
      credImg: '80623d82498a.png',
      imageAlt: 'Javascript Certificate',
      credLink: 'https://www.hackerrank.com/certificates/80623d82498a',
      imageWidth: '100%',
    },
    {
      title: 'Problem Solving',
      credImg: '036975d55cd1.png',
      imageAlt: 'Problem Solving Certificate',
      credLink: 'https://www.hackerrank.com/certificates/036975d55cd1',
      imageWidth: '100%',
    },
    {
      title: 'SQL',
      credImg: 'bf8944a4b94f.png',
      imageAlt: 'SQL Certificate',
      credLink: 'https://www.hackerrank.com/certificates/bf8944a4b94f',
      imageWidth: '100%',
    },
    {
      title: 'Jira Fundamentals',
      credImg: 'PQ8xnrLRdFDd67BXUVWp5FZ4.png',
      imageAlt: 'Jira Fundamentals Certificate',
      credLink:
        'https://university.atlassian.com/student/award/PQ8xnrLRdFDd67BXUVWp5FZ4',
      imageWidth: '100%',
    },
    {
      title: 'Trello Fundamentals',
      credImg: 'VPiBpP4rzCmLkMdtaDTDLAxB.png',
      imageAlt: 'Trello Fundamentals Certificate',
      credLink:
        'https://university.atlassian.com/student/award/VPiBpP4rzCmLkMdtaDTDLAxB',
      imageWidth: '100%',
    },
  ];
  return (
    <>
      <div id='certificate'>
        <div className='container py-5 px-4 px-sm-3 px-lg-5'>
          <h3 className='mb-4 text-dark'>Certifications</h3>
          <hr />
          <div className='row g-4 mt-3'>
            {allWebsites.map((data, index) => {
              return (
                <div key={index} className='col-12 col-sm-6'>
                  <div className='card shadow-sm h-100'>
                    <Image
                      src={
                        data.credImg != null ? `/${data.credImg}` : '/www.svg'
                      }
                      alt={data.imageAlt}
                      width={100}
                      height={100}
                      style={{
                        width: `${data.imageWidth}`,
                        height: '350px',
                        padding: data?.imagePadding
                          ? `${data.imagePadding}`
                          : '0',
                      }}
                      quality={100}
                      className='mb-1 card-img-top mx-auto'
                    />
                    <div className='card-body'>
                      <h5 className='text-dark'>{data.title}</h5>
                      <div className='pb-3'>
                        <div className='btn-group'>
                          <Link href={data.credLink} target='blank'>
                            <Image
                              src={
                                theme == 'light-theme'
                                  ? 'certificate.svg'
                                  : 'certificate-dark.svg'
                              }
                              alt='Certificate Logo'
                              width={25}
                              height={25}
                            />
                            &nbsp;&nbsp;View Certificate
                          </Link>
                        </div>
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

export default Certificate;
