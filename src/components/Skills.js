import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import typescriptLogo from '../../public/images/typescriptLogo.png';
import nodeJSLogo from '../../public/images/nodeJSLogo.jpg';
import javascriptLogo from '../../public/images/javascriptlogo.png';
import reactLogo from '../../public/images/React-icon.png';
import postgresqlLogo from '../../public/images/postgresql.png';
import nextjsLogo from '../../public/images/nextjs.png';
import tailwindLogo from '../../public/images/tailwind.png';
import cssLogo from '../../public/images/css.png';
import graphqlLogo from '../../public/images/GraphQL.png';
import expressLogo from '../../public/images/expresslogo.png';

const FramerImage = motion(Image);

const SkillsLogo = ({ img, name }) => {
  return (
    <FramerImage
      src={img}
      alt={name}
      className='w-full h-auto rounded-3xl'
      whileHover={{ scale: 2 }}
      transition={{ duration: 0.2 }}
      priority
      sizes='(max-width:768px)100vw, (max-width:1200px)50vw,50vw'
    />
  );
};

const Skills = () => {
  return (
    <div>
      <section className='w-full flex flex-col items-center justify-between'>
        <div className='grid grid-cols-5 gap-4'>
          <div>
            <SkillsLogo img={javascriptLogo} name='js' />
          </div>
          <div>
            <SkillsLogo img={typescriptLogo} name='ts' />
          </div>
          <div >
            <SkillsLogo img={nodeJSLogo} name='nodejs' />
          </div>
          <div>
            <SkillsLogo img={expressLogo} name='express' />
          </div>
          <div>
            <SkillsLogo img={reactLogo} name='react' />
          </div>
          <div>
            <SkillsLogo img={postgresqlLogo} name='postgresql' />
          </div>
          <div>
            <SkillsLogo img={nextjsLogo} name='nextjs' />
          </div>
          <div>
            <SkillsLogo img={tailwindLogo} name='tailwind' />
          </div>
          <div>
            <SkillsLogo img={cssLogo} name='css' />
          </div>
          <div>
            <SkillsLogo img={graphqlLogo} name='graphQL' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
