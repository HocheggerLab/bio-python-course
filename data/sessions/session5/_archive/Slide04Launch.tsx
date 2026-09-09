import { GradientText } from '@/components/slides/SlideTitle'
import { LaunchSlide } from '@/components/slides/layouts'

/* No notebook here, and no traceback to read — the help sequence has to be
   the terminal's own, or it sends students looking for a demo cell that does
   not exist on this session. */
const TERMINAL_HELP = [
  'Check the spelling — the terminal is unforgiving, and silent about it',
  'Lost? pwd tells you where you are, ls what is there',
  'Compare with the sandbox on the previous slide',
  'Ask your neighbour, then a demonstrator',
  'Ask Gemini — after you have tried the first four',
]

export function Slide04Launch() {
  return (
    <LaunchSlide
      headline={<>Now do it on <GradientText>your own machine</GradientText></>}
      minutes={10}
      help={TERMINAL_HELP}
      core={
        <>
          Open your real terminal and repeat the five-step mission:{' '}
          <span className="font-mono">pwd</span> · <span className="font-mono">ls</span> ·{' '}
          <span className="font-mono">mkdir bio-python</span> ·{' '}
          <span className="font-mono">cd bio-python</span> · <span className="font-mono">pwd</span>.
        </>
      }
      doneWhen={
        <>
          You are inside <span className="font-mono">bio-python</span> and{' '}
          <span className="font-mono">python --version</span> prints a version number — that is
          Python running outside a notebook for the first time.
        </>
      }
      goingFurther={
        <>
          Keep the folder — every lab from now on lives in it.
        </>
      }
    />
  )
}
