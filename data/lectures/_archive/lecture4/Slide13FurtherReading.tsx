'use client'

import {
  SlideTitle,
  GradientText
} from '@/components/slides'
import Image from 'next/image'

export default function Slide13FurtherReading() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Further <GradientText>Reading</GradientText> 📚
      </SlideTitle>

      <p className="text-gray-300 text-center mb-8 text-lg">
        Excellent resources to deepen your data visualization skills
      </p>

      {/* Books Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-6 max-w-5xl mx-auto">
        {/* Book 1: Fundamentals of Data Visualization */}
        <a
          href="https://www.oreilly.com/library/view/fundamentals-of-data/9781492031079/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6 hover:border-bio-blue/60 transition-all hover:shadow-lg hover:shadow-bio-blue/20"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-64 mb-4">
              <Image
                src="/data_vis_book.jpeg"
                alt="Fundamentals of Data Visualization book cover"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-bio-blue mb-2 text-center">
              Fundamentals of Data Visualization
            </h3>
            <p className="text-gray-400 text-sm mb-3 text-center">
              by Claus O. Wilke
            </p>
            <div className="bg-bio-blue/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2 text-sm">Why read this:</h4>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Comprehensive guide to effective visualization</li>
                <li>• Principles of visual perception</li>
                <li>• Choosing the right plot type</li>
                <li>• Color theory and design principles</li>
                <li>• Available free online!</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 text-bio-blue text-sm">
              <span>View on O'Reilly</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* Book 2: Data Visualisation Handbook */}
        <a
          href="https://www.amazon.co.uk/Data-Visualisation-Handbook-Driven-Design/dp/1529626544"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-6 hover:border-bio-green/60 transition-all hover:shadow-lg hover:shadow-bio-green/20"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-64 mb-4">
              <Image
                src="/data_vis_handbook.jpg"
                alt="Data Visualisation Handbook book cover"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-bio-green mb-2 text-center">
              Data Visualisation: A Handbook for Data Driven Design
            </h3>
            <p className="text-gray-400 text-sm mb-3 text-center">
              by Andy Kirk
            </p>
            <div className="bg-bio-green/10 rounded-lg p-4 mb-3">
              <h4 className="text-bio-yellow font-semibold mb-2 text-sm">Why read this:</h4>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Practical, hands-on approach</li>
                <li>• Design workflow and process</li>
                <li>• Real-world examples and case studies</li>
                <li>• Modern tools and techniques</li>
                <li>• Publication-ready visualizations</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 text-bio-green text-sm">
              <span>View on Amazon</span>
              <span>→</span>
            </div>
          </div>
        </a>
      </div>

      {/* Additional Resources */}
      <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-purple-400 mb-3 text-center">
          📖 More Learning Resources
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-2">Online Galleries</h4>
            <ul className="text-gray-300 text-xs space-y-1">
              <li>• Python Graph Gallery</li>
              <li>• Seaborn Example Gallery</li>
              <li>• Matplotlib Examples</li>
            </ul>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-2">Interactive Tutorials</h4>
            <ul className="text-gray-300 text-xs space-y-1">
              <li>• DataCamp courses</li>
              <li>• Kaggle Learn</li>
              <li>• Real Python tutorials</li>
            </ul>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-4">
            <h4 className="text-bio-yellow font-semibold mb-2">Scientific Examples</h4>
            <ul className="text-gray-300 text-xs space-y-1">
              <li>• Nature Methods guides</li>
              <li>• Ten Simple Rules papers</li>
              <li>• Scientific plotting guides</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
