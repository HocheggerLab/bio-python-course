import Link from 'next/link'
import { notFound } from 'next/navigation'

interface SessionInfo {
  num: number
  title: string
  outline: string[]
}

const sessions: Record<string, SessionInfo> = {
  '1': {
    num: 1,
    title: 'Using Notebooks',
    outline: [
      'What a notebook is',
      'Cells, kernels & shortcuts',
      'Running Python in Colab',
      'Practice notebook',
    ],
  },
  '2': {
    num: 2,
    title: 'Variables, Data Types & Operators',
    outline: [
      'Recap of lecture 1',
      'Variables & assignment',
      'Numeric & string types',
      'Arithmetic & string operations',
      'Practice notebook',
    ],
  },
  '3': {
    num: 3,
    title: 'Terminal Usage — Windows & Mac',
    outline: [
      'Why the terminal matters',
      'Navigating the file system',
      'Running Python from the terminal',
      'Cheatsheet & next steps',
    ],
  },
}

export default async function LabSessionPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const session = sessions[id]
  if (!session) notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">

        <Link
          href="/labs/sessions"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to sessions
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
