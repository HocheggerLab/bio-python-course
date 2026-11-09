'use client'

import Link from 'next/link'
import { QRCodeSVG } from 'qrcode.react'
import { SITE_URL } from '@/lib/site'

/** A QR code to the lab help queue, for the projector at the start of a lab. */
export default function HelpQRCard({ className = '' }: { className?: string }) {
  const url = `${SITE_URL}/help`

  return (
    <div
      className={`max-w-5xl mx-auto rounded-2xl border-2 border-bio-green/40 bg-bio-green/10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 ${className}`}
    >
      <div className="rounded-xl bg-white p-3 shrink-0">
        <QRCodeSVG value={url} size={176} level="M" aria-label="QR code for the lab help queue" />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white mb-2">
          🙋 Stuck? Join the help queue
        </h2>
        <p className="text-gray-300 text-sm md:text-base xl:text-lg leading-relaxed mb-4">
          Add your name, and what you&apos;re stuck on if you like, and we&apos;ll come to you in
          order. Only the people helping can see it. Solved it before we get there? Just leave
          the queue. Scan with your phone, or go to{' '}
          <span className="font-mono text-white">/help</span>.
        </p>
        <Link
          href="/help"
          className="inline-block rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-5 py-2 text-sm md:text-base transition-colors"
        >
          Join the queue →
        </Link>
      </div>
    </div>
  )
}
