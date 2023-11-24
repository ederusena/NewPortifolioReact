import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { GithubIcon } from '@/components/Icons';
import {
  agencyImgProject,
  cryptoImgProject,
  devdreamingImgProject,
  fashionImgProject,
  nftImgProject,
  portfolioImgProject,
} from '@public/images/projects';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='relative flex items-center justify-center w-full p-6 border border-solid rounded-br-2xl rounded-2xl border-dark bg-light'>
      <div className='absolute shadow-xl top-0 -right-4 -z-10 w-[101%] h-[104%] rounded-[2rem] bg-dark rounded-br-3xl' />
      <Link
        className='w-1/2 overflow-hidden rounded-lg cursor-pointer'
        href={link}
        target='_blank'
      >
        <Image src={img} alt={title} className='w-full h-auto rounded-2xl' />
      </Link>

      <div className='flex flex-col items-start justify-between w-1/2 pl-6'>
        <span className='text-xl font-medium text-primary'>{type}</span>
        <Link
          href={link}
          target='_blank'
          className='underline-offset-2 hover:underline'
        >
          <h2 className='w-full my-2 text-4xl font-bold text-left'>{title}</h2>
        </Link>

        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='flex items-center mt-2'>
          <Link className='w-10' href={github} target='_blank'>
            <GithubIcon />
          </Link>
          <Link
            className='p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light'
            href={link}
            target='_blank'
          >
            Visitar projeto
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='relative flex flex-col items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light rounded-br-2xl'>
      <div className='absolute top-0 -right-2 shadow-xl -z-10 w-[101%] h-[102%] rounded-[2.2rem] bg-dark rounded-br-3xl' />
      <Link
        className='w-full overflow-hidden rounded-lg cursor-pointer'
        href={link}
        target='_blank'
      >
        <Image
          src={img}
          alt={title}
          className='w-full h-auto mb-4 rounded-2xl'
        />
      </Link>

      <div className='flex flex-col items-start justify-between w-full pl-6'>
        <span className='text-xl font-medium text-primary'>{type}</span>
        <Link
          href={link}
          target='_blank'
          className='underline-offset-2 hover:underline'
        >
          <h2 className='w-full my-2 text-4xl font-bold text-left'>{title}</h2>
        </Link>

        <div className='flex items-center justify-between w-full mt-2'>
          <Link
            className='text-lg font-semibold underline'
            href={link}
            target='_blank'
          >
            Visitar
          </Link>

          <Link className='w-10' href={github} target='_blank'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

FeaturedProject.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

Project.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Eder Sena | Projetos</title>
        <meta name='description' content='Página Sobre do portifólio' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full mb-16'>
        <Layout className='pt-16'>
          <AnimatedText text='Projetos' className='mb-16 text-7xl' />
          <div className='grid grid-cols-12 gap-24'>
            <div className='col-span-12'>
              <FeaturedProject
                github='https://github.com/ederusena'
                type='React'
                title='Crypto Screener'
                summary='Projeto desenvolvido com React, NextJS e TailwindCSS'
                img={cryptoImgProject}
                link='https://crypto-screener.vercel.app/'
              />
            </div>
            <div className='col-span-6'>
              <Project
                github='https://github.com/ederusena'
                type='React'
                title='Crypto Screener'
                img={agencyImgProject}
                link='https://crypto-screener.vercel.app/'
              />
            </div>
            <div className='col-span-6'>
              <Project
                github='https://github.com/ederusena'
                type='React'
                title='Crypto Screener'
                img={devdreamingImgProject}
                link='https://crypto-screener.vercel.app/'
              />
            </div>

            <div className='col-span-12'>Principais projetos</div>
            <div className='col-span-6'>
              <Project
                github='https://github.com/ederusena'
                type='React'
                title='Crypto Screener'
                img={fashionImgProject}
                link='https://crypto-screener.vercel.app/'
              />
            </div>
            <div className='col-span-6'>
              <Project
                github='https://github.com/ederusena'
                type='React'
                title='Crypto Screener'
                img={nftImgProject}
                link='https://crypto-screener.vercel.app/'
              />
            </div>
            <div className='col-span-6'>
              <Project
                github='https://github.com/ederusena'
                type='React'
                title='Crypto Screener'
                img={portfolioImgProject}
                link='https://crypto-screener.vercel.app/'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
