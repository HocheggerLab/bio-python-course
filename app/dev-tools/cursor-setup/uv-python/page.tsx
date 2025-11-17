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
          <div className="mt-2 pl-4 text-gray-400 font-mono text-sm whitespace-pre-line">
            {output}
          </div>
        )}
      </div>
    </div>
  )
}

export default function UVPythonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker p-4 pt-24">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dev-tools/cursor-setup" className="inline-flex items-center mb-4 text-bio-blue hover:text-bio-yellow transition-colors">
            ← Back to Development Setup
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-bio-blue mb-4">
            📦 UV & Python Environments
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Learn about virtual environments and UV - the modern Python package manager.
          </p>
        </div>

        {/* Why Virtual Environments? */}
        <div className="mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-bio-blue/10 rounded-xl border border-bio-blue/20">
          <h2 className="text-2xl font-bold text-bio-blue mb-4">Why Virtual Environments?</h2>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span><strong className="text-bio-yellow">Isolated projects:</strong> Each project gets its own Python packages</span>
            </p>
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span><strong className="text-bio-yellow">No conflicts:</strong> Different versions for different projects</span>
            </p>
            <p className="flex items-start">
              <span className="text-bio-blue mr-3 text-xl">•</span>
              <span><strong className="text-bio-yellow">Easy sharing:</strong> Others can recreate your exact setup</span>
            </p>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">The Problem Without Virtual Environments</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Without */}
            <div className="p-6 bg-red-400/10 rounded-xl border border-red-400/30">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold text-red-400 mb-3">Without Virtual Env</h3>
              <p className="text-gray-300 mb-4">
                All packages installed globally on your computer
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Project A needs pandas v1.5</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Project B needs pandas v2.0</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>They conflict! One breaks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Hard to share exact setup with others</span>
                </li>
              </ul>
            </div>

            {/* With */}
            <div className="p-6 bg-green-400/10 rounded-xl border border-green-400/30">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">With Virtual Env</h3>
              <p className="text-gray-300 mb-4">
                Each project has its own isolated environment
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Project A: pandas v1.5 in its own env</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Project B: pandas v2.0 in its own env</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>No conflicts! Both work perfectly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Share requirements.txt for exact setup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What is UV? */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">What is UV?</h2>

          <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20 mb-6">
            <div className="flex items-start mb-4">
              <div className="text-5xl mr-4">⚡</div>
              <div>
                <h3 className="text-2xl font-bold text-bio-yellow mb-2">UV: Modern Python Package Manager</h3>
                <p className="text-gray-300 text-lg mb-3">
                  Created by Astral, UV is a blazingly fast replacement for pip and virtualenv.
                </p>
                <a
                  href="https://docs.astral.sh/uv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-bio-blue hover:text-bio-yellow transition-colors"
                >
                  <span className="mr-1">Read the official UV documentation</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-bio-darker rounded-lg border border-bio-blue/10">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-semibold text-gray-200 mb-2">10-100x Faster</h4>
                <p className="text-sm text-gray-400">Written in Rust for speed</p>
              </div>

              <div className="p-4 bg-bio-darker rounded-lg border border-bio-blue/10">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-gray-200 mb-2">Simple Commands</h4>
                <p className="text-sm text-gray-400">Easier than pip + venv</p>
              </div>

              <div className="p-4 bg-bio-darker rounded-lg border border-bio-blue/10">
                <div className="text-2xl mb-2">🔒</div>
                <h4 className="font-semibold text-gray-200 mb-2">Reliable</h4>
                <p className="text-sm text-gray-400">Consistent installs every time</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
            <p className="text-gray-300 text-sm">
              <strong className="text-bio-yellow">Why UV instead of pip?</strong> UV handles both Python installation
              AND package management in one tool. It&apos;s faster, simpler, and recommended for modern Python development.
            </p>
          </div>
        </div>

        {/* Installing UV */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">Installing UV</h2>

          <div className="space-y-4">
            {/* Mac & Linux */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-green-400/30">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🍎🐧</span>
                <h3 className="text-xl font-bold text-green-400">Mac & Linux</h3>
              </div>
              <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm">
                <span className="text-green-400">$</span> <span className="text-gray-200">curl -LsSf https://astral.sh/uv/install.sh | sh</span>
              </div>
            </div>

            {/* Windows */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-yellow/30">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🪟</span>
                <h3 className="text-xl font-bold text-bio-yellow">Windows (PowerShell)</h3>
              </div>
              <div className="bg-bio-darker rounded-lg p-4 border border-bio-yellow/20 font-mono text-sm">
                <span className="text-green-400">PS&gt;</span> <span className="text-gray-200">powershell -c &quot;irm https://astral.sh/uv/install.ps1 | iex&quot;</span>
              </div>
            </div>
          </div>

          {/* Verify Installation */}
          <div className="mt-6 p-6 bg-green-400/10 rounded-xl border border-green-400/30">
            <h3 className="text-xl font-bold text-green-400 mb-3">✓ Verify Installation</h3>
            <p className="text-gray-300 mb-3">Restart your terminal, then check:</p>
            <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm">
              <div className="flex items-start mb-2">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-gray-200">uv --version</span>
              </div>
              <div className="pl-4 text-gray-400">
                uv 0.4.0
              </div>
            </div>
          </div>
        </div>

        {/* Essential UV Commands */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">Essential UV Commands</h2>
          <p className="text-gray-300 mb-6">
            UV uses a modern, simple workflow. Here are the commands you&apos;ll use:
          </p>

          <div className="space-y-6">
            <CommandCard
              command="uv init"
              description="Initialize a new Python project with a virtual environment"
              example="uv init my-project --python 3.12"
              output="Initialized project `my-project` at `/path/to/my-project`"
            />

            <div className="p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
              <p className="text-sm text-gray-300">
                <strong className="text-bio-yellow">What happens:</strong> Creates a project folder with <code className="text-bio-blue">pyproject.toml</code> (project config) and sets up a virtual environment with Python 3.12 automatically.
              </p>
            </div>

            <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-400">Important:</strong> Always use <code className="text-bio-blue">--python 3.12</code> for this course. Python 3.13 has compatibility issues with some data sources (Zenodo).
              </p>
            </div>

            <CommandCard
              command="uv add"
              description="Add a package to your project (installs it automatically)"
              example="uv add jupyter numpy pandas matplotlib seaborn"
              output="Resolved 5 packages in 320ms
Downloaded 5 packages in 1.2s
Installed 5 packages in 150ms
Updated pyproject.toml"
            />

            <div className="p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
              <p className="text-sm text-gray-300">
                <strong className="text-bio-yellow">What happens:</strong> Installs the package AND adds it to your <code className="text-bio-blue">pyproject.toml</code> so others can recreate your setup.
              </p>
            </div>

            <CommandCard
              command="uv sync"
              description="Install all packages from an existing project"
              example="uv sync"
              output="Resolved 23 packages in 450ms
Installed 23 packages in 2.1s"
            />

            <div className="p-4 bg-bio-blue/10 rounded-lg border border-bio-blue/20">
              <p className="text-sm text-gray-300">
                <strong className="text-bio-yellow">When to use:</strong> When you clone a project (like our course repo) that already has a <code className="text-bio-blue">pyproject.toml</code> file. This installs everything needed.
              </p>
            </div>

          </div>

          <div className="mt-6 p-4 bg-green-400/10 rounded-lg border border-green-400/20">
            <p className="text-sm text-gray-300">
              <strong className="text-green-400">Pro tip:</strong> When you open the project in Cursor IDE, it will automatically detect and use your virtual environment. No manual activation needed!
            </p>
          </div>
        </div>

        {/* Practical Workflow */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">🎯 Workflow: Setting Up the Course Project</h2>
          <p className="text-gray-300 mb-6">
            Here&apos;s what you&apos;ll do to set up the course notebooks:
          </p>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">1</span>
                <h3 className="text-xl font-semibold text-gray-200">Clone the course repository</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm">
                  <span className="text-green-400">$</span> <span className="text-gray-200">git clone https://github.com/HocheggerLab/y3-bio-python.git</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-bio-blue/20 rounded-full text-bio-blue font-bold mr-3">2</span>
                <h3 className="text-xl font-semibold text-gray-200">Navigate into the project</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm">
                  <span className="text-green-400">$</span> <span className="text-gray-200">cd y3-bio-python</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-green-400/30">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-green-400/20 rounded-full text-green-400 font-bold mr-3">3</span>
                <h3 className="text-xl font-semibold text-gray-200">Sync all course packages</h3>
              </div>
              <div className="ml-11">
                <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">uv sync</span>
                </div>
                <p className="text-gray-400 text-sm">This reads <code className="text-bio-blue">pyproject.toml</code> and installs jupyter, numpy, pandas, matplotlib, biopython, etc.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-bio-dark/50 rounded-xl border border-green-400/30">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 bg-green-400/20 rounded-full text-green-400 font-bold mr-3">4</span>
                <h3 className="text-xl font-semibold text-gray-200">Open in Cursor IDE</h3>
              </div>
              <div className="ml-11">
                <p className="text-gray-300 mb-2">Open the project folder in Cursor IDE:</p>
                <div className="bg-bio-darker rounded-lg p-4 border border-green-400/20 font-mono text-sm mb-2">
                  <span className="text-green-400">$</span> <span className="text-gray-200">cursor .</span>
                </div>
                <p className="text-gray-400 text-sm">Cursor will automatically detect your virtual environment and use it for running notebooks</p>
              </div>
            </div>

            {/* Success */}
            <div className="p-6 bg-gradient-to-r from-green-400/10 to-bio-blue/10 rounded-xl border border-green-400/30">
              <div className="flex items-center">
                <span className="text-3xl mr-3">🎉</span>
                <div>
                  <h3 className="text-xl font-bold text-green-400">You&apos;re Ready!</h3>
                  <p className="text-gray-300">Your environment is set up with all course packages. Cursor will handle the rest!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Starting a New Project */}
        <div className="mb-12 p-6 bg-bio-blue/10 rounded-xl border border-bio-blue/30">
          <h2 className="text-2xl font-bold text-bio-blue mb-4">🆕 Starting Your Own Project</h2>
          <p className="text-gray-300 mb-4">
            When you want to create your own Python project from scratch:
          </p>
          <div className="space-y-3">
            <div className="bg-bio-darker rounded-lg p-4 border border-bio-blue/10 font-mono text-sm">
              <div className="mb-2"><span className="text-green-400">$</span> <span className="text-gray-200">uv init my-bio-project --python 3.12</span></div>
              <div className="mb-2"><span className="text-green-400">$</span> <span className="text-gray-200">cd my-bio-project</span></div>
              <div className="mb-2"><span className="text-green-400">$</span> <span className="text-gray-200">uv add jupyter numpy pandas matplotlib</span></div>
              <div><span className="text-green-400">$</span> <span className="text-gray-200">cursor .</span></div>
            </div>
            <p className="text-sm text-gray-400">
              UV creates the project structure with Python 3.12, sets up the environment, and manages packages. Then open in Cursor to start coding!
            </p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-12 p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">⚠️ Important Notes</h2>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start">
              <span className="text-yellow-400 mr-3">•</span>
              <span><strong>Cursor automatically detects</strong> your virtual environment - no manual activation needed!</span>
            </p>
            <p className="flex items-start">
              <span className="text-yellow-400 mr-3">•</span>
              <span>The <code className="text-bio-blue">.venv</code> folder can be large (100s of MB) - don&apos;t commit it to Git</span>
            </p>
            <p className="flex items-start">
              <span className="text-yellow-400 mr-3">•</span>
              <span>Each project gets its own <code className="text-bio-blue">pyproject.toml</code> file that tracks all dependencies</span>
            </p>
            <p className="flex items-start">
              <span className="text-yellow-400 mr-3">•</span>
              <span>Use <code className="text-bio-blue">uv add package-name</code> to install new packages (not pip!)</span>
            </p>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mb-12 p-8 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">📋 Quick Reference</h2>

          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between p-3 bg-bio-darker rounded border border-bio-blue/10">
              <span className="text-gray-300">uv --version</span>
              <span className="text-gray-500">Check UV is installed</span>
            </div>
            <div className="flex justify-between p-3 bg-bio-darker rounded border border-bio-blue/10">
              <span className="text-gray-300">uv init project --python 3.12</span>
              <span className="text-gray-500">Create new project</span>
            </div>
            <div className="flex justify-between p-3 bg-bio-darker rounded border border-bio-blue/10">
              <span className="text-gray-300">uv add package</span>
              <span className="text-gray-500">Add a package to project</span>
            </div>
            <div className="flex justify-between p-3 bg-bio-darker rounded border border-bio-blue/10">
              <span className="text-gray-300">uv sync</span>
              <span className="text-gray-500">Install all project dependencies</span>
            </div>
            <div className="flex justify-between p-3 bg-bio-darker rounded border border-bio-blue/10">
              <span className="text-gray-300">cursor .</span>
              <span className="text-gray-500">Open project in Cursor</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-400/10 rounded-lg border border-green-400/20">
            <p className="text-sm text-gray-300">
              <strong className="text-green-400">That&apos;s it!</strong> UV manages your environment, and Cursor automatically uses it when you open notebooks.
            </p>
          </div>
        </div>

        {/* Learn More */}
        <div className="p-8 bg-gradient-to-r from-purple-500/10 to-bio-blue/10 rounded-xl border border-bio-blue/20">
          <h2 className="text-3xl font-bold text-bio-blue mb-4">📚 Learn More</h2>
          <p className="text-gray-300 mb-6">
            Want to dive deeper into UV and Python package management?
          </p>

          <div className="space-y-4">
            <a
              href="https://docs.astral.sh/uv/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-bio-darker rounded-lg transition-colors border border-bio-blue/20 hover:bg-bio-dark group"
            >
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-3xl mr-3">⚡</span>
                  <div className="text-xl font-semibold text-bio-blue group-hover:text-bio-yellow">UV Official Documentation</div>
                </div>
                <div className="text-sm text-gray-400">Comprehensive guide from Astral - the creators of UV</div>
              </div>
              <span className="text-bio-blue group-hover:translate-x-1 transition-transform text-2xl">↗</span>
            </a>

            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://docs.astral.sh/uv/getting-started/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-bio-dark/50 hover:bg-bio-dark rounded-lg transition-colors border border-bio-blue/20 group"
              >
                <span className="text-gray-300 group-hover:text-bio-blue">Getting Started Guide</span>
                <span className="text-bio-blue">↗</span>
              </a>

              <a
                href="https://docs.astral.sh/uv/guides/projects/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-bio-dark/50 hover:bg-bio-dark rounded-lg transition-colors border border-bio-blue/20 group"
              >
                <span className="text-gray-300 group-hover:text-bio-blue">Working with Projects</span>
                <span className="text-bio-blue">↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
