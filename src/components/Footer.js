import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid border-dark dark:border-light sm:text-base">
      <Layout className="flex items-center justify-between py-8 dark:text-light lg:flex-col lg:py-6">
        <span>
          {new Date().getFullYear()} &copy; Todos direitos reservados.
        </span>
        <div className="flex items-center lg:py-2">
          Construido com
          <span className="text-primary dark:text-primaryDark text-2x;l px-1">
            &#9825;
          </span>
          por&nbsp;
          <Link
            className="underline underline-offset-2"
            href="https://github.com/ederusena/"
            target={'_blank'}
          >
            Ederusena
          </Link>
        </div>
        <Link
          className="underline underline-offset-2"
          target={'_blank'}
          href="https://www.linkedin.com/in/edersena/"
        >
          Diga olá!
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
