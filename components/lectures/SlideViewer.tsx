'use client'

import { useState, useEffect } from 'react'
import Slide from './Slide'
import SlideNavigation from './SlideNavigation'
import { LectureData } from '@/data/lectures/types'
import { exportSlidesToPDF } from '@/lib/pdf-export'

interface SlideViewerProps {
  lecture: LectureData
}

export default function SlideViewer({ lecture }: SlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isExporting, setIsExporting] = useState(false)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'Escape') {
        window.location.href = '/'
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleNext = () => {
    if (currentSlide < lecture.slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handleSlideSelect = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const handleExportPDF = async () => {
    setIsExporting(true)
    try {
      await exportSlidesToPDF(lecture.id, lecture.title)
    } catch (error) {
      console.error('Failed to export PDF:', error)
      alert('Failed to export PDF. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* PDF Export Button */}
      <button
        onClick={handleExportPDF}
        disabled={isExporting}
        className="fixed top-20 right-4 z-40 btn-secondary !py-2 !px-4 text-sm flex items-center gap-2 disabled:opacity-50 pdf-export-btn"
        title="Download slides as PDF"
      >
        {isExporting ? (
          <>
            <span className="animate-spin">⏳</span>
            Exporting...
          </>
        ) : (
          <>
            📄 Download PDF
          </>
        )}
      </button>

      <main className="flex-1 relative">
        {lecture.slides.map((slide, index) => (
          <Slide
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
          />
        ))}
      </main>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={lecture.slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSlideSelect={handleSlideSelect}
      />
    </div>
  )
}