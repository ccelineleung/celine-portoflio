import React from 'react';
import { CircleText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-9 flex items-center justify-center overflow-hidden md:right-5 md:left-auto md:top-0 md:bottom-auto md:absolute'>
      <div className='w-48 h-auto flex justify-center relative md:w-24'>
        <CircleText
          className={'fill-dark animate-spin-slow  dark:fill-light'}
        />
        <Link
          href='mailto:celineleung412@gmail.com'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-lg border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light md:w-12 md:h-12 md:text-[10px]'
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
