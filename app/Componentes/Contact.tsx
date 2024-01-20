'use client'
import React from 'react'
import SectionHeading from './Section-heading'
import SubmitBtn from './SubmitBtn'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import toast from 'react-hot-toast'

function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-28 scroll-m-28 w-[min(100%,38rem)] p-4'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='dark:text-white/80 '>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:sumanmaji.736+official@gmail.com'>
          sumanmaji.736+official@gmail.com
        </a>{' '}
        or through this form
      </p>

      <form
        className='mt-10 flex flex-col items-center dark:text-white'
        action={async (FormData) => {
          //   console.log(FormData.get('email'), FormData.get('message'))
          const { data, error } = await sendEmail(FormData)

          if (error) {
            toast.error(error)
            return
          }
          toast.success('Email sent successfully!')
        }}
      >
        <input
          type='mail'
          placeholder='Your Email'
          className='h-14 rounded borderBlack p-4 w-full dark:bg-slate-300/10 dark:focus:bg-slate-700 transition-all outline-none'
          required
          maxLength={128}
          name='email'
        />
        <textarea
          name='message'
          placeholder='Your Message'
          className='h-52 rounded borderBlack p-4 my-3 w-full  dark:bg-slate-300/10 dark:focus:bg-slate-700 transition-all outline-none'
          required
          maxLength={1024}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}

export default Contact
