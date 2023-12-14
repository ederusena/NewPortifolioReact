import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import { LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from '../../public/images/profile/eder.png'
import aiRobot from '../../public/images/svgs/buld.svg'
import TransitionEffect from './../components/TransitionEffect'

export default function Home() {
  const textTitle = 'Eu sou Eder, um desenvelvedor fullstack.'
  const textSubtitle =
    'Tenho habilidades em desenvolvimento web, mobile e desktop.'

  return (
    <>
      <Head>
        <title>Eder Sena | Portifólio </title>
        <meta
          name="description"
          content="Portifolio por Eder Sena Desenvolvedor Frontend Vue React Angular"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0 md:pd-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={ProfilePic}
                alt="logo"
                priority
                className="w-full h-auto md:inline-block md:w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
              <AnimatedText
                text={textTitle}
                className="!text-left lg:!text-center"
              />

              <p className="my-4 text-base font-medium lg:text-center sm:text-xs">
                {textSubtitle}
              </p>

              <div className="flex items-center self-start gap-2 mt-2 lg:self-center">
                <Link
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  href="/Profile.pdf"
                  target={'_blank'}
                  download={true}
                >
                  CV/Resume <LinkArrow className={'w-6  ml-1'} />
                </Link>
                <Link
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:text-base md:p-2 md:px-4"
                  href="mailto:eder.sena@live.com"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="lg:hidden absolute inline-block w-36 right-8 bottom-8">
          <Image src={aiRobot} alt="logo" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
