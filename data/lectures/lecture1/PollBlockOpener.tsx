import { SectionSlide } from '@/components/slides/layouts'
import { QRCodeSVG } from 'qrcode.react'

const POLL_URL = 'https://python-for-biologists.vercel.app/poll'

/**
 * Opens the closing poll block, and is where students meet /poll for the
 * first time — so it explains the mechanism once, in week one, rather than
 * mid-flow later in the term.
 */
export function PollBlockOpener() {
  return (
    <SectionSlide
      eyebrow="Three questions"
      title="What stuck?"
      accent="one tap each"
      note="Anonymous, and it is not marked. It tells me what to go over again — so a wrong answer here is worth more to me than a right one."
      action={
        <figure className="mt-1">
          <div className="inline-block bg-white p-3 rounded-xl">
            <QRCodeSVG value={POLL_URL} size={180} level="M" />
          </div>
          <figcaption className="mt-3 font-mono text-base md:text-lg xl:text-xl text-bio-blue">
            /poll
          </figcaption>
          <figcaption className="mt-1 text-gray-400 text-xs md:text-sm">
            Bookmark it — the same page is used every week.
          </figcaption>
        </figure>
      }
    />
  )
}
