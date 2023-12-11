import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import ProfilePic from '../../public/images/profile/eder.png'
import Education from './../components/Education'
import Experience from './../components/Experience'
import TransitionEffect from './../components/TransitionEffect'

const AnimatedNumbers = ({ values }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 50 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(values)
    }
  }, [isInView, values, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= values) {
        ref.current.innerHTML = latest.toFixed(0)
      }
    })
  }, [springValue, values])

  return (
    <span ref={ref} className="text-dark dark:text-light">
      {values}
    </span>
  )
}

AnimatedNumbers.propTypes = {
  values: PropTypes.number,
}

const About = () => {
  return (
    <>
      <Head>
        <title>Eder Sena | Página Sobre</title>
        <meta name="description" content="Página Sobre do portifólio" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full">
        <Layout className="pt-16">
          <AnimatedText
            text="Be water, my friend!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-3 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biografia
              </h2>
              <p className="font-medium text-dark dark:text-light">
                - Hi, Im CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="my-4 font-medium text-dark dark:text-light">
                - I believe that design is about more than just making things
                look pretty – its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium text-dark dark:text-light">
                - Whether Im working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark dark:border-light bg-light dark:bg-dark md:order-1 md:col-span-8">
              <div className="absolute top-4 -right-4 -z-10 w-[102%] h-[100%] rounded-[1rem] bg-dark dark:bg-light" />
              {/* <div className="p-8 bg-dark dark:bg-light rounded-xl md:col-span-8"> */}
              <Image
                src={ProfilePic}
                alt="logo"
                className="w-full h-auto p-4 rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              {/* </div> */}
            </div>

            <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers values={50} />
                  <span className="text-dark dark:text-light">+</span>
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Clientes satisfeitos
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xm:text-4xl">
                  <AnimatedNumbers values={40} />
                  <span className="text-dark dark:text-light">+</span>
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projetos concluidos
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xm:text-4xl">
                  <AnimatedNumbers values={4} />
                  <span className="text-dark dark:text-light">+</span>
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Anos de experiencia
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default About
