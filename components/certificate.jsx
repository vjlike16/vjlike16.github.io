'use client';
import Image from 'next/image';
import Link from 'next/link';
import { themes } from '@/components';
import useThemeStore from '@/hooks/theme';

const Certificate = () => {
  const { theme } = useThemeStore();
  const allWebsites = [
    {
      title: 'Next JS',
      credImg: '/certificate/UC-3031c5e7-1e51-4d31-816c-b62e580803ab.jpg',
      imageAlt: 'Next.js Certificate',
      credLink:
        'https://www.udemy.com/certificate/UC-3031c5e7-1e51-4d31-816c-b62e580803ab/',
    },
    {
      title: 'Javascript',
      credImg: '/certificate/80623d82498a.png',
      imageAlt: 'Javascript Certificate',
      credLink: 'https://www.hackerrank.com/certificates/80623d82498a',
    },
    {
      title: 'Problem Solving',
      credImg: '/certificate/036975d55cd1.png',
      imageAlt: 'Problem Solving Certificate',
      credLink: 'https://www.hackerrank.com/certificates/036975d55cd1',
    },
    {
      title: 'SQL',
      credImg: '/certificate/bf8944a4b94f.png',
      imageAlt: 'SQL Certificate',
      credLink: 'https://www.hackerrank.com/certificates/bf8944a4b94f',
    },
    {
      title: 'Jira Fundamentals',
      credImg: '/certificate/PQ8xnrLRdFDd67BXUVWp5FZ4.png',
      imageAlt: 'Jira Fundamentals Certificate',
      credLink:
        'https://university.atlassian.com/student/award/PQ8xnrLRdFDd67BXUVWp5FZ4',
    },
    {
      title: 'Trello Fundamentals',
      credImg: '/certificate/VPiBpP4rzCmLkMdtaDTDLAxB.png',
      imageAlt: 'Trello Fundamentals Certificate',
      credLink:
        'https://university.atlassian.com/student/award/VPiBpP4rzCmLkMdtaDTDLAxB',
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
                <div key={index} className='col-12 col-sm-6 col-md-4'>
                  <div className='card shadow-sm h-100'>
                    <Image
                      src={data.credImg}
                      alt={data.imageAlt}
                      width={100}
                      height={100}
                      style={{
                        height: '100%',
                        padding: data?.imagePadding
                          ? `${data.imagePadding}`
                          : '0',
                      }}
                      quality={100}
                      className='mb-1 card-img-top mx-auto'
                    />
                    <div className='card-body'>
                      <h5 className='text-dark'>{data.title}</h5>
                      <div className='btn-group'>
                        <Link href={data.credLink} target='blank'>
                          <Image
                            src={themes[theme].certificate}
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
