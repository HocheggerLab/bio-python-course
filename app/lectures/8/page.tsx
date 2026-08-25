import Link from 'next/link'

export default function LecturePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bio-darkest">
      <div className="text-center max-w-lg mx-auto px-6">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Lecture <span className="text-gradient">Under Construction</span>
        </h1>
        <p className="text-gray-300 mb-8">
          This lecture is being redesigned for the new course structure.
          Check back soon.
        </p>
        <Link href="/" className="btn-primary">
          ← Back to Course
        </Link>
      </div>
    </div>
  )
}
