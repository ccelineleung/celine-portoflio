import React, { useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import LatchQL from '../../public/images/cost-preview.jpg';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Projects = ({ projType, name, describution, picture, projLink,gitHub }) => {
  const ref = useRef(null);

  return (
    <article>
      <Link href={projLink}>
        <Image src={picture} alt={name} className='w-full h-auto rounded-lg' />
      </Link>

      <div>
        <span>{projType}</span>
        <h1>{name}</h1>
        <p>{describution}</p>
        <div>
          <Link href={gitHub}>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  const ref = useRef(null);

  return (
    <>
      <Head>
        <title>Celine's Portoflie | Projects</title>
        <meta name='description' content='Projects' />
      </Head>
      <main
        ref={ref}
        className='w-full mb-16 flex flex-col items-center justify-center'
      >
        <Layout className='pt-16'>
          <AnimatedText text='Projects' className='mb-16' />

          <div className='grid grid-cols-12 gap-24'>
            <div className='col-span-12'>
              <Projects
                projType='NPM Package'
                name='LatchQL'
                describution=
                  'An open-source, free-to-use, lightweight middleware package that adds additional layers of security to authenticate/authorize and provide permissions for users to have different levels of access to a database through graphQL queries.'
                
                picture={LatchQL}
                gitHub={'https://github.com/oslabs-beta/LatchQL'}
                projLink={'https://www.npmjs.com/package/latchql'}
              />
            </div>
            <div className='col-span-6'>Proj 1</div>
            <div className='col-span-6'>Proj 2</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
