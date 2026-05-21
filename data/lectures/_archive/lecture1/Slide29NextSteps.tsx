'use client'

import { SlideTitle } from '@/components/slides'

export function Slide29NextSteps() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          <span className="text-bio-blue">Next Steps:</span> Keep Learning & Practicing
        </SlideTitle>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Practice with Notebooks */}
        <div className="bg-gradient-to-r from-bio-blue/20 to-purple-500/20 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-blue mb-4 flex items-center">
            <span className="mr-3">📓</span>
            Practice Makes Perfect
          </h3>
          <p className="text-gray-300 mb-6">
            The best way to learn programming is by doing! We've prepared interactive notebooks for you to practice everything you learned today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">🎯 Today's Exercises</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Practice variables and calculations
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Work with lists and loops
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Build your own functions
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Solve real lab problems
                </li>
              </ul>
            </div>
            
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">💡 Tips for Success</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Type out code yourself (don't copy-paste)
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Experiment and break things!
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Read error messages carefully
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Try the challenge exercises
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-6 space-y-4">
            <a
              href="/notebooks/lecture-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-bio-blue to-purple-500 text-white font-bold text-lg rounded-lg hover:from-bio-blue/80 hover:to-purple-500/80 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="mr-3">🚀</span>
              Access Lecture 1 Practice Notebooks
              <span className="ml-3">→</span>
            </a>
            
            <div className="bg-gradient-to-r from-bio-green/10 to-bio-yellow/10 border border-bio-green/30 rounded-lg p-4 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold text-bio-green mb-2 flex items-center justify-center">
                <span className="mr-2">🧪</span>
                Special Project: Lab Calculator Toolkit
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Put everything together with our comprehensive Lab Calculator Toolkit! This notebook combines all the concepts you've learned into practical tools you'll actually use in the lab:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-3">
                <div>• DNA/RNA dilution calculator</div>
                <div>• Molarity & MW calculator</div>
                <div>• PCR master mix calculator</div>
                <div>• Growth rate calculator</div>
              </div>
              <a
                href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/L1_P1_lab_calculator_toolkit.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-bio-green text-white font-semibold rounded-lg hover:bg-bio-green/80 transition-all duration-200"
              >
                <span className="mr-2">📓</span>
                Open Lab Calculator Toolkit
              </a>
            </div>
          </div>
        </div>

        {/* File I/O Preview */}
        <div className="bg-gradient-to-r from-bio-green/20 to-bio-yellow/20 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-green mb-4 flex items-center">
            <span className="mr-3">📁</span>
            Coming Soon: Working with Real Data Files
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">
                <span className="mr-2">📊</span>
                Why File I/O Matters
              </h4>
              <p className="text-gray-300 mb-3">
                Real biological data doesn't live in code - it's in files! Soon you'll learn to:
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">✓</span>
                  Read experimental data from CSV files
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">✓</span>
                  Process thousands of data points at once
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">✓</span>
                  Save analysis results for reports
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">✓</span>
                  Automate data pipeline workflows
                </li>
              </ul>
            </div>
            
            <div className="bg-bio-dark/50 rounded-lg p-5">
              <h4 className="text-lg font-semibold text-bio-blue mb-3">
                <span className="mr-2">🐼</span>
                Lecture 4: Pandas & Data Analysis
              </h4>
              <p className="text-gray-300 mb-3">
                We'll dive deep into file handling with the powerful Pandas library:
              </p>
              <div className="bg-bio-dark rounded-lg p-3 font-mono text-sm">
                <code className="text-bio-green">
                  {`import pandas as pd

# Read experimental data
data = pd.read_csv('results.csv')

# Analyze & transform
processed = data.groupby('sample')

# Save results
processed.to_csv('analysis.csv')`}
                </code>
              </div>
              <p className="text-gray-400 text-sm mt-3 italic">
                For now, focus on mastering the basics - we'll build up to this!
              </p>
            </div>
          </div>
        </div>

        {/* Homework Reminder */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            <span className="mr-3">📝</span>
            Before Next Lecture
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">✅</div>
              <h4 className="font-semibold text-bio-yellow mb-2">Complete Exercises</h4>
              <p className="text-sm text-gray-300">
                Work through all practice notebooks for Lecture 1
              </p>
            </div>
            
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-semibold text-bio-yellow mb-2">Review & Experiment</h4>
              <p className="text-sm text-gray-300">
                Try modifying the code examples to see what happens
              </p>
            </div>
            
            <div className="bg-bio-dark/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🤔</div>
              <h4 className="font-semibold text-bio-yellow mb-2">Bring Questions</h4>
              <p className="text-sm text-gray-300">
                Note down any concepts that need clarification
              </p>
            </div>
          </div>
        </div>

        {/* Motivational Close */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6 text-center">
          <p className="text-xl text-bio-blue mb-2 font-semibold">
            🌟 You've taken your first steps into computational biology!
          </p>
          <p className="text-gray-300">
            Remember: Every expert programmer started exactly where you are now. Keep practicing, stay curious, and don't be afraid to make mistakes!
          </p>
        </div>
      </div>
    </>
  )
}