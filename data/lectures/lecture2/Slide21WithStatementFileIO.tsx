import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide21WithStatementFileIO() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        File I/O & the <GradientText>with Statement</GradientText>
      </SlideTitle>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-bio-blue mb-4 text-center">
            📁 Why File Handling Matters in Biology
          </h3>
          <p className="text-gray-300 text-center text-lg mb-4">
            Biological data lives in files - sequences, experiment results, annotations.
            Learning proper file handling is essential for any bioinformatics work.
          </p>
          <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
            <p className="text-bio-yellow font-semibold mb-2">🧬 Real Examples</p>
            <p className="text-gray-300 text-sm">
              FASTA sequences, CSV experiment data, JSON annotations, XML databases,
              TSV gene expression data, and many more!
            </p>
          </div>
        </div>

        {/* The Problem with Basic File Operations */}
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-400 mb-4">
            ⚠️ The Problem: Files Can Get "Stuck Open"
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">❌ The Old Way (Risky)</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <SyntaxHighlighter
                  code={`# Opening a file the old way
file = open('sequences.fasta', 'r')
content = file.read()
# Process the content...

# What if an error happens here?
# The file might never get closed!
# This can cause problems...

file.close()  # Might never execute!`}
                  language="python"
                />
              </div>
            </div>
            <div>
              <h4 className="text-red-400 font-semibold mb-3">🚨 What Can Go Wrong</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <ul className="text-gray-300 text-sm space-y-3">
                  <li>• <span className="text-red-400 font-semibold">Memory leaks</span> - Files stay open in memory</li>
                  <li>• <span className="text-orange-400 font-semibold">File locks</span> - Other programs can't access the file</li>
                  <li>• <span className="text-yellow-400 font-semibold">Resource exhaustion</span> - System runs out of file handles</li>
                  <li>• <span className="text-purple-400 font-semibold">Data corruption</span> - Writes might not be saved</li>
                  <li>• <span className="text-pink-400 font-semibold">Crashes</span> - Program errors leave files open</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* The Solution: with Statement */}
        <div className="bg-gradient-to-br from-bio-green/10 to-emerald-500/10 border border-bio-green/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-bio-green mb-4">
            ✅ The Solution: Context Managers & with Statement
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-bio-green font-semibold mb-3">💚 The Safe Way</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <SyntaxHighlighter
                  code={`# Using the with statement
with open('sequences.fasta', 'r') as file:
    content = file.read()
    # Process the content...

    # Even if an error happens here,
    # the file will ALWAYS be closed!

# File is automatically closed here
# No matter what happened above!`}
                  language="python"
                />
              </div>
            </div>
            <div>
              <h4 className="text-emerald-400 font-semibold mb-3">🎯 Why It's Better</h4>
              <div className="bg-bio-dark/50 rounded-lg p-4">
                <ul className="text-gray-300 text-sm space-y-3">
                  <li>• <span className="text-bio-green font-semibold">Automatic cleanup</span> - Files always close</li>
                  <li>• <span className="text-bio-blue font-semibold">Exception safe</span> - Works even if errors occur</li>
                  <li>• <span className="text-purple-400 font-semibold">Cleaner code</span> - No need to remember .close()</li>
                  <li>• <span className="text-cyan-400 font-semibold">Best practice</span> - Used by all professional developers</li>
                  <li>• <span className="text-amber-400 font-semibold">Resource efficient</span> - Prevents memory leaks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-5">
          <h4 className="text-bio-blue font-semibold mb-3 text-center">
            💡 Key Takeaways: File I/O Best Practices
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h5 className="text-bio-green font-semibold mb-2">Essential Rules</h5>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Always use <code className="text-bio-yellow">with open()</code></li>
                <li>• Choose the right file mode for your task</li>
                <li>• Handle large files line by line</li>
                <li>• Check if files exist before reading</li>
              </ul>
            </div>
            <div className="bg-bio-dark/50 rounded-lg p-4">
              <h5 className="text-purple-400 font-semibold mb-2">Bioinformatics Tips</h5>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Use <code className="text-bio-yellow">.strip()</code> to remove whitespace</li>
                <li>• Process files line by line for memory efficiency</li>
                <li>• Validate file formats before processing</li>
                <li>• Always backup important data files</li>
              </ul>
            </div>
          </div>
          <p className="text-bio-yellow font-semibold text-sm mt-4 text-center">
            🎯 Proper file handling prevents data loss and makes your code more reliable!
          </p>
        </div>
      </div>
    </>
  )
}