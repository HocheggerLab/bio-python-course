import SlideViewer from '@/components/lectures/SlideViewer'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import { lecture7Data } from '@/data/lectures/lecture7'
import { isTeacher } from '@/lib/poll/teacher'

/**
 * Teacher-only slides come from a signed cookie set once at /teach, not a
 * query parameter: it survives navigating between lectures, and it cannot be
 * turned on by a student who guesses the URL.
 */
export default async function Lecture7Page() {
  return (
    <LazyPyodideWrapper>
      <SlideViewer lecture={lecture7Data} teacher={await isTeacher()} />
    </LazyPyodideWrapper>
  )
}
