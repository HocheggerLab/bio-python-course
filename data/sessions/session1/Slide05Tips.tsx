import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink } from './NotebookLink'

export function Slide05Tips() {
  return (
    <>
      <SlideTitle>
        Top <GradientText>Tips</GradientText> & Gotchas
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">✅ Do</CardHeading>
          <CardList
            color="green"
            items={[
              <>Run cells <span className="text-white font-semibold">top to bottom</span>, in order</>,
              <>Use <span className="font-mono text-white">Shift + Enter</span> to run and move on</>,
              <>Add a text cell with your <span className="text-white">notes</span> next to the code</>,
              <>Save a copy to Drive <span className="text-white">before</span> you edit</>,
            ]}
          />
        </SlideCard>

        <SlideCard color="red" layout="start" padding="compact">
          <CardHeading size="sm" color="red" className="mb-3 md:mb-4">⚠️ Watch out for</CardHeading>
          <CardList
            color="red"
            bullet="•"
            items={[
              <>Running cells <span className="text-white">out of order</span> — variables can be stale</>,
              <>Closing the tab without <span className="text-white font-semibold">Save a copy in Drive</span></>,
              <>Idle for too long — Colab disconnects; just <span className="text-white">reconnect</span> and re-run</>,
              <><span className="font-mono text-white">NameError</span>? You probably skipped a cell above</>,
            ]}
          />
        </SlideCard>

      </div>

      <p className="text-center text-gray-400 mt-4 md:mt-6 text-xs md:text-sm xl:text-base">
        Next: open today&apos;s practice notebook and work through it cell by cell.
      </p>

      <NotebookLink />
    </>
  )
}
