import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import porfilePic from '../../public/images/profile/dev-portf-1.png';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '../components/Icons';
import HireMe from '@/components/HireMe';

export default function Home() {
  return (
    <>
      <Head>
        <title>Celine's Portoflio</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image
                src={porfilePic}
                alt='Celine'
                className='w-full h-auto rounded-full pr-14 p-14 lg:hidden md:inline-block md:w-full md:p-7'
                priority
                sizes='(max-width:768px)100vw, (max-width:1200px)50vw,50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text={`Welcome! This is Celine's Portofolio`}
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              {/* <p className='my-4 text-base font-medium dark:text-light md:text-sm sm:text-xs'>
                I am a full stack software Engineer.
              </p> */}
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='resume.pdf'
                  target={'_blank'}
                  className='flex items-center bg-dark/80 text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base'
                  // download={true}
                >
                  Resume
                  <LinkArrow className={'w-6 ml-1 sm:w-2'} />
                </Link>
                <Link
                  href='mailto:celineleung412@gmail.com'
                  target={'_blank'}
                  className='ml-4 items-center text-lg font-medium capitalize text-dark/80 underline dark:text-light md:text-base'
                >
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
