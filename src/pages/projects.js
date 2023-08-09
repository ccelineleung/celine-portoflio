import React, { useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import LatchQL from '../../public/images/cost-preview.jpg';

const Box = ({ projType, name, describtion, picture }) => {
  const ref = useRef(null);

  return (
    <>
      <div className='absolute top-0 -right-1 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark/80' />
      <Image
        src={picture}
        alt='celine'
        className='w-full h-auto rounded-2xl'
      ></Image>
      <div>
        <h4>{projType}</h4>
        <h1>{name}</h1>
        <p>{describtion}</p>
      </div>
    </>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Celine's Portoflie | Projects</title>
        <meta name='description' content='Projects' />
      </Head>
      <main>
        <AnimatedText text='Projects' className='mb-16' />
        <Layout className='pt-16'>
          <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'></div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
