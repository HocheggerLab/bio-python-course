import { 
  SlideTitle, 
  GradientText,
  ConceptCard
} from '@/components/slides'

export function Slide07ProgrammingParadigms() {
  return (
    <>
      <div className="pb-10">
        <SlideTitle>
          Programming <GradientText>Paradigms</GradientText>
        </SlideTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
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

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12">
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
}