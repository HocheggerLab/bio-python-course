'use client'

import { 
  SlideTitle, 
  GradientText
} from '@/components/slides'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export default function Slide06PackageTypes() {
  return (
    <div className="h-full flex flex-col px-8 py-6 overflow-auto">
      <SlideTitle size="large" className="mb-6 text-center">
        Two Types of <GradientText>Python Packages</GradientText> 📦
      </SlideTitle>
      
      <p className="text-gray-300 text-center mb-8 text-lg">
        Python comes with batteries included, but the real power is in the community
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Standard Library */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-bio-blue/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🔋</div>
            <h3 className="text-xl font-bold text-bio-blue">Standard Library</h3>
            <p className="text-gray-400 text-sm italic">Built into every Python installation</p>
            <a 
              href="https://docs.python.org/3/library/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-3 py-1 bg-bio-blue/20 hover:bg-bio-blue/30 text-bio-blue text-xs rounded-full transition-colors"
            >
              📖 Browse Documentation
            </a>
          </div>
          
          <div className="space-y-4">
            <div className="bg-bio-blue/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">These are already included in your Python installation:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>os</code> - Operating system interface</li>
                <li>• <code>pathlib</code> - File path handling</li>
                <li>• <code>csv</code> - CSV file reading/writing</li>
                <li>• <code>math</code> - Mathematical functions</li>
                <li>• <code>random</code> - Random number generation</li>
                <li>• <code>json</code> - JSON data handling</li>
              </ul>
            </div>
            
            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-bio-yellow font-semibold mb-2">✅ Advantages:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Always available</li>
                <li>• No installation needed</li>
                <li>• Well-tested & stable</li>
                <li>• Works in any environment</li>
              </ul>
            </div>
            
            <SyntaxHighlighter
              code={`import csv
import math
import random

# Ready to use immediately!`}
              language="python"
            />
          </div>
        </div>

        {/* PyPI Packages */}
        <div className="bg-gradient-to-br from-bio-dark to-bio-darker border border-purple-500/30 rounded-xl p-6">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🌐</div>
            <h3 className="text-xl font-bold text-purple-400">PyPI Packages</h3>
            <p className="text-gray-400 text-sm italic">Community-built powerhouses</p>
            <a 
              href="https://pypi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-xs rounded-full transition-colors"
            >
              🔍 Search PyPI
            </a>
          </div>
          
          <div className="space-y-4">
            <div className="bg-purple-500/10 rounded-lg p-3">
              <h4 className="text-bio-yellow font-semibold mb-2">Specialized tools for science:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <code>pandas</code> - Data analysis & manipulation</li>
                <li>• <code>numpy</code> - Numerical computing</li>
                <li>• <code>matplotlib</code> - Data visualization</li>
                <li>• <code>biopython</code> - Biological computing</li>
                <li>• <code>scipy</code> - Scientific computing</li>
                <li>• <code>seaborn</code> - Statistical plots</li>
              </ul>
            </div>
            
            <div className="bg-bio-green/10 rounded-lg p-3">
              <p className="text-bio-yellow font-semibold mb-2">⚡ Supercharged capabilities:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Handle millions of data points</li>
                <li>• Advanced scientific algorithms</li>
                <li>• Domain-specific features</li>
                <li>• Active development</li>
              </ul>
            </div>
            
            <SyntaxHighlighter
              code={`# Needs installation first:
# uv add pandas numpy

import pandas as pd
import numpy as np`}
              language="python"
            />
          </div>
        </div>
      </div>

      {/* Installation Methods */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Local Development */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-yellow/30 rounded-xl p-4">
          <h3 className="text-lg font-bold text-bio-yellow mb-3 text-center">
            💻 Local Development (Advanced)
          </h3>
          <div className="space-y-2">
            <p className="text-gray-300 text-sm">
              For building real applications with <code>uv</code>:
            </p>
            <SyntaxHighlighter
              code={`# Create new project
uv init my-bio-project
cd my-bio-project

# Add scientific packages
uv add pandas numpy matplotlib

# Run your script
uv run analysis.py`}
              language="bash"
            />
            <p className="text-gray-400 text-xs">
              uv handles virtual environments & dependencies automatically!
            </p>
          </div>
        </div>

        {/* Google Colab */}
        <div className="bg-gradient-to-br from-bio-dark/50 to-bio-darker/50 border border-bio-green/30 rounded-xl p-4">
          <h3 className="text-lg font-bold text-bio-green mb-3 text-center">
            ☁️ Google Colab (Recommended)
          </h3>
          <div className="space-y-2">
            <p className="text-gray-300 text-sm">
              Most scientific packages pre-installed:
            </p>
            <SyntaxHighlighter
              code={`# Just import and use!
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# If you need something special:
!pip install biopython`}
              language="python"
            />
            <p className="text-gray-400 text-xs">
              Perfect for learning - no setup required!
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-purple-600 to-bio-blue rounded-xl p-4 mt-6">
        <p className="text-white text-center font-semibold">
          🎯 <strong>For this course:</strong> We&apos;ll use both! Standard library for basics, 
          PyPI packages (especially Pandas) for powerful data analysis.
        </p>
      </div>
    </div>
  )
}