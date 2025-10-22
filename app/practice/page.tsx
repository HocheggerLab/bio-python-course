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
            Revision Notebooks
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Topic-specific practice notebooks to help you master key Python concepts.
            Each notebook focuses on a specific skill with hands-on exercises.
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
            📝 How Revision Notebooks Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-bio-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-bio-blue font-bold text-2xl">1</span>
              </div>
              <h3 className="font-semibold text-white mb-3">Topic-Focused</h3>
              <p className="text-gray-300 text-sm">
                Each notebook targets a specific Python concept or skill.
                Focus on areas where you need more practice.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-bio-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-bio-blue font-bold text-2xl">2</span>
              </div>
              <h3 className="font-semibold text-white mb-3">Self-Paced Learning</h3>
              <p className="text-gray-300 text-sm">
                Work through exercises at your own speed. Repeat topics
                as many times as you need to master them.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-bio-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-bio-blue font-bold text-2xl">3</span>
              </div>
              <h3 className="font-semibold text-white mb-3">Hands-On Practice</h3>
              <p className="text-gray-300 text-sm">
                Apply concepts with targeted exercises and biological
                examples that reinforce key skills.
              </p>
            </div>
          </div>
        </div>

        {/* Revision Notebooks */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-8 text-center">
            📚 Topic-Specific Revision
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Iteration Basics */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  Iteration Basics
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Master loops and iteration patterns for processing biological data
                </p>
              </div>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/revision/Lecture01_Iteration_Basics.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors"
              >
                Open Revision Notebook
              </a>
            </div>

            {/* DNA Sequences */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🧬</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  DNA Sequences
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  String manipulation and DNA sequence analysis techniques
                </p>
              </div>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/revision/Lecture02_DNA_Sequences.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors"
              >
                Open Revision Notebook
              </a>
            </div>

            {/* Dictionaries */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">📖</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  Dictionaries
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Working with key-value pairs for biological data organization
                </p>
              </div>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/revision/Lecture02_Dictionaries.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors"
              >
                Open Revision Notebook
              </a>
            </div>

            {/* Functions */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">⚙️</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  Functions
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Creating reusable code blocks and organizing your programs
                </p>
              </div>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/revision/Lecture03_Functions.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors"
              >
                Open Revision Notebook
              </a>
            </div>

            {/* Pandas Slicing */}
            <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 hover:border-bio-blue/50 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🔪</div>
                <h3 className="text-xl font-bold text-bio-blue mb-2">
                  Pandas Slicing
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Master DataFrame indexing, selection, and data extraction
                </p>
              </div>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/revision/Lecture04_Pandas_Slicing.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors"
              >
                Open Revision Notebook
              </a>
            </div>

          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            💡 Revision Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Focus on weak areas:</strong> Identify topics you find challenging</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Practice regularly:</strong> Short, frequent sessions work better than cramming</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Experiment freely:</strong> Try variations and explore edge cases</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Test your understanding:</strong> Can you explain the concept to someone else?</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Connect to lectures:</strong> Review related lecture material for context</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">▸</span>
                <span className="text-gray-300"><strong>Ask for help:</strong> Bring questions to lab sessions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}