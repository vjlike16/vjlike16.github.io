import Image from 'next/image';

const Skill = () => {
  const allTech = [
    {
      title: 'HTML5',
      image: 'html.svg',
    },
    {
      title: 'CSS3',
      image: 'css.svg',
    },
    {
      title: 'Javascript',
      image: 'javascript.svg',
    },
    {
      title: 'ReactJS',
      image: 'react.svg',
    },
    {
      title: 'VueJS',
      image: 'vue.svg',
    },
    {
      title: 'NextJS',
      image: 'nextjs.svg',
    },
    {
      title: 'NodeJS',
      image: 'nodejs.svg',
    },
    {
      title: 'MongoDB',
      image: 'mongodb.svg',
    },
    {
      title: 'MySQL',
      image: 'mysql.svg',
    },
    {
      title: 'JIRA',
      image: 'jira.svg',
    },
    {
      title: 'Sass',
      image: 'sass.svg',
    },
    {
      title: 'Bootstrap',
      image: 'bootstrap.svg',
    },
    {
      title: 'Tailwind',
      image: 'tailwind.svg',
    },
    {
      title: 'GIT',
      image: 'git.svg',
    },
    {
      title: 'AJAX',
      image: 'ajax.svg',
    },
    {
      title: 'jQuery',
      image: 'jquery.svg',
    },
    {
      title: 'ChartJS',
      image: 'chartjs.svg',
    },
  ];
  return (
    <>
      <div id='skill'>
        <div className='container py-5 px-4 px-sm-3 px-lg-5'>
          <h3 className='mb-4'>Tech Stack</h3>
          <hr />
          <div className='row mt-4'>
            {allTech.map((data, index) => {
              return (
                <div key={index} className='col-6 col-sm-3 col-md-2 my-3'>
                  <div className='w-100 d-flex justify-content-center'>
                    <Image
                      src={data.image}
                      alt={data.title}
                      width={75}
                      height={75}
                      className='mb-3 mx-auto'
                    />
                  </div>
                  <h6 className='text-center'>
                    <b>{data.title}</b>
                  </h6>
                  {/* <p className='text-muted text-justify'>{data.content}</p> */}
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
