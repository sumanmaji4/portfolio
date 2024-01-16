'use client'
import React, { useState, createContext, useContext } from 'react'
import type { SectionName } from '@/lib/types'

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}
type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
  timeOfLastClick: number
}

export const activeSectionContext =
  createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  // to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <activeSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </activeSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(activeSectionContext)
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within a ActiveSectionContextProvider'
    )
  }

  return context
}
