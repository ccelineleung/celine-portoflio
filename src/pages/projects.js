import React, { useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import LatchQL from '../../public/images/cost-preview.jpg';
import JPEGPic from '../../public/images/marketplace.jpeg';
import loan from '../../public/images/loan.png';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LatchQLImg from '../../public/images/LatchQLimg.png';

const FramerImage = motion(Image);

const BigProj = ({ projType, name, describution, img, projLink, gitHub }) => {
  return (
    <article className='w-full flex justify-between items-center rounded-3xl border border-solid border-dark bg-light shadow-2xl relative dark:bg-darkgrey/10 dark:border-light dark:shadow-lg dark:shadow-light lg:flex-col lg:p-8 xs:p-4 '>
      <Link
        href={projLink}
        className='p-10 w-1/2 cursor-pointer overflow-hidden lg:w-full lg:!p-7 md:!p-5 sm:!p-0'
      >
        <FramerImage
          src={img}
          alt={name}
          className='w-full h-auto rounded-3xl'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width:768px)100vw, (max-width:1200px)50vw,50vw'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 md:pt-6'>
        <span className='text-primary font-medium text-xl md:text-sm '>
          {projType}
        </span>
        <Link href={projLink}>
          <h1 className='my-2 w-full text-left text-4xl font-bold text-dark/80 hover:underline underline-offset-2 dark:text-light hover:dark:underline-light md:my-1 md:text-xl'>
            {name}
          </h1>
        </Link>
        <p className='p-2 my-2 font-medium text-dark dark:text-light/75 md:my-1 sm:text-sm'>
          {describution}
        </p>
        <div className='mt-2 flex items-center md:mt-1'>
          <Link href={gitHub} className='w-10  dark:bg-dark/80 rounded-full'>
            <GithubIcon />
          </Link>
          <Link
            href={projLink}
            className='my-2 ml-4 rounded-lg bg-darkgrey/80 text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
          >
            Download
          </Link>
        </div>
      </div>
    </article>
  );
};

const SmallProj = ({ projType, name, describution, img, gitHub }) => {
  return (
    <article className='w-full grid justify-normal items-center rounded-3xl border dark:bg-darkgrey/10 bg-light shadow-2xl relative dark:border-light dark:bg-dark dark:shadow-lg dark:shadow-light xs:p-4'>
      <Link href={gitHub} className=' p-8 h-full cursor-pointer overflow-auto sm:p-2'>
        <FramerImage
          src={img}
          alt={name}
          className='rounded-3xl w-full h-auto overflow-hidden'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width:768px)100vw, (max-width:1200px)50vw,50vw'
        />
      </Link>

      <div className='w-full mt-0.5 grid items-start justify-between pl-6 lg:pl-3'>
        <span className='text-primary font-medium text-xl lg:text-lg md:text-base'>
          {projType}
        </span>
        <h2 className='my-0.5 w-full text-left text-dark/80 text-2xl font-bold dark:text-light md:text-xl'>
          {name}
        </h2>
        <p className='my-0.5 font-medium text-dark dark:text-light/75 md:text-base'>
          {describution}
        </p>
        <div className='my-2 grid items-center'>
          <Link href={gitHub} className='w-7 '>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Paper = ({ title, summary, articleLink, img, types }) => {
  return (
    <article className='w-full flex justify-between items-center border border-solid dark:bg-darkgrey/10 rounded-3xl shadow-2xl relative  dark:border-light dark:bg-dark dark:shadow-lg dark:shadow-light lg:flex-col lg:p-8 xs:p-4'>
      <Link
        href={articleLink}
        className='p-10 w-1/2 cursor-pointer overflow-hidden lg:w-full lg:!p-7 md:!p-5 sm:!p-0'
      >
        <FramerImage
          src={img}
          alt={title}
          className='rounded-3xl w-full h-auto overflow-hidden'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width:768px)100vw, (max-width:1200px)50vw,50vw'
        />
      </Link>
      <div className='w-1/2 flex flex-col justify-between items-start p-6 my-10 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-lg md:text-sm '>
          {types}
        </span>
        <Link href={articleLink}>
          <h1 className='my-2 w-full text-left text-4xl text-dark/80 font-bold hover:underline underline-offset-4 dark:text-light md:my-1 md:text-xl'>
            {title}
          </h1>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light/75 md:my-1 sm:text-sm'>
          {summary}
        </p>
        <span className='text-primaryDark font-medium text-sm sm:hidden'>
          5 min read
        </span>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Celine's Portoflie | Projects</title>
        <meta name='description' content='Projects' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:bg-darkgrey/0 dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Projects'
            className='mb-16 relative lg:!text-7xl  sm:!text-6xl xs:!text-4xl sm:mb-8'
          />

          <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <BigProj
                projType='NPM Package'
                name='LatchQL'
                describution='An open-source, free-to-use, lightweight middleware package that adds additional layers of security to authenticate/authorize and provide permissions for users to have different levels of access to a database through graphQL queries.'
                img={LatchQL}
                gitHub={'https://github.com/oslabs-beta/LatchQL'}
                projLink={'https://www.npmjs.com/package/latchql'}
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <SmallProj
                projType='Commerical Website'
                name='JPEG-Marketplace'
                describution='A marketplace-simulation designed for users to buy, sell and trade fake digital assets.'
                img={JPEGPic}
                gitHub='https://github.com/Non-Fungibles/JPEG-Marketplace'
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <SmallProj
                projType='Website'
                name='Loan Master'
                describution='A website for customer to calculate mortgage rate and save all the data they want.'
                img={loan}
                gitHub='https://github.com/ccelineleung/mortgageloan-cal'
              />
            </div>
          </div>

          <AnimatedText
            text='Articles'
            className='mt-14 mb-14 relative lg:!text-7xl  sm:!text-6xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <Paper
                title='LatchQL: customizable security measures for GraphQL API’s'
                summary={`Exploring LatchQL's enhancements to GraphQL APIs, enabling real-time capabilities and dynamic updates through efficient subscription handling.`}
                articleLink='https://medium.com/@mcphail.alex/latchql-c88ce527ec50'
                img={LatchQLImg}
                types='Medium'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
