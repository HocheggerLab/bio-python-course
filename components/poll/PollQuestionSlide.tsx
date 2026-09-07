import { QRCodeSVG } from 'qrcode.react'
import { getContent } from '@/lib/poll/content'

const POLL_URL = 'https://python-for-biologists.vercel.app/poll'
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

/**
 * The projector half of a poll: the question, the options, and the way in.
 *
 * Students read the code here and answer on their phone, so the QR code has
 * to be on the same slide — typing a URL in a dark room costs more time than
 * the question does.
 */
export default function PollQuestionSlide({ questionId }: { questionId: string }) {
  const q = getContent(questionId)
  if (!q) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
      <div>
        {q.code && (
          <pre className="mb-4 p-3 rounded-lg bg-bio-dark/70 border border-white/10 font-mono text-sm md:text-lg xl:text-xl text-gray-200 overflow-x-auto">
            {q.code}
          </pre>
        )}
        <div className="flex flex-col gap-2 md:gap-2.5">
          {q.options.map((option, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-bio-blue/25 bg-bio-blue/10 px-3 py-2 md:px-4 md:py-2.5"
            >
              <span className="shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full grid place-items-center bg-bio-blue/25 text-bio-blue font-bold text-sm">
                {LETTERS[i]}
              </span>
              <code
                className={`text-gray-100 ${
                  q.optionsAreCode ? 'font-mono text-sm md:text-lg xl:text-xl' : 'text-base md:text-lg'
                }`}
              >
                {option}
              </code>
            </div>
          ))}
        </div>
      </div>

      <figure className="text-center">
        <div className="inline-block bg-white p-3 rounded-xl">
          <QRCodeSVG value={POLL_URL} size={150} level="M" />
        </div>
        <figcaption className="mt-2 font-mono text-sm md:text-base text-bio-blue">/poll</figcaption>
      </figure>
    </div>
  )
}
