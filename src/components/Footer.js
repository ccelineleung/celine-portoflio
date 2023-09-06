import React from 'react';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg  dark:border-light/75 md:border-t-1 sm:text-base'>
      <Layout className='py-3 flex items-center justify-center sm:py-1'>
        <span className='dark:text-light/75'>
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
