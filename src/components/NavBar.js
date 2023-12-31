import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { LinkedInIcon, GithubIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { MdOutlineFileDownload } from 'react-icons/md';

const CustomeLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomeMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <button
        className='flex-col justify-center items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomeLink href='/' title='Home' className='mr-4' />
          <CustomeLink href='/about' title='About' className='mx-4' />
          <CustomeLink href='/projects' title='Projects' className='mx-4' />
        </nav>

        <nav className='flex justify-center items-center flex-wrap'>
          <Link
            href='resume0929.pdf'
            target={'_blank'}
            className='flex items-center bg-dark/90 text-light  px-2 rounded-xl text-sm  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark/80 hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base'
            // download={true}
          >
            <MdOutlineFileDownload className={'w-6 sm:w-5'} />
            Resume
          </Link>
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

          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className='ml-3 flex items-center justify-center rounded-full p-1 '
          >
            {mode === 'dark' ? (
              <BsFillSunFill className='fill-light ' />
            ) : (
              <BsFillMoonStarsFill className='fill-dark' />
            )}
          </button>
        </nav>
      </div>

      {/* -------------------------mobile view-------------------------- */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/70 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex items-center flex-col justify-normal'>
            <CustomeMobileLink
              href='/'
              title='Home'
              className=''
              toggle={handleClick}
            />
            <CustomeMobileLink
              href='/about'
              title='About'
              className=''
              toggle={handleClick}
            />
            <CustomeMobileLink
              href='/projects'
              title='Projects'
              className=''
              toggle={handleClick}
            />
          </nav>

          <nav className='flex justify-center items-center flex-wrap mt-2'>
            <motion.a
              href='https://github.com/ccelineleung'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-4 sm:mx-1 bg-light rounded-2xl dark:bg-dark'
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/celineleung412/'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-4 sm:mx-1'
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className='ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1'
            >
              {mode === 'dark' ? (
                <BsFillSunFill className='fill-dark ' />
              ) : (
                <BsFillMoonStarsFill className='fill-light' />
              )}
            </button>
        
          </nav>
          <Link
            href='resume0929.pdf'
            target={'_blank'}
            className='flex items-center bg-dark/90 text-light mt-5 px-2 rounded-xl text-sm  hover:bg-light hover:text-dark  dark:bg-light dark:text-dark hover:dark:bg-dark/80 hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base'
            // download={true}
          >
            <MdOutlineFileDownload className={'w-6 sm:w-5'} />
            Resume
          </Link>
        </motion.div>
      ) : null}

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
}

// export default NavBar;
