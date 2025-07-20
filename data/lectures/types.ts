export interface Slide {
  id: number
  title: string
  content: React.ReactNode
  contentType: 'center' | 'top' // determines slide-content vs slide-content-top
}

export interface LectureData {
  id: string
  title: string
  slides: Slide[]
}

export interface SlideNavigationData {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onSlideSelect: (slideIndex: number) => void
}