import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.png';

const Contact = () => {
  return (
    <div id='contact' className='w-full'>
      <div className='max-w-[1240px] m-auto px-4 py-10 w-full'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
      <h2 className='py-4'>Get In Touch</h2>

        {/* Contact Card */}
        <div className='flex justify-center py-6'>
          <div className='max-w-[500px] w-full bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-gray-300/50 rounded-3xl overflow-hidden border border-gray-100/50 backdrop-blur-sm'>
            <div className='text-center p-10 relative'>
              {/* Decorative background */}
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5651e5]/5 to-transparent pointer-events-none rounded-3xl'></div>

              <div className='relative z-10'>
                {/* Profile Image */}
                <div className='mb-8'>
                  <div className='relative w-40 h-40 mx-auto'>
                    <div className='absolute inset-0 bg-gradient-to-br from-[#5651e5]/20 to-purple-300/20 rounded-full blur-xl animate-pulse'></div>
                    <Image
                      className='rounded-full object-cover hover:scale-105 ease-in duration-500 border-4 border-white shadow-xl relative z-10'
                      src={ContactImg}
                      alt='Contact'
                      fill
                      loading='lazy'
                    />
                  </div>
                </div>

                {/* Info Section */}
                <div className='mb-10'>
                  <h2 className='text-3xl font-bold mb-3 text-gray-800'>Alicia Choi</h2>
                  <p className='text-xl text-[#5651e5] font-medium mb-6'>Full-stack Developer</p>
                  <p className='text-gray-600 leading-relaxed text-lg max-w-[400px] mx-auto'>
                    If you&apos;re looking for a passionate developer ready to contribute, contact me!
                  </p>
                </div>

                {/* Social Links */}
                <div className='mt-4'>
                  <p className='uppercase text-sm font-semibold mb-3 text-gray-700 tracking-wider'>
                    Connect With Me
                  </p>

                  {/* Email as clickable text */}
                  <p className='text-center text-lg text-[#5651e5] font-medium mb-3'>
                    <a
                      href='mailto:aliciachoi2022@gmail.com'
                      className='underline hover:text-[#3b3fc1]'
                      aria-label='Send email to Alicia Choi'
                    >
                      aliciachoi2022@gmail.com
                    </a>
                  </p>

                  <p className='text-center text-gray-400 font-semibold mb-6 tracking-wide'>OR</p>

                  {/* Social icons */}
                  <div className='flex items-center justify-center gap-8'>
                    <a
                      href='https://linkedin.com/in/aliciachoi21'
                      target='_blank'
                      rel='noreferrer'
                      aria-label='LinkedIn'
                      className='group'
                    >
                      <div className='rounded-2xl shadow-lg shadow-gray-300/60 p-5 cursor-pointer hover:scale-110 hover:-translate-y-1 ease-in-out duration-300 bg-white/90 backdrop-blur-sm hover:bg-[#0077b5] group-hover:shadow-xl border border-gray-200/50'>
                        <FaLinkedinIn size={28} className='text-[#0077b5] group-hover:text-white transition-all duration-300' />
                      </div>
                    </a>

                    <a
                      href='https://github.com/aliciachoi/'
                      target='_blank'
                      rel='noreferrer'
                      aria-label='GitHub'
                      className='group'
                    >
                      <div className='rounded-2xl shadow-lg shadow-gray-300/60 p-5 cursor-pointer hover:scale-110 hover:-translate-y-1 ease-in-out duration-300 bg-white/90 backdrop-blur-sm hover:bg-gray-800 group-hover:shadow-xl border border-gray-200/50'>
                        <FaGithub size={28} className='text-gray-800 group-hover:text-white transition-all duration-300' />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className='flex justify-center py-8'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={28} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
