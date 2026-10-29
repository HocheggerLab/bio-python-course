'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'
import { useRequestPyodide } from '@/components/lectures/LazyPyodideWrapper'
import { sectionLabel, type PracticeQuestion } from '@/lib/practice'

const PythonCodeRunner = dynamic(() => import('@/components/python/PythonCodeRunner'), {
  ssr: false,
  loading: () => <p className="text-gray-400 text-sm">Loading the Python editor…</p>,
})

export interface Attempt {
  /** The option the student picked, or null if they only revealed it. */
  choice: number | null
  correct: boolean
}

const LETTERS = 'abcd'

/* Sentences ("A KeyError is raised.") read better in the UI font; everything
   else in an option is code or output and stays monospace. */
const isSentence = (o: string) => /[.?]$/.test(o) && o.includes(' ')

function codeHeight(code: string) {
  const lines = code.split('\n').length
  return `${Math.min(Math.max(lines + 3, 7), 22) * 21}px`
}

export default function QuestionCard({
  question,
  number,
  total,
  attempt,
  onAttempt,
}: {
  question: PracticeQuestion
  number: number
  total: number
  attempt?: Attempt
  onAttempt: (a: Attempt) => void
}) {
  const [picked, setPicked] = useState<number | null>(null)
  const [tryOpen, setTryOpen] = useState(false)
  const requestPyodide = useRequestPyodide()
  const done = attempt !== undefined
  const shown = done ? attempt.choice : picked

  const openTry = () => {
    requestPyodide()
    setTryOpen(true)
  }

  return (
    <article className="card !p-5 md:!p-8" aria-labelledby={`q-${question.id}`} data-question-id={question.id}>
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-400 mb-3">
        <span className="font-semibold text-gray-300">
          Question {number} of {total}
        </span>
        <span aria-hidden>·</span>
        <span>{sectionLabel(question.section)}</span>
        <span aria-hidden>·</span>
        <span className="capitalize">{question.level}</span>
      </div>

      <h2 id={`q-${question.id}`} className="text-lg md:text-2xl font-semibold text-white mb-4">
        {question.prompt}
      </h2>

      {question.code && (
        <div className="rounded-lg border border-code-border overflow-hidden mb-5">
          <SyntaxHighlighter code={question.code} className="!rounded-none text-sm md:text-base" />
        </div>
      )}

      <div role="radiogroup" aria-label="Answer options" className="flex flex-col gap-2 md:gap-3">
        {question.options.map((opt, i) => {
          const isAnswer = i === question.answer
          const isShown = shown === i
          let tone = 'border-white/10 hover:border-bio-blue/60'
          if (done && isAnswer) tone = 'border-bio-green bg-bio-green/10'
          else if (done && isShown) tone = 'border-red-400 bg-red-500/10'
          else if (!done && isShown) tone = 'border-bio-blue bg-bio-blue/10'
          return (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={isShown}
              disabled={done}
              onClick={() => setPicked(i)}
              className={`flex items-start gap-3 text-left rounded-xl border px-4 py-3 transition-colors disabled:cursor-default ${tone}`}
            >
              <span className="font-semibold text-gray-400 shrink-0">{LETTERS[i]})</span>
              <span
                className={`whitespace-pre-wrap break-words text-gray-100 ${
                  isSentence(opt) ? 'text-base md:text-lg' : 'font-mono text-sm md:text-base'
                }`}
              >
                {opt}
              </span>
              {done && isAnswer && <span className="ml-auto text-bio-green font-semibold shrink-0">✓</span>}
            </button>
          )
        })}
      </div>

      {!done ? (
        <div className="flex flex-wrap gap-3 mt-5">
          <button
            type="button"
            className="btn-primary !py-2 !px-5 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={picked === null}
            onClick={() => picked !== null && onAttempt({ choice: picked, correct: picked === question.answer })}
          >
            Check answer
          </button>
          <button type="button" className="btn-secondary !py-2 !px-5" onClick={() => onAttempt({ choice: null, correct: false })}>
            Show solution
          </button>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          <div
            className={`rounded-xl border-l-4 px-4 py-3 ${
              attempt.correct ? 'border-bio-green bg-bio-green/10' : 'border-bio-yellow bg-bio-yellow/10'
            }`}
          >
            <p className="font-semibold text-white mb-1">
              {attempt.correct
                ? 'Correct!'
                : attempt.choice === null
                  ? `The answer is ${LETTERS[question.answer]}).`
                  : `Not quite — the answer is ${LETTERS[question.answer]}).`}
            </p>
            <p className="text-gray-200 leading-relaxed">{question.explanation}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/practice/concepts/${question.section}`}
              className="btn-secondary !py-2 !px-5 text-sm"
            >
              Learn the concept: {sectionLabel(question.section)} →
            </Link>
            {!tryOpen && (
              <button type="button" className="btn-secondary !py-2 !px-5 text-sm" onClick={openTry}>
                ▶ Try it yourself
              </button>
            )}
          </div>

          {tryOpen && (
            <div>
              <p className="text-gray-400 text-sm mb-2">
                Run it, then change something and run it again. Nothing you do here is saved.
              </p>
              <PythonCodeRunner
                initialCode={question.tryCode ?? '# Try it yourself\n'}
                height={codeHeight(question.tryCode ?? '')}
              />
            </div>
          )}
        </div>
      )}
    </article>
  )
}
