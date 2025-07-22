import { 
  SlideTitle, 
  FeatureList
} from '@/components/slides'

export function WhatWellBuildSlide() {
  return (
    <>
      <div className="pb-10">
        <SlideTitle>
          What We'll <span className="text-gradient-purple">Build Together</span>
        </SlideTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bio-note">
          <h3 className="text-2xl font-bold text-bio-green mb-4">🧬 DNA Analysis Tools</h3>
          <FeatureList
            items={[
              { title: "ORF (Open Reading Frame) finder" },
              { title: "Sequence alignment visualizer" },
              { title: "GC content calculator" },
              { title: "Restriction enzyme mapper" }
            ]}
            icon="•"
            iconColor="green"
            titleColor="default"
            spacing="tight"
          />
        </div>

        <div className="bio-note">
          <h3 className="text-2xl font-bold text-bio-green mb-4">📊 Data Processing Scripts</h3>
          <FeatureList
            items={[
              { title: "Automated data cleaning" },
              { title: "Statistical analysis pipelines" },
              { title: "Publication-ready graphs" },
              { title: "Batch file processing" }
            ]}
            icon="•"
            iconColor="green"
            titleColor="default"
            spacing="tight"
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="inline-block">
          <div className="bg-bio-yellow/20 border-2 border-bio-yellow rounded-2xl px-8 py-6">
            <p className="text-xl font-bold text-bio-yellow mb-2">🎯 Final Project</p>
            <p className="text-gray-300">Build a complete gene analysis pipeline</p>
          </div>
        </div>
      </div>
    </>
  )
}