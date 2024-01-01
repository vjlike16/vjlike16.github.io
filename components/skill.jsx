import Image from 'next/image';

const Skill = () => {
  const allTech = [
    {
      title: 'HTML & CSS',
      content:
        'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
      image: 'html.svg',
      imageAlt: 'HTML',
    },
    {
      title: 'Javascript',
      content:
        'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
      image: 'javascript.svg',
      imageAlt: 'Javascript',
    },
    {
      title: 'ReactJS',
      content:
        'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
      image: 'react.svg',
      imageAlt: 'React',
    },
    {
      title: 'VueJS',
      content:
        'Advanced proficiency in Vue, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
      image: 'vue.svg',
      imageAlt: 'Vue',
    },
    {
      title: 'NextJS',
      content:
        'Advanced proficiency in Vue, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
      image: 'vue.svg',
      imageAlt: 'Next',
    },
    {
      title: 'NodeJS',
      content:
        'Advanced proficiency in Vue, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
      image: 'vue.svg',
      imageAlt: 'Vue',
    },
    {
      title: 'MongoDB',
      content:
        'Advanced proficiency in Vue, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
      image: 'vue.svg',
      imageAlt: 'Vue',
    },
    {
      title: 'MySQL',
      content:
        'Advanced proficiency in Vue, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
      image: 'vue.svg',
      imageAlt: 'Vue',
    },
    {
      title: 'JIRA',
      content:
        'Advanced proficiency in Vue, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
      image: 'vue.svg',
      imageAlt: 'Vue',
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: '#f8fafc' }}>
        <div className='container py-5 px-4 px-sm-3 px-lg-5' id='skill'>
          <h3 className='mb-4'>Tech Stack</h3>
          <hr />
          <div className='row mt-4'>
            {allTech.map((data, index) => {
              return (
                <div key={index} className='col-12 col-sm-6 col-md-4 my-1'>
                  <Image
                    src={data.image}
                    alt={data.imageAlt}
                    width={75}
                    height={75}
                    className='mb-3'
                  />
                  <h6>
                    <b>{data.title}</b>
                  </h6>
                  <p className='text-muted' style={{ textAlign: 'justify' }}>
                    {data.content}
                  </p>
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
