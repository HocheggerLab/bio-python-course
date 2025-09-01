import Image from 'next/image'
import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  Timeline
} from '@/components/slides'

export function PythonStorySlide() {
  return (
    <>
      <div className="pb-10">
        <div className="flex items-center justify-center">
          <span className="text-6xl mr-4">🐍</span>
          <SlideTitle>
            The Story of <GradientText>Python</GradientText>
          </SlideTitle>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <Timeline
          items={[
            {
              year: "1989",
              title: "",
              description: "Guido starts Python as a hobby project during Christmas break",
              color: "yellow"
            },
            {
              year: "1991-2005",
              title: "The Scripting Era",
              description: "Python starts as a simple scripting language for automation and system administration",
              color: "orange"
            },
            {
              year: "2006-2011",
              title: "Scientific Foundation",
              description: "NumPy (2006) and SciPy emerge, creating scientific computing foundation",
              highlights: ["Begins attracting academic researchers"],
              color: "blue"
            },
            {
              year: "2012-2015",
              title: "The Breakthrough",
              description: "Data science explosion begins with pandas (2008) gaining massive adoption",
              color: "green"
            },
            {
              year: "2016-2020",
              title: "AI/ML Dominance",
              description: "TensorFlow (2015) and deep learning libraries cement Python's leadership",
              color: "purple"
            },
            {
              year: "2020-Present",
              title: "Total Dominance",
              description: "COVID-19 accelerates data science adoption, Python usage nearly doubles",
              highlights: ["8.2M+ active users worldwide"],
              color: "lightblue",
              isActive: true
            }
          ]}
        />

        <div className="flex flex-col items-center justify-center">
          <ConceptCard title="" icon="" className="text-center">
            <Image 
              src="/guido.png"
              alt="Guido van Rossum" 
              width={240}
              height={240}
              className="object-cover rounded-xl mb-6 mx-auto"
            />
            <h3 className="text-2xl font-bold text-bio-blue mb-2">Guido van Rossum</h3>
            <p className="text-lg text-gray-300 mb-4">BDFL, Benevolent Dictator for Life</p>

            <div className="bg-bio-yellow/10 border-l-4 border-bio-yellow p-4 rounded-r-lg text-left">
              <p className="text-gray-300 italic">
                "I was looking for a hobby programming project that would keep me occupied during the week around Christmas."
              </p>
              <p className="text-sm text-gray-400 mt-2 text-right">
                — Guido van Rossum on Python's origins
              </p>
            </div>
          </ConceptCard>

          <div className="mt-6 glass-dark rounded-xl p-4 text-center">
            <p className="text-sm text-gray-400 mb-2">🎬 Named after</p>
            <p className="text-lg font-bold text-bio-yellow">Monty Python's Flying Circus</p>
            <p className="text-sm text-gray-400 mt-1">Not the snake! 🐍</p>
          </div>

          <div className="mt-4">
            <a
              href="https://www.youtube.com/watch?v=GfH4QL4VqJ0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch Python Documentary
            </a>
            <p className="text-xs text-gray-500 mt-2">Learn the full story behind Python's creation</p>
          </div>
        </div>
      </div>
    </>
  )
}