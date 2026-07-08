import { useEffect } from 'react'
import { setPageSeo } from '../utils/seo'
import Hero from './Hero'
import Clients from './Clients'
import Services from './Services'
import Philosophy from './Philosophy'
import Team from './Team'
import Results from './Results'
import Testimonials from './Testimonials'
import TestimonialForm from './TestimonialForm'
import Showcase from './Showcase'
import FinalCTA from './FinalCTA'

function HomePage() {
  useEffect(() => {
    setPageSeo({ path: '/' })
  }, [])

  return (
    <main className="overflow-hidden relative">
      {/* Video Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-25"
          muted
          playsInline
          autoPlay
          loop
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Hero />
      <Clients />
      <Services />
      <Philosophy />
      <Team />
      <Results />
      <Testimonials />
      <TestimonialForm />
      <Showcase />
      <FinalCTA />
    </main>
  )
}

export default HomePage
