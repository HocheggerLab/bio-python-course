export default function Lecture1Notebooks() {
  const notebooks = [
    {
      id: 1,
      title: "🚀 Welcome to Google Colab",
      description: "Your introduction to Jupyter notebooks and the Colab environment",
      badge: "Start Here",
      topics: [
        "What are notebooks and why use them?",
        "Understanding cells (code vs text)",
        "Running your first Python code",
        "Common mistakes and solutions",
        "Practice exercises"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N1_collab_notebooks.ipynb"
    },
    {
      id: 2,
      title: "📦 Variables & Comments",
      description: "Learn to store and organize your data with meaningful names",
      badge: "Step 2",
      topics: [
        "What are variables and why use them?",
        "Python naming rules and conventions",
        "Writing helpful comments",
        "Variable assignment and updates",
        "Biology examples and practice"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N2_variables_and_comments.ipynb"
    },
    {
      id: 3,
      title: "🔢 Data Types",
      description: "Understanding different kinds of data: numbers, text, and more",
      badge: "Step 3",
      topics: [
        "Integers for counting (cells, samples)",
        "Floats for measurements (pH, concentrations)",
        "Strings for text (gene names, sequences)",
        "Booleans for true/false states",
        "Type conversion and common errors"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N3_datatypes.ipynb"
    },
    {
      id: 4,
      title: "🎨 F-Strings & Formatting",
      description: "Create beautiful, professional output for your biological data",
      badge: "Step 4",
      topics: [
        "Modern string formatting with f-strings",
        "Controlling decimal places and precision",
        "Scientific notation and percentages",
        "Creating neat data tables",
        "Lab report formatting"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N4_f_strings.ipynb"
    },
    {
      id: 5,
      title: "🔧 Functions: Reusable Code",
      description: "Package your calculations into reusable building blocks",
      badge: "Step 5",
      topics: [
        "Why functions matter in programming",
        "Creating your first function",
        "Parameters and return values",
        "Functions with and without returns",
        "Default parameters and documentation"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N7_functions.ipynb"
    },
    {
      id: 6,
      title: "📋 Lists: Organizing Data",
      description: "Store and organize multiple pieces of biological data",
      badge: "Step 6",
      topics: [
        "Creating and accessing lists",
        "List indexing (starting from 0!)",
        "Lists of lists for complex data",
        "Adding and modifying list items",
        "Real biological examples"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N5_lists.ipynb"
    },
    {
      id: 7,
      title: "🔄 For Loops: Automation",
      description: "Automatically process multiple samples and datasets",
      badge: "Step 7",
      topics: [
        "Basic for loop syntax and concept",
        "Processing lists with calculations",
        "Combining functions and loops",
        "Quality control automation",
        "High-throughput data analysis"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_N6_for_loops.ipynb"
    },
    {
      id: 8,
      title: "🧪 Lab Calculator Toolkit",
      description: "Real Python tools you'll actually use in the lab!",
      badge: "Apply It!",
      topics: [
        "DNA/RNA dilution calculator",
        "Molarity and molecular weight calculator",
        "PCR master mix calculator",
        "Protein yield calculator",
        "Growth rate calculator"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/lab_calculator_toolkit.ipynb"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-darker to-bio-dark py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mt-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🧬 <span className="text-gradient">Lecture 1: Python Fundamentals</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive Google Colab notebooks to learn Python programming for biology. 
            Work through these in order for the best learning experience.
          </p>
        </div>

        {/* Getting Started Section */}
        <div className="bg-bio-dark/50 border border-bio-yellow/30 rounded-lg p-6 mb-8 border-l-4 border-l-bio-yellow">
          <h2 className="text-2xl font-bold text-bio-yellow mb-4 flex items-center">
            🎯 Getting Started
          </h2>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-bio-yellow">New to Python?</strong> Start with the "Welcome to Google Colab" notebook below.</p>
            <p><strong className="text-bio-yellow">Each notebook is interactive</strong> - you can run code, make changes, and see results immediately.</p>
            <p><strong className="text-bio-yellow">No installation needed</strong> - everything runs in your web browser using Google Colab.</p>
          </div>
        </div>

        {/* Notebooks Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {notebooks.map((notebook) => (
            <div key={notebook.id} className="bg-bio-dark/70 border border-bio-blue/30 rounded-lg p-6 hover:border-bio-blue/60 transition-all duration-300 hover:transform hover:-translate-y-1 relative group">
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-bio-blue/20 text-bio-blue px-3 py-1 rounded-full text-xs font-semibold">
                {notebook.badge}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-bio-blue mb-3 pr-20">
                {notebook.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {notebook.description}
              </p>
              
              {/* Topics */}
              <ul className="space-y-1 mb-6">
                {notebook.topics.map((topic, index) => (
                  <li key={index} className="text-sm text-gray-400 flex items-start">
                    <span className="text-bio-blue mr-2 mt-1">▸</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              
              {/* Button */}
              <a
                href={notebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bio-blue hover:bg-bio-blue/80 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
                </svg>
                Open in Colab
              </a>
            </div>
          ))}
        </div>

        {/* Learning Tips */}
        <div className="bg-bio-dark/50 border border-bio-green/30 rounded-lg p-6 mb-8 border-l-4 border-l-bio-green">
          <h2 className="text-2xl font-bold text-bio-green mb-4 flex items-center">
            💡 Learning Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="mb-2"><strong className="text-bio-green">Work through in order:</strong> Each notebook builds on the previous ones.</p>
              <p><strong className="text-bio-green">Take your time:</strong> Run every code cell and try the exercises.</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-bio-green">Experiment:</strong> Change values and see what happens - you can't break anything!</p>
              <p><strong className="text-bio-green">Save your work:</strong> Use "File → Save a copy in Drive" to keep your progress.</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-bio-dark to-bio-darker rounded-lg p-6 mb-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-bio-blue to-bio-green">
            🚀 Quick Access
          </h2>
          <div className="flex justify-center">
            <a
              href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/lab_calculator_toolkit.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-green to-teal-600 hover:from-teal-600 hover:to-bio-green text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-green/20"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
              </svg>
              Lab Calculator Toolkit
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-700">
          <p className="text-gray-400">
            📚 Part of the <strong className="text-bio-blue">Python for Biologists</strong> course by Helfrid Hochegger
          </p>
          <p className="text-gray-500 text-sm mt-1">
            University of Sussex | Year 3 Biology, Biochemistry & Neuroscience
          </p>
        </div>
      </div>
    </div>
  )
}