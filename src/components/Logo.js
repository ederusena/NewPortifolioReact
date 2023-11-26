import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  var colors = [1, 2, 3, 4]

  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        target={'_blank'}
        className="flex items-center justify-center w-16 h-16 text-3xl font-bold border border-transparent border-solid rounded-full bg-dark text-light dark:border-light"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        ES
      </MotionLink>
    </div>
  )
}

export default Logo
