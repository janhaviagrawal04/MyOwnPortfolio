import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='absolute left-4 bottom-4 flex items-center justify-center overflow-hidden z-20
    md:right-10 md:left-auto md:top-2 md:bottom-auto'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24 '>
        <CircularText className='fill-dark animate-spin-slow dark:fill-light' />
        <Link href="/contact" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light lg:w-12 lg:h-12 lg:text-[8px] text-center'>
          Let&apos;s Connect
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
