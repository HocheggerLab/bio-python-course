import { SlideController } from './SlideController'
import { SlidePane } from './SlidePane'
import { LectureData } from '@/data/lectures/types'

interface SlideViewerProps {
  lecture: LectureData
  /** Include slides marked `teacher` — driven by the /teach cookie. */
  teacher?: boolean
}

// Server Component — no state, no hooks.
// slide.content is passed as RSC children into SlidePane (Client),
// which is the supported Next.js pattern for crossing the server/client boundary.
export default function SlideViewer({ lecture, teacher = false }: SlideViewerProps) {
  /* Filter before indexing, so the student deck numbers slides consecutively
     rather than leaving gaps where the answers were removed. */
  const slides = teacher ? lecture.slides : lecture.slides.filter((s) => !s.teacher)
  return (
    <SlideController totalSlides={slides.length}>
      {slides.map((slide, index) => (
        <SlidePane key={slide.id} index={index} contentType={slide.contentType}>
          {slide.content}
        </SlidePane>
      ))}
    </SlideController>
  )
}
