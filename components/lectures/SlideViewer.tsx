import { SlideController } from './SlideController'
import { SlidePane } from './SlidePane'
import { LectureData } from '@/data/lectures/types'

interface SlideViewerProps {
  lecture: LectureData
}

// Server Component — no state, no hooks.
// slide.content is passed as RSC children into SlidePane (Client),
// which is the supported Next.js pattern for crossing the server/client boundary.
export default function SlideViewer({ lecture }: SlideViewerProps) {
  return (
    <SlideController totalSlides={lecture.slides.length}>
      {lecture.slides.map((slide, index) => (
        <SlidePane key={slide.id} index={index} contentType={slide.contentType}>
          {slide.content}
        </SlidePane>
      ))}
    </SlideController>
  )
}
