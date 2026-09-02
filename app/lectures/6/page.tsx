import SlideViewer from '@/components/lectures/SlideViewer'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import { lecture6Data } from '@/data/lectures/lecture6'

export default function Lecture6Page() {
  return (
    <LazyPyodideWrapper>
      <SlideViewer lecture={lecture6Data} />
    </LazyPyodideWrapper>
  )
}
