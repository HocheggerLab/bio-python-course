import PollForm from '@/components/poll/PollForm'

export const metadata = {
  title: 'Lecture poll — Python for Biologists',
}

/**
 * One page for the whole term.
 *
 * Students bookmark this and never navigate again: it asks the server what is
 * open and renders whatever that is. Embedding the poll in the slide deck
 * would mean finding the right lecture and the right slide on a phone, which
 * costs more time than the question does.
 */
export default function PollPage() {
  return (
    <div className="min-h-screen bg-bio-darkest px-4 py-8 md:py-14">
      <div className="mx-auto w-full max-w-xl">
        <p className="text-bio-blue/70 text-xs md:text-sm font-semibold uppercase tracking-widest text-center mb-6">
          Lecture poll
        </p>
        <PollForm />
      </div>
    </div>
  )
}
