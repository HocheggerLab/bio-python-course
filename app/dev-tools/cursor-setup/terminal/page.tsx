'use client'

import Link from 'next/link'
import { useState } from 'react'

interface CommandCardProps {
  command: string
  description: string
  example: string
  output?: string
}

function CommandCard({ command, description, example, output }: CommandCardProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-bio-blue font-mono">{command}</h3>
        <button
          onClick={() => copyToClipboard(example)}
          className="px-3 py-1 text-xs bg-bio-blue/10 hover:bg-bio-blue/20 text-bio-blue rounded border border-bio-blue/30 transition-colors"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10">
        <div className="flex items-start">
          <span className="text-green-400 mr-2">$</span>
          <code className="text-gray-200 font-mono text-sm flex-1">{example}</code>
        </div>
        {output && (
          <div className="mt-2 pl-4 text-gray-400 font-mono text-sm">
            {output}
          </div>
        )}
      </div>
    </div>
  )
}

export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker p-4 pt-24">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dev-tools/cursor-setup" className="inline-flex items-center mb-4 text-bio-blue hover:text-bio-yellow transition-colors">
            ← Back to Development Setup
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-bio-blue mb-4">
            ⌨️ Terminal & Shell Basics
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Learn just enough terminal commands to work with Python environments and Git.
            You only need about 10 commands to get started!
          </p>
        </div>

        {/* Why Terminal? */}
        <div className="mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-bio-blue/10 rounded-xl border border-bio-blue/20">
          <h2 className="text-2xl font-bold text-bio-blue mb-4">Why Do I Need This?</h2>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span><strong className="text-bio-yellow">UV package manager</strong> runs from the terminal</span>
            </p>
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span><strong className="text-bio-yellow">Git clone</strong> downloads course notebooks via terminal</span>
            </p>
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span><strong className="text-bio-yellow">Navigate folders</strong> to find and organize your projects</span>
            </p>
            <p className="mt-4 text-sm text-gray-400 italic">
              Don't worry - it's much simpler than it looks! Most biology students master these basics in under an hour.
            </p>
          </div>
        </div>

        {/* Warp Terminal Recommendation */}
        <div className="mb-12 p-8 bg-gradient-to-br from-bio-darker to-bio-dark rounded-xl border border-green-400/30">
          <div className="flex items-start mb-6">
            <div className="text-5xl mr-4">🚀</div>
            <div>
              <h2 className="text-3xl font-bold text-green-400 mb-2">Recommended: Warp Terminal</h2>
              <p className="text-gray-300 text-lg">
                A modern terminal with AI assistance - perfect for beginners!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-bio-blue mb-3">Why Warp?</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  AI explains commands and errors
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Smart auto-completion
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Modern, intuitive interface
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Command history search
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-bio-blue mb-3">Installation</h3>
              <div className="space-y-3">
                <a
                  href="https://www.warp.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-green-400/10 hover:bg-green-400/20 rounded-lg transition-colors border border-green-400/30 group"
                >
                  <div>
                    <div className="font-semibold text-green-400">Download Warp</div>
                    <div className="text-sm text-gray-400">Mac, Linux, Windows</div>
                  </div>
                  <span className="text-green-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
            <p className="text-sm text-gray-300">
              <strong className="text-yellow-400">Alternative:</strong> You can also use your system's built-in terminal
              (Terminal on Mac, Windows Terminal, or any Linux terminal). All commands work the same!
            </p>
          </div>
        </div>

        {/* Essential Commands */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">The Essential 10 Commands</h2>
          <p className="text-gray-300 mb-8">
            These are the only commands you need for this course. Master these and you're good to go!
          </p>

          <div className="space-y-6">
            <CommandCard
              command="pwd"
              description="Print Working Directory - Shows where you are right now"
              example="pwd"
              output="/Users/yourname/Documents"
            />

            <CommandCard
              command="ls"
              description="List - Shows all files and folders in the current location"
              example="ls"
              output="biology-python/  lecture-notes.pdf  assignment1.py"
            />

            <CommandCard
              command="cd"
              description="Change Directory - Move to a different folder"
              example="cd Documents/biology-python"
              output=""
            />

            <CommandCard
              command="cd .."
              description="Go up one level in the folder structure"
              example="cd .."
              output=""
            />

            <CommandCard
              command="mkdir"
              description="Make Directory - Create a new folder"
              example="mkdir my-project"
              output=""
            />

            <CommandCard
              command="--help"
              description="Get help for any command (works with most commands)"
              example="git --help"
              output="usage: git [--version] [--help] ..."
            />

            <CommandCard
              command="git clone"
              description="Download a repository from GitHub"
              example="git clone https://github.com/HocheggerLab/y3-bio-python.git"
              output="Cloning into 'y3-bio-python'..."
            />

            <CommandCard
              command="uv venv"
              description="Create a Python virtual environment"
              example="uv venv"
              output="Using Python 3.11.9
Creating virtualenv at: .venv"
            />

            <CommandCard
              command="source (Mac/Linux)"
              description="Activate your Python virtual environment"
              example="source .venv/bin/activate"
              output="(.venv) $ "
            />

            <CommandCard
              command=".venv\\Scripts\\Activate (Windows)"
              description="Activate your Python virtual environment on Windows"
              example=".venv\\Scripts\\Activate.ps1"
              output="(.venv) PS C:\\> "
            />
          </div>
        </div>

        {/* Pro Tip: Tab Completion */}
        <div className="mb-12 p-6 bg-bio-blue/10 rounded-xl border border-bio-blue/30">
          <h3 className="text-2xl font-bold text-bio-blue mb-4">💡 Pro Tip: Tab Completion</h3>
          <p className="text-gray-300 mb-4">
            Press <kbd className="px-2 py-1 bg-bio-darker rounded border border-bio-blue/30 font-mono text-sm">Tab</kbd> while
            typing and the terminal will auto-complete file and folder names. This saves tons of time!
          </p>
          <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10">
            <div className="font-mono text-sm">
              {/* Type this: */}
              <div className="text-gray-400 mb-2">Type this:</div>
              <div className="flex items-center mb-3">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-gray-200">cd Doc<span className="text-bio-yellow">[Tab]</span></span>
              </div>
              {/* It becomes: */}
              <div className="text-gray-400 mb-2">It becomes:</div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-gray-200">cd Documents/</span>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Walkthrough */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">🎯 Practical Walkthrough</h2>
          <p className="text-gray-300 mb-6">
            Here&apos;s exactly what you&apos;ll do to set up the course notebooks:
          </p>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">1</span>
                <h3 className="text-xl font-semibold text-gray-200">Open your terminal</h3>
              </div>
              <p className="text-gray-300 ml-11">Launch Warp (or your default terminal)</p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">2</span>
                <h3 className="text-xl font-semibold text-gray-200">Check where you are</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">pwd</span>
                </div>
                <p className="text-gray-400 text-sm">This shows your current location</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">3</span>
                <h3 className="text-xl font-semibold text-gray-200">Navigate to Documents</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">cd Documents</span>
                </div>
                <p className="text-gray-400 text-sm">Move to your Documents folder</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">4</span>
                <h3 className="text-xl font-semibold text-gray-200">Create a project folder</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">mkdir biology-python</span>
                </div>
                <p className="text-gray-400 text-sm">Creates a new folder for course materials</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">5</span>
                <h3 className="text-xl font-semibold text-gray-200">Enter that folder</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">cd biology-python</span>
                </div>
                <p className="text-gray-400 text-sm">Move into your new folder</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-green-400/30">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-green-400/20 rounded-full text-green-400 font-bold mr-3">6</span>
                <h3 className="text-xl font-semibold text-gray-200">Clone the course repository</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">git clone https://github.com/HocheggerLab/y3-bio-python.git</span>
                </div>
                <p className="text-gray-400 text-sm">Downloads all course notebooks and materials</p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-green-400/30">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-green-400/20 rounded-full text-green-400 font-bold mr-3">7</span>
                <h3 className="text-xl font-semibold text-gray-200">Enter the repo and set up environment</h3>
              </div>
              <div className="ml-11 space-y-3">
                <div>
                  <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm mb-2">
                    <span className="text-green-400">$</span> <span className="text-gray-200">cd y3-bio-python</span>
                  </div>
                </div>
                <div>
                  <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm mb-2">
                    <span className="text-green-400">$</span> <span className="text-gray-200">uv venv</span>
                  </div>
                </div>
                <div>
                  <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm mb-2">
                    <span className="text-green-400">$</span> <span className="text-gray-200">source .venv/bin/activate</span>
                  </div>
                  <p className="text-gray-400 text-sm">Windows users: use <code className="text-bio-blue">.venv\Scripts\Activate.ps1</code></p>
                </div>
              </div>
            </div>

            {/* Success */}
            <div className="p-6 bg-gradient-to-r from-green-400/10 to-bio-blue/10 rounded-xl border border-green-400/30">
              <div className="flex items-center">
                <span className="text-3xl mr-3">🎉</span>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Done!</h3>
                  <p className="text-gray-300">You&apos;re ready to start coding. That&apos;s all the terminal you need!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">⚠️ Common Issues</h2>

          <div className="space-y-4">
            <div className="p-6 bg-red-400/10 rounded-xl border border-red-400/30">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Command not found</h3>
              <p className="text-gray-300 mb-2">
                If you get &quot;command not found&quot;, the tool might not be installed or not in your PATH.
              </p>
              <p className="text-sm text-gray-400">
                Solution: Re-check installation instructions for that tool (git, uv, etc.)
              </p>
            </div>

            <div className="p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">No such file or directory</h3>
              <p className="text-gray-300 mb-2">
                The folder or file doesn&apos;t exist at that location.
              </p>
              <p className="text-sm text-gray-400">
                Solution: Use <code className="text-bio-blue">ls</code> to see what&apos;s actually there, check your spelling
              </p>
            </div>

            <div className="p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Permission denied</h3>
              <p className="text-gray-300 mb-2">
                You don&apos;t have permission to access that file or folder.
              </p>
              <p className="text-sm text-gray-400">
                Solution: Make sure you&apos;re working in your own home directory (Documents, Desktop, etc.)
              </p>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mb-12 p-8 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">📋 Quick Reference</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-bio-yellow mb-4">Navigation</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between p-2 bg-bio-darker rounded">
                  <span className="text-gray-300">pwd</span>
                  <span className="text-gray-500">where am I?</span>
                </div>
                <div className="flex justify-between p-2 bg-bio-darker rounded">
                  <span className="text-gray-300">ls</span>
                  <span className="text-gray-500">list files</span>
                </div>
                <div className="flex justify-between p-2 bg-bio-darker rounded">
                  <span className="text-gray-300">cd folder</span>
                  <span className="text-gray-500">go to folder</span>
                </div>
                <div className="flex justify-between p-2 bg-bio-darker rounded">
                  <span className="text-gray-300">cd ..</span>
                  <span className="text-gray-500">go up</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-bio-yellow mb-4">Operations</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between p-2 bg-bio-darker rounded">
                  <span className="text-gray-300">mkdir name</span>
                  <span className="text-gray-500">create folder</span>
                </div>
                <div className="flex justify-between p-2 bg-bio-darker rounded">
                  <span className="text-gray-300">git clone url</span>
                  <span className="text-gray-500">download repo</span>
                </div>
                <div className="flex justify-between p-2 bg-bio-darker rounded">
                  <span className="text-gray-300">uv venv</span>
                  <span className="text-gray-500">create env</span>
                </div>
                <div className="flex justify-between p-2 bg-bio-darker rounded">
                  <span className="text-gray-300">source .venv/...</span>
                  <span className="text-gray-500">activate env</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
            <p className="text-sm text-gray-300 flex items-center">
              <span className="text-bio-blue mr-2">💡</span>
              Press <kbd className="px-2 py-1 bg-bio-darker rounded border border-bio-blue/30 font-mono text-xs mx-1">Tab</kbd> for auto-completion and
              <kbd className="px-2 py-1 bg-bio-darker rounded border border-bio-blue/30 font-mono text-xs mx-1">↑</kbd> to see previous commands!
            </p>
          </div>
        </div>

        {/* Learn More */}
        <div className="p-8 bg-gradient-to-r from-purple-500/10 to-bio-blue/10 rounded-xl border border-bio-blue/20">
          <h2 className="text-3xl font-bold text-bio-blue mb-4">📚 Want to Learn More?</h2>
          <p className="text-gray-300 mb-6">
            This page covers everything you need for this course, but if you&apos;re curious to dive deeper into shell scripting and terminal power-user techniques:
          </p>

          <div className="p-6 bg-bio-darker rounded-lg border border-bio-blue/20">
            <h3 className="text-xl font-semibold text-bio-yellow mb-3">DataCamp Shell Course</h3>
            <p className="text-gray-300 mb-4">
              Interactive course to master the command line:
            </p>
            <div className="space-y-3">
              <a
                href="https://app.datacamp.com/learn/courses/introduction-to-shell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-bio-dark/50 hover:bg-bio-dark rounded-lg transition-colors border border-bio-blue/20 group"
              >
                <div>
                  <div className="text-gray-300 group-hover:text-bio-blue font-semibold">Introduction to Shell</div>
                  <div className="text-sm text-gray-400 mt-1">Learn to use the Unix shell for data science workflows</div>
                </div>
                <span className="text-bio-blue group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
