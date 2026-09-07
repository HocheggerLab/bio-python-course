import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, DefTable, type DefRow } from '@/components/slides/layouts'

const rows: DefRow[] = [
  { term: 'ax.plot(x, y)', def: <>Draw a line. Call it twice and you get two lines on the same panel.</>, extra: 'ax' },
  { term: 'ax.set_xlabel(...)', def: <>Label an axis. Also set_ylabel, set_title, set_xlim.</>, extra: 'ax' },
  { term: 'ax.legend()', def: <>Show the key, using the label= you gave each line.</>, extra: 'ax' },
  { term: 'fig.savefig("f1.png")', def: <>Write the whole canvas to a file — every panel on it, at the size you chose.</>, extra: 'fig' },
  { term: 'plt.subplots() / .show()', def: <>Make them both, then display the result. The only two things we let plt do.</>, extra: 'plt' },
]

export function Slide10WhoOwnsWhat() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Who owns <GradientText>what</GradientText>
        </>
      }
      note={
        <>
          Because you hold <span className="font-mono not-italic">ax</span> you can hand it
          to pandas, or to seaborn. <span className="font-mono not-italic">plt.title()</span>{' '}
          cannot be passed anywhere.
        </>
      }
    >
      <DefTable rows={rows} accent="green" headers={['call', 'what it does', 'belongs to']} />
    </ConceptSlide>
  )
}
