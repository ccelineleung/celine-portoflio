import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/selfimg3.png';
import { useSpring, useMotionValue, useInView } from 'framer-motion';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';

// const AnimatedNumbers = ({ value }) => {
//   const ref = useRef(null);

//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, { duration: 3000 });
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       motionValue.set(value);
//     }
//   }, [isInView, value, motionValue]);

//   useEffect(() => {
//     springValue.on('change', (latest) => {
//       if (ref.current && latest.toFixed(0) <= value) {
//         ref.current.textContent = latest.toFixed(0);
//       }
//     });
//   }, [springValue, value]);

//   return <span ref={ref}></span>;
// };

const about = () => {
  return (
    <>
      <Head>
        <title>{`Celine's Portoflio | About Me`}</title>
        <meta name='description' content='About Me' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='&#9829; About Me &#9829;'
            className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biography
              </h2>
              <p className='font-medium  dark:text-light'>
                {`
                Hi, I'm Celine, a dedicated Frontend Engineer skilled in
                curating visually engaging and highly functional digital
                experiences. My professional journey in web development is
                characterized by a persistent pursuit of innovation and a
                commitment to delivering exceptional outcomes.
              `}
              </p>
              <p className='my-4 font font-medium  dark:text-light'>
                {`
                My design philosophy transcends aesthetics, focusing on
                dissecting complex challenges and engineering interfaces that
                offer seamless user interactions. I thrive on tackling intricate
                problems and take pride in designing solutions that prioritize
                both form and function.
              `}
              </p>
              <p className='my-4 font font-medium  dark:text-light'>
                {`
                With a proficient toolkit encompassing JavaScript, TypeScript,
                React, Redux, and more, I possess the technical prowess to craft
                captivating user interfaces. Notably, I've developed an NPM
                middleware package for GraphQL APIs, enhancing security via JSON
                Web Tokens and elevating authentication accuracy by 30%. My
                endeavors range from tech accelerator collaborations to
                contributions in the open-source realm, including written
                insights shared through Medium articles and tech talks.
              `}
              </p>
              <p className='my-4 font font-medium  dark:text-light'>
                {`I'm enthused about the potential of aligning my skills with your
                projects. Let's collaborate to craft digital experiences that
                resonate with your audience.`}
              </p>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Skills
              </h2>
              <Skills />
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-darkgrey/90 dark:border-light p-8 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-darkgrey/80 dark:bg-light/80' />
              <Image
                src={profilePic}
                alt='celine'
                className='w-full h-auto rounded-2xl'
                width={580}
                height={580}
                priority={true}
                sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
              />
            </div>

            {/* <div className='col-span-2 flex flex-col items-end justify-between '>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={50} /> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                  satisfied clients
                </h2>
              </div> */}

            {/* <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={40} /> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                  projects completed
                </h2>
              </div> */}

            {/* <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={5} /> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                  years of experiences
                </h2>
              </div> */}

            {/* </div> */}
          </div>

          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
