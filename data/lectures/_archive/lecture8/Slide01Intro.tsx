import React from 'react'

export const Slide01Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bio-green to-bio-blue">
        LLMs & Agentic AI in Biology
      </h1>
      
      <div className="max-w-4xl w-full bg-bio-dark/50 p-8 rounded-2xl border border-bio-green/20 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-bio-blue mb-6">
          What We Will Achieve
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-bold text-white">LLMs & Prompting</h3>
                <p className="text-gray-400 text-sm">Mastering Python interactions with Large Language Models</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h3 className="font-bold text-white">Agentic Architecture</h3>
                <p className="text-gray-400 text-sm">Understanding how AI agents think, plan, and execute</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🛠️</span>
              <div>
                <h3 className="font-bold text-white">Tool Use</h3>
                <p className="text-gray-400 text-sm">Empowering agents with external capabilities</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔬</span>
              <div>
                <h3 className="font-bold text-white">PubMed Analyst</h3>
                <p className="text-gray-400 text-sm">Building a real-world research assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bio-darker/80 p-6 rounded-xl border border-purple-500/30 max-w-3xl w-full">
        <h3 className="text-purple-400 font-bold mb-4">Project: PubMed Abstract Analyzer Agent</h3>
        <div className="flex flex-col space-y-2 text-sm text-gray-300 text-left">
          <div className="flex items-center space-x-2">
            <span className="text-bio-green">1.</span>
            <span>Search PubMed for a query (e.g., "CRISPR off-target effects")</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-bio-green">2.</span>
            <span>Retrieve abstracts from the last 6 months</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-bio-green">3.</span>
            <span>Agent summarizes main findings from each paper</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-bio-green">4.</span>
            <span>Agent synthesizes agreement and identifies open questions</span>
          </div>
        </div>
      </div>
    </div>
  )
}
