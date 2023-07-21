import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { LinkedInIcon, GithubIcon } from './Icons';
import { motion } from 'framer-motion';

const CustomeLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar() {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomeLink href='/' title='Home' className='mr-4' />
        <CustomeLink href='/about' title='About' className='mx-4' />
        <CustomeLink href='/projects' title='Projects' className='mx-4' />
        <CustomeLink href='/skills' title='Skills' className='mx-4' />
      </nav>

      <nav className='flex justify-center items-center flex-wrap'>
        <motion.a
          href='https://github.com/ccelineleung'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href='https://www.linkedin.com/in/celineleung412/'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
}

// export default NavBar;
