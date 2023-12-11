import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px] "
        width="75"
        height="75"
        viewBox="0 0 100 100"
        role
        aria-label="circle"
      >
        <circle
          cx="75"
          cy="75"
          r="20"
          className="stroke-1 stroke-primary dark:stroke-green-500 fill-none"
        />
        <motion.circle
          cx="75"
          cy="75"
          r="20"
          className="stroke-[4px] fill-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="75"
          r="10"
          className="stroke-1 animate-pulse fill-primary dark:fill-green-500"
        />
      </svg>
    </figure>
  )
}

LiIcon.propTypes = {
  reference: PropTypes.object,
}

export default LiIcon
