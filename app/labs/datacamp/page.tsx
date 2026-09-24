import Link from 'next/link'

interface Course {
  title: string
  description: string
  href: string
  status: 'available' | 'coming-soon'
}

const courses: Course[] = [
  {
    title: 'Introduction to Python',
    description: 'Variables, types, lists, functions. Pairs with lecture 1.',
    href: 'https://www.datacamp.com/courses/intro-to-python-for-data-science',
    status: 'available',
  },
  {
    title: 'Intermediate Python',
    description: 'Loops, dictionaries, NumPy. Pairs with lectures 2–3.',
    href: 'https://www.datacamp.com/courses/intermediate-python',
    status: 'coming-soon',
  },
  {
    title: 'Data Manipulation with pandas',
    description: 'DataFrames, filtering, aggregation. Pairs with lecture 5.',
    href: 'https://www.datacamp.com/courses/data-manipulation-with-pandas',
    status: 'coming-soon',
  },
  {
    title: 'Introduction to Data Visualization',
    description: 'Matplotlib & seaborn fundamentals. Pairs with lecture 6.',
    href: 'https://www.datacamp.com/courses/introduction-to-data-visualization-with-matplotlib',
    status: 'coming-soon',
  },
]

export default function DataCampPage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">

        <Link
          href="/labs"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Labs
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-purple-400 mb-4">
            DataCamp Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Curated DataCamp tracks that pair with each lecture — structured extra
            practice if you want more depth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 xl:gap-8">
          {courses.map((c) => {
            const disabled = c.status === 'coming-soon'
            const className = `block rounded-md border p-6 md:p-8 transition-colors
              ${disabled
                ? 'border-white/10 bg-bio-dark/40 opacity-60 cursor-not-allowed'
                : 'border-white/10 border-l-4 border-l-purple-400 bg-bio-dark/40 hover:border-purple-400/40'}
            `
            /* See the note in labs/cheatsheets: a coming-soon card must not
               be an <a> cancelling its own click, because that onClick
               cannot cross the Server Component boundary. */
            const Card = disabled ? 'div' : 'a'
            return (
              <Card
                key={c.title}
                {...(disabled
                  ? { 'aria-disabled': true as const }
                  : { href: c.href, target: '_blank', rel: 'noopener noreferrer' })}
                className={className}
              >
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <span className="text-3xl md:text-4xl">🎓</span>
                  <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white">{c.title}</h2>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  {c.description}
                </p>
                <span className={`inline-block text-xs md:text-sm font-semibold ${disabled ? 'text-white/40' : 'text-purple-400'}`}>
                  {disabled ? 'Coming soon' : 'Open course →'}
                </span>
              </Card>
            )
          })}
        </div>

      </div>
    </div>
  )
}
