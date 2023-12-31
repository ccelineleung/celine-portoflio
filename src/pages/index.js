import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import porfilePic from '../../public/images/profile/selfimg.png';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '../components/Icons';
import HireMe from '@/components/HireMe';
import taro from '../../public/images/profile/taro.jpg';
import timi from '../../public/images/profile/timi.jpg';
import { motion } from 'framer-motion';
import {MdOutlineFileDownload} from 'react-icons/md'

const FramerImage = motion(Image);

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Celine's Portoflio`}</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image
                src={porfilePic}
                alt='Celine'
                width={580}
                height={580}
                className='w-full h-auto rounded-full pr-14 p-14  lg:inline-block lg:w-full lg:p-7'
                priority
                sizes='(max-width:768px)100vw,(max-width:1200px)50vw,50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center mt-10 lg:w-full lg:text-center'>
              <AnimatedText
                text='Welcome to My Page &#9829; &#9829; ' 
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl pb-10'
              />
              {/* <p className='my-4 text-base font-medium dark:text-light md:text-sm sm:text-xs'>
                I am a full stack software Engineer.
              </p> */}
              {/* <div className='flex items-center self-center mt-2 lg:self-center mb-10'> */}
                {/* <Link
                  href='resume0929.pdf'
                  target={'_blank'}
                  className='flex items-center 2xl:hidden xl:hidden lg:hidden bg-dark/80 text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark/80 hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base'
                  // download={true}
                >
                  <MdOutlineFileDownload className={'w-6 sm:w-5'} />
                  Resume
                </Link> */}
                {/* <Link
                  href='mailto:celineleung412@gmail.com'
                  target={'_blank'}
                  className='ml-4 items-center text-lg font-medium capitalize text-dark/80 underline dark:text-light md:text-base'
                >
                  Contact
                </Link> */}
              {/* </div> */}
              <div className='grid grid-cols-2 items-center justify-between '>
                <div>
                  <FramerImage
                    src={taro}
                    alt='taro'
                    className='w-2/3 h-auto rounded-full '
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    width={580}
                    height={580}
                    priority
                    sizes='(max-width:768px)100vw, (max-width:1200px)50vw,50vw'
                  />
                </div>
                <div className=''>
                  <FramerImage
                    src={timi}
                    alt='timi'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className='w-2/3 h-auto rounded-full '
                    width={580}
                    height={580}
                    priority
                    sizes='(max-width:768px)100vw, (max-width:1200px)50vw,50vw'
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
