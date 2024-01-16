'use client'
import { useActiveSectionContext } from '@/app/context/Active-section-context'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from './types'

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({
    // threshold: threshold, //same thing
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, timeOfLastClick, sectionName])

  return { ref }
}
