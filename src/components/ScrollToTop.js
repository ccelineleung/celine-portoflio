import React, { useEffect } from 'react';
import { motion, useScroll, useAnimationControls } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTopContainerVariants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ScrollToTopPage = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.7) {
        controls.start('show');
      } else {
        controls.start('hide');
      }
    });
  });
  return (
    <motion.button
      className='fixed bottom-5 right-50 p-3 border border-solid border-dark dark:border-light  rounded-full dark:text-light'
      variants={ScrollToTopContainerVariants}
      initial='hide'
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default ScrollToTopPage;
