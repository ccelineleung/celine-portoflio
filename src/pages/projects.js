import React, { useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import LatchQL from '../../public/images/cost-preview.jpg';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BigProj = ({ projType, name, describution, img, projLink, gitHub }) => {
  return (
    <article className='w-full flex justify-between items-center rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
      <Link
        href={projLink}
        className='p-12 w-1/2 cursor-pointer overflow-hidden'
      >
        <Image src={img} alt={name} className='w-full h-auto rounded-3xl' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{projType}</span>
        <Link href={projLink}>
          <h1 className='my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2'>
            {name}
          </h1>
        </Link>
        <p className='my-2 font-medium text-dark'>{describution}</p>
        <div className='mt-2 flex items-center'>
          <Link href={gitHub} className='w-10'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const SmallProj = ({ projType, name, describution, img, gitHub }) => {
  return (
    <article className='w-full grid justify-normal items-center rounded-3xl border border-dark bg-light shadow-2xl'>
      <Link href={gitHub} className=' p-8 h-full cursor-pointer overflow-auto'>
        <Image src={img} alt={name} className='rounded-3xl w-full h-auto' />
      </Link>

      <div className='mt-1 grid items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{projType}</span>
        <h2 className='my-1 w-full text-left text-2xl font-bold '>{name}</h2>
        <p className='my-1 font-medium text-dark'>{describution}</p>
        <div className='mt-1 grid items-center'>
          <Link href={gitHub} className='mt-1 grid items-center'>
            <GithubIcon className='w-6' />
          </Link>
        </div>
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
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Projects' className='mb-16' />

          <div className='grid grid-cols-12 gap-24'>
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

            <div className='col-span-6'>
              <SmallProj
                projType='Commerical Website'
                name='JPEG-Marketplace'
                describution='A commmerical website for customer to buy and sell JPEG'
                img={LatchQL}
                gitHub='https://github.com/Non-Fungibles/JPEG-Marketplace'
              />
            </div>

            <div className='col-span-6'>Proj 2</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
