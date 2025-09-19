'use client'

import Link from 'next/link'

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker p-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors">
          ← Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bio-blue mb-4">
            Practice Sessions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The only way to learn programming is through practice. Build your own projects,
            experiment with code, and discover what's possible.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-8 mb-12">
          <h2 className="text-2xl font-bold text-bio-blue mb-6 text-center">
            🚀 Why Practice Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl mt-1">💪</span>
                <div>
                  <h4 className="font-semibold text-bio-green mb-2">Build Muscle Memory</h4>
                  <p className="text-gray-300">Programming is like learning an instrument - you need to practice regularly to build fluency with Python syntax and patterns.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl mt-1">🧪</span>
                <div>
                  <h4 className="font-semibold text-bio-green mb-2">Experiment Safely</h4>
                  <p className="text-gray-300">Try new approaches, break things, and learn from mistakes. Practice notebooks are your safe space to explore.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl mt-1">🎯</span>
                <div>
                  <h4 className="font-semibold text-bio-green mb-2">Apply Knowledge</h4>
                  <p className="text-gray-300">Transform lecture concepts into working code. See how Python solves real biological problems.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl mt-1">🏗️</span>
                <div>
                  <h4 className="font-semibold text-bio-green mb-2">Build Projects</h4>
                  <p className="text-gray-300">Start small and build up. Each practice session adds tools to your biological programming toolkit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/40 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-bio-blue mb-6 text-center">
            📝 How Practice Sessions Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-bio-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-bio-blue font-bold text-2xl">1</span>
              </div>
              <h3 className="font-semibold text-white mb-3">Voluntary & Flexible</h3>
              <p className="text-gray-300 text-sm">
                Practice sessions are completely optional. Work at your own pace,
                focus on topics that interest you most.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-bio-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-bio-blue font-bold text-2xl">2</span>
              </div>
              <h3 className="font-semibold text-white mb-3">Lab Support Available</h3>
              <p className="text-gray-300 text-sm">
                Bring questions to lab sessions. Get help from instructors
                and collaborate with classmates.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-bio-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-bio-blue font-bold text-2xl">3</span>
              </div>
              <h3 className="font-semibold text-white mb-3">Build on Lectures</h3>
              <p className="text-gray-300 text-sm">
                Each notebook extends lecture concepts with hands-on exercises
                and biological applications.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Notebooks */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-8 text-center">
            📚 Practice Notebooks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Lecture 1 Practice */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🐍</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  Lecture 1 Practice
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Python basics, variables, and your first biological calculations
                </p>
              </div>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_P1_lab_calculator_toolkit.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors"
              >
                Open Practice Notebook
              </a>
            </div>

            {/* Lecture 2 Practice */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🧬</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  Lecture 2 Practice
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  String manipulation and DNA sequence analysis techniques
                </p>
              </div>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/L2_P1_practice.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors"
              >
                Open Practice Notebook
              </a>
            </div>

            {/* Lecture 3 Practice */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  Lecture 3 Practice
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Data analysis with functions and dictionaries
                </p>
              </div>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_3/L3_P1_practice.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors"
              >
                Open Practice Notebook
              </a>
            </div>

            {/* Lecture 4 Practice */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors opacity-75">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">📝</div>
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  Lecture 4 Practice
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Lists and file I/O for biological data processing
                </p>
              </div>
              <div className="block w-full bg-gray-600 text-gray-400 py-3 px-4 rounded-lg font-semibold text-center">
                Coming Soon
              </div>
            </div>

            {/* Lecture 5 Practice */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors opacity-75">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">📈</div>
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  Lecture 5 Practice
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Data visualization and advanced analysis
                </p>
              </div>
              <div className="block w-full bg-gray-600 text-gray-400 py-3 px-4 rounded-lg font-semibold text-center">
                Coming Soon
              </div>
            </div>

          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            💡 Practice Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Start small:</strong> Don't try to solve everything at once</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Make it your own:</strong> Modify examples with your own data</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Ask questions:</strong> Bring challenges to lab sessions</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Share discoveries:</strong> Show classmates what you've built</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Connect concepts:</strong> Link exercises to your research interests</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Have fun:</strong> Programming should be enjoyable and rewarding</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}