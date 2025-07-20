import Hero from '@/components/Hero'
import Lectures from '@/components/Lectures'
import Seminars from '@/components/Seminars'
import Resources from '@/components/Resources'
import Schedule from '@/components/Schedule'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <Lectures />
      <Seminars />
      <Resources />
      <Schedule />
      <About />
    </>
  );
}
