import Image from 'next/image'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'

export default function Slide02TheProblem() {
  return (
    <>
      <SlideTitle size="large" className="mb-12">
        The <GradientText>Next Challenge</GradientText>: Gene Correlation & Visualization 📈
      </SlideTitle>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl items-center">
        {/* Left side - Sarah's image */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 mb-4">
            <Image
              src="/L4-problem.png"
              alt="Sarah analyzing gene correlations"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-gray-400 text-center italic">
            Sarah needs to find genes that correlate with ATR
          </p>
        </div>

        {/* Right side - The problem */}
        <div className="space-y-4">
          <div className="bg-bio-card border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              The New Challenge: ATR Gene Correlations
            </h3>
            <p className="text-gray-300 mb-4">
              Sarah discovered essential genes, but now needs to understand <span className="text-bio-blue font-semibold">relationships</span> between them.
              Which genes correlate with ATR (a key DNA repair gene) across cancer types?
            </p>
            <div className="bg-bio-dark/50 rounded-lg p-4 space-y-2">
              <p className="text-gray-200 font-semibold">🎯 Analysis Goals:</p>
              <ul className="text-gray-300 ml-4 space-y-1">
                <li>• Find genes that correlate with <span className="text-red-400 font-semibold">ATR</span></li>
                <li>• Compare breast vs myeloid cancer patterns</li>
                <li>• Create publication-ready visualizations</li>
                <li>• Build predictive statistical models</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/20 to-orange-500/20 border border-red-500/30 rounded-xl p-4">
            <p className="text-white font-semibold">
              🔬 Her Research Questions:
            </p>
            <div className="text-gray-300 text-sm mt-2 space-y-1">
              <p>• "Which genes show similar dependency patterns to ATR?"</p>
              <p>• "How do these correlations differ between cancer types?"</p>
              <p>• "Can I predict ATR dependency from other genes?"</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-bio-blue/20 to-purple-500/20 border border-bio-blue/30 rounded-xl p-4">
            <p className="text-white font-semibold">
              📊 Solution: Statistical Analysis & Visualization!
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Use linear regression, correlation analysis, and create stunning plots with Matplotlib & Seaborn
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-400/20 to-bio-yellow/20 border border-amber-400/30 rounded-xl p-4">
            <p className="text-white font-semibold">
              🎨 Today's Tools:
            </p>
            <div className="text-gray-300 text-sm mt-2">
              <span className="text-bio-blue font-semibold">Linear Regression</span> •
              <span className="text-purple-400 font-semibold"> Matplotlib</span> •
              <span className="text-amber-400 font-semibold"> Seaborn</span> •
              <span className="text-bio-green font-semibold"> Correlation Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}