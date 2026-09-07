import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { QRCodeSVG } from 'qrcode.react'
import { POLL_CONTENT } from '@/lib/poll/content'

const POLL_URL = 'https://python-for-biologists.vercel.app/poll'
const q = POLL_CONTENT['l7-q1']
const LETTERS = ['A', 'B', 'C', 'D']

export function Slide13Poll() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Quick check — <GradientText>which line is right?</GradientText>
        </>
      }
      lead={<>{q.prompt}</>}
      note={<>One tap. You can change your answer while the poll is open.</>}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
        <div className="flex flex-col gap-2 md:gap-3">
          {q.options.map((option, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-bio-blue/25 bg-bio-blue/10 px-4 py-3"
            >
              <span className="shrink-0 w-8 h-8 rounded-full grid place-items-center bg-bio-blue/25 text-bio-blue font-bold">
                {LETTERS[i]}
              </span>
              <code className="font-mono text-base md:text-xl xl:text-2xl text-gray-100">
                {option}
              </code>
            </div>
          ))}
        </div>

        <figure className="text-center">
          {/* Typing the URL on a phone in a dark room costs more time than the
              question does. */}
          <div className="inline-block bg-white p-3 rounded-xl">
            <QRCodeSVG value={POLL_URL} size={168} level="M" />
          </div>
          <figcaption className="mt-3 font-mono text-sm md:text-base text-bio-blue">
            /poll
          </figcaption>
        </figure>
      </div>
    </ConceptSlide>
  )
}
