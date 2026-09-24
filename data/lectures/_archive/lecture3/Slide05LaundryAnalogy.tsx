import Image from 'next/image'
import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide05LaundryAnalogy() {
  return (
    <>
      <SlideTitle size="large" className="mb-6 text-center">
        What are &apos; <GradientText>Python Packages</GradientText> 🧺
      </SlideTitle>
      
      <p className="text-gray-300 text-center mb-6 text-lg italic">
        &quot;Imagine you land in Japan and got your only shirt dirty on the plane. You have two choices...&quot;
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* DIY Approach */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-red-500/30 rounded-xl p-4">
          <h3 className="text-xl font-bold text-red-400 mb-3 text-center">
            🏠 Do It Yourself
          </h3>
          
          <div className="relative h-64 mb-4">
            <Image
              src="/L3-laundry.png"
              alt="Japanese laundromat"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          
          <div className="space-y-2 mb-4">
            <p className="text-gray-300 text-sm">You need to:</p>
            <ul className="text-gray-400 text-xs space-y-1 ml-4">
              <li>• Find a laundromat</li>
              <li>• Learn Japanese instructions</li>
              <li>• Get coins & detergent</li>
              <li>• Wait and monitor cycles</li>
              <li>• Handle every step yourself</li>
            </ul>
          </div>
          
          <div className="bg-red-500/10 rounded-lg p-3">
            <p className="text-bio-yellow font-semibold text-sm mb-2">📝 Writing Your Own Code</p>
            <SyntaxHighlighter
              code={`# Manual correlation calculation
sum_x = 0
sum_y = 0
sum_xy = 0
# ... 50+ more lines of math
# ... handle edge cases
# ... normalize results`}
              language="python"
            />
          </div>
        </div>

        {/* Hotel Service Approach */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-green/30 rounded-xl p-4">
          <h3 className="text-xl font-bold text-bio-green mb-3 text-center">
            🏨 Hotel Service (API)
          </h3>
          
          <div className="relative h-64 mb-4">
            <Image
              src="/L3-hotel.png"
              alt="Hotel concierge"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          
          <div className="space-y-2 mb-4">
            <p className="text-gray-300 text-sm">You just:</p>
            <ul className="text-gray-400 text-xs space-y-1 ml-4">
              <li>• Hand dirty clothes to receptionist</li>
              <li>• Say &quot;clean please&quot;</li>
              <li>• Get clean clothes back</li>
              <li>• Don&apos;t worry about HOW</li>
              <li>• Trust the service to handle it</li>
            </ul>
          </div>
          
          <div className="bg-bio-green/10 rounded-lg p-3">
            <p className="text-bio-yellow font-semibold text-sm mb-2">📦 Using a Package</p>
            <SyntaxHighlighter
              code={`import pandas as pd

# Let pandas handle everything
df = pd.read_csv('data.csv')
result = df.corr()  # Done!`}
              language="python"
            />
          </div>
        </div>
      </div>

      {/* The Lesson */}
      <div className="bg-gradient-to-r from-purple-600/20 to-bio-blue/20 border border-purple-500/30 rounded-xl p-6 mt-6 max-w-4xl mx-auto">
        <h3 className="text-lg font-bold text-purple-400 mb-3 text-center">
          🎯 The Power of Python Objects & APIs
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-purple-500/10 rounded-lg p-3">
            <p className="text-bio-yellow font-semibold mb-2">Objects Are Like Hotel Services</p>
            <p className="text-gray-300">
              • They have <strong>methods</strong> (services they provide)<br/>
              • They have <strong>attributes</strong> (properties you can check)<br/>
              • You don&apos;t need to know HOW they work inside
            </p>
          </div>
          <div className="bg-bio-blue/10 rounded-lg p-3">
            <p className="text-bio-yellow font-semibold mb-2">Example: DataFrame Object</p>
            <SyntaxHighlighter
              code={`df.mean()     # Method: calculates mean
df.shape      # Attribute: (rows, cols)
df.plot()     # Method: creates a graph`}
              language="python"
            />
          </div>
        </div>
        <p className="text-center text-bio-yellow mt-4 font-semibold">
          &quot;Good design is obvious. Great design is transparent.&quot; - Steve Jobs
        </p>
      </div>
    </>
  )
}