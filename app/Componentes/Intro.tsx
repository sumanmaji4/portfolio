'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiCodechef, SiLeetcode } from 'react-icons/si'
import { useSectionInView } from '@/lib/hooks'

function Intro() {
  const { ref } = useSectionInView('Home')

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-4 scroll-mt-36'
    >
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Image
            src='/suman.jpg'
            alt='my image'
            width={200}
            height={200}
            priority={true}
            quality='80'
            className='h-32 w-32 rounded-lg object-cover border-[0.25rem] border-white shadow-xl'
          />
        </motion.div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Suman.</span> I'm a front-end
        developer, experienced in{' '}
        <span className='font-bold'>Web Development.</span> I enjoy solving
        problems. My focus is React.JS and Next.JS
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a className='bg-white p-4 flex items-center gap-2 rounded-full text-2xl border border-black/20 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition'>
          <BsLinkedin />
        </a>
        <a className='bg-white p-4 flex items-center gap-2 rounded-full text-2xl border border-black/20 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition'>
          <BsGithub />
        </a>
        <a className='bg-white p-4 flex items-center gap-2 rounded-full text-2xl border border-black/20 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition'>
          <SiCodechef />
        </a>
        <a className='bg-white p-4 flex items-center gap-2 rounded-full text-2xl border border-black/20 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition'>
          <SiLeetcode />
        </a>
        <a
          className='bg-white px-7 py-3 flex items-center gap-2 rounded-full text-2xl border border-black/20 cursor-pointer focus:scale-110 hover:scale-105 active:scale-105 transition'
          href="/Suman's Resume.pdf"
          download={true}
        >
          Download CV <HiDownload />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
