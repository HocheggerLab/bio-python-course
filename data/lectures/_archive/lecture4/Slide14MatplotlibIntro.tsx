'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide14MatplotlibIntro() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Introduction to <GradientText>Matplotlib</GradientText> 📊
      </SlideTitle>

      <p className="text-gray-300 text-center mb-6 text-lg">
        Python's foundational plotting library for scientific visualization
      </p>

      {/* What is Matplotlib */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-5 mb-6">
        <h3 className="text-lg font-bold text-purple-400 mb-3 text-center">
          🎨 What is Matplotlib?
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-bio-dark/50 rounded-lg p-3">
            <p className="text-bio-yellow font-semibold mb-1">Publication Quality</p>
            <p className="text-gray-300 text-xs">Create figures ready for scientific papers and presentations</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-3">
            <p className="text-bio-yellow font-semibold mb-1">Highly Customizable</p>
            <p className="text-gray-300 text-xs">Control every aspect of your plots - colors, labels, fonts, sizes</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-3">
            <p className="text-bio-yellow font-semibold mb-1">Industry Standard</p>
            <p className="text-gray-300 text-xs">Foundation for Seaborn, Pandas plotting, and many other libraries</p>
          </div>
        </div>
      </div>

      {/* Two APIs Comparison */}
      <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-bio-blue mb-4 text-center">
          ⚡ Two Ways to Plot: Which Should You Use?
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* plt. API */}
          <div className="bg-amber-400/10 rounded-lg p-4">
            <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
              <span>❌</span>
              <span>plt. API (MATLAB-style)</span>
            </h4>
            <SyntaxHighlighter
              code={`import matplotlib.pyplot as plt

# Quick but implicit
plt.plot([1, 2, 3], [1, 4, 9])
plt.xlabel('X values')
plt.ylabel('Y values')
plt.title('My Plot')
plt.show()`}
              language="python"
            />
            <div className="mt-3 text-gray-300 text-xs space-y-1">
              <p>• Simpler for quick plots</p>
              <p>• You'll see this in online tutorials</p>
              <p className="text-amber-400">• Less control with multiple plots</p>
              <p className="text-amber-400">• Implicit: modifies "current" figure</p>
            </div>
          </div>

          {/* fig, ax API */}
          <div className="bg-bio-green/10 rounded-lg p-4 border-2 border-bio-green/50">
            <h4 className="text-bio-green font-semibold mb-3 flex items-center gap-2">
              <span>✅</span>
              <span>fig, ax API (Object-Oriented)</span>
            </h4>
            <SyntaxHighlighter
              code={`import matplotlib.pyplot as plt

# Explicit and powerful
fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 4, 9])
ax.set_xlabel('X values')
ax.set_ylabel('Y values')
ax.set_title('My Plot')
plt.show()`}
              language="python"
            />
            <div className="mt-3 text-gray-300 text-xs space-y-1">
              <p className="text-bio-green">• Explicit: you control each axes</p>
              <p className="text-bio-green">• Essential for multi-panel figures</p>
              <p className="text-bio-green">• Professional standard</p>
              <p className="text-bio-green">• More powerful and flexible</p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-bio-blue/10 rounded-lg p-4">
          <p className="text-bio-blue text-center font-semibold">
            🎯 In this course, we use ONLY the <code className="bg-bio-dark px-2 py-1 rounded">fig, ax</code> API
          </p>
          <p className="text-gray-300 text-center text-sm mt-2">
            It's more powerful, explicit, and the professional standard for scientific plotting
          </p>
        </div>
      </div>

      {/* Understanding fig and ax */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-5">
          <h3 className="text-lg font-bold text-purple-400 mb-3 text-center">
            📄 Figure (fig)
          </h3>
          <div className="bg-purple-500/10 rounded-lg p-4 mb-3">
            <p className="text-gray-300 text-sm mb-2">
              The <strong>entire canvas</strong> - like a blank piece of paper
            </p>
            <ul className="text-gray-300 text-xs space-y-1">
              <li>• Controls overall size</li>
              <li>• Contains one or more axes</li>
              <li>• Saves to file</li>
              <li>• Sets background color</li>
            </ul>
          </div>
          <SyntaxHighlighter
            code={`# Create figure
fig, ax = plt.subplots(figsize=(8, 6))

# Save figure
fig.savefig('my_plot.png', dpi=300)`}
            language="python"
          />
        </div>

        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-5">
          <h3 className="text-lg font-bold text-bio-blue mb-3 text-center">
            📊 Axes (ax)
          </h3>
          <div className="bg-bio-blue/10 rounded-lg p-4 mb-3">
            <p className="text-gray-300 text-sm mb-2">
              The <strong>plot area</strong> - where your data lives
            </p>
            <ul className="text-gray-300 text-xs space-y-1">
              <li>• Contains the actual plot</li>
              <li>• Has x-axis and y-axis</li>
              <li>• You do most work here</li>
              <li>• Multiple axes per figure</li>
            </ul>
          </div>
          <SyntaxHighlighter
            code={`# Plot on axes
ax.plot(x, y)
ax.scatter(x, y)
ax.set_xlabel('Gene Expression')
ax.set_ylabel('Cell Viability')`}
            language="python"
          />
        </div>
      </div>

      {/* First Steps */}
      <div className="bg-gradient-to-r from-bio-blue to-purple-600 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-white mb-3 text-center">
          🚀 Your First Matplotlib Plot - Three Steps
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-white/90 text-sm">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">1️⃣ Create Figure & Axes</p>
            <code className="text-xs bg-black/30 px-2 py-1 rounded block">fig, ax = plt.subplots()</code>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">2️⃣ Plot Your Data</p>
            <code className="text-xs bg-black/30 px-2 py-1 rounded block">ax.plot(x, y)</code>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="font-semibold mb-1">3️⃣ Customize & Show</p>
            <code className="text-xs bg-black/30 px-2 py-1 rounded block">ax.set_xlabel(...)</code>
          </div>
        </div>
      </div>

      {/* Practice Notebook */}
      <div className="bg-gradient-to-br from-bio-green/20 to-bio-blue/20 border border-bio-green/50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-bio-green mb-3 text-center">
          📓 Practice Notebook
        </h3>
        <div className="text-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_4/L4_N4_matplotlib_intro.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bio-blue hover:bg-bio-blue/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Open Matplotlib Practice in Colab →
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Learn matplotlib by creating your first biological plots!
          </p>
        </div>
      </div>
    </div>
  )
}
