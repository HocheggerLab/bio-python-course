import Link from 'next/link'
import { coreSessionsData } from '@/data/lectures'

/**
 * A lecture that isn't written yet.
 *
 * It names the session and its dataset rather than saying only "under
 * construction", so the nav links land somewhere that confirms what is coming
 * instead of looking like a broken page.
 */
export default function LectureStubPage({ num }: { num: number }) {
  const lecture = coreSessionsData.find((l) => l.id === num)

  return (
    <div className="min-h-screen flex items-center justify-center bg-bio-darkest px-6">
      <div className="text-center max-w-xl mx-auto">
        <div className="text-bio-blue/70 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Session {num}
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          {lecture?.title ?? 'Lecture'}
        </h1>

        {lecture?.dataset && (
          <div className="flex items-center justify-center gap-2 mt-5 md:mt-6 text-sm md:text-base">
            <span className="text-lg">{lecture.dataset.emoji}</span>
            <span className="text-bio-green font-semibold">{lecture.dataset.field}</span>
            <span className="text-gray-500">{lecture.dataset.source}</span>
          </div>
        )}

        <div className="w-16 h-px bg-white/20 mx-auto mt-7 md:mt-9" />

        {lecture?.topics?.length ? (
          <ul className="mt-7 md:mt-9 mb-0 space-y-2 text-gray-400 text-left inline-block">
            {lecture.topics.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-bio-blue">▸</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-8 md:mt-10">
          <span className="inline-flex items-center gap-2 text-gray-500 text-xs md:text-sm border border-white/10 rounded px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-bio-yellow/60" />
            Slides not written yet
          </span>
        </div>

        <div className="mt-8 md:mt-10">
          <Link href="/" className="btn-primary">
            ← Back to Course
          </Link>
        </div>
      </div>
    </div>
  )
}
