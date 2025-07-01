import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Python from '../public/assets/skills/python.png';
import Django from '../public/assets/skills/django.png';
import Docker from '../public/assets/skills/docker.png';
import AWS from '../public/assets/skills/aws.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* HTML */}
          <SkillCard image={Html} title="HTML" />
          {/* CSS */}
          <SkillCard image={Css} title="CSS" />
          {/* JavaScript */}
          <SkillCard image={Javascript} title="JavaScript" />
          {/* React */}
          <SkillCard image={ReactImg} title="React" />
          {/* Python */}
          <SkillCard image={Python} title="Python" />
          {/* Django */}
          <SkillCard image={Django} title="Django" />
          {/* Docker */}
          <SkillCard image={Docker} title="Docker" />
          {/* AWS */}
          <SkillCard image={AWS} title="AWS" />

        </div>
      </div>
    </div>
  );
};

// Reusable SkillCard component
const SkillCard = ({ image, title }) => (
  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
      <div className='m-auto w-16 h-16 flex items-center justify-center'>
        <Image 
          src={image} 
          width={64} 
          height={64} 
          alt={title} 
          className="object-contain"
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3>{title}</h3>
      </div>
    </div>
  </div>
);

export default Skills;