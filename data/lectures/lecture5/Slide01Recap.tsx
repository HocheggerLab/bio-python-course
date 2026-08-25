import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'

const mastered = [
  'Variables & types — the values data is made of',
  'Lists, strings & dictionaries — Python’s containers',
  'Loops & if / else — repeat work, make decisions',
  'Functions & errors — package it into robust tools',
]

export function Slide01Recap() {
  return (
    <>
      <SlideTitle>
        Part 1 Done — <GradientText variant="green">You have mastered the basics</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-8 mt-8 md:mt-12 xl:mt-16">

        {/* LEFT — the whole of Part 1 */}
        <SlideCard color="green" layout="start" padding="normal" className="md:col-span-3 border-l-4">
          <CardHeading size="md" color="green" className="mb-5 md:mb-8">
            Over four sessions you learned to…
          </CardHeading>
          <ul className="flex flex-col gap-4 md:gap-6">
            {mastered.map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 md:gap-4 text-lg md:text-2xl xl:text-3xl text-gray-200 leading-snug"
              >
                <span className="text-bio-green font-bold shrink-0">✓</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </SlideCard>

        {/* RIGHT — the turn that motivates the data half */}
        <SlideCard color="yellow" layout="middle" padding="normal" className="md:col-span-2 border-l-4">
          <CardHeading size="md" color="yellow" className="mb-4 md:mb-6">
            But notice one thing…
          </CardHeading>
          <p className="text-lg md:text-2xl xl:text-3xl text-gray-200 leading-relaxed">
            Every program so far ran on data{' '}
            <strong className="text-white">you typed in by hand</strong>.
          </p>
          <p className="text-base md:text-xl xl:text-2xl text-gray-400 leading-relaxed mt-4 md:mt-6">
            Real biology arrives as a{' '}
            <span className="text-bio-blue font-semibold">file with thousands of rows</span> — far
            too many to type. That&apos;s what Part 2 is for.
          </p>
        </SlideCard>

      </div>
    </>
  )
}
