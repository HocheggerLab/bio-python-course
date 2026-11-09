import Link from 'next/link'
import HelpQueueAdmin from '@/components/help/HelpQueueAdmin'
import { isTeacher } from '@/lib/poll/teacher'

export const dynamic = 'force-dynamic'

export const metadata = { title: 'Help queue', robots: { index: false } }

/**
 * The helpers' view of the lab queue, behind the teacher cookie from /teach.
 * Built for a phone in one hand. Names and questions are rendered as plain
 * text, never as HTML.
 */
export default async function HelpQueueAdminPage() {
  if (!(await isTeacher())) {
    return (
      <div className="min-h-screen bg-bio-darkest pt-32 px-4 text-center text-gray-300">
        Teacher mode only. <Link href="/teach" className="text-bio-blue underline">Sign in at /teach</Link>.
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="mx-auto w-full max-w-xl">
        <h1 className="text-3xl font-bold text-bio-blue mb-1">Help queue</h1>
        <p className="text-sm text-gray-400 mb-6">
          Students join at <span className="font-mono text-gray-200">/help</span>. Updates every few seconds.
        </p>
        <HelpQueueAdmin />
      </div>
    </div>
  )
}
