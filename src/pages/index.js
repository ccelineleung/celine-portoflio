import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import porfilePic from '../../public/images/profile/dev-portf-1.png';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';
import {LinkArrow} from '../components/Icons'
import HireMe from '@/components/HireMe';

export default function Home() {
  return (
    <>
      <Head>
        <title>Celine's Portoflio</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/3'>
              <Image src={porfilePic} alt='Celine' className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText
                text='I am a full stack software Engineer'
                className='!text-6xl !text-left'
              />
              <p className='my-4 text-base font-medium dark:text-light'>
                I am a full stack software Engineer I am a full stack software
                Engineer I am a full stack software Engineer I am a full stack
                software Engineer
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link
                  href='resume.pdf'
                  target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light'
                  // download={true}
                >
                  Resume
                  <LinkArrow className={'w-6 ml-1'}/>
                </Link>
                <Link href='mailto:celineleung412@gmail.com' target={'_blank'}
                className='ml-4 items-center text-lg font-medium capitalize text-dark underline dark:text-light'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
