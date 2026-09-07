'use client'

import { useState, useEffect } from 'react'
import { SlideContext } from './SlideContext'
import SlideNavigation from './SlideNavigation'

interface SlideControllerProps {
  children: React.ReactNode
  totalSlides: number
}

/**
 * Is the keystroke destined for something the user is typing into?
 *
 * The deck listens on `window`, so without this every arrow press inside a
 * code cell moves the caret *and* changes the slide. Students editing a
 * runner need left/right to belong to the textarea, not the deck.
 */
function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return (
    tag === 'TEXTAREA' ||
    tag === 'INPUT' ||
    tag === 'SELECT' ||
    target.isContentEditable
  )
}

export function SlideController({ children, totalSlides }: SlideControllerProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target)) {
        /* Escape is the way back out of a code cell: blur, and the very next
           Escape leaves the lecture as usual. Anything else is theirs. */
        if (e.key === 'Escape') (e.target as HTMLElement).blur()
        return
      }
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
