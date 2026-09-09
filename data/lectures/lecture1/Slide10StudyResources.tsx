import { GradientText } from '@/components/slides/SlideTitle'
import { ParallelSet } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody, CardPill } from '@/components/slides/SlideCard'

// Four hours a week of contact time only gets you so far — the third card is
// the one that decides the grade, so it carries the only outbound link.
const furtherLinks = [
  { label: 'docs.python.org', href: 'https://docs.python.org/3/', desc: 'The official reference' },
  { label: 'realpython.com', href: 'https://realpython.com/', desc: 'Tutorials that go deep' },
  { label: 'training.talkpython.fm', href: 'https://training.talkpython.fm/', desc: 'Video courses' },
]

export function Slide10StudyResources() {
  return (
    <ParallelSet
      title={<>How You&apos;ll <GradientText>Study Python</GradientText></>}
      lead="Three strands, every week — two with us in the room, one on your own."
      columns={3}
      note={
        /* SlideNote renders a <p>, so everything here must stay inline —
           spans with flex give the same layout without invalid nesting. */
        <span className="flex flex-col items-center gap-2 md:gap-3">
          <span className="text-gray-400 text-sm md:text-base xl:text-lg">
            Further useful links
          </span>
          <span className="flex flex-wrap justify-center gap-2 md:gap-3">
            {furtherLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                title={l.desc}
                className="not-italic rounded border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 px-3 md:px-4 py-1.5 md:py-2 font-mono text-xs md:text-sm xl:text-base text-gray-300 hover:text-white transition-colors"
              >
                {l.label} →
              </a>
            ))}
          </span>
        </span>
      }
    >

      {/* 1 — Lectures */}
      <SlideCard color="blue" layout="start" padding="compact">
        <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
          🎓 Lectures
        </CardHeading>
        <CardPill color="blue" className="mb-3 md:mb-4 self-start">
          1 hour × 8 weeks
        </CardPill>
        <CardBody>
          The concepts, demonstrated live. Every slide runs Python in the browser,
          so you can follow along and try things as we go.
        </CardBody>
      </SlideCard>

      {/* 2 — Labs */}
      <SlideCard color="green" layout="start" padding="compact">
        <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
          🧪 Labs
        </CardHeading>
        <CardPill color="green" className="mb-3 md:mb-4 self-start">
          2 hours × 8 weeks
        </CardPill>
        <CardBody>
          Hands-on exercises with us on hand to help. This is where the code
          actually starts to stick — come, and bring your questions.
        </CardBody>
      </SlideCard>

      {/* 3 — Self study */}
      <SlideCard color="yellow" layout="start" padding="compact">
        <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
          📚 Self study
        </CardHeading>
        <CardPill color="yellow" className="mb-3 md:mb-4 self-start">
          Your own time
        </CardPill>
        <CardBody>
          Revise the lecture material, then complete the weekly DataCamp
          assignments — we have a classroom set up for the course.
        </CardBody>
        <a
          href="https://www.datacamp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start mt-3 md:mt-4 rounded bg-bio-yellow/20 hover:bg-bio-yellow/30 border border-bio-yellow/40 text-bio-yellow font-semibold px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
        >
          DataCamp →
        </a>
      </SlideCard>

    </ParallelSet>
  )
}
