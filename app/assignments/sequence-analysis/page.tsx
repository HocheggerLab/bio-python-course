'use client'

import Link from 'next/link'

export default function SequenceAnalysisAssignment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bio-dark via-bio-darker to-bio-dark">
      {/* Header */}
      <div className="bg-gradient-to-r from-bio-blue/20 to-purple-600/20 border-b border-bio-blue/30">
        <div className="container mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/#dna-analysis-task"
            className="text-bio-blue hover:text-bio-blue/80 transition-colors mb-4 inline-flex items-center gap-2"
          >
            ← Back to Course
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📊 Sequence Analysis <span className="text-gradient-purple">Assignment</span>
          </h1>
          <p className="text-xl text-gray-300">
            Identify mutations in next-generation sequencing reads
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Overview Box */}
        <div className="bg-gradient-to-br from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <span>🎯</span>
            <span>Your Task</span>
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Some sequencing reads perfectly match the reference; others contain single-base mismatches.
          </p>
          <p className="text-white font-semibold text-lg">
            Write a Python program to identify and analyze these mutations.
          </p>
        </div>

        {/* Essential Functionality */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-bio-blue mb-6 flex items-center gap-2">
            <span>✅</span>
            <span>Essential Functionality</span>
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-bio-dark/70 rounded-lg p-6">
              <h3 className="text-xl text-bio-yellow font-semibold mb-3 flex items-center gap-2">
                <span>1️⃣</span>
                <span>Compare & Count Mutations</span>
              </h3>
              <p className="text-gray-300 mb-3">Your program should:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Compare each sequencing read to the reference base-by-base</li>
                <li>• Record the total number of:
                  <ul className="ml-6 mt-1">
                    <li>→ Wild-type (WT) reads (without any mutations)</li>
                    <li>→ Mutated reads (with 1 or more mutations)</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-bio-dark/70 rounded-lg p-6">
              <h3 className="text-xl text-bio-yellow font-semibold mb-3 flex items-center gap-2">
                <span>2️⃣</span>
                <span>Record Mutation Details</span>
              </h3>
              <p className="text-gray-300 mb-3">For mutated reads, record:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• The position of the first mismatch (1–200)</li>
                <li>• The reference base and the mutated base (i.e. A, C, T, or G) for the first mismatch</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-bio-dark/70 rounded-lg p-6">
              <h3 className="text-xl text-bio-yellow font-semibold mb-3 flex items-center gap-2">
                <span>3️⃣</span>
                <span>Update the DataFrame</span>
              </h3>
              <p className="text-gray-300 mb-3">Store the results from step 2 as new columns in the pandas DataFrame with the following names:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• <code className="bg-bio-dark px-2 py-1 rounded">wildtype_base</code> - Reference base</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded">mutated_base</code> - Mutated base</li>
                <li>• <code className="bg-bio-dark px-2 py-1 rounded">mutated_position</code> - Position of 1st mutation in the read (1–200)</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="bg-bio-dark/70 rounded-lg p-6">
              <h3 className="text-xl text-bio-yellow font-semibold mb-3 flex items-center gap-2">
                <span>4️⃣</span>
                <span>Present the Findings</span>
              </h3>
              <p className="text-gray-300 mb-3">Present the findings from the mutation analysis by:</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-bio-green font-semibold mb-2">📝 Text Summary (print to screen):</h4>
                  <ul className="text-gray-300 space-y-1 ml-6">
                    <li>• Percentage of WT vs. mutated reads</li>
                    <li>• Percentages of specific base mutations (e.g. A → T, A → C, etc.), ordered from most common to least common</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-bio-green font-semibold mb-2">📊 Publication-Ready Plots:</h4>
                  <p className="text-gray-300 mb-2 ml-6">Create visualizations using appropriate plot types, well-labelled, with good use of style/colour to represent:</p>
                  <ul className="text-gray-300 space-y-1 ml-6">
                    <li>• Percentage of WT vs. mutated reads</li>
                    <li>• Percentages of specific base mutations</li>
                    <li>• Mutation positions and/or hotspots</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-bio-dark/70 rounded-lg p-6">
              <h3 className="text-xl text-bio-yellow font-semibold mb-3 flex items-center gap-2">
                <span>5️⃣</span>
                <span>Save the Results</span>
              </h3>
              <p className="text-gray-300 mb-3">
                Save the updated DataFrame to a new CSV file called <code className="bg-bio-dark px-2 py-1 rounded">analysis.csv</code> for further analysis.
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• The CSV should include rows for every read (i.e. 1,000 plus the header row)</li>
                <li>• Empty entries in the new columns if no mutations were found in a given read</li>
              </ul>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
                <p className="text-amber-400 text-sm">
                  💡 <strong>Note:</strong> You can access <code className="bg-bio-dark px-1 rounded">analysis.csv</code> via the Files area on Colab (click the folder icon on the left toolbar). To download it, right-click the file and choose Download.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Quality Requirements */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-bio-green/20 to-bio-blue/20 border border-bio-green/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-bio-green mb-4 flex items-center gap-2">
              <span>💻</span>
              <span>Code Quality Requirements</span>
            </h3>
            <p className="text-gray-300 mb-4">Your program should also:</p>
            <ul className="text-gray-300 space-y-3">
              <li>✅ <strong>Handle unexpected input</strong> (e.g. truncated reads, unknown characters, upper- or lower-case bases) from the CSV file without crashing and by reporting errors in a user-friendly way
                <p className="text-sm text-gray-400 mt-1 ml-4">Note: You can assume that errors are only ever in the reads.csv file, not in reference.txt</p>
              </li>
              <li>✅ <strong>Use functions well</strong> to make the code easily readable, concise, and avoid code repetition</li>
              <li>✅ <strong>Include good comments</strong>, including docstrings for functions</li>
              <li>✅ <strong>Follow good practices</strong> in naming variables, functions, etc.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-bio-yellow/20 border border-amber-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
              <span>⭐</span>
              <span>Advanced Functionality</span>
            </h3>
            <p className="text-gray-300 mb-4">Improve your marks further by implementing:</p>
            <ul className="text-gray-300 space-y-3">
              <li>🌟 <strong>Advanced plot types</strong> that are used in contemporary NGS literature</li>
              <li>🌟 <strong>Complex statistical results</strong> (e.g. frequency of mutation at hotspots, types of mutations)</li>
              <li>🌟 <strong>Advanced error handling</strong> (e.g. outputting informative error messages; logging and reporting skipped reads)</li>
            </ul>
          </div>
        </div>

        {/* Submission Details */}
        <div className="bg-gradient-to-r from-purple-600/30 to-bio-blue/30 border border-purple-500/50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
            <span>📤</span>
            <span>Submitting Your Assignment</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-bio-dark/50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Submission Details</h3>
              <ul className="text-gray-300 space-y-3">
                <li><strong className="text-white">Format:</strong> Colab notebook (.ipynb file)</li>
                <li><strong className="text-white">Where:</strong> E-Submission on Canvas</li>
                <li><strong className="text-white">Assignment:</strong> Report T1 Week 7</li>
                <li><strong className="text-white">Deadline:</strong> Friday, November 14, 2025 @ 16:00</li>
              </ul>
            </div>

            <div className="bg-bio-dark/50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-bio-green mb-4">Getting Help</h3>
              <ul className="text-gray-300 space-y-3">
                <li>💡 Dedicated time in weekly workshops to work on your project</li>
                <li>💬 Post questions on the Assessment Q&A discussion board</li>
                <li>📧 Contact the module team directly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assignment Resources */}
        <div className="bg-gradient-to-br from-bio-blue/10 to-purple-600/10 border border-bio-blue/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-bio-blue mb-6 text-center flex items-center justify-center gap-2">
            <span>📁</span>
            <span>Assignment Resources</span>
          </h2>

          <p className="text-gray-300 text-center mb-6 text-lg">
            Complete the assignment by writing your code in the Colab notebook linked below
          </p>

          <div className="flex flex-col items-center gap-4 mb-6">
            <a
              href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/Project1DNAAnalysis.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-bio-blue hover:from-purple-600 hover:to-bio-blue/80 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              <span>📓</span>
              <span>Open Assignment Notebook in Colab</span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=UfpW8xMXvDw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <span>🎥</span>
              <span>Watch Assignment Walkthrough Video</span>
            </a>
          </div>

          <div className="bg-bio-dark/50 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-bio-yellow font-semibold mb-4 text-center">Data Files</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-bio-dark/70 rounded-lg p-4">
                <a
                  href="https://github.com/HocheggerLab/y3-bio-python/blob/main/data/ReadsData.csv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bio-blue hover:text-bio-blue/80 font-semibold mb-2 flex items-center gap-2"
                >
                  <span>📄</span>
                  <span>ReadsData.csv</span>
                  <span className="text-xs">↗</span>
                </a>
                <p className="text-gray-300 text-sm">Contains 1,000 sequencing reads (200bp each) from NGS experiment</p>
              </div>
              <div className="bg-bio-dark/70 rounded-lg p-4">
                <a
                  href="https://github.com/HocheggerLab/y3-bio-python/blob/main/data/Reference%20Document.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bio-green hover:text-bio-green/80 font-semibold mb-2 flex items-center gap-2"
                >
                  <span>📄</span>
                  <span>Reference Document.txt</span>
                  <span className="text-xs">↗</span>
                </a>
                <p className="text-gray-300 text-sm">Reference sequence to compare reads against</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center">
              Both files are small and shared directly via GitHub - accessible from the Colab notebook
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
