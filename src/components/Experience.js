import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justity-between'>
      <LiIcon reference={ref} />
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:1.5, type:"spring"}}>
        <h3 className='text-2xl font-bold capitalize'>
          {position}&nbsp;
          <a
            target='_blank'
            className='capitalize text-primary'
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className='font-medium capitalize text-dark/75'>
          {time} | {address}
        </span>
        <p className='w-full font-medium'>{work}</p>
      </motion.div>
    </li>
  );
};

Details.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  companyLink: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
};

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mock?type=experiences');
        const result = await response.json();
        setExperiences(result);
      } catch (error) {
        console.error('Error fetching mock data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='my-64'>
      <h2 className='w-full mb-32 font-bold text-center text-8xl'>
        Experiência
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
          style={{ scale: scrollYProgress }}
          className='absolute top-0 left-[54px] w-[4px] h-full bg-dark origin-top'
        />
        <ul className='flex flex-col items-start justify-between w-full ml-4'>
          {experiences.map((item) => (
            <Details key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
