export interface Slide {
  id: number
  title: string
  content: React.ReactNode
  contentType: 'center' | 'top' | 'split' // determines slide-content vs slide-content-top
  /**
   * Shown only in teacher mode (`?teach=1`) — answer slides, live poll
   * results, anything the room should not see on the way past.
   *
   * A flag rather than a second branch: the lectures are edited every week,
   * and two long-lived content branches would mean a permanent merge tax.
   */
  teacher?: boolean
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