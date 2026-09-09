import Hero from '@/components/Hero'
import Lectures from '@/components/Lectures'
import Resources from '@/components/Resources'
import ScrollToHashOnLoad from '@/components/ScrollToHashOnLoad'

export default function Home() {
  return (
    <>
      <ScrollToHashOnLoad />
      <Hero />
      <Lectures />
      <Resources />
    </>
  );
}
