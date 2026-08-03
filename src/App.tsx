import { Navbar } from '@/components/site/Navbar'
import { Footer } from '@/components/site/Footer'
import { Hero } from '@/components/home/Hero'
import { Showcase } from '@/components/home/Showcase'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { Philosophy } from '@/components/home/Philosophy'
import { PersonalLearning } from '@/components/home/PersonalLearning'
import { Experience } from '@/components/home/Experience'
import { Testimonials } from '@/components/home/Testimonials'
import { ServiceArea } from '@/components/home/ServiceArea'
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
      <main id="main">
        <Hero />
        <Showcase />
        <ServicesGrid />
        <Philosophy />
        <PersonalLearning />
        <Experience />
        <Testimonials />
        <ServiceArea />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
