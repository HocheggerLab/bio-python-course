import SlideViewer from '@/components/lectures/SlideViewer'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import { lecture8Data } from '@/data/lectures/lecture8'
import { isTeacher } from '@/lib/poll/teacher'

/** Same shape as lecture 7: teacher-only slides come from the /teach cookie. */
export default async function Lecture8Page() {
  return (
    <LazyPyodideWrapper>
      <SlideViewer lecture={lecture8Data} teacher={await isTeacher()} />
    </LazyPyodideWrapper>
  )
}
