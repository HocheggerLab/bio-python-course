import SlideViewer from '@/components/lectures/SlideViewer'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import { lecture5Data } from '@/data/lectures/lecture5'

export default function Lecture5Page() {
  return (
    <LazyPyodideWrapper>
      <SlideViewer lecture={lecture5Data} />
    </LazyPyodideWrapper>
  )
}
