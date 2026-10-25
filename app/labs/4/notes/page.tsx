import Link from 'next/link'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'

export const metadata = {
  title: 'Lab 4 Notes — Reading & Writing Files',
}

/* ── small building blocks, local to this page ─────────────────────────── */

function Section({ id, n, title, children }: { id: string; n: number; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-5">
        <span className="text-bio-blue mr-3">{n}</span>
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-gray-300 text-base md:text-lg leading-relaxed">{children}</div>
    </section>
  )
}

function Code({ children, label }: { children: string; label?: string }) {
  return (
    <div className="rounded-lg border border-code-border overflow-hidden">
      {label && (
        <div className="px-4 py-1.5 border-b border-code-border bg-bio-darkest/70 text-xs font-semibold uppercase tracking-widest text-bio-blue">
          {label}
        </div>
      )}
      <SyntaxHighlighter code={children} className="!rounded-none text-sm md:text-base" />
    </div>
  )
}

function Tip({ children, tone = 'yellow' }: { children: React.ReactNode; tone?: 'yellow' | 'red' | 'green' }) {
  const colour = {
    yellow: 'border-bio-yellow/40 bg-bio-yellow/10',
    red: 'border-red-500/40 bg-red-500/10',
    green: 'border-bio-green/40 bg-bio-green/10',
  }[tone]
  return <div className={`rounded-lg border-l-4 px-4 py-3 text-sm md:text-base ${colour}`}>{children}</div>
}

