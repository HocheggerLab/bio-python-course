import {
  SlideTitle,
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export default function Slide00Welcome() {
  return (
    <>
      <SlideTitle size="xl" className="mb-8">
        <GradientText>Course Summary</GradientText>
        <br />
        <span className="text-3xl md:text-4xl">Your Python Journey So Far</span>
      </SlideTitle>

      <p className="text-xl text-gray-300 mb-10 text-center max-w-4xl mx-auto">
        Today we put everything together in a complete end-to-end data analysis project.
        <br />
        <span className="text-bio-yellow font-semibold">These skills are vital for your final course assignment!</span>
      </p>

      {/* Course progression */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <ConceptCard title="Lecture 1: Lab Calculations" icon="🧮" iconColor="blue">
          <FeatureList
            items={[
              {
                title: "Basic Python Syntax",
                description: "Variables, types, operators, and assignment"
              },
              {
                title: "For Loops",
                description: "Iteration and automation of repetitive tasks"
              },
              {
                title: "Lists & File I/O",
                description: "Working with collections and reading/writing files"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Lecture 2: Analyzing DNA" icon="🧬" iconColor="purple">
          <FeatureList
            items={[
              {
                title: "String Operations",
                description: "Manipulating DNA sequences with Python strings"
              },
              {
                title: "Functions",
                description: "Creating reusable code blocks for analysis"
              },
              {
                title: "Biopython",
                description: "Using packages for biological data formats"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Lecture 3: DepMap Data" icon="📊" iconColor="green">
          <FeatureList
            items={[
              {
                title: "Object-Oriented Programming",
                description: "Classes, objects, and methods for data structures"
              },
              {
                title: "Pandas DataFrames",
                description: "Powerful data manipulation and analysis"
              },
              {
                title: "Error Handling",
                description: "Try-except blocks for robust code"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Lecture 4: Data Visualization" icon="📈" iconColor="amber">
          <FeatureList
            items={[
              {
                title: "Matplotlib",
                description: "Creating professional scientific plots"
              },
              {
                title: "Exploratory Analysis",
                description: "Techniques for understanding complex datasets"
              },
              {
                title: "Vectorization",
                description: "Fast computations with NumPy arrays"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>

      {/* Today's lecture highlight */}
      <div className="mt-10 bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border-2 border-purple-500/40 rounded-2xl p-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-bio-blue">
            Today: End-to-End Analysis Project
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bio-dark/50 rounded-xl p-6">
            <h4 className="text-bio-blue font-semibold mb-4 text-lg">🔬 The Research Question</h4>
            <p className="text-gray-300 mb-4">
              Which genes correlate with <span className="text-bio-yellow font-semibold">ATR</span> in cancer cell lines?
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Find genes with similar dependency patterns</li>
              <li>• Apply statistical corrections for multiple testing</li>
              <li>• Analyze network overlap between top genes</li>
              <li>• Interpret biological significance</li>
            </ul>
          </div>

          <div className="bg-bio-dark/50 rounded-xl p-6">
            <h4 className="text-purple-400 font-semibold mb-4 text-lg">🛠️ Skills You'll Apply</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-bio-green/10 border border-bio-green/30 rounded-lg p-3">
                <div className="text-bio-green font-semibold text-sm mb-1">Functions</div>
                <div className="text-gray-400 text-xs">Modular analysis code</div>
              </div>
              <div className="bg-bio-blue/10 border border-bio-blue/30 rounded-lg p-3">
                <div className="text-bio-blue font-semibold text-sm mb-1">Pandas</div>
                <div className="text-gray-400 text-xs">Data manipulation</div>
              </div>
              <div className="bg-purple-400/10 border border-purple-400/30 rounded-lg p-3">
                <div className="text-purple-400 font-semibold text-sm mb-1">Matplotlib</div>
                <div className="text-gray-400 text-xs">Publication plots</div>
              </div>
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-lg p-3">
                <div className="text-amber-400 font-semibold text-sm mb-1">Statistics</div>
                <div className="text-gray-400 text-xs">Correlation & FDR</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key message */}
      <div className="mt-8 bg-gradient-to-r from-bio-yellow/10 to-amber-400/10 border border-bio-yellow/30 rounded-xl p-6">
        <div className="flex items-center justify-center gap-4">
          <div className="text-4xl">💡</div>
          <div>
            <h4 className="text-bio-yellow font-bold text-lg mb-1">
              This is How Real Bioinformatics Works
            </h4>
            <p className="text-gray-300 text-sm">
              Combining Python fundamentals, statistical analysis, and biological interpretation
              to answer research questions - exactly what you'll do in your final assignment!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
