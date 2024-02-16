import Image from 'next/image';
const Skill = ({ theme }) => {
  const allTech = [
    {
      title: 'HTML5',
      image: 'html.svg',
      imageDark: 'html-dark.svg',
    },
    {
      title: 'CSS3',
      image: 'css.svg',
      imageDark: 'css-dark.svg',
    },
    {
      title: 'Javascript',
      image: 'javascript.svg',
      imageDark: 'javascript-dark.svg',
    },
    {
      title: 'ReactJS',
      image: 'react.svg',
      imageDark: 'react-dark.svg',
    },
    {
      title: 'VueJS',
      image: 'vue.svg',
      imageDark: 'vue-dark.svg',
    },
    {
      title: 'NextJS',
      image: 'nextjs.svg',
      imageDark: 'nextjs-dark.svg',
    },
    {
      title: 'NodeJS',
      image: 'nodejs.svg',
      imageDark: 'nodejs-dark.svg',
    },
    {
      title: 'MongoDB',
      image: 'mongodb.svg',
      imageDark: 'mongodb-dark.svg',
    },
    {
      title: 'MySQL',
      image: 'mysql.svg',
      imageDark: 'mysql-dark.svg',
    },

    {
      title: 'Sass',
      image: 'sass.svg',
      imageDark: 'sass-dark.svg',
    },
    {
      title: 'Bootstrap',
      image: 'bootstrap.svg',
      imageDark: 'bootstrap-dark.svg',
    },
    {
      title: 'Tailwind',
      image: 'tailwind.svg',
      imageDark: 'tailwind-dark.svg',
    },

    {
      title: 'AJAX',
      image: 'ajax.svg',
      imageDark: 'ajax-dark.svg',
    },
    {
      title: 'jQuery',
      image: 'jquery.svg',
      imageDark: 'jquery-dark.svg',
    },
    {
      title: 'ChartJS',
      image: 'chartjs.svg',
      imageDark: 'chartjs-dark.svg',
    },
    {
      title: 'JIRA',
      image: 'jira.svg',
      imageDark: 'jira-dark.svg',
    },
    {
      title: 'GIT',
      image: 'git.svg',
      imageDark: 'git-dark.svg',
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
                      src={theme == 'light-theme' ? data.image : data.imageDark}
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
