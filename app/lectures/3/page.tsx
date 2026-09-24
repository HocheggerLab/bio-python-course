import SlideViewer from '@/components/lectures/SlideViewer'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import { lecture3Data } from '@/data/lectures/lecture3'

export default function Lecture3Page() {
  return (
    <LazyPyodideWrapper>
      <SlideViewer lecture={lecture3Data} />
    </LazyPyodideWrapper>
  )
}
