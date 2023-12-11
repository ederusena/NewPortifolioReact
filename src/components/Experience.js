import { motion, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justity-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: 'spring' }}
      >
        <h3 className="text-2xl font-bold capitalize dark:text-light sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            target="_blank"
            className="capitalize text-primary dark:text-emerald-500"
            href={companyLink}
            rel="noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light">
          {time} | {address}
        </span>
        <p className="w-full font-medium dark:text-light">{work}</p>
      </motion.div>
    </li>
  )
}

Details.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  companyLink: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  const [experiences, setExperiences] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mock?type=experiences')
        const result = await response.json()
        setExperiences(result)
      } catch (error) {
        console.error('Error fetching mock data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl dark:text-light md:text-6xl xs:text-4xl md:mb-16">
        Experiência
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute top-0 left-[54px] w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[45px] xs:left-[30px] "
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-8">
          {experiences.map((item) => (
            <Details key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Experience
