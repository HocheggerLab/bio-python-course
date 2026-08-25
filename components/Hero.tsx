'use client'

import { PythonLogo } from '@/components/icons/PythonLogo'
import { Microscope } from '@/components/icons/Microscope'

export default function Hero() {

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Python logo and microscope flanking the title — the two halves
              of the course, stated without a mascot. */}
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <PythonLogo className="w-12 h-12 md:w-20 md:h-20 shrink-0" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Master Python
              <br />for Biology
            </h1>
            <Microscope className="w-12 h-12 md:w-20 md:h-20 shrink-0 text-bio-blue" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A practical programming course for Year 3 Life Sciences students at the University of Sussex. No prior coding experience required!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#core-sessions" className="btn-primary text-lg">
              Start Learning →
            </a>
            <a href="https://youtu.be/-8e-c_Rqvn0" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg">
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