import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import {
  agencyImgProject,
  cryptoImgProject,
  devdreamingImgProject,
  fashionImgProject,
  nftImgProject,
  portfolioImgProject,
} from '@public/images/projects'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import TransitionEffect from './../components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-br-2xl rounded-3xl border-dark bg-light dark:bg-dark dark:boder-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute shadow-xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer dark:text-light lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline "
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium sm:text-sm">{summary}</p>
        <div className="flex items-center mt-2">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visitar projeto
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark dark:border-light dark:bg-dark bg-light rounded-br-2xl xs:p-4">
      <div className="absolute top-0 -right-2 shadow-xl -z-10 w-[101%] h-[102%] rounded-[2.2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        className="w-full overflow-hidden rounded-lg cursor-pointer dark:text-light"
        href={link}
        target="_blank"
      >
        <FramerImage
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={img}
          alt={title}
          className="w-full h-auto mb-4 rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-full pl-6 dark:text-light md:pl-0">
        <span className="text-xl font-medium text-primary dark:text-primaryDark sm:text-sm ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left sm:text-base">
            {title}
          </h2>
        </Link>

        <div className="flex items-center justify-between w-full mt-2">
          <Link
            className="text-lg font-semibold underline sm:text-sm"
            href={link}
            target="_blank"
          >
            Visitar
          </Link>

          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Eder Sena | Projetos</title>
        <meta name="description" content="Página Sobre do portifólio" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Projetos"
            className="mb-16 text-7xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                github="https://github.com/ederusena"
                type="React"
                title="Crypto Screener"
                summary="Projeto desenvolvido com React, NextJS e TailwindCSS"
                img={cryptoImgProject}
                link="https://crypto-screener.vercel.app/"
              />
            </div>
            <div className="col-span-6 lg:col-span-12">
              <Project
                github="https://github.com/ederusena"
                type="React"
                title="Crypto Screener"
                img={agencyImgProject}
                link="https://crypto-screener.vercel.app/"
              />
            </div>
            <div className="col-span-6 lg:col-span-12">
              <Project
                github="https://github.com/ederusena"
                type="React"
                title="Crypto Screener"
                img={devdreamingImgProject}
                link="https://crypto-screener.vercel.app/"
              />
            </div>

            <div className="col-span-12">Principais projetos</div>
            <div className="col-span-6 lg:col-span-12">
              <Project
                github="https://github.com/ederusena"
                type="React"
                title="Crypto Screener"
                img={fashionImgProject}
                link="https://crypto-screener.vercel.app/"
              />
            </div>
            <div className="col-span-6 lg:col-span-12">
              <Project
                github="https://github.com/ederusena"
                type="React"
                title="Crypto Screener"
                img={nftImgProject}
                link="https://crypto-screener.vercel.app/"
              />
            </div>
            <div className="col-span-6 lg:col-span-12">
              <Project
                github="https://github.com/ederusena"
                type="React"
                title="Crypto Screener"
                img={portfolioImgProject}
                link="https://crypto-screener.vercel.app/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

FeaturedProject.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  img: PropTypes.object,
  link: PropTypes.string,
  github: PropTypes.string,
}

Project.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.object,
  link: PropTypes.string,
  github: PropTypes.string,
}

export default Projects
