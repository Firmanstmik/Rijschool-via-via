import { Navbar } from '@/components/site/Navbar'
import { Footer } from '@/components/site/Footer'
import { StoryRail } from '@/components/site/StoryRail'
import { StoryBridge } from '@/components/site/StoryBridge'
import { Hero } from '@/components/home/Hero'
import { Showcase } from '@/components/home/Showcase'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { Philosophy } from '@/components/home/Philosophy'
import { PersonalLearning } from '@/components/home/PersonalLearning'
import { Experience } from '@/components/home/Experience'
import { Testimonials } from '@/components/home/Testimonials'
import { FinalCta } from '@/components/home/FinalCta'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-vv-snow focus:px-4 focus:py-2 focus:text-vv-void"
      >
        Ga naar inhoud
      </a>
      <Navbar />
      <StoryRail />
      <main id="main" className="vv-story">
        <Hero />
        <StoryBridge line="Eerst de mens. Dan de les." />
        <Showcase />
        <StoryBridge line="Wat stil groeit, blijft." />
        <ServicesGrid />
        <StoryBridge line="Een investering voor het leven." />
        <Philosophy />
        <StoryBridge line="Op jouw tempo. Met dezelfde begeleider." />
        <PersonalLearning />
        <StoryBridge line="Meer vertrouwen. Zekerder de weg op." />
        <Experience />
        <StoryBridge line="Wat leerlingen voelen." />
        <Testimonials />
        <StoryBridge line="Maak kennis. Vrijblijvend." />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
