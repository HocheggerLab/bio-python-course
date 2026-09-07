import SlideViewer from '@/components/lectures/SlideViewer'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import { lecture1Data } from '@/data/lectures/lecture1'
import { isTeacher } from '@/lib/poll/teacher'

export default async function Lecture1Page() {
  return (
    <LazyPyodideWrapper>
      <SlideViewer lecture={lecture1Data} teacher={await isTeacher()} />
    </LazyPyodideWrapper>
  )
}
