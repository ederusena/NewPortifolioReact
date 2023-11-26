import React from 'react'
import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  })

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
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
