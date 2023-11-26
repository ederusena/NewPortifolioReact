import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from './Icons'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import UserThemeSwitcher from './hooks/userThemeSwitcher'
import PropTypes from 'prop-types'

const CustomLink = ({ href, title, className }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

const NavBar = () => {
  const [mode, setMode] = UserThemeSwitcher()
  return (
    <header className="flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light dark:bg-darkNav">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="Sobre" className="mx-4" />
        <CustomLink href="/projects" title="Projetos" className="mx-4" />
        <CustomLink href="/articles" title="Artigos" className="ml-4" />
      </nav>
      <nav className="flex flex-wrap items-center justify-center gap-2">
        <motion.a
          href="https://twitter.com/"
          target={'_blank'}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/ederusena"
          target={'_blank'}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/edersena/"
          target={'_blank'}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://br.pinterest.com/"
          target={'_blank'}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://dribbble.com/tags/icons"
          target={'_blank'}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="w-6 mr-3"
        >
          <DribbbleIcon />
        </motion.a>

        <button
          className={`flex items-center justify-center p-1 ml-3 rounded-full ${
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
          onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
          {mode === 'dark' ? (
            <SunIcon className={'fill-dark'} />
          ) : (
            <MoonIcon className={'fill-dark'} />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-1 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
