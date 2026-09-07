/**
 * Question wording, shared by the phone page and the lecture slide.
 *
 * Deliberately free of answers: this module is imported by client components,
 * so anything in here ships to the browser. `correctIndex` lives next door in
 * questions.ts, which only the server imports.
 *
 * Naming: `<lecture>-p<n>` is the code question inside part n; `<lecture>-r<n>`
 * is a recall question in the closing block. One code poll per part keeps the
 * interruptions to three an hour.
 */
export interface PollContent {
  /** The question, as the student reads it on their phone. */
  prompt: string
  /** Optional code block shown above the options. */
  code?: string
  /** Rendered mono when every option is code. */
  optionsAreCode?: boolean
  options: string[]
}

export const POLL_CONTENT: Record<string, PollContent> = {
  /* Part 1 — grown out of the two-strains exercise. The bug is silent apart
     from a warning: both lines draw, the legend is simply empty. */
  'l7-p1': {
    prompt:
      'Both growth curves are drawn, but the legend comes out empty. Which change fixes it?',
    code: `fig, ax = plt.subplots()
ax.plot(time_h, fast)
ax.plot(time_h, slow)
ax.legend()`,
    optionsAreCode: true,
    options: [
      'ax.legend(loc="upper left")',
      'ax.plot(time_h, fast, label="fast")',
      'ax.set_legend(["fast", "slow"])',
      'ax.labels("fast", "slow")',
    ],
  },


  /* Lecture 1 closing block — three recall questions, asked before the recap
     so an overrun eats the summary (which is on the website) rather than the
     only feedback we get. Each maps onto a bug in the Lab 1 notebooks, so the
     lecture and the lab reinforce the same three mistakes. */
  'l1-r1': {
    prompt: 'Which line prints  Sample S-014 has pH 7.4  ?',
    code: `sample = "S-014"
ph = 7.4`,
    optionsAreCode: true,
    options: [
      'print("Sample {sample} has pH {ph}")',
      'print(f"Sample {sample} has pH {ph}")',
      'print("Sample $sample has pH $ph")',
      'print(f"Sample {{sample}} has pH {{ph}}")',
    ],
  },
  'l1-r2': {
    prompt: 'A reading comes back from a file as "3.14", with the quotes. What does type() say it is?',
    code: 'print(type("3.14"))',
    optionsAreCode: true,
    options: ["<class 'float'>", "<class 'str'>", "<class 'int'>", "<class 'decimal'>"],
  },
  'l1-r3': {
    prompt: 'Which of these is a variable name Python will accept?',
    optionsAreCode: true,
    options: ['2nd_sample', 'buffer ph', 'buffer_ph', 'class'],
  },

  /* Closing recall block. */
  'l7-r1': {
    prompt:
      'You have made a figure with fig, ax = plt.subplots(). Which line gives that panel a title?',
    optionsAreCode: true,
    options: [
      'plt.set_title("Growth")',
      'fig.set_title("Growth")',
      'ax.set_title("Growth")',
      'ax.title("Growth")',
    ],
  },
}

export function getContent(id: string): PollContent | undefined {
  return Object.prototype.hasOwnProperty.call(POLL_CONTENT, id)
    ? POLL_CONTENT[id]
    : undefined
}
