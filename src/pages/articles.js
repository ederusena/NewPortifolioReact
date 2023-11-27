import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import React, { useRef } from 'react'

import {
  loadingScreenImgArticle,
  modalImgArticle,
  formValidationImgArticle,
  paginationImgArticle,
  smoothScrollImgArticle,
  todolistImgArticle,
  higherOrderImgArticle,
  reduxImgArticle,
} from '@public/images/articles'

const FramerImage = motion(Image)

const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(e) {
    imgRef.current.style.display = 'inline-block'
    x.set(e.pageX)
    y.set(-10)
  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline dark:text-light">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ scale: 1.3, opacity: 1, transition: { duration: 0.5 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="absolute z-10 hidden h-auto sm:w-[30vw] w-[20vw] rounded-2xl"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full col-span-1 p-4 border border-solid bg-light border-dark dark:bg-dark dark:border-light rounded-2xl dark:text-light">
      <div className="absolute top-0 -right-3 shadow-xl -z-10 w-[101%] h-[102%] rounded-[2.4rem] bg-dark rounded-br-2xl" />
      <Link
        className="inline-block w-full overflow-hidden rounded-lg cursor-pointer"
        href={link}
        target="_blank"
      >
        <FramerImage
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={img}
          alt={title}
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>

      <p className="mb-2 text-sm">{summary}</p>
      <span className="font-semibold text-primary dark:text-primaryDark">
        {time}
      </span>
    </li>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid rounded-xl bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border-dark dark:border-light sm:flex-col"
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Eder Sena | Artigos </title>
        <meta name="description" content="Página Sobre do portifólio" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Palavras podem mudar o mundo!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              img={paginationImgArticle}
              time="9 min read"
              link="https://www.c-sharpcorner.com/article/build-a-custom-pagination-component-in-reactjs-from-scratch/"
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods.
Discover how to use React-Loading, React-Lottie & build a custom loading screen.
Improve the user experience."
              img={loadingScreenImgArticle}
              time="10 min read"
              link="https://www.c-sharpcorner.com/article/build-a-custom-pagination-component-in-reactjs-from-scratch/"
            />
          </ul>

          <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center">
            Todos os artigos
          </h2>
          <ul>
            <Article
              title="Form validation in React: The right way"
              date="May 2021"
              link="https://blog.logrocket.com/form-validation-in-react-the-right-way/"
              img={formValidationImgArticle}
            />
            <Article
              title="React: How to create a smooth scroll effect"
              date="May 2021"
              link="https://blog.logrocket.com/react-smooth-scroll-effect/"
              img={smoothScrollImgArticle}
            />
            <Article
              title="Higher-order components in React"
              date="May 2021"
              link="https://blog.logrocket.com/higher-order-components-in-react/"
              img={higherOrderImgArticle}
            />

            <Article
              title="How to build a Todo List in React"
              date="May 2021"
              link="https://blog.logrocket.com/how-to-build-a-todo-list-in-react/"
              img={todolistImgArticle}
            />

            <Article
              title="How to build a modal in React"
              date="May 2021"
              link="https://blog.logrocket.com/how-to-build-a-modal-in-react/"
              img={modalImgArticle}
            />

            <Article
              title="How to use Redux in React"
              date="May 2021"
              link="https://blog.logrocket.com/how-to-use-redux-in-reactjs-with-examples/"
              img={reduxImgArticle}
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

FeaturedArticle.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  time: PropTypes.string,
  summary: PropTypes.string,
  link: PropTypes.string,
}

MovingImg.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  link: PropTypes.string,
}

Article.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
}

export default articles
