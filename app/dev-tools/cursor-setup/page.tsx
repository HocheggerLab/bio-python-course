'use client'

import Link from 'next/link'

interface TopicCardProps {
  icon: string
  title: string
  description: string
  topics: string[]
  href: string
}

function TopicCard({ icon, title, description, topics, href }: TopicCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="h-full p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20 hover:border-bio-blue/50 transition-all hover:shadow-lg hover:shadow-bio-blue/10">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-bio-blue mb-3 group-hover:text-bio-yellow transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="space-y-2 mb-4">
          {topics.map((topic, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-400">
              <span className="text-bio-blue mr-2">▸</span>
              {topic}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-bio-blue/10">
          <span className="text-bio-blue group-hover:text-bio-yellow transition-colors">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function CursorSetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-dark to-bio-darker p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dev-tools" className="inline-flex items-center mb-4 text-bio-blue hover:text-bio-yellow transition-colors">
            ← Back to Development Tools
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-bio-blue pt-24 mb-4">
            Local Development Setup
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            Set up a professional Python development environment on your computer.
            This guide will help you install and configure all the tools needed to work
            with the course notebooks locally using modern development practices.
          </p>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-12 p-6 bg-gradient-to-r from-bio-blue/10 to-purple-500/10 rounded-xl border border-bio-blue/20">
          <h2 className="text-2xl font-bold text-bio-blue mb-4">Why Local Development?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">Faster & More Powerful</h3>
                <p className="text-sm text-gray-400">Work offline with full control over your environment</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">AI-Powered Coding</h3>
                <p className="text-sm text-gray-400">Get intelligent code suggestions with Cursor AI</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔬</span>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">Professional Skills</h3>
                <p className="text-sm text-gray-400">Learn industry-standard tools and workflows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Topic Cards Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bio-blue mb-6">Core Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TopicCard
              icon="⌨️"
              title="Terminal & Shell"
              description="Master the command line interface for efficient file navigation and program execution."
              topics={[
                "Basic shell commands (cd, ls, pwd)",
                "File and directory management",
                "Running Python scripts from terminal",
                "Understanding file paths"
              ]}
              href="/dev-tools/cursor-setup/terminal"
            />

            <TopicCard
              icon="🔀"
              title="Git & GitHub"
              description="Version control for tracking changes and collaborating on code projects."
              topics={[
                "Git basics: clone, commit, push, pull",
                "Working with GitHub repositories",
                "Cloning the course notebook repo",
                "Understanding version history"
              ]}
              href="/dev-tools/cursor-setup/git"
            />

            <TopicCard
              icon="📦"
              title="UV & Python Environments"
              description="Modern Python package management and isolated development environments."
              topics={[
                "Installing UV package manager",
                "Creating virtual environments",
                "Managing Python dependencies",
                "Working with requirements.txt"
              ]}
              href="/dev-tools/cursor-setup/uv-python"
            />

            <TopicCard
              icon="💻"
              title="Cursor IDE"
              description="AI-powered code editor built on VS Code with intelligent assistance."
              topics={[
                "Installing and configuring Cursor",
                "Opening and running notebooks",
                "Using AI code completion",
                "Debugging Python code"
              ]}
              href="/dev-tools/cursor-setup/cursor-ide"
            />
          </div>
        </div>

        {/* Setup Instructions Downloads */}
        <div className="mb-12 p-8 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
          <h2 className="text-3xl font-bold text-bio-blue mb-4">
            📥 Complete Setup Instructions
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Download comprehensive step-by-step instructions for your operating system.
            These guides walk you through the entire setup process from start to finish.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mac/Linux Instructions */}
            <div className="p-6 bg-gradient-to-br from-bio-darker to-bio-dark rounded-lg border border-green-400/30">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🍎</span>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Mac & Linux</h3>
                  <p className="text-sm text-gray-400">Unix-based systems</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  macOS (Intel & Apple Silicon)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Linux (Ubuntu, Debian, Fedora)
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Terminal and Homebrew setup
                </li>
              </ul>
              <a
                href="/instructions/setup-mac-linux.pdf"
                download="python-biology-setup-mac-linux.pdf"
                className="inline-flex items-center px-6 py-3 bg-green-400/20 hover:bg-green-400/30 text-green-400 rounded-lg transition-colors border border-green-400/30 hover:border-green-400/50"
              >
                <span className="mr-2">📄</span>
                Download Instructions (PDF)
              </a>
            </div>

            {/* Windows Instructions */}
            <div className="p-6 bg-gradient-to-br from-bio-darker to-bio-dark rounded-lg border border-bio-blue/30">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🪟</span>
                <div>
                  <h3 className="text-xl font-bold text-bio-blue">Windows</h3>
                  <p className="text-sm text-gray-400">PC setup guide</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-bio-blue mr-2">✓</span>
                  Windows 10 & 11
                </li>
                <li className="flex items-center">
                  <span className="text-bio-blue mr-2">✓</span>
                  PowerShell and Git Bash
                </li>
                <li className="flex items-center">
                  <span className="text-bio-blue mr-2">✓</span>
                  Windows Terminal setup
                </li>
              </ul>
              <a
                href="/instructions/setup-windows.pdf"
                download="python-biology-setup-windows.pdf"
                className="inline-flex items-center px-6 py-3 bg-bio-blue/20 hover:bg-bio-blue/30 text-bio-blue rounded-lg transition-colors border border-bio-blue/30 hover:border-bio-blue/50"
              >
                <span className="mr-2">📄</span>
                Download Instructions (PDF)
              </a>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
            <div className="flex items-start">
              <span className="text-2xl mr-3">💡</span>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Need Help?</h4>
                <p className="text-sm text-gray-300">
                  If you encounter any issues during setup, don't hesitate to ask for help in the course forums
                  or during seminar sessions. Setting up a development environment can be tricky the first time!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-6 bg-bio-dark/50 rounded-xl border border-bio-blue/20">
          <h2 className="text-2xl font-bold text-bio-blue mb-4">
            🔗 Quick Links
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://www.cursor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-bio-darker rounded-lg hover:bg-bio-dark/70 transition-colors group"
            >
              <span className="text-gray-300 group-hover:text-bio-blue">Download Cursor</span>
              <span className="text-bio-blue">↗</span>
            </a>
            <a
              href="https://github.com/astral-sh/uv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-bio-darker rounded-lg hover:bg-bio-dark/70 transition-colors group"
            >
              <span className="text-gray-300 group-hover:text-bio-blue">UV Package Manager</span>
              <span className="text-bio-blue">↗</span>
            </a>
            <a
              href="https://github.com/HocheggerLab/y3-bio-python"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-bio-darker rounded-lg hover:bg-bio-dark/70 transition-colors group"
            >
              <span className="text-gray-300 group-hover:text-bio-blue">Course GitHub Repo</span>
              <span className="text-bio-blue">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
