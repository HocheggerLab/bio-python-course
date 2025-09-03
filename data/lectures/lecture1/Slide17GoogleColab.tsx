export default function Slide17GoogleColab() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <h1 className="text-4xl font-bold text-bio-blue mb-8 text-center">
        Google Colab: Your Python Laboratory
      </h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <section className="text-center">
          <p className="text-xl text-gray-300 mb-6">
            Rather than writing code here, you can also use <strong className="text-bio-blue">Google Colab notebooks</strong> to work with Python. 
            Colab provides a more complete environment for learning and experimenting.
          </p>
        </section>

        {/* Why Use Google Colab */}
        <section className="bg-bio-dark/50 border border-bio-blue/30 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-bio-blue mb-4 text-center">
            🚀 Why Use Google Colab?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-bio-green">No Installation Required</h4>
                  <p className="text-gray-300 text-sm">Python runs in your browser - no setup needed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-bio-green">Save Your Work</h4>
                  <p className="text-gray-300 text-sm">Notebooks automatically save to Google Drive</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-bio-green">Rich Output</h4>
                  <p className="text-gray-300 text-sm">See graphs, tables, and formatted results</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-bio-green">More Space</h4>
                  <p className="text-gray-300 text-sm">Work with longer code and complex projects</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-bio-green">Libraries Included</h4>
                  <p className="text-gray-300 text-sm">NumPy, Pandas, Matplotlib already installed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-bio-green text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-bio-green">Share & Collaborate</h4>
                  <p className="text-gray-300 text-sm">Easy sharing with classmates and instructors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Colab */}
        <section className="bg-bio-dark/30 border border-bio-yellow/30 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-bio-yellow mb-4 text-center">
            📋 Quick Start Guide
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-bio-yellow/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-bio-yellow font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Click the Link</h4>
              <p className="text-gray-300 text-sm">Open the Colab notebook in a new tab</p>
            </div>
            <div className="text-center">
              <div className="bg-bio-yellow/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-bio-yellow font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Make a Copy</h4>
              <p className="text-gray-300 text-sm">File → Save a copy in Drive to edit</p>
            </div>
            <div className="text-center">
              <div className="bg-bio-yellow/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-bio-yellow font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Run & Experiment</h4>
              <p className="text-gray-300 text-sm">Click ▶ to run code cells, modify as needed</p>
            </div>
          </div>
        </section>

        {/* String Manipulation Notebook Link */}
        <section className="bg-gradient-to-r from-bio-blue/20 to-bio-green/20 border border-bio-blue/30 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            🧬 Try String Manipulation in Colab
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Practice DNA sequence analysis with our interactive notebook. Work through examples, 
            try challenges, and experiment with your own sequences.
          </p>
          <div className="text-center">
            <a 
              href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_2/string_manipulation.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-bio-blue hover:bg-bio-blue/80 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20 transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z" fill="currentColor"/>
              </svg>
              Open String Manipulation Notebook
            </a>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4 text-center">
            💡 Pro Tips for Colab Success
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>Use Shift+Enter</strong> to run a cell quickly</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>Add text cells</strong> to document your thinking</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>Print variables</strong> to see what&apos;s happening</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>Restart runtime</strong> if things get stuck</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>Use # comments</strong> to explain your code</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▸</span>
                <span><strong>Experiment freely</strong> - you can&apos;t break anything!</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-bio-dark/30 border border-gray-600 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            🤔 When to Use Each Tool
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-bio-blue mb-3">Interactive Slides</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Quick examples during lecture</li>
                <li>✓ Testing small code snippets</li>
                <li>✓ Following along in class</li>
                <li>✓ No login required</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-bio-green mb-3">Google Colab</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Homework and assignments</li>
                <li>✓ Longer coding sessions</li>
                <li>✓ Saving your work</li>
                <li>✓ Advanced features & libraries</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}