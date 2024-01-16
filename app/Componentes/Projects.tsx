'use client'
import React from 'react'
import SectionHeading from './Section-heading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.25)
  // const { ref, inView } = useInView({
  //   threshold: 0.25,
  // })
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection('Projects')
  //   }
  // }, [inView, timeOfLastClick])

  return (
    <section ref={ref} id='projects' className=' scroll-mt-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
