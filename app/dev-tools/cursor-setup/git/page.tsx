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
          <code className="text-gray-200 font-mono text-sm flex-1 break-all">{example}</code>
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

export default function GitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker p-4 pt-24">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dev-tools/cursor-setup" className="inline-flex items-center mb-4 text-bio-blue hover:text-bio-yellow transition-colors">
            ← Back to Development Setup
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-bio-blue mb-4">
            🔀 Git & GitHub Basics
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Learn just enough Git to download the course materials. That&apos;s all you need for now!
          </p>
        </div>

        {/* Why Git? */}
        <div className="mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-bio-blue/10 rounded-xl border border-bio-blue/20">
          <h2 className="text-2xl font-bold text-bio-blue mb-4">Why Do I Need This?</h2>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span>The course notebooks are hosted on <strong className="text-bio-yellow">GitHub</strong></span>
            </p>
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span>You need <strong className="text-bio-yellow">Git</strong> to download them to your computer</span>
            </p>
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span>One command (<code className="text-bio-blue px-1">git clone</code>) gets you everything</span>
            </p>
            <p className="mt-4 text-sm text-gray-400 italic">
              Git is version control software - it tracks changes to code. GitHub is where we store the course materials online.
            </p>
          </div>
        </div>

        {/* What's the Difference? */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">Git vs GitHub - What&apos;s the Difference?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Git Card */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-bio-blue mb-3">Git</h3>
              <p className="text-gray-300 mb-4">
                Software that runs on your computer
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Tracks changes to files</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Downloads code from GitHub</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Works via terminal commands</span>
                </li>
              </ul>
            </div>

            {/* GitHub Card */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-bio-blue mb-3">GitHub</h3>
              <p className="text-gray-300 mb-4">
                Website for hosting code online
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Stores code in the cloud</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Share code with others</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Browse code in your browser</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
            <p className="text-gray-300">
              <strong className="text-bio-yellow">Think of it like this:</strong> Git is like a download manager on your computer,
              and GitHub is like Google Drive for code.
            </p>
          </div>
        </div>

        {/* Check if Git is Already Installed */}
        <div className="mb-12 p-6 bg-bio-blue/10 rounded-xl border border-bio-blue/30">
          <h2 className="text-2xl font-bold text-bio-blue mb-4">✓ First: Check If You Already Have Git</h2>
          <p className="text-gray-300 mb-4">
            Before installing, let&apos;s see if Git is already on your computer:
          </p>
          <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm mb-3">
            <div className="flex items-start mb-2">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-gray-200">git --version</span>
            </div>
            <div className="pl-4 text-gray-400">
              git version 2.39.0
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <strong className="text-green-400">If you see a version number:</strong> You&apos;re all set! Skip the installation.
          </p>
          <p className="text-sm text-gray-300">
            <strong className="text-red-400">If you see &quot;command not found&quot;:</strong> Follow the installation instructions below.
          </p>
        </div>

        {/* Installing Git */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">Installing Git</h2>

          <div className="space-y-4">
            {/* Mac */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-green-400/30">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🍎</span>
                <h3 className="text-xl font-bold text-green-400">Mac</h3>
              </div>
              <div className="mb-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-sm text-gray-300">
                  <strong className="text-yellow-400">Note:</strong> Mac often comes with Git pre-installed via Xcode Command Line Tools.
                  If <code className="text-bio-blue px-1">git --version</code> prompts you to install developer tools, click &quot;Install&quot;.
                </p>
              </div>
              <p className="text-gray-300 mb-3">If you need to install or update Git via Homebrew:</p>
              <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm">
                <span className="text-green-400">$</span> <span className="text-gray-200">brew install git</span>
              </div>
            </div>

            {/* Linux */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/30">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🐧</span>
                <h3 className="text-xl font-bold text-bio-blue">Linux</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/20 font-mono text-sm">
                  <div className="text-gray-400 text-xs mb-1"># Ubuntu/Debian</div>
                  <span className="text-green-400">$</span> <span className="text-gray-200">sudo apt install git</span>
                </div>
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/20 font-mono text-sm">
                  <div className="text-gray-400 text-xs mb-1"># Fedora</div>
                  <span className="text-green-400">$</span> <span className="text-gray-200">sudo dnf install git</span>
                </div>
              </div>
            </div>

            {/* Windows */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-yellow/30">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🪟</span>
                <h3 className="text-xl font-bold text-bio-yellow">Windows</h3>
              </div>
              <p className="text-gray-300 mb-3">
                Download Git for Windows from:
              </p>
              <a
                href="https://git-scm.com/download/win"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-bio-yellow/20 hover:bg-bio-yellow/30 text-bio-yellow rounded-lg transition-colors border border-bio-yellow/30"
              >
                Download Git for Windows ↗
              </a>
            </div>
          </div>

          {/* Verify Installation */}
          <div className="mt-6 p-6 bg-green-400/10 rounded-xl border border-green-400/30">
            <h3 className="text-xl font-bold text-green-400 mb-3">✓ Verify Installation</h3>
            <p className="text-gray-300 mb-3">After installing, verify it worked:</p>
            <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm">
              <div className="flex items-start mb-2">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-gray-200">git --version</span>
              </div>
              <div className="pl-4 text-gray-400">
                git version 2.39.0
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-3">
              <strong className="text-green-400">Success!</strong> If you see a version number, Git is ready to use.
            </p>
          </div>
        </div>

        {/* The One Command You Need */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">The One Command You Need: git clone</h2>

          <CommandCard
            command="git clone"
            description="Download a repository from GitHub to your computer"
            example="git clone https://github.com/HocheggerLab/y3-bio-python.git"
            output="Cloning into 'y3-bio-python'...
remote: Enumerating objects: 156, done.
remote: Counting objects: 100% (156/156), done.
Receiving objects: 100% (156/156), done."
          />

          <div className="mt-6 p-4 bg-green-400/10 rounded-lg border border-green-400/20">
            <p className="text-gray-300">
              <strong className="text-green-400">What happens:</strong> This creates a new folder called <code className="text-bio-blue px-1">y3-bio-python</code> containing
              all the course notebooks and files.
            </p>
          </div>
        </div>

        {/* Step by Step */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">🎯 Step-by-Step: Clone the Course Repo</h2>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">1</span>
                <h3 className="text-xl font-semibold text-gray-200">Open your terminal</h3>
              </div>
              <p className="text-gray-300 ml-11">Launch Warp or your default terminal</p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">2</span>
                <h3 className="text-xl font-semibold text-gray-200">Navigate to where you want the files</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">cd Documents</span>
                </div>
                <p className="text-gray-400 text-sm">Or wherever you want to store your course materials</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-green-400/30">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-green-400/20 rounded-full text-green-400 font-bold mr-3">3</span>
                <h3 className="text-xl font-semibold text-gray-200">Clone the repository</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">git clone https://github.com/HocheggerLab/y3-bio-python.git</span>
                </div>
                <p className="text-gray-400 text-sm">This downloads all the notebooks to a new folder</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">4</span>
                <h3 className="text-xl font-semibold text-gray-200">Enter the new folder</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">cd y3-bio-python</span>
                </div>
                <p className="text-gray-400 text-sm">Now you&apos;re inside the course repository!</p>
              </div>
            </div>

            {/* Success */}
            <div className="p-6 bg-gradient-to-r from-green-400/10 to-bio-blue/10 rounded-xl border border-green-400/30">
              <div className="flex items-center">
                <span className="text-3xl mr-3">🎉</span>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Done!</h3>
                  <p className="text-gray-300">You now have all the course materials on your computer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Updates */}
        <div className="mb-12 p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">📥 Getting Updates</h2>
          <p className="text-gray-300 mb-4">
            If we update the course materials (add new notebooks, fix typos, etc.), you can get the latest version:
          </p>
          <div className="bg-bio-darker rounded-lg p-4 border border-yellow-500/20 font-mono text-sm">
            <div className="text-gray-400 text-xs mb-2"># Make sure you&apos;re in the y3-bio-python folder</div>
            <div className="flex items-start">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-gray-200">git pull</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            This downloads any new changes from GitHub.
          </p>
        </div>

        {/* Optional: GitHub Account */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">Optional: Create a GitHub Account</h2>
          <p className="text-gray-300 mb-6">
            You don&apos;t need a GitHub account to download the course materials, but it&apos;s useful for:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-bio-dark/50 rounded-lg border border-bio-blue/20">
              <div className="text-2xl mb-2">💾</div>
              <h3 className="font-semibold text-gray-200 mb-2">Backup Your Work</h3>
              <p className="text-sm text-gray-400">Store your own projects online</p>
            </div>

            <div className="p-4 bg-bio-dark/50 rounded-lg border border-bio-blue/20">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold text-gray-200 mb-2">Collaborate</h3>
              <p className="text-sm text-gray-400">Share code with classmates</p>
            </div>

            <div className="p-4 bg-bio-dark/50 rounded-lg border border-bio-blue/20">
              <div className="text-2xl mb-2">📦</div>
              <h3 className="font-semibold text-gray-200 mb-2">Use Packages</h3>
              <p className="text-sm text-gray-400">Access thousands of bioinformatics tools</p>
            </div>

            <div className="p-4 bg-bio-dark/50 rounded-lg border border-bio-blue/20">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-semibold text-gray-200 mb-2">Student Benefits</h3>
              <p className="text-sm text-gray-400">Free Pro features with GitHub Student Pack</p>
            </div>
          </div>

          <a
            href="https://github.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-bio-blue/20 hover:bg-bio-blue/30 text-bio-blue rounded-lg transition-colors border border-bio-blue/30"
          >
            <span className="mr-2">Sign up for GitHub</span>
            <span>↗</span>
          </a>
        </div>

        {/* Quick Reference */}
        <div className="mb-12 p-8 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">📋 Quick Reference</h2>

          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between p-3 bg-bio-darker rounded border border-bio-blue/10">
              <span className="text-gray-300">git --version</span>
              <span className="text-gray-500">Check if Git is installed</span>
            </div>
            <div className="flex justify-between p-3 bg-bio-darker rounded border border-bio-blue/10">
              <span className="text-gray-300">git clone &lt;url&gt;</span>
              <span className="text-gray-500">Download a repository</span>
            </div>
            <div className="flex justify-between p-3 bg-bio-darker rounded border border-bio-blue/10">
              <span className="text-gray-300">git pull</span>
              <span className="text-gray-500">Get latest updates</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-400/10 rounded-lg border border-green-400/20">
            <p className="text-sm text-gray-300">
              <strong className="text-green-400">That&apos;s it!</strong> These three commands are all you need for this course.
            </p>
          </div>
        </div>

        {/* Learn More */}
        <div className="p-8 bg-gradient-to-r from-purple-500/10 to-bio-blue/10 rounded-xl border border-bio-blue/20">
          <h2 className="text-3xl font-bold text-bio-blue mb-4">📚 Want to Learn More?</h2>
          <p className="text-gray-300 mb-6">
            This page covers everything you need for this course, but if you&apos;re curious to learn more about
            version control and collaboration:
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-bio-darker rounded-lg border border-bio-blue/20">
              <h3 className="text-xl font-semibold text-bio-yellow mb-4">DataCamp Git & GitHub Courses</h3>
              <div className="space-y-3">
                <a
                  href="https://app.datacamp.com/learn/courses/introduction-to-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-bio-dark/50 hover:bg-bio-dark rounded-lg transition-colors border border-bio-blue/20 group"
                >
                  <div>
                    <div className="text-gray-300 group-hover:text-bio-blue font-semibold">Introduction to Git</div>
                    <div className="text-sm text-gray-400 mt-1">Learn version control fundamentals</div>
                  </div>
                  <span className="text-bio-blue group-hover:translate-x-1 transition-transform">↗</span>
                </a>

                <a
                  href="https://app.datacamp.com/learn/courses/introduction-to-github-concepts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-bio-dark/50 hover:bg-bio-dark rounded-lg transition-colors border border-bio-blue/20 group"
                >
                  <div>
                    <div className="text-gray-300 group-hover:text-bio-blue font-semibold">Introduction to GitHub Concepts</div>
                    <div className="text-sm text-gray-400 mt-1">Master collaboration and pull requests</div>
                  </div>
                  <span className="text-bio-blue group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-bio-darker rounded-lg border border-bio-blue/20">
              <h3 className="text-xl font-semibold text-bio-yellow mb-3">Course Repository</h3>
              <a
                href="https://github.com/HocheggerLab/y3-bio-python"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-bio-dark/50 hover:bg-bio-dark rounded-lg transition-colors border border-bio-blue/20 group"
              >
                <div>
                  <div className="text-gray-300 group-hover:text-bio-blue font-semibold">y3-bio-python Repository</div>
                  <div className="text-sm text-gray-400 mt-1">Browse the course materials online</div>
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
