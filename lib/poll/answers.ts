/**
 * The worked explanations, server-side only.
 *
 * These used to be a `answer` ReactNode prop passed from each slide into the
 * client `PollSlide`. Next serialises *every* prop of a client component into
 * the RSC flight payload whether or not it is rendered, so `showBars && answer`
 * gated the display and not the transmission: a student viewing source could
 * read the explanation — which names the correct option — before voting.
 *
 * Keeping them here means they only ever leave the server through
 * /api/poll/results, which already refuses anyone without the teacher cookie.
 *
 * **Never import this module from a client component.** It is imported by the
 * results route alone. `correctIndex` lives next door in questions.ts for the
 * same reason.
 *
 * Markup is deliberately minimal, since these cross the wire as plain strings:
 *
 *   `code`      → monospace
 *   **bold**    → strong
 *   *italic*    → emphasis
 */
export const POLL_ANSWERS: Record<string, string> = {
  'l1-r1':
    'Only `f"..."` substitutes. Without the `f` Python prints the braces ' +
    'literally — no error, wrong output, and it will sit in a script for weeks. ' +
    'Doubled braces `{{ }}` are how you ask for a literal brace, and `$name` is ' +
    'a different language altogether.',

  'l1-r2':
    'A `str`. The quotes win over what the characters look like — and arithmetic ' +
    'on it either raises `TypeError` or, worse, quietly does the wrong thing: ' +
    '`"3" * 2` is `"33"`. This is the single most common data-handling bug in biology.',

  'l1-r3':
    '`buffer_ph`. Names cannot start with a digit, cannot contain a space, and ' +
    'cannot be a word Python already uses — `float` is reserved. All three of the ' +
    'others generate a `SyntaxError`.',

  'l7-p1':
    'The label belongs on the `plot` call, not the legend: `ax.legend()` only ' +
    'draws what has already been labelled. Without it matplotlib warns *"No ' +
    'artists with labels found"* and draws an empty box — `loc=` moves that empty ' +
    'box around.',

  'l7-r1':
    '`ax.set_title()`. Not `plt`, which has no such method; not `fig`, which titles ' +
    'the whole sheet with `suptitle`; and `ax.title` is an attribute, not a function.',

  'l7-r2':
    '**Cancer lineage.** It is a *label* you can count — there are 73 skin lines ' +
    'and 124 lung. The other three are **continuous**: measured on a scale, and any ' +
    'value in between is possible. A score of `−0.83` means something; a lineage ' +
    'halfway between Skin and Lung does not.',

  'l7-r3':
    '`ax.hist()` — one continuous column is a **distribution**. Each of the others ' +
    'needs something you were not given: `scatter` a second column, `barh` a ' +
    'category to label the bars, and `boxplot` groups to split on.',
}

export const getAnswerProse = (id: string): string | undefined =>
  Object.prototype.hasOwnProperty.call(POLL_ANSWERS, id) ? POLL_ANSWERS[id] : undefined
