'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { formatDay, openRound, type FeedbackRound } from '@/lib/feedback/rounds'
import { SITE_URL } from '@/lib/site'

/**
 * A QR code to the feedback form, for the projector in the lab session.
 *
 * Only shown while a round is open. Checked in the browser after mount
 * because the lab pages are statically built, so the server can't know
 * today's date when the page is requested.
 */
export default function FeedbackQRCard() {
  const [round, setRound] = useState<FeedbackRound | null>(null)

  useEffect(() => setRound(openRound()), [])

  if (!round) return null

  const url = `${SITE_URL}/feedback`

  return (
    <div className="mt-8 md:mt-10 max-w-5xl mx-auto rounded-2xl border-2 border-bio-yellow/30 bg-bio-yellow/10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="rounded-xl bg-white p-3 shrink-0">
        <QRCodeSVG value={url} size={176} level="M" aria-label="QR code for the feedback form" />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white mb-2">
          📝 {round.title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base xl:text-lg leading-relaxed mb-4">
          Tell us what&apos;s working and what to change.
          Anonymous, about five minutes, open until{' '}
          <span className="text-white font-semibold">{formatDay(round.closesAt!)}</span>.
          Scan with your phone or click the button.
        </p>
        <Link
          href="/feedback"
          className="inline-block rounded-full bg-bio-yellow/20 hover:bg-bio-yellow/30 border border-bio-yellow/40 text-bio-yellow font-semibold px-5 py-2 text-sm md:text-base transition-colors"
        >
          Give feedback →
        </Link>
      </div>
    </div>
  )
}
