import { TryItSlide } from './TryItSlide'

const CODE = `species_a = "ATGAAAGGTTTTCTGGAATATGCAGGCTAA"

print(species_a[:3])        # the start codon?
print(species_a[-3:])       # the stop codon?
print(species_a[3:6])       # the second codon

i = 6
print(species_a[i:i + 3])   # the third codon`

const OUTPUT = `ATG
TAA
AAA
GGT`

const tasks: React.ReactNode[] = [
  <>Predict all four output lines. Then press Run.</>,
  <>Print the first 10 bases.</>,
  <>
    Print the codon <em>just before</em> the stop codon. Hint: negative numbers count from the end.
  </>,
  <>
    Put both recaps together: loop with <span className="font-mono">range(0, len(species_a) - 2, 3)</span> and print
    every codon. That loop is the heart of <span className="font-mono">translate()</span>.
  </>,
]

export function Slide05TrySlicing() {
  return <TryItSlide topic="slicing" tasks={tasks} code={CODE} output={OUTPUT} />
}
