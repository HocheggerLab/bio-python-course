import {
  SlideTitle,
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export default function Slide00Welcome() {
  return (
    <>
      <SlideTitle size="xl" className="mb-10">
        <GradientText>Data Analysis</GradientText> with Python
        <br />
        <span className="text-3xl md:text-4xl">for Cancer Research</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Master Object-Oriented Programming and Pandas to analyze real cancer genomics data
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <ConceptCard title="Object-Oriented Programming" icon="🏗️" iconColor="purple">
          <FeatureList
            items={[
              {
                title: "Classes & Objects",
                description: "Create reusable code structures to model biological entities"
              },
              {
                title: "Methods & Attributes",
                description: "Add behaviors and properties to your biological data"
              },
              {
                title: "Code Organization",
                description: "Build clean, maintainable programs for scientific analysis"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Pandas Data Analysis" icon="🐼" iconColor="blue">
          <FeatureList
            items={[
              {
                title: "DataFrames & Series",
                description: "Work with structured datasets from real cancer research"
              },
              {
                title: "Filtering & Selection",
                description: "Extract specific cancer types and gene subsets efficiently"
              },
              {
                title: "Statistical Analysis",
                description: "Calculate means, sort data, and identify essential genes"
              }
            ]}
            icon="→"
            iconColor="blue"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Real-World Application" icon="🧬" iconColor="green">
          <FeatureList
            items={[
              {
                title: "CRISPR-Cas9 Data",
                description: "Analyze cutting-edge gene knockout experiments from cancer research"
              },
              {
                title: "Essential Gene Discovery",
                description: "Identify genes critical for cancer cell survival"
              },
              {
                title: "Comparative Analysis",
                description: "Compare breast vs myeloid cancer dependencies"
              }
            ]}
            icon="+"
            iconColor="purple"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>

      {/* What you'll accomplish today */}
      <div className="mt-12 bg-gradient-to-r from-bio-blue/10 to-purple-500/10 border border-bio-blue/30 rounded-xl p-6">
        <h3 className="text-xl font-bold text-bio-blue mb-4 text-center">
          🎯 What You'll Accomplish Today
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold">1.</span>
              <div>
                <p className="text-gray-300 font-semibold">Build Python Classes</p>
                <p className="text-gray-400 text-sm">Create Gene and Protein classes with biological methods</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold">2.</span>
              <div>
                <p className="text-gray-300 font-semibold">Master Pandas Basics</p>
                <p className="text-gray-400 text-sm">Load, explore, and understand large biological datasets</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold">3.</span>
              <div>
                <p className="text-gray-300 font-semibold">Analyze Cancer Data</p>
                <p className="text-gray-400 text-sm">Filter, calculate statistics, and rank essential genes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold">4.</span>
              <div>
                <p className="text-gray-300 font-semibold">Discover Biological Insights</p>
                <p className="text-gray-400 text-sm">Identify common vs cancer-specific gene dependencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey progress */}
      <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-amber-400/10 border border-purple-500/30 rounded-xl p-5">
        <h4 className="text-lg font-semibold text-purple-400 mb-3 text-center">
          📚 Your Python Journey So Far
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-bio-green/20 text-bio-green px-4 py-2 rounded-lg font-semibold">
            ✓ Lecture 1: Python Fundamentals
          </div>
          <div className="bg-bio-green/20 text-bio-green px-4 py-2 rounded-lg font-semibold">
            ✓ Lecture 2: DNA Analysis & Strings
          </div>
          <div className="bg-bio-blue/20 text-bio-blue px-4 py-2 rounded-lg font-semibold border-2 border-bio-blue/50">
            → Lecture 3: OOP & Data Analysis
          </div>
          <div className="bg-gray-600/20 text-gray-400 px-4 py-2 rounded-lg">
            Lecture 4: Statistical Analysis
          </div>
          <div className="bg-gray-600/20 text-gray-400 px-4 py-2 rounded-lg">
            Lecture 5: Advanced Visualization
          </div>
        </div>
      </div>
    </>
  )
}