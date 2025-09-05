export default function Lecture2Notebooks() {
  const notebooks = [
    {
      id: 1,
      title: "🧬 String Manipulation for DNA",
      description: "Master string slicing and loops to analyze DNA sequences",
      badge: "Available",
      topics: [
        "String slicing with [start:end] notation",
        "Extracting subsequences from DNA",
        "Looping through string positions",
        "Finding patterns in sequences",
        "Hands-on DNA manipulation exercises"
      ],
      url: "https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/string_manipulation.ipynb",
      available: true
    },
    {
      id: 2,
      title: "🎯 Python Conditionals",
      description: "Learn to make decisions in code with if/elif/else statements",
      badge: "Coming Soon",
      topics: [
        "If statements and boolean logic",
        "Comparing sequences with ==",
        "Finding start and stop codons",
        "Elif for multiple conditions",
        "Combining loops and conditionals"
      ],
      url: "#",
      available: false
    },
    {
      id: 3,
      title: "🔍 Finding ORFs",
      description: "Build your first Open Reading Frame finder",
      badge: "Coming Soon",
      topics: [
        "Identifying ATG start codons",
        "Extracting codons systematically",
        "Finding stop codons (TAA, TAG, TGA)",
        "Building complete ORFs",
        "Storing results in lists"
      ],
      url: "#",
      available: false
    },
    {
      id: 4,
      title: "📊 Dictionaries & Translation",
      description: "Use dictionaries to translate DNA to protein sequences",
      badge: "Available",
      topics: [
        "Python dictionaries for genetic code",
        "Key-value pairs for codon mapping",
        "Translating DNA to amino acids",
        "Handling special codons",
        "Building protein sequences"
      ],
      url: "https://github.com/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/L2_N3_dictionaries.ipynb",
      available: true
    },
    {
      id: 5,
      title: "🐛 Debugging Biological Code",
      description: "Learn to identify and fix common errors in biological programming",
      badge: "Available",
      topics: [
        "Syntax errors in biological code",
        "Type errors with biological data",
        "Name errors and undefined variables",
        "Logic errors in calculations",
        "Debugging strategies and tips"
      ],
      url: "https://github.com/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/L2_N4_debugging.ipynb",
      available: true
    },
    {
      id: 6,
      title: "📁 Working with FASTA Files",
      description: "Read and process real biological sequence files",
      badge: "Coming Soon",
      topics: [
        "Understanding FASTA format",
        "Reading sequences from files",
        "Parsing headers and sequences",
        "Processing multiple sequences",
        "Writing results to files"
      ],
      url: "#",
      available: false
    },
    {
      id: 7,
      title: "🧮 Longest ORF Finder",
      description: "Find the longest Open Reading Frame in sequences",
      badge: "Coming Soon",
      topics: [
        "Comparing ORF lengths",
        "Using max() and len() functions",
        "Tracking best results",
        "Handling multiple reading frames",
        "Optimization strategies"
      ],
      url: "#",
      available: false
    },
    {
      id: 8,
      title: "🐍 Introduction to Biopython",
      description: "Professional tools for biological sequence analysis",
      badge: "Coming Soon",
      topics: [
        "Installing and importing Biopython",
        "Seq and SeqRecord objects",
        "Built-in translation methods",
        "Reading sequence files efficiently",
        "Advanced sequence operations"
      ],
      url: "#",
      available: false
    },
    {
      id: 9,
      title: "🚀 Complete ORF Pipeline",
      description: "Put it all together: analyze multiple sequences automatically",
      badge: "Final Project",
      topics: [
        "Reading multiple FASTA files",
        "Finding all ORFs in each sequence",
        "Translating to protein sequences",
        "Identifying longest ORFs",
        "Exporting results for analysis"
      ],
      url: "#",
      available: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-darker to-bio-dark py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mt-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🧬 <span className="text-gradient">Lecture 2: DNA Analysis & Sequence Processing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive notebooks for analyzing DNA sequences, finding Open Reading Frames, 
            and translating genetic code to proteins.
          </p>
        </div>

        {/* Getting Started Section */}
        <div className="bg-bio-dark/50 border border-bio-yellow/30 rounded-lg p-6 mb-8 border-l-4 border-l-bio-yellow">
          <h2 className="text-2xl font-bold text-bio-yellow mb-4 flex items-center">
            🎯 Getting Started
          </h2>
          <div className="space-y-2 text-gray-300">
            <p><strong className="text-bio-yellow">Start with String Manipulation</strong> - Learn the fundamentals of working with DNA sequences.</p>
            <p><strong className="text-bio-yellow">Build up to ORF finding</strong> - Each notebook adds new skills for sequence analysis.</p>
            <p><strong className="text-bio-yellow">Real biological problems</strong> - Work with actual DNA sequences and genetic code.</p>
          </div>
        </div>

        {/* Notebooks Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {notebooks.map((notebook) => (
            <div 
              key={notebook.id} 
              className={`bg-bio-dark/70 border rounded-lg p-6 transition-all duration-300 relative group ${
                notebook.available 
                  ? 'border-bio-blue/30 hover:border-bio-blue/60 hover:transform hover:-translate-y-1' 
                  : 'border-gray-600/30 opacity-75'
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                notebook.available 
                  ? 'bg-bio-green/20 text-bio-green' 
                  : notebook.badge === 'Final Project'
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'bg-gray-600/20 text-gray-400'
              }`}>
                {notebook.badge}
              </div>
              
              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 pr-20 ${
                notebook.available ? 'text-bio-blue' : 'text-gray-400'
              }`}>
                {notebook.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {notebook.description}
              </p>
              
              {/* Topics */}
              <ul className="space-y-1 mb-6">
                {notebook.topics.map((topic, index) => (
                  <li key={index} className="text-sm text-gray-400 flex items-start">
                    <span className={`mr-2 mt-1 ${notebook.available ? 'text-bio-blue' : 'text-gray-500'}`}>▸</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              
              {/* Button */}
              {notebook.available ? (
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
              ) : (
                <div className="inline-flex items-center gap-2 bg-gray-700 text-gray-400 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="bg-bio-dark/50 border border-bio-green/30 rounded-lg p-6 mb-8 border-l-4 border-l-bio-green">
          <h2 className="text-2xl font-bold text-bio-green mb-4 flex items-center">
            🗺️ Learning Path
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="mb-2"><strong className="text-bio-green">Week 1:</strong> String manipulation and conditionals</p>
              <p><strong className="text-bio-green">Week 2:</strong> ORF finding and dictionaries</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-bio-green">Week 3:</strong> File I/O and Biopython basics</p>
              <p><strong className="text-bio-green">Week 4:</strong> Complete pipeline project</p>
            </div>
          </div>
        </div>

        {/* Project Preview */}
        <div className="bg-gradient-to-r from-purple-900/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
            🚀 Final Project: Complete ORF Analysis Pipeline
          </h2>
          <p className="text-gray-300 mb-4">
            By the end of this lecture series, you'll build a complete pipeline that can:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Read multiple DNA sequences from FASTA files
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Find all Open Reading Frames automatically
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Translate DNA sequences to proteins
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Identify the longest ORF in each sequence
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Export results for further analysis
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              Process hundreds of sequences in seconds
            </li>
          </ul>
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