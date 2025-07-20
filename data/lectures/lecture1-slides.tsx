import { LectureData, Slide } from './types'
import { 
  SlideTitle, 
  GradientText,
  ConceptCard,
  FeatureList,
  Timeline,
  StatsGrid
} from '@/components/slides'
import Image from 'next/image'

const slides: Slide[] = [
  {
    id: 1,
    title: "Welcome",
    contentType: "center",
    content: (
      <>
        <div className="mb-12">
          <SlideTitle size="xl" className="mb-4">
            Welcome to <GradientText>Python</GradientText>
            <br />
            <span className="text-3xl md:text-4xl">for Biologists</span>
          </SlideTitle>
          <p className="text-xl text-gray-300 mt-4 text-center">
            Transform your research with computational skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <ConceptCard title="What You'll Achieve" icon="🎯" iconColor="blue">
            <FeatureList 
              items={[
                {
                  title: "Write Python Scripts",
                  description: "Create tools to automate repetitive tasks, process sequences, and solve biological problems"
                },
                {
                  title: "Perform Data Analysis",
                  description: "Analyze experimental data, create visualizations, and extract meaningful insights from biological datasets"
                },
                {
                  title: "Build Analysis Pipelines",
                  description: "Combine multiple tools into powerful workflows for genomics, proteomics, and systems biology"
                }
              ]}
              icon="✓"
              iconColor="green"
              titleColor="yellow"
            />
          </ConceptCard>

          <ConceptCard title="Course Philosophy" icon="🚀" iconColor="blue">
            <FeatureList 
              items={[
                {
                  title: "Biology First",
                  description: "Every example uses real biological data - from DNA sequences to protein structures"
                },
                {
                  title: "Learn by Doing",
                  description: "Write code from day one with immediate applications to your research interests"
                },
                {
                  title: "No Prerequisites",
                  description: "Designed for biologists with zero programming experience - we'll guide you every step"
                }
              ]}
              icon="→"
              iconColor="blue"
              titleColor="yellow"
            />
          </ConceptCard>
        </div>
      </>
    )
  },
  
  // Slide 2: AI & LLMs
  {
    id: 2,
    title: "AI & LLMs: A Double-Edged Sword",
    contentType: "center",
    content: (
      <>
        <SlideTitle className="mb-12">
          AI & LLMs: <GradientText>A Double-Edged Sword</GradientText>
        </SlideTitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          <div className="card border-bio-green/50">
            <h3 className="text-2xl font-bold text-bio-green mb-4 flex items-center">
              <span className="text-3xl mr-3">✅</span>
              The Blessing
            </h3>
            <FeatureList
              items={[
                { title: "24/7 Teacher:", description: "Get explanations anytime" },
                { title: "Skilled Buddy:", description: "Debug and optimize code together" },
                { title: "Idea Explorer:", description: "Discover alternative solutions" }
              ]}
              icon="•"
              iconColor="green"
              titleColor="default"
              spacing="tight"
            />
          </div>

          <div className="card border-red-500/50">
            <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              The Curse
            </h3>
            <FeatureList
              items={[
                { title: "Copy-Paste Trap:", description: "No learning happens" },
                { title: "Shallow Understanding:", description: "Miss core concepts" },
                { title: "Dependency:", description: "Can't code without AI help" }
              ]}
              icon="•"
              iconColor="red"
              titleColor="default"
              spacing="tight"
            />
          </div>
        </div>

        <ConceptCard title="🔑 The Golden Rule" icon="" className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-6 font-semibold">
            Type the code <span className="text-bio-blue">YOURSELF</span> first,
            then consult AI for questions and alternatives
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="text-center bg-bio-dark rounded-lg p-4">
              <div className="text-3xl mb-2">💪</div>
              <p className="text-sm">You don't get fit by watching fitness videos</p>
            </div>
            <div className="text-center bg-bio-dark rounded-lg p-4">
              <div className="text-3xl mb-2">🎸</div>
              <p className="text-sm">You don't learn guitar by watching YouTube</p>
            </div>
            <div className="text-center bg-bio-dark rounded-lg p-4">
              <div className="text-3xl mb-2">💻</div>
              <p className="text-sm">You don't learn coding by copying AI output</p>
            </div>
          </div>
        </ConceptCard>

        <div className="text-center mt-8">
          <p className="text-xl text-gray-300">
            <strong className="text-bio-green">DO:</strong> Write → Test → Debug → Ask AI → Understand → Improve
          </p>
          <p className="text-xl text-gray-300 mt-2">
            <strong className="text-red-400">DON'T:</strong> Ask AI → Copy → Paste → Submit
          </p>
        </div>
      </>
    )
  },

  // Slide 3: Who Uses Python
  {
    id: 3,
    title: "Who Uses Python?",
    contentType: "top",
    content: (
      <>
        <SlideTitle className="mb-12">
          Who Uses <GradientText>Python</GradientText>?
        </SlideTitle>

        <p className="text-2xl text-center text-gray-300 mb-12">
          The same tools you'll learn power the world's biggest companies
        </p>

        {/* Company Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          {[
            { name: "Netflix", color: "hover:border-red-600", desc: "Streaming & recommendations" },
            { name: "Instagram", color: "hover:border-pink-600", desc: "Backend & ML" },
            { name: "NASA", color: "hover:border-blue-600", desc: "Scientific computing" },
            { name: "Spotify", color: "hover:border-green-600", desc: "Music algorithms" },
            { name: "OpenAI", color: "hover:border-bio-blue", desc: "ChatGPT & AI" }
          ].map((company, index) => (
            <div key={index} className="group">
              <div className={`glass-dark rounded-2xl p-6 h-full flex flex-col items-center justify-center ${company.color} border-2 border-transparent transition-all hover:scale-105`}>
                <div className="h-14 mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold">{company.name}</span>
                </div>
                <p className="text-xs text-gray-400 text-center">{company.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two Section Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-center mb-6">
              <span className="text-gradient-purple">AI & Machine Learning</span>
            </h3>
            <div className="space-y-3">
              {[
                { icon: "🤖", title: "Deep Learning", desc: "TensorFlow, PyTorch, Keras" },
                { icon: "📊", title: "Data Science", desc: "Pandas, NumPy, Scikit-learn" },
                { icon: "🔍", title: "Computer Vision", desc: "OpenCV, image analysis, medical imaging" }
              ].map((item, index) => (
                <div key={index} className="glass-dark rounded-xl p-4 flex items-center">
                  <span className="text-2xl mr-4">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-bio-yellow">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center mb-6">
              <span className="text-bio-green">Biology & Science</span>
            </h3>
            <div className="space-y-3">
              {[
                { icon: "🧬", title: "Bioinformatics", desc: "BioPython, sequence analysis, BLAST" },
                { icon: "💊", title: "Drug Discovery", desc: "Molecular modeling, protein folding" },
                { icon: "🔬", title: "Lab Automation", desc: "Instrument control, data pipelines" }
              ].map((item, index) => (
                <div key={index} className="glass-dark rounded-xl p-4 flex items-center">
                  <span className="text-2xl mr-4">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-bio-green">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <div className="inline-block bg-bio-blue/10 rounded-full px-8 py-4 border border-bio-blue/30">
            <p className="text-lg">
              Python is the <span className="font-bold text-bio-blue">2nd best language</span> for{" "}
              <span className="font-bold text-bio-green">everything!</span>
            </p>
          </div>
        </div>
      </>
    )
  },

  // Slide 4: The Story of Python
  {
    id: 4,
    title: "The Story of Python",
    contentType: "center",
    content: (
      <>
        <div className="flex items-center justify-center mb-12">
          <span className="text-6xl mr-4">🐍</span>
          <SlideTitle>
            The Story of <GradientText>Python</GradientText>
          </SlideTitle>
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
          </div>
        </div>
      </>
    )
  },

  // Slide 5: The Python Organisation
  {
    id: 5,
    title: "The Python Organisation",
    contentType: "center",
    content: (
      <>
        <div className="flex items-center justify-center mb-8">
          <span className="text-6xl mr-4">🐍</span>
          <SlideTitle>
            The Python <GradientText>Organisation</GradientText>
          </SlideTitle>
        </div>

        <p className="text-center text-xl text-gray-300 mb-8">
          <a href="https://www.python.org/" target="_blank" className="text-bio-blue hover:text-bio-light-blue transition-colors">
            https://www.python.org/
          </a>
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-bio-yellow mb-6 flex items-center">
              <span className="text-2xl mr-3">🔄</span>
              Development Cycle
            </h3>

            <div className="card border-2 border-bio-green mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-2xl font-bold text-bio-green">Python 3.13</h4>
                <span className="badge-available">Current</span>
              </div>
              <p className="text-gray-300">Released October 2024</p>
              <FeatureList
                items={[
                  { title: "Free-threaded mode (no GIL) experimental" },
                  { title: "JIT compiler experimental" },
                  { title: "Enhanced error messages" }
                ]}
                icon="•"
                iconColor="green"
                titleColor="default"
                spacing="tight"
                className="mt-2 text-sm text-gray-400"
              />
            </div>

            <ConceptCard title="🍂 Annual Autumn Release" icon="" variant="default">
              <p className="text-gray-300 mb-3">New major version every October</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Python 3.14</span>
                  <span className="text-bio-yellow">October 2025</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Python 3.15</span>
                  <span className="text-bio-yellow">October 2026</span>
                </div>
              </div>
            </ConceptCard>

            <div className="mt-4 glass-dark rounded-xl p-4">
              <h4 className="font-bold text-bio-blue mb-2">Version Support Timeline</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Full support:</span>
                  <span className="text-bio-green">18 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Security fixes:</span>
                  <span className="text-bio-yellow">5 years total</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gradient-purple mb-6 flex items-center">
              <span className="text-2xl mr-3">🌍</span>
              Global Impact
            </h3>

            <StatsGrid
              items={[
                { value: "10M+", label: "Active developers", color: "yellow" },
                { value: "500K+", label: "PyPI packages", color: "yellow" },
                { value: "#1", label: "on GitHub", color: "green" },
                { value: "30+", label: "PyCons yearly", color: "green" }
              ]}
              columns={2}
              className="mb-6"
            />

            <div className="bio-note">
              <h4 className="font-bold text-bio-green mb-3">Python Software Foundation</h4>
              <p className="text-sm text-gray-300 mb-3">
                Non-profit supporting Python development and community
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-center bg-bio-dark rounded p-2">
                  <p className="font-bold text-bio-blue">$655K</p>
                  <p className="text-xs text-gray-400">in grants (2024)</p>
                </div>
                <div className="text-center bg-bio-dark rounded p-2">
                  <p className="font-bold text-bio-blue">61</p>
                  <p className="text-xs text-gray-400">countries supported</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-bio-blue/20 to-bio-purple/20 rounded-2xl px-8 py-4 border border-bio-blue/30">
            <p className="text-lg">
              <span className="text-2xl mr-2">🐍</span>
              Python is <span className="font-bold text-bio-blue">open source</span> and
              <span className="font-bold text-bio-green"> community-driven</span> - anyone can contribute!
            </p>
          </div>
        </div>
      </>
    )
  },

  // Slide 6: Python in the Programming Landscape
  {
    id: 6,
    title: "Python in the Programming Landscape",
    contentType: "top",
    content: (
      <>
        <SlideTitle className="mb-12">
          Python in the <GradientText>Programming Landscape</GradientText>
        </SlideTitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-8">
          <ConceptCard title="🔄 Interpreted vs Compiled" icon="">
            <div className="space-y-3">
              <div className="glass-dark rounded-xl p-4">
                <h4 className="font-bold text-bio-yellow mb-2">Interpreted (like Python)</h4>
                <p className="text-sm text-gray-300 mb-2">Code runs line-by-line, no compilation step</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "R", "Ruby"].map(lang => (
                    <span key={lang} className="px-3 py-1 bg-bio-blue/20 rounded-full text-xs">{lang}</span>
                  ))}
                </div>
                <p className="text-xs text-bio-green mt-2">✓ Faster development • ✓ Platform independent</p>
              </div>

              <div className="glass-dark rounded-xl p-4">
                <h4 className="font-bold text-gray-400 mb-2">Compiled</h4>
                <p className="text-sm text-gray-300 mb-2">Code converted to machine code before running</p>
                <div className="flex flex-wrap gap-2">
                  {["C/C++", "Rust", "Go", "Fortran"].map(lang => (
                    <span key={lang} className="px-3 py-1 bg-gray-600/20 rounded-full text-xs">{lang}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">✓ Faster execution • ✗ Platform specific</p>
              </div>
            </div>
          </ConceptCard>

          <ConceptCard title="📝 Dynamic vs Static Typing" icon="">
            <div className="space-y-3">
              <div className="glass-dark rounded-xl p-4">
                <h4 className="font-bold text-bio-yellow mb-2">Dynamic (like Python)</h4>
                <p className="text-sm text-gray-300 mb-2">Variable types determined at runtime</p>
                <div className="code-block !p-2 !text-xs">
                  <pre style={{ margin: 0 }}>{`x = 42        # x is an integer
x = "hello"   # now x is a string
x = [1, 2, 3] # now x is a list`}</pre>
                </div>
                <p className="text-xs text-bio-green mt-2">✓ Flexible • ✓ Less code • ✓ Easier to learn</p>
              </div>

              <div className="glass-dark rounded-xl p-4">
                <h4 className="font-bold text-gray-400 mb-2">Static</h4>
                <p className="text-sm text-gray-300 mb-2">Variable types must be declared</p>
                <div className="code-block !p-2 !text-xs !bg-gray-800">
                  <pre style={{ margin: 0 }}>{`int x = 42;      // x is always an integer
string s = "hi"; // s is always a string`}</pre>
                </div>
                <p className="text-xs text-gray-400 mt-2">✓ Type safety • ✓ Better performance • ✗ More verbose</p>
              </div>
            </div>
          </ConceptCard>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-6">
            Where Python <span className="text-gradient-purple">Fits In</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="bio-table mx-auto">
              <thead>
                <tr>
                  <th className="text-left">Language</th>
                  <th>Type System</th>
                  <th>Execution</th>
                  <th>Best For</th>
                  <th>Learning Curve</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-bio-blue/10">
                  <td className="font-bold text-bio-blue">Python 🐍</td>
                  <td>Dynamic</td>
                  <td>Interpreted</td>
                  <td>Data Science, AI, Web, Automation</td>
                  <td><span className="text-bio-green">◉◯◯◯◯</span> Easy</td>
                </tr>
                <tr>
                  <td className="font-bold">R</td>
                  <td>Dynamic</td>
                  <td>Interpreted</td>
                  <td>Statistics, Data Analysis</td>
                  <td><span className="text-bio-yellow">◉◉◯◯◯</span> Moderate</td>
                </tr>
                <tr>
                  <td className="font-bold">JavaScript</td>
                  <td>Dynamic</td>
                  <td>Interpreted/JIT</td>
                  <td>Web Development</td>
                  <td><span className="text-bio-yellow">◉◉◯◯◯</span> Moderate</td>
                </tr>
                <tr>
                  <td className="font-bold">Java</td>
                  <td>Static</td>
                  <td>Compiled (bytecode)</td>
                  <td>Enterprise, Android</td>
                  <td><span className="text-orange-400">◉◉◉◯◯</span> Challenging</td>
                </tr>
                <tr>
                  <td className="font-bold">C++</td>
                  <td>Static</td>
                  <td>Compiled</td>
                  <td>Systems, Games, Performance</td>
                  <td><span className="text-red-400">◉◉◉◉◯</span> Difficult</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="text-center glass-dark rounded-xl p-4">
            <p className="text-3xl mb-2">🚀</p>
            <p className="font-bold text-bio-green">Fast to Write</p>
            <p className="text-sm text-gray-400">5-10x fewer lines than Java/C++</p>
          </div>
          <div className="text-center glass-dark rounded-xl p-4">
            <p className="text-3xl mb-2">📚</p>
            <p className="font-bold text-bio-yellow">Huge Ecosystem</p>
            <p className="text-sm text-gray-400">Libraries for everything</p>
          </div>
          <div className="text-center glass-dark rounded-xl p-4">
            <p className="text-3xl mb-2">🎯</p>
            <p className="font-bold text-bio-blue">Perfect for Science</p>
            <p className="text-sm text-gray-400">Built for data & research</p>
          </div>
        </div>
      </>
    )
  },

  // Slide 7: What We'll Build
  {
    id: 7,
    title: "What We'll Build Together",
    contentType: "center",
    content: (
      <>
        <SlideTitle className="mb-12">
          What We'll <span className="text-gradient-purple">Build Together</span>
        </SlideTitle>

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
  },

  // Slide 8: Course Structure
  {
    id: 8,
    title: "Course Structure",
    contentType: "center",
    content: (
      <>
        <SlideTitle className="mb-12">
          Course <GradientText>Structure</GradientText>
        </SlideTitle>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {[
              { num: "1", title: "Interactive Lectures", desc: "Core concepts with biological examples", icon: "📚" },
              { num: "2", title: "Hands-on Seminars", desc: "Apply concepts to real problems", icon: "💻" },
              { num: "3", title: "Weekly Exercises", desc: "Practice with guided problems", icon: "✏️" },
              { num: "4", title: "Personal Projects", desc: "Apply to your own research", icon: "🚀", highlight: true }
            ].map((item, index) => (
              <div key={index} className="glass-dark rounded-xl p-6 flex items-center">
                <div className={`${item.highlight ? 'bg-bio-yellow/20' : 'bg-bio-blue/20'} rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                  <span className={`font-bold ${item.highlight ? 'text-bio-yellow' : 'text-bio-blue'}`}>{item.num}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                <div className="text-2xl">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  },

  // Slide 9: Let's Start
  {
    id: 9,
    title: "Ready to Start Coding?",
    contentType: "center",
    content: (
      <>
        <div className="text-center">
          <SlideTitle className="mb-8">
            Ready to <GradientText>Start Coding</GradientText>?
          </SlideTitle>

          <div className="text-6xl mb-8 animate-float">
            🚀
          </div>

          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's set up your Python environment and write your first program!
          </p>

          <div className="inline-block">
            <ConceptCard title="Today's Goal" icon="" className="text-center">
              <h3 className="text-2xl font-bold text-bio-blue mb-4">Today's Goal</h3>
              <p className="text-lg text-gray-300">
                By the end of this lecture, you'll have written a Python program<br />
                that calculates the GC content of a DNA sequence
              </p>
            </ConceptCard>
          </div>
        </div>
      </>
    )
  }
]

export const lecture1Data: LectureData = {
  id: '1',
  title: 'Introduction to Python for Biologists',
  slides
}