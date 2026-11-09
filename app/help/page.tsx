import HelpQueueStudent from '@/components/help/HelpQueueStudent'

export const metadata = {
  title: 'Lab help queue',
  robots: { index: false },
}

/** Students join the lab help queue here; helpers work through it at /teach/help. */
export default function HelpPage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="mx-auto w-full max-w-md">
        <p className="text-bio-blue/70 text-xs md:text-sm font-semibold uppercase tracking-widest text-center mb-2">
          Lab help
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-bio-blue text-center mb-4">Get in the queue</h1>
        <p className="text-gray-300 text-center leading-relaxed mb-8">
          Stuck? Add your name and we&apos;ll come to you in order. If you solve it
          before we get there, just leave the queue.
        </p>
        <HelpQueueStudent />
      </div>
    </div>
  )
}
