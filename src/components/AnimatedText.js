import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className="flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default AnimatedText
