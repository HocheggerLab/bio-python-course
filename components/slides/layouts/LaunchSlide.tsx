import React from 'react'
import { SlideTitle, GradientText } from '../SlideTitle'
import CountdownTimer from '../CountdownTimer'

/**
 * The last slide of every lab bridge: the handover to the notebook.
 *
 * The decks are runways, not lessons — so each one ends by answering the four
 * questions a student actually has when the talking stops: what am I opening,
 * what must I finish, how do I know I am done, and what do I do when I am
 * stuck. Leaving those implicit is what makes a room go quiet and stall.
 */

/** The order to try things in before putting a hand up. */
const DEFAULT_HELP = [
  'Read the traceback — the last line names the problem',
  'Compare with the demo cell directly above',
  'Ask your neighbour',
  'Ask a demonstrator',
  'Ask Gemini — after you have tried the first four',
]

export function LaunchSlide({
  notebook,
  url,
  solutionsUrl,
  headline,
  core,
  doneWhen,
  goingFurther,
  minutes = 15,
  help = DEFAULT_HELP,
}: {
  /** As it appears in Colab, e.g. "03 · Data types". Omit for a session with
   *  no notebook — the terminal one. */
  notebook?: string
  url?: string
  /** Worked answers, openly linked. A student who copies has only cheated
   *  themselves out of a formative exercise; a student who is stuck at 21:00
   *  with nobody to ask is the case worth designing for. */
  solutionsUrl?: string
  /** Replaces "Now open <notebook>" when the task is not a notebook. */
  headline?: React.ReactNode
  /** The tasks everyone must finish. */
  core: React.ReactNode
  /** The visible finish line — usually "every self-check prints ✅". */
  doneWhen: React.ReactNode
  /** For those who get there early. */
  goingFurther?: React.ReactNode
  minutes?: number
  help?: string[]
}) {
  return (
    <>
      {/* The clock sits above the title: it is the thing the room glances back
          at, so it must not be buried in a corner under the help list. */}
      <div className="flex justify-center mb-2 md:mb-3">
        <CountdownTimer minutes={minutes} />
      </div>

      <SlideTitle>
        {headline ?? (
          <>
            Now open <GradientText>{notebook}</GradientText>
          </>
        )}
      </SlideTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5 md:gap-8 mt-5 md:mt-7 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <Row label="Core" color="text-bio-green" border="border-bio-green/40">
            {core}
          </Row>
          <Row label="Finished when" color="text-bio-blue" border="border-bio-blue/40">
            {doneWhen}
          </Row>
          {goingFurther && (
            <Row label="Going further" color="text-bio-yellow" border="border-bio-yellow/40">
              {goingFurther}
            </Row>
          )}

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start mt-1 inline-flex items-center gap-2 rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-5 py-2 text-sm md:text-base xl:text-lg transition-colors"
            >
              📓 Open {notebook} →
            </a>
          )}

          {solutionsUrl && (
            <a
              href={solutionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-gray-400 hover:text-gray-200 text-xs md:text-sm underline underline-offset-4 transition-colors"
            >
              🔑 Solutions — try it first, they are more use afterwards
            </a>
          )}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
          <p className="text-gray-400 text-xs md:text-sm xl:text-base uppercase tracking-widest text-center">
            If you get stuck
          </p>
          <ol className="mt-3 md:mt-4 flex flex-col gap-2.5 md:gap-3.5 text-gray-200 text-sm md:text-lg xl:text-xl">
            {help.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full grid place-items-center bg-white/10 text-gray-300 text-sm md:text-base font-bold">
                  {i + 1}
                </span>
                <span className="leading-snug pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}

function Row({
  label,
  color,
  border,
  children,
}: {
  label: string
  color: string
  border: string
  children: React.ReactNode
}) {
  return (
    <div className={`rounded-xl border-l-4 ${border} bg-white/[0.03] px-4 py-3 md:px-5 md:py-4`}>
      <div className={`${color} text-xs md:text-sm font-bold uppercase tracking-widest mb-1`}>
        {label}
      </div>
      <div className="text-gray-100 text-sm md:text-lg xl:text-xl leading-snug">{children}</div>
    </div>
  )
}
