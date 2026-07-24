import Link from 'next/link'
import { notFound } from 'next/navigation'
import SlideViewer from '@/components/lectures/SlideViewer'
import { LectureData } from '@/data/lectures/types'
import { session1Data } from '@/data/sessions/session1'
import { session2Data } from '@/data/sessions/session2'
import { session3Data } from '@/data/sessions/session3'
import { session4Data } from '@/data/sessions/session4'
import { session5Data } from '@/data/sessions/session5'

interface SessionStub {
  num: number
  title: string
  outline: string[]
}

const sessionStubs: Record<string, SessionStub> = {}

const sessionDecks: Record<string, LectureData> = {
  '1': session1Data,
  '2': session2Data,
  '3': session3Data,
  '4': session4Data,
  '5': session5Data,
}

export default async function Lab1SessionPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const deck = sessionDecks[id]
  if (deck) {
    return (
      <>
        <Link
          href="/labs/1"
          className="fixed top-20 left-4 md:top-24 md:left-6 z-40 inline-flex items-center gap-2 rounded-full bg-bio-dark/80 backdrop-blur-md border border-bio-blue/30 text-bio-blue hover:bg-bio-blue/20 hover:text-bio-light-blue transition-colors px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold shadow-lg"
        >
          ← Lab 1
        </Link>
        <SlideViewer lecture={deck} />
      </>
    )
  }

  const session = sessionStubs[id]
  if (!session) notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">

        <Link
          href="/labs/1"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Lab 1
        </Link>

        <div className="rounded-2xl border-2 border-bio-blue/30 bg-bio-blue/10 p-8 md:p-12 xl:p-16">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span className="inline-flex items-center justify-center rounded-full font-bold w-12 h-12 md:w-14 md:h-14 text-lg md:text-xl bg-bio-blue/20 text-bio-blue">
              {session.num}
            </span>
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white">
              {session.title}
            </h1>
          </div>

          <p className="text-bio-yellow font-semibold text-sm md:text-base mb-3 md:mb-4">
            🚧 Slide deck under construction
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            This session will reuse the lecture slide infrastructure to walk
            you through a recap and the linked practice notebook.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-bio-blue mb-3 md:mb-4">
            Outline
          </h2>
          <ul className="flex flex-col gap-2 md:gap-3 text-gray-300 text-sm md:text-base xl:text-lg">
            {session.outline.map((item) => (
              <li key={item} className="flex items-start gap-2 md:gap-3">
                <span className="text-bio-blue">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
