import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.png';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        {/* Heading */}
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>

        {/* Contact Card */}
        <div className='flex justify-center py-8'>
          <div className='max-w-[500px] w-full bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-gray-300/50 rounded-3xl overflow-hidden border border-gray-100/50 backdrop-blur-sm'>
            <div className='text-center p-12 relative'>
              {/* Decorative Gradient */}
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5651e5]/5 to-transparent pointer-events-none'></div>

              <div className='relative z-10'>
                {/* Profile Image */}
                <div className='mb-8'>
                  <div className='relative w-48 h-48 mx-auto overflow-hidden rounded-full'>
                    <div className='absolute inset-0 bg-gradient-to-br from-[#5651e5]/20 to-purple-300/20 rounded-full blur-xl animate-pulse'></div>
                    <Image
                      className='rounded-full object-cover hover:scale-105 ease-in duration-500 border-4 border-white shadow-xl relative z-10'
                      src={ContactImg}
                      alt='Contact'
                      width={192}
                      height={192}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className='mb-10'>
                  <h2 className='text-3xl font-bold mb-3 text-gray-800'>Alicia Choi</h2>
                  <p className='text-xl text-[#5651e5] font-medium mb-6'>Full-stack Developer</p>
                  <p className='text-gray-600 leading-relaxed text-lg max-w-[400px] text-left'>
                    I&apos;m eager to land my first full-time role and grow as a developer. If you&apos;re looking for someone passionate and ready to contribute, let&apos;s connect!
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <p className='uppercase text-sm font-semibold mb-8 text-gray-700 tracking-wider'>
                    Connect With Me
                  </p>
                  <div className='flex items-center justify-center gap-8'>
                    <a
                      href='https://linkedin.com/in/aliciachoi21'
                      target='_blank'
                      rel='noreferrer'
                      className='group'
                    >
                      <div className='rounded-2xl shadow-lg shadow-gray-300/60 p-5 cursor-pointer hover:scale-110 hover:-translate-y-1 ease-in-out duration-300 bg-white/80 backdrop-blur-sm hover:bg-[#0077b5] group-hover:shadow-xl border border-gray-200/50'>
                        <FaLinkedinIn size={28} className='text-[#0077b5] group-hover:text-white transition-all duration-300' />
                      </div>
                    </a>

                    <a
                      href='https://github.com/aliciachoi/'
                      target='_blank'
                      rel='noreferrer'
                      className='group'
                    >
                      <div className='rounded-2xl shadow-lg shadow-gray-300/60 p-5 cursor-pointer hover:scale-110 hover:-translate-y-1 ease-in-out duration-300 bg-white/80 backdrop-blur-sm hover:bg-gray-800 group-hover:shadow-xl border border-gray-200/50'>
                        <FaGithub size={28} className='text-gray-800 group-hover:text-white transition-all duration-300' />
                      </div>
                    </a>

                    <a
                      href='mailto:alicia@example.com'
                      className='group'
                    >
                      <div className='rounded-2xl shadow-lg shadow-gray-300/60 p-5 cursor-pointer hover:scale-110 hover:-translate-y-1 ease-in-out duration-300 bg-white/80 backdrop-blur-sm hover:bg-red-500 group-hover:shadow-xl border border-gray-200/50'>
                        <AiOutlineMail size={28} className='text-red-500 group-hover:text-white transition-all duration-300' />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
