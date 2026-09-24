interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onSlideSelect: (slideIndex: number) => void
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onSlideSelect,
}: SlideNavigationProps) {
  return (
    <div className="slide-navigation">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="btn-secondary !py-1 !px-3 !text-sm sm:!py-1 sm:!px-3 !py-0.5 !px-2 !text-xs sm:!text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">← Previous</span>
          <span className="sm:hidden">←</span>
        </button>

        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => onSlideSelect(i)}
              className={`slide-indicator ${currentSlide === i ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="btn-secondary !py-1 !px-3 !text-sm sm:!py-1 sm:!px-3 !py-0.5 !px-2 !text-xs sm:!text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Next →</span>
          <span className="sm:hidden">→</span>
        </button>
      </div>
    </div>
  )
}
