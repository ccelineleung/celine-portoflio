import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Lilcon from './Lilcon'

const Details = ({ position, company, time, address, experience }) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <Lilcon />
      <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;</h3>
      <h3 className='capitalize font-bold text-dark/80 '>{company}</h3>
      <span className='capitalize font-medium text-dark/75'>
        {time} | {address}
      </span>
      <p className='font-medium w-full'>{experience}</p>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <>
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
          Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top '
          />

          <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details
              position='Software Engineer'
              company='LatchQL | OS Labs'
              time='Aug 2022 - Apr 2023'
              address='Los Angeles, CA'
              experience='Developed and deployed an NPM middleware package for GraphQL APIs, which enhance security protocols by utilizing JSON Web Tokens for user identification and bolster authentication and authorization accuracy by 30%.
Engineered a mock GraphQL playground for developers to test queries for users with different permission levels.
'
            />

            <Details
              position='Full Stack Engineer'
              company='LoanMaster | Open Source Contributions'
              time='Feb 2023 - Jun 2023'
              address='Los Angeles, CA'
              experience='Built an interactive loan calculator website with React, Tailwind CSS, and CSS animations. Enabled real-time data synchronization and secure user authentication. Empowered users to calculate loans effortlessly, ensuring a seamless and engaging experience across devices.
'
            />

            <Details
              position='Full Stack Engineer'
              company='JPEG-Marketplace | Open Source Contributions'
              time='Feb 2023 - Jun 2023'
              address='Los Angeles, CA'
              experience='
              Developed a feature-rich e-commerce website using React, providing customers with an immersive shopping experience. Implemented robust product listing, filtering, and search functionalities, enhancing user convenience and efficiency. The user-focused design resulted in improved engagement and accuracy, elevating the overall shopping experience. Embrace the future of online retail with this innovative e-commerce platform.
'
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
