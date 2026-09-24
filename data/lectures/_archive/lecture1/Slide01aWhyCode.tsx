import {
  SlideTitle,
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function Slide01aWhyCode() {
  return (
    <>
      <div className="pb-8">
        <SlideTitle>
          Why <GradientText>Learning to Code?</GradientText>
        </SlideTitle>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* AI Impact Statement */}
        <div className="bg-gradient-to-r from-purple-500/20 to-bio-blue/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-bio-yellow mb-3 text-center">
            🤖 The AI Revolution: A Double-Edged Sword
          </h3>
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            AI may be challenging news for professional software engineers,
            but it's <span className="text-bio-blue font-semibold">incredibly empowering</span> for everyone else—especially scientists.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <ConceptCard title="Boost Your Productivity" icon="🚀" iconColor="blue">
            <FeatureList
              items={[
                {
                  title: "Automate Repetitive Tasks",
                  description: "Stop doing manual calculations and data processing—let code do it for you"
                },
                {
                  title: "Work Smarter, Not Harder",
                  description: "A little coding knowledge can save hours of tedious work in the lab"
                },
                {
                  title: "Scale Your Analysis",
                  description: "Process hundreds or thousands of samples with the same effort as one"
                }
              ]}
              icon="✓"
              iconColor="green"
              titleColor="yellow"
            />
          </ConceptCard>

          <ConceptCard title="Deepen Your Data Skills" icon="📊" iconColor="green">
            <FeatureList
              items={[
                {
                  title: "Advanced Data Analysis",
                  description: "Go beyond Excel—perform sophisticated statistical analyses"
                },
                {
                  title: "Custom Visualizations",
                  description: "Create publication-quality figures tailored to your data"
                },
                {
                  title: "Reproducible Research",
                  description: "Make your analysis transparent and repeatable"
                }
              ]}
              icon="✓"
              iconColor="blue"
              titleColor="yellow"
            />
          </ConceptCard>

          <ConceptCard title="Use AI More Intelligently" icon="🧠" iconColor="purple">
            <FeatureList
              items={[
                {
                  title: "Understand AI Output",
                  description: "Know when AI-generated code is correct or nonsense"
                },
                {
                  title: "Effective Collaboration",
                  description: "Work with AI tools as a knowledgeable partner, not a blind follower"
                },
                {
                  title: "Debug and Adapt",
                  description: "Fix and customize AI-generated solutions for your specific needs"
                }
              ]}
              icon="✓"
              iconColor="yellow"
              titleColor="yellow"
            />
          </ConceptCard>

          <ConceptCard title="Gain a Competitive Edge" icon="💼" iconColor="yellow">
            <FeatureList
              items={[
                {
                  title: "Unique Skill Combination",
                  description: "Coding skills + specialist biological expertise = rare and valuable"
                },
                {
                  title: "Job Market Advantage",
                  description: "Stand out in academia, biotech, pharma, and beyond"
                },
                {
                  title: "Future-Proof Your Career",
                  description: "Computational skills are increasingly essential in all scientific fields"
                }
              ]}
              icon="✓"
              iconColor="blue"
              titleColor="yellow"
            />
          </ConceptCard>
        </div>

        {/* Closing Statement */}
        <div className="bg-bio-dark/50 border border-bio-blue/30 rounded-lg p-6 text-center">
          <p className="text-xl text-bio-blue font-semibold">
            Coding will be an essential side kick for your future career.
            <br />
            <span className="text-bio-yellow">Let's get you ready for it.</span>
          </p>
        </div>
      </div>
    </>
  )
}
