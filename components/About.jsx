import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          In 2022, I moved from China to the UK—my first time living abroad and starting a completely new chapter. Facing so many changes, I leaned on lessons I’d learned from years of surfing—how to read the waves and roll with whatever comes my way—which helped me adapt and stay grounded.
          </p>
          <p className='py-2 text-gray-600'>
          Around that time, a close friend who’s a developer sparked my interest in coding. What started as curiosity quickly turned into a passion, so I took the plunge by joining a coding bootcamp to build a strong foundation. That experience inspired me to deepen my knowledge further, leading me to pursue an MSc in Computer Science.
          </p>
          <p className='py-2 text-gray-600'>
          Since then, I’ve built full-stack applications using Python, JavaScript, Django, React, and Node.js. I’m experienced with databases like PostgreSQL and MongoDB, and comfortable working with tools such as Docker, Git, and AWS. My focus is on creating practical, secure, and user-friendly solutions.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
            Take a look at some of my recent projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
