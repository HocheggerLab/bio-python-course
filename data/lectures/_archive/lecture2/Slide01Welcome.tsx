import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList
} from '@/components/slides'

export function Slide01Welcome() {
  return (
    <>
      <SlideTitle size="xl" className="mb-10">
        <GradientText>DNA Analysis</GradientText> with Python
        <br />
        <span className="text-3xl md:text-4xl">for Biologists</span>
      </SlideTitle>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Build an Open Reading Frame finder to translate DNA sequences into proteins
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <ConceptCard title="Today's Focus" icon="🧬" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "String Manipulation",
                description: "Learn to work with text data, perfect for DNA and protein sequences"
              },
              {
                title: "DNA Sequence Analysis",
                description: "Apply Python skills to real biological problems like GC content calculation"
              },
              {
                title: "Pattern Recognition",
                description: "Find motifs, restriction sites, and other important sequence features"
              }
            ]}
            icon="✓"
            iconColor="green"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Core Python Skills" icon="🐍" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Python dictionaries",
                description: "Store and manipulate biological data efficiently"
              },
              {
                title: "String Methods",
                description: "Essential tools for sequence processing and analysis"
              },
              {
                title: "Conditional Logic",
                description: "Make decisions in your code based on biological criteria"
              }
            ]}
            icon="→"
            iconColor="blue"
            titleColor="yellow"
          />
        </ConceptCard>

        <ConceptCard title="Additional Topics" icon="🔧" iconColor="blue">
          <FeatureList 
            items={[
              {
                title: "Python Development Tools",
                description: "IDE setup, debugging, and best practices for scientific computing"
              },
              {
                title: "Open Source Software",
                description: "Understanding the ecosystem of biological analysis tools"
              },
              {
                title: "Biopython",
                description: "Introduction to the most popular Python library for bioinformatics"
              }
            ]}
            icon="+"
            iconColor="purple"
            titleColor="yellow"
          />
        </ConceptCard>
      </div>
    </>
  )
}