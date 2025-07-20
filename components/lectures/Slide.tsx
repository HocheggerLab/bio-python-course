import { Slide as SlideType } from '@/data/lectures/types'

interface SlideProps {
  slide: SlideType
  isActive: boolean
}

export default function Slide({ slide, isActive }: SlideProps) {
  return (
    <div className={`slide slide-scrollbar ${isActive ? 'active' : ''}`}>
      <div className={slide.contentType === 'top' ? 'slide-content-top' : 'slide-content'}>
        {slide.content}
      </div>
    </div>
  )
}