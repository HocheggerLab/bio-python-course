import SlideViewer from '@/components/lectures/SlideViewer'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import { lecture2Data } from '@/data/lectures/lecture2'

export default function Lecture2Page() {
  return (
    <LazyPyodideWrapper>
      <SlideViewer lecture={lecture2Data} />
    </LazyPyodideWrapper>
  )
}
