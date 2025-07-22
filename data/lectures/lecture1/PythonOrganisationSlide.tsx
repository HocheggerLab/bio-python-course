import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'

export function PythonOrganisationSlide() {
  return (
    <>
      <div className="pb-10">
        <SlideTitle>
          The Python <GradientText>Organisation</GradientText>
        </SlideTitle>
      </div>

      <p className="text-center text-xl text-gray-300 mb-8">
        <a href="https://www.python.org/" target="_blank" className="text-bio-blue hover:text-bio-light-blue transition-colors">
          https://www.python.org/
        </a>
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-bio-yellow mb-4 flex items-center">
            <span className="text-xl mr-2">🔄</span>
            Development Cycle
          </h3>

          <div className="card border border-bio-green mb-3 p-3">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-lg font-bold text-bio-green">Python 3.13</h4>
              <span className="text-xs bg-bio-green/20 px-2 py-1 rounded">Current</span>
            </div>
            <p className="text-sm text-gray-300">Released October 2024</p>
            <div className="mt-2 text-xs text-gray-400 space-y-1">
              <p>• Free-threaded mode (no GIL) experimental</p>
              <p>• JIT compiler experimental</p>
              <p>• Enhanced error messages</p>
            </div>
          </div>

          <div className="glass-dark rounded-lg p-3 mb-3">
            <h4 className="font-bold text-bio-yellow mb-2 text-sm">🍂 Annual Autumn Release</h4>
            <p className="text-sm text-gray-300 mb-2">New major version every October</p>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Python 3.14</span>
                <span className="text-bio-yellow">October 2025</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Python 3.15</span>
                <span className="text-bio-yellow">October 2026</span>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-lg p-3">
            <h4 className="font-bold text-bio-blue mb-2 text-sm">Version Support Timeline</h4>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-300">Full support:</span>
                <span className="text-bio-green">18 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Security fixes:</span>
                <span className="text-bio-yellow">5 years total</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gradient-purple mb-4 flex items-center">
            <span className="text-xl mr-2">🌍</span>
            Global Impact
          </h3>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="glass-dark rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-bio-yellow">10M+</p>
              <p className="text-xs text-gray-400">Active developers</p>
            </div>
            <div className="glass-dark rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-bio-yellow">500K+</p>
              <p className="text-xs text-gray-400">PyPI packages</p>
            </div>
            <div className="glass-dark rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-bio-green">#1</p>
              <p className="text-xs text-gray-400">on GitHub</p>
            </div>
            <div className="glass-dark rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-bio-green">30+</p>
              <p className="text-xs text-gray-400">PyCons yearly</p>
            </div>
          </div>

          <div className="bio-note p-4">
            <h4 className="font-bold text-bio-green mb-2">Python Software Foundation</h4>
            <p className="text-sm text-gray-300 mb-2">
              Non-profit supporting Python development and community
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-center bg-bio-dark rounded p-2">
                <p className="font-bold text-bio-blue">$655K</p>
                <p className="text-xs text-gray-400">in grants (2024)</p>
              </div>
              <div className="text-center bg-bio-dark rounded p-2">
                <p className="font-bold text-bio-blue">61</p>
                <p className="text-xs text-gray-400">countries supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="inline-block bg-gradient-to-r from-bio-blue/20 to-bio-purple/20 rounded-xl px-6 py-3 border border-bio-blue/30">
          <p className="text-base">
            <span className="text-xl mr-2">🐍</span>
            Python is <span className="font-bold text-bio-blue">open source</span> and
            <span className="font-bold text-bio-green"> community-driven</span> - anyone can contribute!
          </p>
        </div>
      </div>
    </>
  )
}