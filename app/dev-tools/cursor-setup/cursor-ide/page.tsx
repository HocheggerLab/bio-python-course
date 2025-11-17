'use client'

import Link from 'next/link'

export default function CursorIDEPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker p-4 pt-24">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dev-tools/cursor-setup" className="inline-flex items-center mb-4 text-bio-blue hover:text-bio-yellow transition-colors">
            ← Back to Development Setup
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-bio-blue mb-4">
            💻 Cursor IDE
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your AI-powered code editor for the course. Built on VS Code with intelligent assistance.
          </p>
        </div>

        {/* What is Cursor? */}
        <div className="mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-bio-blue/10 rounded-xl border border-bio-blue/20">
          <h2 className="text-2xl font-bold text-bio-blue mb-4">What is Cursor?</h2>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span>A modern code editor <strong className="text-bio-yellow">built on VS Code</strong> - same interface, enhanced with AI</span>
            </p>
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span><strong className="text-bio-yellow">AI code completion</strong> - get suggestions as you type</span>
            </p>
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span><strong className="text-bio-yellow">Built-in Jupyter support</strong> - run notebooks directly in the editor</span>
            </p>
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span><strong className="text-bio-yellow">Integrated terminal</strong> - no need to switch between apps</span>
            </p>
          </div>
        </div>

        {/* Why Cursor for This Course? */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">Why Cursor for This Course?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-green-400/30">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">AI Learning Assistant</h3>
              <p className="text-gray-300 text-sm">
                Ask questions about Python, get code explanations, and fix errors - all without leaving your editor. Perfect for learning!
              </p>
            </div>

            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/30">
              <div className="text-4xl mb-4">📓</div>
              <h3 className="text-xl font-bold text-bio-blue mb-3">Jupyter Notebooks</h3>
              <p className="text-gray-300 text-sm">
                Run course notebooks with better performance and features than Google Colab. See variables, debug code, and work offline.
              </p>
            </div>

            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-yellow/30">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-bio-yellow mb-3">Professional Tool</h3>
              <p className="text-gray-300 text-sm">
                Learn the same IDE that professional developers use. Skills transfer directly to industry work.
              </p>
            </div>

            <div className="p-6 bg-bio-dark/50 rounded-xl border border-purple-400/30">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">All-in-One</h3>
              <p className="text-gray-300 text-sm">
                Edit code, run notebooks, use terminal, manage Git - everything in one place with your UV environment automatically detected.
              </p>
            </div>
          </div>
        </div>

        {/* Installation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">Installing Cursor</h2>

          <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20 mb-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-bio-yellow mb-3">Step 1: Download Cursor</h3>
                <p className="text-gray-300 mb-4">
                  Visit the official Cursor website and download for your operating system:
                </p>
                <a
                  href="https://www.cursor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-bio-blue/20 hover:bg-bio-blue/30 text-bio-blue rounded-lg transition-colors border border-bio-blue/30"
                >
                  <span className="mr-2">Download Cursor</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="pt-4 border-t border-bio-blue/10">
                <h3 className="text-xl font-bold text-bio-yellow mb-3">Step 2: Install</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start">
                    <span className="text-green-400 mr-3">▸</span>
                    <span><strong>Mac:</strong> Open the .dmg file and drag Cursor to Applications</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-green-400 mr-3">▸</span>
                    <span><strong>Windows:</strong> Run the installer .exe file</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-green-400 mr-3">▸</span>
                    <span><strong>Linux:</strong> Follow the installation instructions on the download page</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-bio-blue/10">
                <h3 className="text-xl font-bold text-bio-yellow mb-3">Step 3: Open Your Project</h3>
                <p className="text-gray-300 mb-3">
                  Navigate to your course folder in terminal and open it:
                </p>
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm">
                  <div className="mb-2">
                    <span className="text-green-400">$</span> <span className="text-gray-200">cd Documents/biology-python/y3-bio-python</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span> <span className="text-gray-200">cursor .</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  Cursor will automatically detect your <code className="text-bio-blue">.venv</code> virtual environment!
                </p>
              </div>

              <div className="pt-4 border-t border-bio-blue/10">
                <h3 className="text-xl font-bold text-bio-yellow mb-3">Step 4: Install Required Extensions</h3>
                <p className="text-gray-300 mb-4">
                  You need two extensions to work with Jupyter notebooks. Cursor will usually prompt you automatically when you open a .ipynb file, but you can also install them manually:
                </p>

                <div className="space-y-4">
                  {/* Python Extension */}
                  <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10">
                    <div className="flex items-start mb-3">
                      <span className="text-2xl mr-3">🐍</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-bio-blue mb-1">Python Extension</h4>
                        <p className="text-sm text-gray-400 mb-3">Official Microsoft extension for Python support</p>
                      </div>
                    </div>
                    <ol className="space-y-2 text-sm text-gray-300 ml-9">
                      <li className="flex items-start">
                        <span className="text-bio-blue mr-2">1.</span>
                        <span>Click the Extensions icon in the left sidebar (or press <kbd className="px-2 py-1 bg-bio-dark rounded border border-bio-blue/30 font-mono text-xs mx-1">Cmd/Ctrl+Shift+X</kbd>)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-bio-blue mr-2">2.</span>
                        <span>Search for &quot;Python&quot;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-bio-blue mr-2">3.</span>
                        <span>Install the one by Microsoft (it has the most downloads)</span>
                      </li>
                    </ol>
                  </div>

                  {/* Jupyter Extension */}
                  <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10">
                    <div className="flex items-start mb-3">
                      <span className="text-2xl mr-3">📓</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-bio-blue mb-1">Jupyter Extension</h4>
                        <p className="text-sm text-gray-400 mb-3">Official Microsoft extension for Jupyter notebook support</p>
                      </div>
                    </div>
                    <ol className="space-y-2 text-sm text-gray-300 ml-9">
                      <li className="flex items-start">
                        <span className="text-bio-blue mr-2">1.</span>
                        <span>In the Extensions sidebar, search for &quot;Jupyter&quot;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-bio-blue mr-2">2.</span>
                        <span>Install the one by Microsoft</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-bio-blue mr-2">3.</span>
                        <span>Restart Cursor after installation</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
                  <p className="text-sm text-gray-300">
                    <strong className="text-bio-yellow">Pro tip:</strong> When you first open a .ipynb file, Cursor will usually show a popup asking if you want to install these extensions. Just click &quot;Install&quot;!
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-bio-blue/10">
                <h3 className="text-xl font-bold text-bio-yellow mb-3">Step 5: Select Python Interpreter</h3>
                <p className="text-gray-300 mb-4">
                  Tell Cursor to use your project&apos;s virtual environment:
                </p>
                <ol className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-bio-blue mr-2">1.</span>
                    <span>Press <kbd className="px-2 py-1 bg-bio-darker rounded border border-bio-blue/30 font-mono text-xs mx-1">Cmd/Ctrl+Shift+P</kbd> to open the command palette</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bio-blue mr-2">2.</span>
                    <span>Type &quot;Python: Select Interpreter&quot;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bio-blue mr-2">3.</span>
                    <span>Choose the one that shows <code className="text-bio-blue">.venv</code> in the path</span>
                  </li>
                </ol>
                <p className="text-gray-400 text-sm mt-3">
                  You only need to do this once per project!
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-400/10 rounded-lg border border-green-400/20">
            <p className="text-sm text-gray-300">
              <strong className="text-green-400">✓ You&apos;re all set!</strong> You can now open .ipynb notebook files and start working.
            </p>
          </div>
        </div>

        {/* Key Features for This Course */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">Key Features You&apos;ll Use</h2>

          <div className="space-y-4">
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <h3 className="text-lg font-bold text-bio-yellow mb-2">📂 File Explorer (Left Sidebar)</h3>
              <p className="text-gray-300 text-sm">
                Navigate through notebooks and course files. Click any <code className="text-bio-blue">.ipynb</code> file to open it.
              </p>
            </div>

            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <h3 className="text-lg font-bold text-bio-yellow mb-2">▶️ Run Cells</h3>
              <p className="text-gray-300 text-sm mb-2">
                Click the play button (▶️) next to any cell to run it, or press <kbd className="px-2 py-1 bg-bio-darker rounded border border-bio-blue/30 font-mono text-xs">Shift+Enter</kbd>
              </p>
            </div>

            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <h3 className="text-lg font-bold text-bio-yellow mb-2">🤖 AI Chat (Cmd/Ctrl + L)</h3>
              <p className="text-gray-300 text-sm">
                Ask Cursor AI to explain code, fix errors, or help with exercises. It&apos;s like having a tutor built-in!
              </p>
            </div>

            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <h3 className="text-lg font-bold text-bio-yellow mb-2">💡 Code Suggestions</h3>
              <p className="text-gray-300 text-sm">
                As you type, Cursor suggests completions. Press <kbd className="px-2 py-1 bg-bio-darker rounded border border-bio-blue/30 font-mono text-xs">Tab</kbd> to accept.
              </p>
            </div>

            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <h3 className="text-lg font-bold text-bio-yellow mb-2">⌨️ Integrated Terminal</h3>
              <p className="text-gray-300 text-sm">
                Open with <kbd className="px-2 py-1 bg-bio-darker rounded border border-bio-blue/30 font-mono text-xs">Ctrl+`</kbd> to run UV commands without leaving Cursor.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mb-12 p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">💡 Quick Tips</h2>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start">
              <span className="text-yellow-400 mr-3">•</span>
              <span><strong>Extensions sidebar:</strong> Click the blocks icon in the left sidebar (or <kbd className="px-2 py-1 bg-bio-darker rounded border border-yellow-500/20 font-mono text-xs mx-1">Cmd/Ctrl+Shift+X</kbd>) to manage extensions</span>
            </p>
            <p className="flex items-start">
              <span className="text-yellow-400 mr-3">•</span>
              <span><strong>Command palette:</strong> <kbd className="px-2 py-1 bg-bio-darker rounded border border-yellow-500/20 font-mono text-xs mx-1">Cmd/Ctrl+Shift+P</kbd> gives you access to all Cursor commands</span>
            </p>
            <p className="flex items-start">
              <span className="text-yellow-400 mr-3">•</span>
              <span><strong>Restart after extensions:</strong> If notebooks don&apos;t work after installing extensions, restart Cursor</span>
            </p>
            <p className="flex items-start">
              <span className="text-yellow-400 mr-3">•</span>
              <span><strong>Dark theme by default:</strong> Perfect for long coding sessions!</span>
            </p>
          </div>
        </div>

        {/* Out of Scope Notice */}
        <div className="mb-12 p-6 bg-purple-500/10 rounded-xl border border-purple-400/30">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">📚 Learning VS Code & Cursor</h2>
          <p className="text-gray-300 mb-6">
            This course focuses on Python for biology - we can&apos;t cover everything about the IDE.
            Here are excellent resources to learn Cursor and VS Code:
          </p>

          <div className="space-y-4">
            {/* VS Code Getting Started */}
            <div className="p-5 bg-bio-darker rounded-lg border border-purple-400/20">
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-3">📖</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-bio-blue mb-2">VS Code Official Documentation</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Comprehensive guide to the editor interface, shortcuts, and features
                  </p>
                  <a
                    href="https://code.visualstudio.com/docs/getstarted/getting-started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-bio-blue hover:text-bio-yellow transition-colors text-sm"
                  >
                    <span className="mr-1">Getting Started with VS Code</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* VS Code Video */}
            <div className="p-5 bg-bio-darker rounded-lg border border-purple-400/20">
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-3">🎥</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-bio-blue mb-2">VS Code in 100 Seconds</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Quick video overview of what VS Code is and why it&apos;s popular
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=B-s71n0dHUk&t=2s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors text-sm"
                  >
                    <span className="mr-1">Watch on YouTube</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Cursor Video */}
            <div className="p-5 bg-bio-darker rounded-lg border border-purple-400/20">
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-3">🎥</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-bio-blue mb-2">Cursor AI Tutorial</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Learn Cursor&apos;s AI features and how to use them effectively
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=2aldTxnbNt0&t=1s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors text-sm"
                  >
                    <span className="mr-1">Watch on YouTube</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Codecademy Guide */}
            <div className="p-5 bg-bio-darker rounded-lg border border-purple-400/20">
              <div className="flex items-start mb-3">
                <span className="text-3xl mr-3">📘</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-bio-blue mb-2">Complete Cursor AI Guide</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Codecademy article with practical examples and tips
                  </p>
                  <a
                    href="https://www.codecademy.com/article/how-to-use-cursor-ai-a-complete-guide-with-practical-examples"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-bio-blue hover:text-bio-yellow transition-colors text-sm"
                  >
                    <span className="mr-1">Read the Guide</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
            <p className="text-sm text-gray-300">
              <strong className="text-bio-blue">For this course:</strong> You only need to know how to open notebooks, run cells, and use basic AI chat.
              The resources above are optional but highly recommended if you want to become more proficient!
            </p>
          </div>
        </div>

        {/* Getting Help */}
        <div className="p-8 bg-gradient-to-r from-green-400/10 to-bio-blue/10 rounded-xl border border-bio-blue/20">
          <h2 className="text-3xl font-bold text-bio-blue mb-4">🆘 Getting Help</h2>
          <div className="space-y-4 text-gray-300">
            <p className="flex items-start">
              <span className="text-green-400 mr-3 text-xl">1.</span>
              <span><strong className="text-bio-yellow">Ask Cursor AI:</strong> Press <kbd className="px-2 py-1 bg-bio-darker rounded border border-bio-blue/30 font-mono text-xs mx-1">Cmd/Ctrl+L</kbd> and describe your problem</span>
            </p>
            <p className="flex items-start">
              <span className="text-green-400 mr-3 text-xl">2.</span>
              <span><strong className="text-bio-yellow">Check seminar sessions:</strong> Bring IDE questions to the practical sessions</span>
            </p>
            <p className="flex items-start">
              <span className="text-green-400 mr-3 text-xl">3.</span>
              <span><strong className="text-bio-yellow">Course forums:</strong> Other students might have the same questions</span>
            </p>
            <p className="mt-6 text-sm text-gray-400">
              Remember: You don&apos;t need to be a Cursor expert to succeed in this course. Focus on learning Python!
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
