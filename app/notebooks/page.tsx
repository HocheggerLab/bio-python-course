'use client'

import Link from 'next/link'

export default function NotebooksPage() {
  const lectures = [
    {
      number: 1,
      title: "Introduction to Python",
      description: "Python basics, variables, and your first biological calculations",
      topics: ["Variables & Types", "Basic Operations", "Molecular Calculations"],
      status: "available",
      icon: "🐍"
    },
    {
      number: 2,
      title: "Strings & DNA Analysis",
      description: "String manipulation and biological sequence analysis",
      topics: ["String Methods", "DNA Sequences", "Pattern Matching"],
      status: "available",
      icon: "🧬"
    },
    {
      number: 3,
      title: "Functions & Data Analysis",
      description: "Functions, dictionaries, and structured data processing",
      topics: ["Function Design", "Dictionaries", "Data Structures"],
      status: "available",
      icon: "📊"
    },
    {
      number: 4,
      title: "Lists & File I/O",
      description: "Working with lists and reading biological data files",
      topics: ["List Operations", "File Handling", "Data Import/Export"],
      status: "coming-soon",
      icon: "📂"
    },
    {
      number: 5,
      title: "Data Visualization",
      description: "Creating publication-ready plots and visualizations",
      topics: ["Matplotlib", "Seaborn", "Biological Plots"],
      status: "coming-soon",
      icon: "📈"
    }
  ]

  const capstoneProjects = [
    {
      name: "Gene Expression Pipeline",
      description: "Analyze RNA-seq data and create visualization dashboard",
      difficulty: "Advanced",
      skills: ["File I/O", "Data Processing", "Visualization", "Statistical Analysis"],
      status: "coming-soon"
    },
    {
      name: "Protein Structure Analyzer",
      description: "Parse PDB files and analyze protein structural features",
      difficulty: "Intermediate",
      skills: ["File Parsing", "3D Coordinates", "Structural Biology"],
      status: "coming-soon"
    },
    {
      name: "Phylogenetic Tree Builder",
      description: "Construct and visualize evolutionary relationships",
      difficulty: "Advanced",
      skills: ["Sequence Alignment", "Tree Algorithms", "Visualization"],
      status: "coming-soon"
    },
    {
      name: "CRISPR Guide Designer",
      description: "Design and score CRISPR guide RNAs for target genes",
      difficulty: "Intermediate",
      skills: ["String Processing", "Scoring Algorithms", "Biotechnology"],
      status: "coming-soon"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker p-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors">
          ← Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bio-blue mb-4">
            Course Notebooks
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive Jupyter notebooks for every lecture and practice session.
            All notebooks run in Google Colab - no installation required!
          </p>
        </div>

        {/* Quick Access */}
        <div className="bg-bio-dark/50 rounded-xl border border-bio-blue/20 p-6 mb-12">
          <h2 className="text-2xl font-bold text-bio-blue mb-4 text-center">
            🚀 Quick Access
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-semibold text-blue-400">Tutorial Notebooks</div>
              <div className="text-sm text-gray-300">Follow along with lectures</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <div className="text-2xl mb-2">🧪</div>
              <div className="font-semibold text-purple-400">Practice Notebooks</div>
              <div className="text-sm text-gray-300">Hands-on exercises and challenges</div>
            </div>
            <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-semibold text-green-400">Capstone Projects</div>
              <div className="text-sm text-gray-300">Portfolio-ready projects</div>
            </div>
          </div>
        </div>

        {/* Lecture Notebooks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-bio-blue mb-8 text-center">
            📚 Lecture Notebooks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lectures.map((lecture) => (
              <div key={lecture.number} className={`rounded-xl border p-6 transition-all duration-300 ${
                lecture.status === 'available'
                  ? 'bg-bio-dark/50 border-bio-blue/20 hover:border-bio-blue/60 hover:transform hover:-translate-y-2'
                  : 'bg-gray-800/50 border-gray-600/30 opacity-60'
              }`}>
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{lecture.icon}</div>
                  <h3 className="text-xl font-bold text-bio-blue mb-2">
                    Lecture {lecture.number}
                  </h3>
                  <h4 className="font-semibold text-white mb-3">
                    {lecture.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">
                    {lecture.description}
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-bio-yellow mb-2 text-sm">Topics Covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    {lecture.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-bio-blue/20 text-bio-blue text-xs rounded border border-bio-blue/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {lecture.status === 'available' ? (
                  <Link
                    href={`/notebooks/lecture-${lecture.number}`}
                    className="inline-block w-full bg-bio-blue hover:bg-bio-blue/80 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors"
                  >
                    View All Notebooks
                  </Link>
                ) : (
                  <div className="bg-gray-600 text-gray-400 py-3 px-4 rounded-lg font-medium text-center">
                    Coming Soon
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Capstone Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-bio-green mb-8 text-center">
            🚀 Capstone Projects
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Choose one of these comprehensive projects for your final assignment. Each project
            integrates multiple course concepts and creates a portfolio-worthy analysis pipeline.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {capstoneProjects.map((project) => (
              <div
                key={project.name}
                className="bg-bio-dark/50 rounded-xl border border-green-500/20 p-6 opacity-75 hover:opacity-90 transition-opacity"
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="text-xl font-bold text-bio-green mb-2">
                    {project.name}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                    {project.difficulty}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-center">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-bio-yellow mb-2">Skills Practiced:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-bio-blue/20 text-bio-blue text-xs rounded border border-bio-blue/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-600 text-gray-400 py-3 px-4 rounded-lg font-medium text-center">
                  Project Details Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-green-500/10 border border-bio-blue/40 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-bio-blue mb-6 text-center">
            💡 Getting Started with Notebooks
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">1️⃣</div>
              <h3 className="font-semibold text-white mb-2">Click & Open</h3>
              <p className="text-gray-300 text-sm">
                Click any "Open in Colab" button to launch the notebook in your browser
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">2️⃣</div>
              <h3 className="font-semibold text-white mb-2">Save a Copy</h3>
              <p className="text-gray-300 text-sm">
                File → Save a copy in Drive to make your own editable version
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">3️⃣</div>
              <h3 className="font-semibold text-white mb-2">Code & Learn</h3>
              <p className="text-gray-300 text-sm">
                Run cells with Shift+Enter, modify code, and experiment freely!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}