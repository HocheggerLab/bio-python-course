'use client'

import { useSlideIndex, SlidePaneContext } from './SlideContext'

interface SlidePaneProps {
  children: React.ReactNode
  index: number
  contentType: 'center' | 'top' | 'split'
}

export function SlidePane({ children, index, contentType }: SlidePaneProps) {
  const currentSlide = useSlideIndex()
  const isActive = currentSlide === index
  return (
    <SlidePaneContext.Provider value={{ index, isActive }}>
      <div className={`slide slide-scrollbar ${isActive ? 'active' : ''}`}>
        <div className={contentType === 'top' ? 'slide-content-top' : 'slide-content'}>
          {children}
        </div>
      </div>
    </SlidePaneContext.Provider>
  )
}
