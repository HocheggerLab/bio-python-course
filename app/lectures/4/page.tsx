import SlideViewer from '@/components/lectures/SlideViewer'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import { lecture4Data } from '@/data/lectures/lecture4'

export default function Lecture4Page() {
  return (
    <LazyPyodideWrapper>
      <SlideViewer lecture={lecture4Data} />
    </LazyPyodideWrapper>
  )
}
