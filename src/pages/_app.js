import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

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
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
