import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer shadow-dark bg-dark text-light dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:text-dark xs:dark:text-light xs:font-bold xs:bg-transparent xs:dark:bg-transparent
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  x: PropTypes.string,
  y: PropTypes.string,
}

const Skills = () => {
  const [skillNames, setSkillNames] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mock?type=skills')
        const result = await response.json()
        setSkillNames(result)
      } catch (error) {
        console.error('Error fetching mock data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      <h2 className="w-full mt-32 font-bold text-center text-8xl text-dark dark:text-light md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="relative flex items-center justify-center w-full h-screen xs:h-[50vh] sm:h-[60vh] lg:h-[80vh]">
        {skillNames.map((item, index) => (
          <Skill
            key={`${index}-skills`}
            name={item.name}
            x={item.x}
            y={item.y}
          />
        ))}
      </div>
    </>
  )
}

export default Skills
