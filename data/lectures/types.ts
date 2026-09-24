export interface Slide {
  /**
   * Never rendered — it labels the entry in the deck's index so the running
   * order can be read at a glance. Keep it short and descriptive.
   */
  title: string
  content: React.ReactNode
  /**
   * Vertical placement. Defaults to 'center', which is what every slide in
   * the course has ever used; 'top' exists for content taller than the frame.
   */
  contentType?: 'center' | 'top' | 'split'
  /**
   * Shown only in teacher mode (signed cookie, set at /teach) — answer
   * slides, live poll results, anything the room should not see on the way
   * past.
   *
   * A flag rather than a second branch: the lectures are edited every week,
   * and two long-lived content branches would mean a permanent merge tax.
   */
  teacher?: boolean
}

export interface LectureData {
  id: string
  title: string
  /**
   * Order *is* the array order — there is no slide id to keep in step.
   * Inserting a slide is one line, and a reorder is a readable diff.
   */
  slides: Slide[]
}

export interface SlideNavigationData {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onSlideSelect: (slideIndex: number) => void
}
