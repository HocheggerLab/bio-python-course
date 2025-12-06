import React from 'react'

export const Slide03ChatbotVsAgent = () => {
  return (
    <div className="h-full flex flex-col space-y-6 overflow-y-auto pr-4">
      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bio-blue to-purple-400">
          CHATBOT vs. AGENT
        </h2>
        <p className="text-gray-400 mt-2 text-lg">The model is the same. The <strong>workflow</strong> is different.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
        
        {/* Left Column: The Chatbot (Linear) */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-300 mb-4 text-center">THE CHATBOT</h3>
          <div className="flex-grow flex items-center justify-center mb-6">
            <svg width="100%" height="200" viewBox="0 0 300 200">
              <defs>
                <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#a0aec0" />
                </marker>
              </defs>
              
              {/* User */}
              <circle cx="150" cy="30" r="20" fill="#4a5568" />
              <text x="150" y="35" textAnchor="middle" fill="white" fontSize="10">USER</text>

              {/* Arrow Down */}
              <line x1="150" y1="55" x2="150" y2="85" stroke="#a0aec0" strokeWidth="2" markerEnd="url(#arrowhead-gray)" />

              {/* LLM */}
              <rect x="100" y="90" width="100" height="40" rx="5" fill="#667eea" />
              <text x="150" y="115" textAnchor="middle" fill="white" fontWeight="bold">LLM</text>

              {/* Arrow Down */}
              <line x1="150" y1="135" x2="150" y2="165" stroke="#a0aec0" strokeWidth="2" markerEnd="url(#arrowhead-gray)" />

              {/* Response */}
              <rect x="90" y="170" width="120" height="30" rx="5" fill="#2d3748" stroke="#4a5568" />
              <text x="150" y="190" textAnchor="middle" fill="#a0aec0" fontSize="12">Response</text>
            </svg>
          </div>
          <div className="bg-bio-darker p-4 rounded-lg border-l-4 border-gray-500">
            <p className="text-gray-300 text-sm">
              <strong>Straightforward.</strong> One turn. <br/>
              You write ➔ LLM responds ➔ You read.
            </p>
          </div>
        </div>

        {/* Right Column: The Agent (Cyclic) */}
        <div className="bg-white/5 rounded-xl border border-bio-blue/30 p-6 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-bio-blue text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
            PYTHON SCRIPT
          </div>
          <h3 className="text-2xl font-bold text-bio-blue mb-4 text-center">THE AGENT</h3>
          
          <div className="flex-grow flex items-center justify-center mb-6">
             <svg width="100%" height="250" viewBox="0 0 300 250">
              <defs>
                <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#4299e1" />
                </marker>
              </defs>

              {/* Center: LLM */}
              <rect x="110" y="100" width="80" height="40" rx="5" fill="#667eea" filter="url(#glow-blue)" />
              <text x="150" y="125" textAnchor="middle" fill="white" fontWeight="bold">LLM</text>

              {/* Top: Goal */}
              <text x="150" y="20" textAnchor="middle" fill="#a0aec0" fontSize="12">Goal: "Find papers"</text>
              <line x1="150" y1="30" x2="150" y2="90" stroke="#4299e1" strokeWidth="2" markerEnd="url(#arrowhead-blue)" strokeDasharray="5,5" />

              {/* Right: Tool */}
              <circle cx="250" cy="120" r="25" fill="#ed8936" opacity="0.8" />
              <text x="250" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TOOL</text>
              <text x="250" y="160" textAnchor="middle" fill="#ed8936" fontSize="10">(PubMed)</text>

              {/* Bottom: Observation */}
              <rect x="100" y="200" width="100" height="30" rx="5" fill="#2d3748" stroke="#4a5568" />
              <text x="150" y="220" textAnchor="middle" fill="#a0aec0" fontSize="10">Observation</text>

              {/* Left: Decision */}
              <circle cx="50" cy="120" r="25" fill="#48bb78" opacity="0.8" />
              <text x="50" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DECIDE</text>

              {/* Cycle Arrows */}
              {/* LLM -> Tool */}
              <path d="M 190 120 L 215 120" stroke="#4299e1" strokeWidth="2" markerEnd="url(#arrowhead-blue)" />
              
              {/* Tool -> Observation */}
              <path d="M 250 145 Q 250 215 210 215" stroke="#4299e1" strokeWidth="2" markerEnd="url(#arrowhead-blue)" />

              {/* Observation -> Decide */}
              <path d="M 100 215 Q 50 215 50 155" stroke="#4299e1" strokeWidth="2" markerEnd="url(#arrowhead-blue)" />

              {/* Decide -> LLM */}
              <path d="M 75 120 L 100 120" stroke="#4299e1" strokeWidth="2" markerEnd="url(#arrowhead-blue)" />

            </svg>
          </div>

          <div className="bg-bio-darker p-4 rounded-lg border-l-4 border-bio-blue">
             <p className="text-gray-300 text-sm">
              <strong>Iterative Loop.</strong> <br/>
              Code gives job ➔ LLM plans ➔ Executes Tool ➔ Observes ➔ Repeats until done.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Things Comparison */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div className="bg-bio-dark/40 p-3 rounded border border-gray-700">
          <h4 className="text-bio-green font-bold mb-1">1. TOOL USE</h4>
          <p className="text-xs text-gray-400">LLM calls functions (search, calc) instead of just talking.</p>
        </div>
        <div className="bg-bio-dark/40 p-3 rounded border border-gray-700">
          <h4 className="text-bio-green font-bold mb-1">2. LOOPING</h4>
          <p className="text-xs text-gray-400">It iterates. "Not enough info? Search again."</p>
        </div>
        <div className="bg-bio-dark/40 p-3 rounded border border-gray-700">
          <h4 className="text-bio-green font-bold mb-1">3. STATE</h4>
          <p className="text-xs text-gray-400">Remembers what it learned in previous steps.</p>
        </div>
        <div className="bg-bio-dark/40 p-3 rounded border border-gray-700">
          <h4 className="text-bio-green font-bold mb-1">4. DECISION</h4>
          <p className="text-xs text-gray-400">Agent decides when to stop, not you.</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-gradient-to-r from-purple-900/40 to-bio-blue/20 border border-purple-500/30 p-4 rounded-xl text-center">
        <p className="text-lg text-gray-200">
          The "agency" isn't magical intelligence. <span className="text-bio-blue font-bold">It's the Python loop around it.</span>
        </p>
      </div>
    </div>
  )
}
