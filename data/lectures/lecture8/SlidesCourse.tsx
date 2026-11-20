import Link from 'next/link'
import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, SectionSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'

/* The last ten minutes: the course in one look back, then where to go next.
   Feedback is collected elsewhere, not in the deck. */

export function SlideCourseSection() {
  return (
    <SectionSlide
      eyebrow="The last lecture"
      title="Looking"
      accent="back"
      note="Eight weeks ago most of you had never written a line of Python."
    />
  )
}

const weeks: [string, string, string][] = [
  ['1', 'Types and variables', 'a number, a string, a name for it'],
  ['2', 'Lists, strings, dictionaries', 'a whole sequence, and a codon table'],
  ['3', 'Control flow', 'loops and decisions, so the program runs itself'],
  ['4', 'Functions and files', 'write it once, read real files, handle errors'],
  ['5', 'Arrays', 'a neuron’s trials as one numpy array'],
  ['6', 'DataFrames', 'filter, group and ask a table a question'],
  ['7', 'Plotting', 'a figure that finds the answer for you'],
  ['8', 'Statistics', 'whether the answer is real'],
]

export function SlideCourseLookBack() {
  return (
    <ConceptSlide
      maxWidth="5xl"
      title={
        <>
          Eight weeks, <GradientText>one toolkit</GradientText>
        </>
      }
      note={
        <>
          Each week built on the last. Your project uses all eight: read a file, clean a table, write
          functions, test, plot, and say what it means.
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
        {weeks.map(([n, topic, what]) => (
          <div
            key={n}
            className="grid grid-cols-[2rem_1fr] gap-x-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 items-baseline"
          >
            <span className="text-bio-blue font-bold text-base md:text-lg">{n}</span>
            <span>
              <span className="text-white font-semibold text-sm md:text-base xl:text-lg">{topic}</span>
              <span className="block text-gray-400 text-xs md:text-sm xl:text-base">{what}</span>
            </span>
          </div>
        ))}
      </div>
    </ConceptSlide>
  )
}

type Path = { head: string; color: 'blue' | 'green'; body: React.ReactNode; items?: string[] }

const paths: Path[] = [
  {
    head: 'Use it when you need it',
    color: 'blue',
    body: (
      <>
        Not everyone wants to code every day, and you don&apos;t need to. What you learned stays
        useful: you can load a data table, analyse it, make a figure, write a short script when you
        need one, and read code that someone else, or an AI, wrote for you.
      </>
    ),
  },
  {
    head: 'Go further',
    color: 'green',
    body: <>You are at the very beginning of the journey. Next steps:</>,
    items: [
      'Learn the tools: the terminal, git, VS Code',
      'Learn agentic coding: working with an AI that writes code',
      'Keep going on DataCamp: statistics, then machine learning',
      'Try a new area: web development, electronics, image analysis',
    ],
  },
]

const bonus: [string, string][] = [
  ['9', 'Analysing Images in Python'],
  ['10', 'Coding with Agentic AI'],
]

export function SlideWhereNext() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Where next? <GradientText>Two paths</GradientText>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {paths.map((p) => (
          <SlideCard key={p.head} color={p.color} layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color={p.color} className="mb-2">
              {p.head}
            </CardHeading>
            <p className="text-gray-300 text-sm md:text-base xl:text-lg leading-snug">{p.body}</p>
            {p.items && (
              <ul className="mt-2 flex flex-col gap-1.5 text-gray-300 text-sm md:text-base xl:text-lg leading-snug">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-bio-green">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}
          </SlideCard>
        ))}
      </div>
      <div className="mt-5 md:mt-8 text-center">
        <p className="text-gray-400 text-sm md:text-base xl:text-lg mb-3">
          Two bonus sessions after week 11, once your project is in. Not assessed: come for what you
          want to do next.
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {bonus.map(([n, t]) => (
            <Link key={n} href="/#bonus" className="btn-secondary !py-1.5 !px-4 text-sm md:text-base">
              {n}. {t} →
            </Link>
          ))}
        </div>
      </div>
    </ConceptSlide>
  )
}

export function SlideResources() {
  return (
    <SectionSlide
      eyebrow="Resources"
      title="Where to"
      accent="learn more"
      status="List to come"
    />
  )
}
