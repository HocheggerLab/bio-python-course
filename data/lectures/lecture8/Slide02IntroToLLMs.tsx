import React from 'react'

export const Slide02IntroToLLMs = () => {
  return (
    <div className="h-full flex flex-col space-y-6 overflow-y-auto pr-4">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bio-blue to-purple-400 mb-4">
          A LARGE LANGUAGE MODEL (LLM)
        </h2>
        <div className="bg-bio-dark/50 p-6 rounded-xl border border-bio-blue/30 max-w-4xl mx-auto backdrop-blur-sm">
          <ul className="text-left space-y-3 text-lg text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-bio-blue mt-1">🔹</span>
              <span>A neural network trained to predict the next word in a sequence.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-bio-blue mt-1">🔹</span>
              <span>Built using <strong>transformer architecture</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-bio-blue mt-1">🔹</span>
              <span>Learned from billions of words across the internet.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6" />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: 5 Things */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-bio-green mb-4">5 THINGS YOU NEED TO KNOW:</h3>
          
          <div className="space-y-4">
            <div className="bg-bio-darker/50 p-4 rounded-lg border-l-4 border-purple-500 hover:bg-bio-darker/80 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">1</span>
                <h4 className="font-bold text-purple-400">TRANSFORMERS</h4>
              </div>
              <p className="text-sm text-gray-300 ml-8">
                The architecture that powers it. It reads <strong>ENTIRE</strong> sentences at once, not word-by-word. This enables context understanding.
              </p>
            </div>

            <div className="bg-bio-darker/50 p-4 rounded-lg border-l-4 border-bio-blue hover:bg-bio-darker/80 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-bio-blue text-black text-xs font-bold px-2 py-1 rounded">2</span>
                <h4 className="font-bold text-bio-blue">PROMPTING MATTERS</h4>
              </div>
              <div className="ml-8 text-sm space-y-1">
                <p className="text-gray-300">How you ask determines what you get.</p>
                <div className="flex gap-2 items-center text-xs">
                  <span className="text-red-400">❌ "Tell me about CRISPR"</span>
                </div>
                <div className="flex gap-2 items-center text-xs">
                  <span className="text-green-400">✅ "List off-target effects..."</span>
                </div>
                <p className="text-gray-400 italic mt-1">Precision in question → precision in answer.</p>
              </div>
            </div>

            <div className="bg-bio-darker/50 p-4 rounded-lg border-l-4 border-yellow-500 hover:bg-bio-darker/80 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">3</span>
                <h4 className="font-bold text-yellow-500">CONTEXT WINDOW</h4>
              </div>
              <p className="text-sm text-gray-300 ml-8">
                It can only "see" ~4k-100k words at once. You must manage what information you feed it (e.g., selecting specific abstracts).
              </p>
            </div>

            <div className="bg-bio-darker/50 p-4 rounded-lg border-l-4 border-red-500 hover:bg-bio-darker/80 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">4</span>
                <h4 className="font-bold text-red-500">HALLUCINATION (CRITICAL)</h4>
              </div>
              <p className="text-sm text-gray-300 ml-8">
                It doesn't know when it's wrong. It might invent protein interactions. <br/>
                <span className="font-bold text-red-400">= ALWAYS verify claims against real data.</span>
              </p>
            </div>

            <div className="bg-bio-darker/50 p-4 rounded-lg border-l-4 border-gray-500 hover:bg-bio-darker/80 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">5</span>
                <h4 className="font-bold text-gray-400">KNOWLEDGE CUTOFF</h4>
              </div>
              <p className="text-sm text-gray-300 ml-8">
                Training data ends at a specific date. It doesn't know recent papers. <br/>
                <span className="text-bio-green">= Use PubMed search as a TOOL.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visualization & Bottom Line */}
        <div className="flex flex-col space-y-6">
          {/* Neural Network Architecture SVG */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center justify-center min-h-[300px]">
            <svg width="100%" height="300" viewBox="0 0 500 300" className="w-full h-full">
              <defs>
                <filter id="glow-blue">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#48bb78" />
                </marker>
                 <marker id="arrowhead-blue" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                  <polygon points="0 0, 7 2.5, 0 5" fill="#4299e1" opacity="0.8" />
                </marker>
              </defs>

              {/* Input Arrows - Adjusted to not overlap */}
              <g transform="translate(10, 0)">
                <line x1="0" y1="60" x2="35" y2="60" stroke="#48bb78" strokeWidth="2" markerEnd="url(#arrowhead-green)" />
                <line x1="0" y1="120" x2="35" y2="120" stroke="#48bb78" strokeWidth="2" markerEnd="url(#arrowhead-green)" />
                <line x1="0" y1="180" x2="35" y2="180" stroke="#48bb78" strokeWidth="2" markerEnd="url(#arrowhead-green)" />
                <line x1="0" y1="240" x2="35" y2="240" stroke="#48bb78" strokeWidth="2" markerEnd="url(#arrowhead-green)" />
                <text x="20" y="280" textAnchor="middle" fill="#a0aec0" fontSize="12">Input</text>
              </g>

              {/* Connections (Fully Connected) */}
              <g opacity="0.6" stroke="#63b3ed" strokeWidth="1">
                {/* L1 to L2 */}
                {[60, 120, 180, 240].map((y1, i) => (
                  [40, 95, 150, 205, 260].map((y2, j) => (
                    <line key={`l1-${i}-${j}`} x1="60" y1={y1} x2="160" y2={y2} />
                  ))
                ))}
                
                {/* L2 to L3 */}
                {[40, 95, 150, 205, 260].map((y1, i) => (
                  [40, 95, 150, 205, 260].map((y2, j) => (
                    <line key={`l2-${i}-${j}`} x1="160" y1={y1} x2="260" y2={y2} />
                  ))
                ))}

                {/* L3 to L4 */}
                {[40, 95, 150, 205, 260].map((y1, i) => (
                  [120, 180].map((y2, j) => (
                    <line key={`l3-${i}-${j}`} x1="260" y1={y1} x2="360" y2={y2} />
                  ))
                ))}
              </g>

              {/* Layer 1 (Input Layer) */}
              <g transform="translate(60, 0)">
                <circle cx="0" cy="60" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="120" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="180" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="240" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
              </g>

              {/* Layer 2 (Hidden Layer 1) */}
              <g transform="translate(160, 0)">
                <circle cx="0" cy="40" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="95" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="150" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="205" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="260" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <text x="0" y="290" textAnchor="middle" fill="#a0aec0" fontSize="12">Hidden Layers</text>
              </g>

              {/* Layer 3 (Hidden Layer 2) */}
              <g transform="translate(260, 0)">
                <circle cx="0" cy="40" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="95" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="150" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="205" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="260" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
              </g>

              {/* Layer 4 (Output Layer) */}
              <g transform="translate(360, 0)">
                <circle cx="0" cy="120" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
                <circle cx="0" cy="180" r="12" fill="#4299e1" stroke="#2b6cb0" strokeWidth="2" />
              </g>

              {/* Output Arrows */}
              <g transform="translate(380, 0)">
                <line x1="0" y1="120" x2="40" y2="120" stroke="#48bb78" strokeWidth="2" markerEnd="url(#arrowhead-green)" />
                <line x1="0" y1="180" x2="40" y2="180" stroke="#48bb78" strokeWidth="2" markerEnd="url(#arrowhead-green)" />
                <text x="20" y="210" textAnchor="middle" fill="#a0aec0" fontSize="12">Output</text>
              </g>

              {/* Highlight Neuron */}
              <g transform="translate(160, 40)">
                <circle cx="0" cy="0" r="12" fill="#ed8936" stroke="#c05621" strokeWidth="2" filter="url(#glow-blue)" />
                <text x="20" y="-15" fill="#ed8936" fontSize="14" fontWeight="bold">neuron</text>
                <line x1="15" y1="-10" x2="5" y2="-5" stroke="#ed8936" strokeWidth="2" markerEnd="url(#arrowhead-blue)" />
              </g>

            </svg>
          </div>

          {/* Bottom Line Box */}
          <div className="bg-gradient-to-r from-bio-darker to-bio-dark border border-gray-700 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold text-white mb-2">BOTTOM LINE:</h4>
            <p className="text-gray-300">
              It's a <span className="text-bio-blue font-bold">pattern-matching machine</span>. <br/>
              Very good at synthesis. Very bad at facts. <br/>
              <span className="text-bio-green font-bold mt-2 block">We'll use it to analyze; you'll verify.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
