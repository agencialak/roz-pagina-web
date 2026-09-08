import { useEffect } from 'react'
import { setPageSeo } from '../utils/seo'
import Hero from './Hero'
import CustomerJourney from './CustomerJourney'
import Clients from './Clients'
import Services from './Services'
import ChannelsFlow from './ChannelsFlow'
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
      <div className="fixed inset-0 -z-10 overflow-hidden bg-surface">
        <video
          className="w-full h-full object-cover opacity-[0.06] mix-blend-multiply"
          muted
          playsInline
          autoPlay
          loop
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-surface/80" />
      </div>

      <Hero />
      <CustomerJourney />
      <Clients />
      <Services />
      <ChannelsFlow />
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
