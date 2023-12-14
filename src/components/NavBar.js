import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from './Icons'
import Logo from './Logo'
import UserThemeSwitcher from './hooks/userThemeSwitcher'

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

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter()
  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      href={href}
      className={`${className} relative group text-light dark:text-dark `}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  )
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

CustomMobileLink.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  toggle: PropTypes.function,
}

const NavBar = () => {
  const [mode, setMode] = UserThemeSwitcher()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpenModel = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="relative flex items-center justify-between w-full px-32 py-8 font-medium lg:py-10 dark:text-light dark:bg-darkNav lg:px-16 md:px-12 sm:px-8">
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleOpenModel}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sn ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sn my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sn ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        />
      </button>

      {/* Desktop nav */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="Sobre" className="mx-4" />
          <CustomLink href="/projects" title="Projetos" className="mx-4" />
          <CustomLink href="/articles" title="Artigos" className="ml-4" />
        </nav>

        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href="https://twitter.com/motokacachorrox"
            target={'_blank'}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="w-6 mr-3"
            rel="noreferrer"
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
            rel="noreferrer"
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
            rel="noreferrer"
          >
            <LinkedInIcon />
          </motion.a>
          

          <button
            type="button"
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
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 dark:text-dark rounded-lg backdrop-blur-lg py-32 gap-2"
        >
          <nav className="flex flex-col items-center justify-center gap-2">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleOpenModel}
            />
            <CustomMobileLink
              href="/about"
              title="Sobre"
              className=""
              toggle={handleOpenModel}
            />
            <CustomMobileLink
              href="/projects"
              title="Projetos"
              className=""
              toggle={handleOpenModel}
            />
            <CustomMobileLink
              href="/articles"
              title="Artigos"
              className=""
              toggle={handleOpenModel}
            />
          </nav>

          {/* Mobile nav */}
          <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-1">
           
            <motion.a
              href="https://github.com/ederusena"
              target={'_blank'}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="w-8 p-1 rounded-full bg-light"
              rel="noreferrer"
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
              className="w-8 p-1 rounded-full bg-light"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </motion.a>
            

            <button
              type="button"
              className={`flex items-center justify-center p-1 rounded-full ${
                mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
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
        </motion.div>
      )}

      <div className="absolute left-[50%] top-1 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
