import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Under Construction | Python for Biologists',
  description: 'This section is currently being developed. Check back soon for new content!',
  robots: 'noindex, nofollow',
}

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bio-darker to-bio-dark flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Construction Icon */}
        <div className="mb-8">
          <div className="text-8xl mb-4">🚧</div>
          <div className="flex justify-center space-x-2 text-4xl">
            <span>🧬</span>
            <span>⚗️</span>
            <span>🔬</span>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Under Construction</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          We're working hard to bring you amazing new content! This section is currently being developed 
          and will be available soon.
        </p>

        {/* Status Update */}
        <div className="card mb-8 border-bio-yellow/30">
          <h3 className="text-2xl font-bold text-bio-yellow mb-4 flex items-center justify-center">
            <span className="mr-2">⚡</span>
            What's Coming Soon
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="mb-2"><strong className="text-bio-blue">📹 Intro Videos:</strong> Course overview and getting started guides</p>
              <p className="mb-2"><strong className="text-bio-green">📚 Resources:</strong> Cheat sheets, reference materials, and guides</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-purple-400">🎓 Advanced Tutorials:</strong> Deep-dive into biological applications</p>
              <p><strong className="text-bio-yellow">🧪 Interactive Tools:</strong> More lab calculators and utilities</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-3 text-gray-300">Development Progress</h4>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div className="bg-gradient-to-r from-bio-blue to-bio-green h-3 rounded-full" style={{width: '75%'}}></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">75% Complete</p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              ← Back to Homepage
            </Link>
            <Link href="/notebooks/lecture-1" className="btn-secondary">
              Start Learning Now →
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm">
            In the meantime, check out our interactive notebooks to start your Python journey!
          </p>
        </div>

        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            Have questions or suggestions? Contact us at{' '}
            <a href="mailto:hh65@sussex.ac.uk" className="text-bio-blue hover:text-bio-light-blue transition-colors">
              hh65@sussex.ac.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}