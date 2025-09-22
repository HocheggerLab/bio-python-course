'use client'

import Link from 'next/link'

export default function Hero() {

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block animate-float">
            <span className="text-7xl">🐍</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold">
            Master <span className="text-gradient">Python</span>
            <br />for <span className="text-gradient-purple">Biology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A practical programming course for Year 3 Life Sciences students at the University of Sussex. No prior coding experience required!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#core-sessions" className="btn-primary text-lg">
              Start Learning →
            </a>
            <a href="https://www.youtube.com/watch?v=ceKtuKS2pPk" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg">
              Watch Intro Video
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="card text-center animate-fade-in animation-delay-200">
            <div className="text-4xl font-bold text-gradient mb-2">5</div>
            <div className="text-gray-400">Core Sessions</div>
          </div>
          <div className="card text-center animate-fade-in animation-delay-400">
            <div className="text-4xl font-bold text-gradient-purple mb-2">3</div>
            <div className="text-gray-400">Specialisation Tracks</div>
          </div>
          <div className="card text-center animate-fade-in animation-delay-600">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-gray-400">Biology Focused</div>
          </div>
          <div className="card text-center animate-fade-in" style={{animationDelay: '800ms'}}>
            <div className="text-4xl font-bold text-gradient mb-2">1</div>
            <div className="text-gray-400">Final Project</div>
          </div>
        </div>
      </div>
    </section>
  )
}