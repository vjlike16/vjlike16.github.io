import Image from 'next/image';
import { themes } from '@/components/themes';
const Skill = ({ theme }) => {
  const allTech = [
    {
      title: 'HTML5',
      image: 'html',
    },
    {
      title: 'CSS3',
      image: 'css',
    },
    {
      title: 'Javascript',
      image: 'javascript',
    },
    {
      title: 'ReactJS',
      image: 'react',
    },
    {
      title: 'VueJS',
      image: 'vue',
    },
    {
      title: 'NextJS',
      image: 'nextjs',
    },
    {
      title: 'NodeJS',
      image: 'nodejs',
    },
    {
      title: 'MongoDB',
      image: 'mongodb',
    },
    {
      title: 'MySQL',
      image: 'mysql',
    },

    {
      title: 'Sass',
      image: 'sass',
    },
    {
      title: 'Bootstrap',
      image: 'bootstrap',
    },
    {
      title: 'Tailwind',
      image: 'tailwind',
    },

    {
      title: 'AJAX',
      image: 'ajax',
    },
    {
      title: 'jQuery',
      image: 'jquery',
    },
    {
      title: 'ChartJS',
      image: 'chartjs',
    },
    {
      title: 'JIRA',
      image: 'jira',
    },
    {
      title: 'GIT',
      image: 'git',
    },
  ];
  return (
    <>
      <div id='skill'>
        <div className='container py-5 px-4 px-sm-3 px-lg-5'>
          <h3 className='mb-4 text-dark'>Tech Stack</h3>
          <hr />
          <div className='row mt-4'>
            {allTech.map((data, index) => {
              return (
                <div key={index} className='col-6 col-sm-3 col-md-2 my-3'>
                  <div className='w-100 d-flex justify-content-center'>
                    <Image
                      src={themes[theme][data.image]}
                      alt={data.title}
                      width={75}
                      height={75}
                      className='mb-3 mx-auto'
                    />
                  </div>
                  <h6 className='text-center'>
                    <b>{data.title}</b>
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
