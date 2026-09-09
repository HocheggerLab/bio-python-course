import Link from 'next/link'

export const metadata = { title: 'About — Python for Biologists' }

const learningOutcomes = [
  'Python programming fundamentals',
  'Biological sequence analysis',
  'Data processing and visualisation',
  'Automation of lab calculations',
]

const prerequisites = [
  'No programming experience needed',
  'Basic biology knowledge',
  'A Google account (for Colab)',
  'Enthusiasm to learn!',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">

        <Link
          href="/"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to home
        </Link>

        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            About the course
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built for Year 3 students in the Life Sciences at the University of Sussex who
            want computational skills in their toolkit — and open to anyone who wants to
            learn Python for biology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <List title="What you'll learn" items={learningOutcomes} />
          <List title="Prerequisites" items={prerequisites} />
        </div>

        <div className="mt-8 md:mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 text-center">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Eight lectures and eight labs across the term, assessed by one test and two
            programming projects — see <Inline href="/assessment">Assessment</Inline> for
            what each involves and <Inline href="/schedule">Schedule</Inline> for when.
          </p>
        </div>

      </div>
    </div>
  )
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-bio-blue/25 bg-bio-blue/[0.06] p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-bio-blue mb-4">{title}</h2>
      <ul className="flex flex-col gap-2 md:gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-gray-200 text-sm md:text-base">
            <span className="text-bio-green shrink-0">✓</span>
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Inline({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-bio-blue hover:text-bio-yellow underline underline-offset-4 transition-colors"
    >
      {children}
    </Link>
  )
}
