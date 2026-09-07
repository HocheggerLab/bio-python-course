import TeachToggle from '@/components/poll/TeachToggle'
import { isTeacher } from '@/lib/poll/teacher'

export const dynamic = 'force-dynamic'

export const metadata = { title: 'Teacher mode — Python for Biologists' }

/**
 * Set teacher mode once per machine, for the term.
 *
 * Replaces the ?teach=1 query parameter, which had to be retyped on every
 * lecture and was readable by anyone who guessed it.
 */
export default async function TeachPage() {
  const active = await isTeacher()
  return (
    <div className="min-h-screen bg-bio-darkest px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <p className="text-bio-blue/70 text-xs md:text-sm font-semibold uppercase tracking-widest text-center mb-6">
          Teacher mode
        </p>
        <TeachToggle active={active} />
      </div>
    </div>
  )
}
