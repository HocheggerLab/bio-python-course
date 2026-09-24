import { GradientText } from '@/components/slides/SlideTitle'
import { LaunchSlide } from '@/components/slides/layouts'

/* No notebook and no traceback here, so the help sequence is the terminal's
   own — pointing at a demo cell would send students hunting for something
   this session does not have. */
const TERMINAL_HELP = [
  'Check the spelling — the terminal is unforgiving, and silent about it',
  'Lost? pwd tells you where you are, ls what is there',
  'One command at a time, and read what it printed',
  'Ask your neighbour, then a demonstrator',
  'Ask Gemini — after you have tried the first four',
]

export function Slide01Launch() {
  return (
    <LaunchSlide
      headline={<>The terminal — <GradientText>on your own machine</GradientText></>}
      minutes={10}
      help={TERMINAL_HELP}
      recap={
        <>
          The terminal is the same computer, driven by typing.{' '}
          <span className="font-mono text-white">pwd</span> where am I ·{' '}
          <span className="font-mono text-white">ls</span> what is here ·{' '}
          <span className="font-mono text-white">mkdir</span> make a folder ·{' '}
          <span className="font-mono text-white">cd</span> go into it.
        </>
      }
      core={
        <>
          Open <span className="text-white font-semibold">Terminal</span> (Mac) or{' '}
          <span className="text-white font-semibold">PowerShell</span> (Windows), then:{' '}
          <span className="font-mono">pwd · ls · mkdir bio-python · cd bio-python · pwd</span>.
        </>
      }
      doneWhen={
        <>
          Inside <span className="font-mono">bio-python</span>,{' '}
          <span className="font-mono">python --version</span> prints a version number.
        </>
      }
      goingFurther={<>Keep the folder — every lab from now on lives in it.</>}
    />
  )
}