const M = ({ children }: { children: React.ReactNode }) => (
  <code className="font-mono text-bio-yellow text-[0.92em]">{children}</code>
)

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10">
      <table className="w-full text-sm md:text-base">
        <thead className="bg-white/5 text-left text-white">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-2 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-white/10 align-top">
              {r.map((c, j) => (
                <td key={j} className="px-4 py-2">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const toc = [
  ['where', 'Where files live'],
  ['pathlib', 'Paths are objects'],
  ['finding', 'Finding files'],
  ['opening', 'Opening a file with with'],
  ['reading', 'Reading'],
  ['fasta', 'Example: reading FASTA'],
  ['writing', 'Writing'],
  ['csv', 'Tables: CSV files'],
  ['errors', 'When it goes wrong'],
  ['reference', 'Quick reference'],
]

export default function Lab4NotesPage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/labs/4"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Lab 4
        </Link>

        <div className="mb-10 md:mb-12">
          <p className="text-bio-blue/70 text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
            Lab 4 · Notes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Reading &amp; Writing Files</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Everything a program needs to find a file, read it, and write its results back out. The examples use
            the bee sequences from the lab — run them from your <M>lab4</M> folder.
          </p>
        </div>

        <nav className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <p className="text-white font-semibold mb-2">On this page</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm md:text-base list-decimal list-inside">
            {toc.map(([id, t]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-bio-blue hover:text-bio-yellow">
                  {t}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 1 ───────────────────────────────────────────────────────────── */}
        <Section id="where" n={1} title="Where files live">
          <p>
            Every file has an address: the chain of folders you walk through to reach it. There are two ways to
            write that address down.
          </p>
          <Table
            head={['', 'looks like', 'means']}
            rows={[
              [
                <span key="a" className="text-white">Absolute</span>,
                <M key="b">/Users/sam/lab4/sequences/Bombus_terrestris.fasta</M>,
                'The full address, from the top of the disk. Works from anywhere — but only on your laptop.',
              ],
              [
                <span key="a" className="text-white">Relative</span>,
                <M key="b">sequences/Bombus_terrestris.fasta</M>,
                <>
                  Directions from <em>where you are now</em> — the <span className="text-white">current working
                  directory</span> (cwd). Short and portable, but only right if you start in the right place.
                </>,
              ],
            ]}
          />
          <p>
            The cwd is the folder your terminal is in when you type <M>uv run</M>. In the terminal you see it with{' '}
            <M>pwd</M>; in Python with <M>Path.cwd()</M>. Two folder names are special: <M>.</M> means &quot;this
            folder&quot; and <M>..</M> means &quot;one folder up&quot;.
          </p>
          <Tip>
            Mac and Linux write paths with <M>/</M>. Windows uses <M>\</M> and starts with a drive letter, like{' '}
            <M>C:\Users\sam\lab4</M>. If you build paths with <M>pathlib</M> (next section), you never have to care.
          </Tip>
        </Section>

        {/* 2 ───────────────────────────────────────────────────────────── */}
        <Section id="pathlib" n={2} title="Paths are objects, not strings">
          <p>
            You <em>could</em> glue folder names together as strings — and you would get the slashes wrong on
            someone else&apos;s computer. <M>pathlib</M> gives you a <M>Path</M> object that knows how paths work on
            every operating system, and that you can ask questions.
          </p>
          <Code label="building a path">{`from pathlib import Path

data_dir = Path("sequences")
bee = data_dir / "Bombus_terrestris.fasta"   # the / operator joins path parts

print(bee)           # sequences/Bombus_terrestris.fasta`}</Code>
          <Code label="asking it questions — nothing is opened yet">{`bee.name       # 'Bombus_terrestris.fasta'
bee.stem       # 'Bombus_terrestris'       <- the name without the suffix
bee.suffix     # '.fasta'
bee.parent     # Path('sequences')         <- one folder up

bee.exists()   # True if there is something at that address
bee.is_file()  # True if it is a file
data_dir.is_dir()   # True if it is a folder

bee.resolve()  # the full, absolute path`}</Code>
          <p>Three starting points you will use again and again:</p>
          <Code>{`Path.cwd()              # where the terminal is standing — changes when you cd
Path(__file__).parent   # the folder this script is saved in — never changes
Path.home()             # your home folder, e.g. /Users/sam`}</Code>
          <Tip tone="green">
            In a script, build paths from <M>Path(__file__).parent</M>. Then the script finds its data no matter
            which folder you run it from — the lesson of &quot;Break it on purpose&quot;.{' '}
            <M>__file__</M> only exists in a <M>.py</M> file, not in a notebook.
          </Tip>
        </Section>

        {/* 3 ───────────────────────────────────────────────────────────── */}
        <Section id="finding" n={3} title="Finding files">
          <p>
            Most of the time you don&apos;t know the file names in advance — you want &quot;all the FASTA files in
            this folder&quot;. That is what <M>glob</M> is for: <M>*</M> means &quot;anything&quot;.
          </p>
          <Code>{`data_dir = Path(__file__).parent / "sequences"

list(data_dir.iterdir())          # everything in the folder (99 FASTA + README.md)
list(data_dir.glob("*.fasta"))    # only names ending in .fasta  (99)
list(data_dir.glob("Bombus_*"))   # only the bumblebees

for fasta_file in sorted(data_dir.glob("*.fasta")):
    print(fasta_file.stem)`}</Code>
          <Tip>
            <M>glob</M> returns files in whatever order the disk stores them — different on different computers.
            Wrap it in <M>sorted()</M> so everyone gets the same order. <M>rglob(&quot;*.fasta&quot;)</M> also
            searches every sub-folder.
          </Tip>
        </Section>

        {/* 4 ───────────────────────────────────────────────────────────── */}
        <Section id="opening" n={4} title="Opening a file with with">
          <p>
            <M>open(path)</M> asks the operating system for the file and gives you a <em>file object</em> —
            usually called <M>f</M>. When you are done, the file must be closed again: until then, written data
            may sit in memory and never reach the disk, and on Windows nobody else can touch the file.
          </p>
          <Code label="always open files like this">{`with open(bee) as f:
    text = f.read()

# the indented block has ended -> the file is closed here,
# even if something inside the block crashed`}</Code>
          <p>
            The second argument to <M>open()</M> is the <span className="text-white">mode</span> — what you want to
            do with the file:
          </p>
          <Table
            head={['mode', 'meaning', 'if the file exists…', 'if it doesn\u2019t…']}
            rows={[
              [<M key="m">&quot;r&quot;</M>, 'read (the default)', 'reads it', 'FileNotFoundError'],
              [<M key="m">&quot;w&quot;</M>, 'write', <span key="w" className="text-red-300">empties it first — no warning</span>, 'creates it'],
              [<M key="m">&quot;a&quot;</M>, 'append', 'adds to the end', 'creates it'],
              [<M key="m">&quot;x&quot;</M>, 'create', 'FileExistsError', 'creates it'],
            ]}
          />
          <Tip>
            Text files can be stored in different <em>encodings</em>. To make your script behave the same on Mac
            and Windows, you can say so explicitly: <M>open(bee, encoding=&quot;utf-8&quot;)</M>.
          </Tip>
        </Section>

        {/* 5 ───────────────────────────────────────────────────────────── */}
        <Section id="reading" n={5} title="Reading">
          <p>Three ways to read, depending on what you want back:</p>
          <Code label="1 · the whole file as one string">{`with open(bee) as f:
    text = f.read()

text[:40]   # '>Bombus_terrestris OR179434.1 COI\\nTGATCA'`}</Code>
          <Code label="2 · a list of lines">{`with open(bee) as f:
    lines = f.read().splitlines()   # ['>Bombus_terrestris OR179434.1 COI', 'TGATCA...', ...]

# f.readlines() also gives a list — but every line keeps its '\\n' on the end`}</Code>
          <Code label="3 · one line at a time — best for big files">{`with open(bee) as f:
    for line in f:
        line = line.strip()          # remove the '\\n' (and stray spaces)
        if line.startswith(">"):
            print("header:", line)`}</Code>
          <p>
            Looping over <M>f</M> reads one line at a time, so it works even for a genome too big to fit in memory.
          </p>
          <Tip>
            <span className="text-white">The invisible character.</span> Every line in a file ends in a newline,{' '}
            <M>&quot;\n&quot;</M>. You can&apos;t see it, but <M>&quot;ATG\n&quot; == &quot;ATG&quot;</M> is{' '}
            <M>False</M> and <M>len()</M> counts it. Use <M>.strip()</M> on each line, or <M>.splitlines()</M> on
            the whole text.
          </Tip>
          <p>
            For a small file in one go, <M>Path</M> has a shortcut that opens, reads and closes for you:
          </p>
          <Code>{`text = bee.read_text()`}</Code>
        </Section>

        {/* 6 ───────────────────────────────────────────────────────────── */}
        <Section id="fasta" n={6} title="Example: reading FASTA">
          <p>
            FASTA is one header line starting with <M>&gt;</M>, then the sequence spread over several lines. With
            one record per file — like the bee files — skip the first line and glue the rest together:
          </p>
          <Code label="one record per file (the bee files)">{`def read_fasta(path):
    """Read one FASTA file and return its DNA as a single string."""
    with open(path) as f:
        lines = f.read().splitlines()
    return "".join(lines[1:])`}</Code>
          <p>
            Real FASTA files often hold many records — a whole genome&apos;s worth of genes in one file. Then every{' '}
            <M>&gt;</M> line starts a new record. Read line by line and build a dictionary:
          </p>
          <Code label="many records per file">{`def read_multi_fasta(path):
    """Return a dict: record name -> sequence."""
    records = {}
    name = None
    with open(path) as f:
        for line in f:
            line = line.strip()
            if line.startswith(">"):
                name = line[1:].split()[0]   # first word after '>'
                records[name] = ""
            elif line:                       # skip blank lines
                records[name] = records[name] + line
    return records`}</Code>
          <Tip tone="green">
            Libraries such as <M>Biopython</M> do this for every sequence format with one call (
            <M>SeqIO.parse()</M>). Writing it yourself once is how you understand what they do.
          </Tip>
        </Section>

        {/* 7 ───────────────────────────────────────────────────────────── */}
        <Section id="writing" n={7} title="Writing">
          <p>
            Make sure the folder exists, open the file with <M>&quot;w&quot;</M>, and <M>write()</M> strings into
            it.
          </p>
          <Code>{`results_dir = Path(__file__).parent / "results"
results_dir.mkdir(parents=True, exist_ok=True)   # no error if it already exists

with open(results_dir / "notes.txt", "w") as f:
    f.write("first line\\n")
    f.write("second line\\n")
    print("third line", file=f)    # print() can write to a file too — and adds the \\n`}</Code>
          <Tip tone="red">
            <M>write()</M> does <span className="text-white">not</span> start a new line for you. Forget the{' '}
            <M>\n</M> and everything ends up on one enormous line. And <M>write()</M> only takes strings — turn
            numbers into text with an f-string first: <M>f.write(f&quot;{'{gc}'}\n&quot;)</M>.
          </Tip>
          <p>
            To add to a file instead of replacing it — a log that grows every run — open it with{' '}
            <M>&quot;a&quot;</M>:
          </p>
          <Code>{`with open(results_dir / "notes.txt", "a") as f:
    f.write("added at the end\\n")`}</Code>
          <p>And the one-line shortcut, for small files:</p>
          <Code>{`(results_dir / "hello.txt").write_text("Hello, bees\\n")`}</Code>
        </Section>

        {/* 8 ───────────────────────────────────────────────────────────── */}
        <Section id="csv" n={8} title="Tables: CSV files">
          <p>
            A CSV (comma-separated values) file is a table as plain text: one header line, then one line per row,
            columns separated by commas. Excel, R and pandas all read it. The simplest way to write one is by hand:
          </p>
          <Code label="by hand — what you do in the homework">{`rows = [("Bombus_terrestris", 621, 24.0), ("Bombus_cryptarum", 621, 23.5)]

with open(results_dir / "bees.csv", "w") as f:
    f.write("species,length,gc\\n")
    for species, length, gc in rows:
        f.write(f"{species},{length},{gc}\\n")`}</Code>
          <p>
            That breaks as soon as a value contains a comma itself. Python&apos;s built-in <M>csv</M> module
            handles that for you, for writing and reading:
          </p>
          <Code label="with the csv module">{`import csv

with open(results_dir / "bees.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["species", "length", "gc"])
    writer.writerows(rows)

with open(results_dir / "bees.csv", newline="") as f:
    for row in csv.DictReader(f):            # each row is a dict, keyed by the header
        print(row["species"], float(row["gc"]))`}</Code>
          <Tip>
            Everything read from a text file is a <span className="text-white">string</span> — even{' '}
            <M>&quot;24.0&quot;</M>. Convert with <M>float()</M> or <M>int()</M> before doing maths. (In Session 6,
            pandas will do this for you.) <M>newline=&quot;&quot;</M> stops Windows adding blank lines
            between rows.
          </Tip>
        </Section>

        {/* 9 ───────────────────────────────────────────────────────────── */}
        <Section id="errors" n={9} title="When it goes wrong">
          <Table
            head={['you see', 'it usually means', 'try']}
            rows={[
              [
                <M key="e">FileNotFoundError</M>,
                'The path doesn\u2019t point at a file — a typo, or a relative path from the wrong cwd.',
                <>
                  Print <M>path.resolve()</M> and <M>path.exists()</M>. Build the path from{' '}
                  <M>Path(__file__).parent</M>.
                </>,
              ],
              [
                <M key="e">IsADirectoryError</M>,
                'You opened a folder, not a file. (Windows reports PermissionError instead.)',
                <>Loop over <M>folder.glob(&quot;*.fasta&quot;)</M> and open each file.</>,
              ],
              [
                <M key="e">PermissionError</M>,
                'Not allowed to open it — on Windows, often because Excel has the file open.',
                'Close the file in Excel and run again.',
              ],
              [
                <M key="e">UnicodeDecodeError</M>,
                'The file is not plain text, or uses a different encoding.',
                <>Check it really is text; try <M>encoding=&quot;utf-8&quot;</M>.</>,
              ],
              [
                'a result file that is empty, or wiped',
                <>Opened with <M>&quot;w&quot;</M> — which empties it — inside a loop.</>,
                <>Open once, before the loop, or use <M>&quot;a&quot;</M>.</>,
              ],
              [
                'everything on one line',
                <>Missing <M>\n</M> in <M>write()</M>.</>,
                <>End every string with <M>\n</M>.</>,
              ],
              [
                <M key="e">SyntaxError: (unicode error)</M>,
                <>A Windows path typed as a string: <M>&quot;C:\Users\…&quot;</M> — <M>\U</M> is read as an escape.</>,
                <>Use forward slashes <M>&quot;C:/Users/…&quot;</M>, or a raw string <M>r&quot;C:\Users\…&quot;</M>.</>,
              ],
            ]}
          />
          <p>To stop early with a clear message instead of a crash forty lines later, check first:</p>
          <Code>{`if not data_dir.exists():
    print(f"Can't find {data_dir}")
    raise SystemExit(1)`}</Code>
          <p>
            …or, if one bad file shouldn&apos;t stop the whole run, catch the error (Lab 4, Session 3):
          </p>
          <Code>{`for fasta_file in sorted(data_dir.glob("*.fasta")):
    try:
        dna = read_fasta(fasta_file)
    except UnicodeDecodeError:
        print(f"Skipping {fasta_file.name}: not a text file")
        continue
    ...`}</Code>
        </Section>

        {/* 10 ──────────────────────────────────────────────────────────── */}
        <Section id="reference" n={10} title="Quick reference">
          <Table
            head={['I want to…', 'Python']}
            rows={[
              ['use paths', <M key="c">from pathlib import Path</M>],
              ['the folder this script is in', <M key="c">Path(__file__).parent</M>],
              ['join path parts', <M key="c">folder / &quot;file.fasta&quot;</M>],
              ['name without suffix', <M key="c">path.stem</M>],
              ['check it is there', <M key="c">path.exists()</M>],
              ['all FASTA files, in order', <M key="c">sorted(folder.glob(&quot;*.fasta&quot;))</M>],
              ['make a folder', <M key="c">folder.mkdir(parents=True, exist_ok=True)</M>],
              ['read a whole file', <M key="c">with open(p) as f: text = f.read()</M>],
              ['read line by line', <M key="c">for line in f: line = line.strip()</M>],
              ['write a file', <M key="c">with open(p, &quot;w&quot;) as f: f.write(&quot;…\n&quot;)</M>],
              ['add to a file', <M key="c">with open(p, &quot;a&quot;) as f: …</M>],
              ['small file, one line', <M key="c">p.read_text() · p.write_text(s)</M>],
            ]}
          />
          <p className="text-sm md:text-base text-gray-400">
            Further reading: the official{' '}
            <a
              href="https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bio-blue hover:text-bio-yellow underline"
            >
              Python tutorial on files
            </a>{' '}
            and{' '}
            <a
              href="https://docs.python.org/3/library/pathlib.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bio-blue hover:text-bio-yellow underline"
            >
              pathlib docs
            </a>
            ; DataCamp&apos;s tutorials on{' '}
            <a
              href="https://www.datacamp.com/tutorial/reading-writing-files-python"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bio-blue hover:text-bio-yellow underline"
            >
              reading and writing text files
            </a>
            ,{' '}
            <a
              href="https://www.datacamp.com/tutorial/python-write-to-file"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bio-blue hover:text-bio-yellow underline"
            >
              writing text, CSV and JSON
            </a>{' '}
            and{' '}
            <a
              href="https://www.datacamp.com/tutorial/comprehensive-tutorial-on-using-pathlib-in-python-for-file-system-manipulation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bio-blue hover:text-bio-yellow underline"
            >
              pathlib
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  )
}
