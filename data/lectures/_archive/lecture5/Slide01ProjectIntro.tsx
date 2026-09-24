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
        <GradientText>Gene Dependency Analysis</GradientText> & Visualization
        <br />
        <span className="text-3xl md:text-4xl">with Python</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Master linear regression and create complex visualizations to understand cancer gene relationships
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <ConceptCard title="Linear Regression" icon="📈" iconColor="blue">
          <FeatureList
            items={[
              {
                title: "Statistical Modeling",
                description: "Build predictive models to understand gene expression relationships"
              },
              {
                title: "Correlation Analysis",
                description: "Discover how different genes influence each other in cancer"
              },
              {
                title: "Model Evaluation",
                description: "Assess model quality using statistical validation"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Data Visualization" icon="🎨" iconColor="purple">
          <FeatureList
            items={[
              {
                title: "Matplotlib Foundations",
                description: "Create professional scientific plots and customize every detail"
              },
              {
                title: "Seaborn Analytics",
                description: "Generate statistical visualizations with minimal code"
              },
              {
                title: "Detailed Visualizations",
                description: "Build advanced visualizations for data exploration"
              }
            ]}
            icon="→"
            iconColor="blue"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Cancer Data Insights" icon="🧬" iconColor="green">
          <FeatureList
            items={[
              {
                title: "Gene Dependency Patterns",
                description: "Visualize relationships between essential genes across cancer types"
              },
              {
                title: "Comparative Analysis",
                description: "Create scatter plots to asses correlations between genes"
              },
              {
                title: "Venn Diagrams",
                description: "Analyse gene dependency network overlap"
              }
            ]}
            icon="+"
            iconColor="purple"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>

      {/* What you'll create today */}
      <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-bio-blue/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
          🎯 What You'll Create Today
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold">1.</span>
              <div>
                <p className="text-gray-300 font-semibold">Linear Regression Models</p>
                <p className="text-gray-400 text-sm">Predict gene dependencies using statistical relationships</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold">2.</span>
              <div>
                <p className="text-gray-300 font-semibold">Correlation Networks</p>
                <p className="text-gray-400 text-sm">Visualize gene interaction Venn Diagrams</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold">3.</span>
              <div>
                <p className="text-gray-300 font-semibold">Scatter Plot Analysis</p>
                <p className="text-gray-400 text-sm">Compare gene dependency between genes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold">4.</span>
              <div>
                <p className="text-gray-300 font-semibold">Professional Visualizations</p>
                <p className="text-gray-400 text-sm">Create publication-quality figures with custom styling</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools we'll master */}
      <div className="mt-8 bg-gradient-to-r from-amber-400/10 to-bio-yellow/10 border border-amber-400/30 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-amber-400 mb-4 text-center">
          🛠️ Python Libraries We'll Master
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">📊</div>
            <h5 className="text-bio-blue font-semibold text-sm">Scipy</h5>
            <p className="text-gray-400 text-xs">Scienftic computing</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">🐼</div>
            <h5 className="text-bio-green font-semibold text-sm">Pandas</h5>
            <p className="text-gray-400 text-xs">Data manipulation</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">📈</div>
            <h5 className="text-purple-400 font-semibold text-sm">Matplotlib</h5>
            <p className="text-gray-400 text-xs">Plot creation</p>
          </div>
          <div className="bg-bio-dark/50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-2">🎨</div>
            <h5 className="text-amber-400 font-semibold text-sm">Seaborn</h5>
            <p className="text-gray-400 text-xs">Statistical plots</p>
          </div>
        </div>
      </div>

      {/* Journey progress */}
      <div className="mt-8 bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-5">
        <h4 className="text-lg font-semibold text-bio-green mb-3 text-center">
          📚 Your Python Journey Continues
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-bio-green/20 text-bio-green px-4 py-2 rounded-lg font-semibold">
            ✓ Lecture 1: Python Fundamentals
          </div>
          <div className="bg-bio-green/20 text-bio-green px-4 py-2 rounded-lg font-semibold">
            ✓ Lecture 2: DNA Analysis
          </div>
          <div className="bg-bio-green/20 text-bio-green px-4 py-2 rounded-lg font-semibold">
            ✓ Lecture 3: OOP & Pandas
          </div>
          <div className="bg-bio-green/20 text-bio-green px-4 py-2 rounded-lg font-semibold">
            → Lecture 4: EDA & Visualization
          </div>
          <div className="bg-gray-600/20 text-bio-blue px-4 py-2 rounded-lg font-semibold border-2 border-bio-blue/50">
            Lecture 5: A complete analysis project
          </div>
        </div>
      </div>

      {/* Key insight preview */}
      <div className="mt-8 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-xl p-5">
        <h4 className="text-red-400 font-semibold mb-3 text-center">
          💡 Today's Key Insight
        </h4>
        <p className="text-gray-300 text-center text-sm">
          Move beyond simple data analysis to <span className="text-bio-blue font-semibold">predictive modeling</span> and
          <span className="text-purple-400 font-semibold"> visual storytelling</span> -
          the hallmarks of professional data science in cancer research
        </p>
      </div>

      {/* Practice notebook link */}
      <div className="mt-8 text-center bg-gradient-to-r from-bio-green/10 to-purple-500/10 border border-bio-green/30 rounded-xl p-6">
        <p className="text-bio-green font-semibold text-lg mb-4">
          🚀 Complete End-to-End Analysis Notebook
        </p>
        <p className="text-gray-300 text-sm mb-6">
          Follow along with the full analysis workflow in this comprehensive Jupyter notebook
        </p>
        <a
          href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_5/L5_P1_E2Eanalysis.ipynb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-bio-blue/20 hover:opacity-90"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 8.385l-1.446-.695a1.87 1.87 0 00-1.71.099l-.885.443a.59.59 0 01-.615-.009l-1.417-.816a.59.59 0 01-.294-.511V6.21c0-.21.11-.403.294-.511l1.417-.816a.59.59 0 01.615-.009l.885.443c.516.258 1.146.234 1.638-.062l1.518-.912a.59.59 0 01.885.511v2.042a.59.59 0 01-.294.511l-1.59.954z"/>
          </svg>
          Open End-to-End Analysis in Colab
        </a>
      </div>
    </>
  )
}