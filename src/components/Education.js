import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Lilcon from './Lilcon';
import AnimatedText from '@/components/AnimatedText';

const Details = ({ position, time, address, experience }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:my-5 md:w-[80%]'
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl text-dark/90 dark:text-light/90 sm:text-xl xs:text-lg'>
          {position}&nbsp;
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/50 md:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full dark:text-light/90 md:text-sm'>
          {experience}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <>
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl sm:text-4xl md:mb-16 text-dark/80'>
          Education
        </h2>

        <div
          ref={ref}
          className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-1 w-[4px] h-full bg-dark/90 origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
          />

          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
              position='Bachelor of Arts In Economics'
              time='2019 - 2021'
              address='University of California, Los Angeles'
              experience='Developed and deployed an NPM middleware package for GraphQL APIs, which enhance security protocols by utilizing JSON Web Tokens for user identification and bolster authentication and authorization accuracy by 30%.
Engineered a mock GraphQL playground for developers to test queries for users with different permission levels.
'
            />

            <Details
              position='Full Stack Engineer'
              time='Aug 2022 - Nov 2022'
              address='Codesmith'
              experience='Developed and deployed an NPM middleware package for GraphQL APIs, which enhance security protocols by utilizing JSON Web Tokens for user identification and bolster authentication and authorization accuracy by 30%.
Engineered a mock GraphQL playground for developers to test queries for users with different permission levels.'
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
