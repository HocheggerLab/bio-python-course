import { TryItSlide } from './TryItSlide'

const CODE = `seq = "ATGAAAGGTTTTCTGGAA"

print(list(range(1, 4)))
print(list(range(10, 0, -2)))

for i in range(0, 12, 3):
    print(i, seq[i:i + 3])`

const OUTPUT = `[1, 2, 3]
[10, 8, 6, 4, 2]
0 ATG
3 AAA
6 GGT
9 TTT`

const tasks: React.ReactNode[] = [
  <>Predict all six output lines. Then press Run.</>,
  <>
    Change the first <span className="font-mono">range</span> so it prints{' '}
    <span className="font-mono">[0, 5, 10, 15, 20]</span>.
  </>,
  <>
    The loop stops after 4 codons, but <span className="font-mono">seq</span> has 6. Change the{' '}
    <span className="font-mono">12</span> so it prints them all — without counting by hand.
  </>,
  <>
    Add one base to <span className="font-mono">seq</span> and replace the stop with{' '}
    <span className="font-mono">len(seq)</span>. What is the last &quot;codon&quot;? Now you know why{' '}
    <span className="font-mono">- 2</span>.
  </>,
]

export function Slide03TryRange() {
  return <TryItSlide topic="range()" tasks={tasks} code={CODE} output={OUTPUT} />
}
