import Link from 'next/link'
import LazyPyodideWrapper from '@/components/lectures/LazyPyodideWrapper'
import PracticeApp from '@/components/practice/PracticeApp'

export const metadata = {
  title: 'Practice — Python Questions',
  description:
    'Practise Python for biology: 150 multiple-choice questions on Lectures 1–4, at three levels, with explanations and an editor to try the code.',
  alternates: { canonical: '/practice' },
}

export default function PracticePage() {
  return (
    <LazyPyodideWrapper>
      <section className="pt-28 md:pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            <span className="text-gradient">Practice</span> questions
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mb-2">
            150 questions on Lectures 1–4 — variables to errors — in three levels of 50. They come in a random order,
            your progress is saved in this browser, and every answer explains itself and links to the concept, the
            lecture slide and the notebook.
          </p>
          <p className="text-gray-400 text-sm md:text-base mb-8">
            Stuck on an idea? Read the{' '}
            <Link href="/practice/concepts" className="text-bio-blue hover:underline">
              concept pages
            </Link>
            . After you answer, <span className="text-gray-200">Try it yourself</span> opens the code in a Python
            editor.
          </p>
          <PracticeApp />
        </div>
      </section>
    </LazyPyodideWrapper>
  )
}
