'use client'
import React from 'react'
import SectionHeading from './Section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

function About() {
  const { ref } = useSectionInView('About', 0.75)

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] leading-8m sm:mb-40 scroll-mt-32'
      id='about'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-4'>
        I recently graduated from{' '}
        <span className=' font-bold'>
          Japlaiguri Government Engineering College
        </span>{' '}
        after completing Bachelor of Technology in Electronics and Communication
        Engineering.
      </p>
      <p className='mb-4'>
        After graduating, I decided to pursue my passion for programming. My
        favorite part of programming is the{' '}
        <span className=' font-semibold'>problem-solving aspect.</span> I love
        the feeling of finally figuring out a solution to a problem. My core
        stack is{' '}
        <span className=' font-bold'>
          React, Next.js, Node.js, and MongoDB.
        </span>{' '}
        I am also familiar with{' '}
        <span className=' font-semibold'>
          TypeScript, Tailwind and Mongoose.
        </span>{' '}
        I am always looking to learn new technologies. I am currently looking
        for a <span className=' font-bold'>full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className=' font-bold'>
          When I'm not in front of a computer screen,
        </span>{' '}
        I'm probably reading books, travelling or playing video games.
      </p>
    </motion.section>
  )
}

export default About
