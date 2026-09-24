'use client'

import { createContext, useContext } from 'react'

export const SlideContext = createContext(0)
export const useSlideIndex = () => useContext(SlideContext)

interface SlidePaneInfo {
  index: number
  isActive: boolean
}

export const SlidePaneContext = createContext<SlidePaneInfo>({ index: -1, isActive: false })
export const useSlidePane = () => useContext(SlidePaneContext)
export const useIsSlideActive = () => useContext(SlidePaneContext).isActive
