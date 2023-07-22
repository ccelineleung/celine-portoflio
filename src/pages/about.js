import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';

const about = () => {
  return (
    <>
      <Head>
        <title>Celine's Portoflie | About Me</title>
        <meta name='description' content='About Me' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>

        <AnimatedText text="Passion Fuels Purpose!" />
      </Layout>
      </main>
    </>
  );
};

export default about;
