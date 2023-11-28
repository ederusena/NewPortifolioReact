import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { AnimatePresence } from "framer-motion"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PropTypes from 'prop-types'

const montSerrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main
        className={`${montSerrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <AnimatePresence mode='wait'>
        <Component  {...pageProps} />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}


App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
}
