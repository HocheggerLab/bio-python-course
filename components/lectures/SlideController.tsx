'use client'

import { useState, useEffect } from 'react'
import { SlideContext } from './SlideContext'
import SlideNavigation from './SlideNavigation'

interface SlideControllerProps {
  children: React.ReactNode
  totalSlides: number
}

export function SlideController({ children, totalSlides }: SlideControllerProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  setCurrentSlide(s => Math.max(0, s - 1))
      if (e.key === 'ArrowRight') setCurrentSlide(s => Math.min(totalSlides - 1, s + 1))
      if (e.key === 'Escape')     window.location.href = '/'
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [totalSlides])

  return (
    <SlideContext.Provider value={currentSlide}>
      <div className="slide-viewport">
        {children}
      </div>
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={() => setCurrentSlide(s => Math.max(0, s - 1))}
        onNext={() => setCurrentSlide(s => Math.min(totalSlides - 1, s + 1))}
        onSlideSelect={setCurrentSlide}
      />
    </SlideContext.Provider>
  )
}
