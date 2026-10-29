import Link from 'next/link'
import { CONCEPTS, QUESTIONS } from '@/lib/practice'

export const metadata = {
  title: 'Practice — Concepts',
  description: 'The core ideas behind the practice questions, with links to the lecture slides and notebooks.',
  alternates: { canonical: '/practice/concepts' },
}

export default function ConceptsIndex() {
  return (
    <section className="pt-28 md:pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <Link href="/practice" className="text-bio-blue hover:underline text-sm">
          ← Back to the practice questions
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-3">
          <span className="text-gradient">Concepts</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          One page per topic from Lectures 1–4: the idea in a few lines, examples you can read, and links to the
          slides and notebooks where it is taught.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONCEPTS.map((c) => (
            <Link key={c.slug} href={`/practice/concepts/${c.slug}`} className="card !p-5 hover:border-bio-blue/60 transition-colors">
              <span className="text-xs text-gray-400">{c.lecture}</span>
              <span className="block text-lg md:text-xl font-semibold text-white mt-1">{c.title}</span>
              <span className="block text-gray-300 text-sm mt-2">{c.summary}</span>
              <span className="block text-gray-500 text-xs mt-3">
                {QUESTIONS.filter((q) => q.section === c.slug).length} practice questions
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
