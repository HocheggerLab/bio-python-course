import Link from 'next/link'

export default function DevToolsPage() {
  return (
    <div className="min-h-screen bg-bio-darkest p-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center mb-4 text-bio-blue hover:text-bio-yellow transition-colors">
          ← Back to Home
        </Link>

        <div className="mt-8 text-center py-12">
          <div className="text-5xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-white mb-2">Dev Tools Guide</h2>
          <p className="text-gray-400">Being redesigned for the new course structure.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N1_collab_notebooks.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="h-full p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20 hover:border-green-400/50 transition-colors">
              <div className="text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  Continue with Colab
                </h3>
                <p className="text-gray-300">
                  Stay with the familiar Google Colab environment
                </p>
                <div className="mt-4">
                  <span className="text-green-400 group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          </a>

          <Link href="/dev-tools/cursor-setup" className="block group">
            <div className="h-full p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20 hover:border-bio-blue/50 transition-colors">
              <div className="text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  Cursor Setup
                </h3>
                <p className="text-gray-300">
                  Set up a professional development environment
                </p>
                <div className="mt-4">
                  <span className="text-bio-blue group-hover:underline">
                    Get Started →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
          <h2 className="text-2xl font-bold text-bio-blue mb-4">
            Quick Downloads
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://code.visualstudio.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-bio-darker rounded-lg hover:bg-bio-dark/70 transition-colors"
            >
              <span className="text-gray-300">Download VS Code</span>
              <span className="text-bio-blue">↗</span>
            </a>
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-bio-darker rounded-lg hover:bg-bio-dark/70 transition-colors"
            >
              <span className="text-gray-300">Download Python</span>
              <span className="text-bio-blue">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}