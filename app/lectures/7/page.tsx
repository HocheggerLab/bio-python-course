import SlideViewer from '@/components/lectures/SlideViewer'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import { lecture7Data } from '@/data/lectures/lecture7'

/**
 * `?teach=1` adds the teacher-only slides (poll results, answers).
 *
 * Reading searchParams makes this route dynamic rather than prerendered,
 * which is the price of not maintaining a second branch of the deck.
 */
export default async function Lecture7Page({
  searchParams,
}: {
  searchParams: Promise<{ teach?: string }>
}) {
  const { teach } = await searchParams
  return (
    <LazyPyodideWrapper>
      <SlideViewer lecture={lecture7Data} teacher={teach === '1'} />
    </LazyPyodideWrapper>
  )
}
