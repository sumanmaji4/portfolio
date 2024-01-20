'use client'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SectionHeading from './Section-heading'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useTheme } from '../context/Theme-context'

function Experience() {
  const { ref, inView } = useSectionInView('Experience', 0.5)
  const { theme } = useTheme()
  return (
    <section ref={ref} id='experience' className=' mb-28 scroll-m-28'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            visible={inView}
            contentStyle={{
              background:
                theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(0,0,0,0.05)',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight:
                theme === 'light'
                  ? '0.4rem solid #9ca3af'
                  : '0.4rem solid rgba(255,255,255,0.5',
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background:
                theme === 'light' ? 'white' : 'rgba(255,255,255,0.15)',
              fontSize: '1.5rem',
            }}
          >
            <h3 className='font-semibold capitalize'>{experience.title}</h3>
            <p className='font-normal !mt-0'>{experience.location}</p>
            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/70'>
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experience
