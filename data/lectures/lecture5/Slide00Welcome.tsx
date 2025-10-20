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
        <GradientText>Statistical Analysis</GradientText> & Visualization
        <br />
        <span className="text-3xl md:text-4xl">with Python</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Master linear regression and create stunning visualizations to understand cancer gene relationships
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
                description: "Assess model quality using R², p-values, and residual analysis"
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
                title: "Interactive Plots",
                description: "Build dynamic visualizations for data exploration"
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
                title: "Gene Expression Patterns",
                description: "Visualize relationships between essential genes across cancer types"
              },
              {
                title: "Comparative Analysis",
                description: "Create heatmaps and scatter plots to compare breast vs myeloid cancer"
              },
              {
                title: "Publication-Ready Figures",
                description: "Generate professional plots suitable for research presentations"
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
                <p className="text-gray-300 font-semibold">Correlation Heatmaps</p>
                <p className="text-gray-400 text-sm">Visualize gene interaction networks in cancer data</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-bio-green font-bold">3.</span>
              <div>
                <p className="text-gray-300 font-semibold">Scatter Plot Analysis</p>
                <p className="text-gray-400 text-sm">Compare gene expression across different cancer types</p>
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
            <h5 className="text-bio-blue font-semibold text-sm">NumPy</h5>
            <p className="text-gray-400 text-xs">Numerical computing</p>
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
          <div className="bg-bio-blue/20 text-bio-blue px-4 py-2 rounded-lg font-semibold border-2 border-bio-blue/50">
            → Lecture 4: Statistics & Visualization
          </div>
          <div className="bg-gray-600/20 text-gray-400 px-4 py-2 rounded-lg">
            Lecture 5: Advanced Projects
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
    </>
  )
}