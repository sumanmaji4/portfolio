'use client'
import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'
import { useRef } from 'react'
import { LuExternalLink } from 'react-icons/lu'
import { FaCode } from 'react-icons/fa'

type ProjectProps = (typeof projectsData)[number]

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'], //['x:bottom of the viewport y:top of the target', 'end-x end-y']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className='mb-3 sm:mb-8 last:mb-0 group'
    >
      <section className=' bg-gray-100 max-w-[42rem] borderBlack relative flex sm:flex-row overflow-hidden sm:group-even:flex-row-reverse flex-col hover:bg-gray-200 transition rounded dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='py-4 px-5  sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-6'>
            {description}
          </p>
          <ul className='flex flex-wrap gap-2 mt-auto'>
            {tags.map((tag, index) => (
              <li
                className=' bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-xl  dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <ul className='w-full flex gap-2 justify-center '>
            <li className=' bg-black/[0.7] mt-2 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded  dark:text-white/70 cursor-pointer flex items-center gap-1'>
              Code <FaCode />
            </li>
            <li className=' bg-black/[0.7] mt-2 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded  dark:text-white/70 cursor-pointer flex items-center gap-1'>
              Live <LuExternalLink />
            </li>
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={95}
          // className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg'
          className='w-full sm:w-[18rem] p-8 rounded h-64 object-cover sm:m-8 sm:p-0 shadow-2xl group-hover:scale-105 
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 
        
        group-odd:group-hover:translate-x-3 
        group-odd:group-hover:-translate-y-3 
        group-odd:group-hover:rotate-2 
        transition'
        />
      </section>
    </motion.div>
  )
}

export default Project
