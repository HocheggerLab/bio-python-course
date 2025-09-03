'use client'

import { SlideTitle } from '@/components/slides'

export function Slide28Lecture1Summary() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          <span className="text-bio-blue">Lecture 1 Summary:</span> What You've Learned Today
        </SlideTitle>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Step 1: Variables & Data Types */}
        <div className="bg-bio-dark/30 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-blue mb-4 flex items-center">
            <span className="mr-3">1️⃣</span>
            Variables & Data Types
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">Assignment</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Store values: <code className="bg-bio-dark/50 px-1 py-0.5 rounded">mass = 5.5</code>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Meaningful variable names
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">Data Types</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Numbers, strings, booleans
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Type matters for operations
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-yellow mb-3">F-Strings</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  Formatted output
                </li>
                <li className="flex items-start">
                  <span className="text-bio-blue mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">{`f"Value: {var}"`}</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2: Lists & For Loops */}
        <div className="bg-bio-dark/30 border border-bio-yellow/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-yellow mb-4 flex items-center">
            <span className="mr-3">2️⃣</span>
            Lists & For Loops
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-bio-green mb-3">Lists</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  Store multiple values: <code className="bg-bio-dark/50 px-1 py-0.5 rounded">[1, 2, 3]</code>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  Access with index: <code className="bg-bio-dark/50 px-1 py-0.5 rounded">list[0]</code>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-green mb-3">For Loops</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  Process each item automatically
                </li>
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">for item in list:</code>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-green mb-3">Enumerate</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  Track position and value
                </li>
                <li className="flex items-start">
                  <span className="text-bio-yellow mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">enumerate(list)</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3: Functions */}
        <div className="bg-bio-dark/30 border border-bio-green/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-green mb-4 flex items-center">
            <span className="mr-3">3️⃣</span>
            Functions - Reusable Code
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-bio-blue mb-3">Function Basics</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">def function_name():</code>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  <code className="bg-bio-dark/50 px-1 py-0.5 rounded">return</code> results back
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-blue mb-3">Parameters</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Default values: <code className="bg-bio-dark/50 px-1 py-0.5 rounded">param=1.0</code>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Keyword arguments for clarity
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-bio-blue mb-3">Flexibility</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Multiple return values
                </li>
                <li className="flex items-start">
                  <span className="text-bio-green mr-2">▸</span>
                  Reuse code efficiently
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Biological Applications */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-yellow/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            <span className="mr-3">🧬</span>
            Real Lab Applications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-2">
                <span className="text-2xl">⚗️</span>
              </div>
              <h4 className="font-semibold text-bio-yellow mb-2">Molarity Calculations</h4>
              <p className="text-sm text-gray-300">Automated concentration calculations for lab solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-2">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-bio-yellow mb-2">Batch Processing</h4>
              <p className="text-sm text-gray-300">Process multiple samples at once with loops</p>
            </div>
            <div className="text-center">
              <div className="bg-bio-dark/50 rounded-lg p-4 mb-2">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-bio-yellow mb-2">Reusable Protocols</h4>
              <p className="text-sm text-gray-300">Functions as digital lab protocols</p>
            </div>
          </div>
        </div>

        {/* Programming Skills */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-bio-blue mb-4 flex items-center">
            <span className="mr-3">💡</span>
            Problem-Solving Skills You've Gained
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Break down complex problems</strong> into smaller steps
              </li>
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Think algorithmically</strong> about lab procedures
              </li>
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Automate repetitive calculations</strong> to reduce errors
              </li>
            </ul>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Write clean, reusable code</strong> with functions
              </li>
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Handle multiple data points</strong> efficiently
              </li>
              <li className="flex items-start">
                <span className="text-bio-yellow mr-2">✓</span>
                <strong>Debug and test</strong> your solutions
              </li>
            </ul>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gradient-to-r from-bio-dark to-purple-900/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            <span className="mr-3">🚀</span>
            What's Coming Next
          </h3>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-bio-yellow mb-3">Lecture 2</h4>
            <h5 className="text-xl text-bio-blue mb-4">Working with DNA: String Operations, Dictionaries and Conditionals</h5>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-bio-dark/30 rounded-lg p-4">
                <div className="text-2xl mb-2">🧬</div>
                <h6 className="font-semibold text-bio-green mb-2">String Operations</h6>
                <p className="text-sm text-gray-300">Manipulate DNA sequences, find patterns, slice strings</p>
              </div>
              <div className="bg-bio-dark/30 rounded-lg p-4">
                <div className="text-2xl mb-2">📚</div>
                <h6 className="font-semibold text-bio-green mb-2">Dictionaries</h6>
                <p className="text-sm text-gray-300">Store genetic code, codon tables, key-value pairs</p>
              </div>
              <div className="bg-bio-dark/30 rounded-lg p-4">
                <div className="text-2xl mb-2">🔀</div>
                <h6 className="font-semibold text-bio-green mb-2">Conditionals</h6>
                <p className="text-sm text-gray-300">Make decisions in code with if/else statements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Encouragement */}
        <div className="bg-gradient-to-r from-bio-green/20 to-bio-blue/20 border border-bio-green/40 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-bio-green mb-3">🎉 Congratulations!</h3>
          <p className="text-lg text-gray-300 mb-2">
            You've taken your first steps into the world of programming for biology
          </p>
          <p className="text-gray-400">
            Keep practicing with the Google Colab notebooks, and remember: every expert was once a beginner!
          </p>
        </div>
      </div>
    </>
  )
}