import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LogoImage from '../../public/Crounded.png'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink
        href='/'
        className='w-16 h-16 bg-dark text-light  dark:border-light flex items-center justify-center rounded-full text-2xl font-bold'
        // className='w-16 h-16 bg-dark text-light border border-solid border-dark dark:border-light flex items-center justify-center rounded-full text-2xl font-bold'
        // whileHover={{
        //   backgroundColor: [
        //     '#121212',
        //     'rgba(131,58,180,1)',
        //     'rgba(253,29,29,1)',
        //     'rgba(252,176,69,1)',
        //     'rgba(131,58,180,1)',
        //     '#121212',
        //   ],
        //   transition: { duration: 1, repeat: Infinity },
        // }}
      >
        <Image src={LogoImage} alt='logo'/>
      </MotionLink>
    </div>
  );
};

export default Logo;
