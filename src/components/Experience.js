import React from 'react';

const Experience = () => {
  const Details = ({ position, company, time, address, experience }) => {
    return (
      <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;</h3>
        <h3 className='capitalize font-bold text-dark/80 '>{company}</h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{experience}</p>
      </li>
    );
  };

  return (
    <>
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
          Experience
        </h2>
        <div className='w-[75%] mx-auto relative'>
          <ul>
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
              experience='Developed and deployed an NPM middleware package for GraphQL APIs, which enhance security protocols by utilizing JSON Web Tokens for user identification and bolster authentication and authorization accuracy by 30%.
Engineered a mock GraphQL playground for developers to test queries for users with different permission levels.
'
            />

            <Details
              position='Full Stack Engineer'
              company='JPEG-Marketplace | Open Source Contributions'
              time='Feb 2023 - Jun 2023'
              address='Los Angeles, CA'
              experience='Developed and deployed an NPM middleware package for GraphQL APIs, which enhance security protocols by utilizing JSON Web Tokens for user identification and bolster authentication and authorization accuracy by 30%.
Engineered a mock GraphQL playground for developers to test queries for users with different permission levels.
'
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
