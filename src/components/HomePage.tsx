import { useEffect } from 'react'
import { setPageSeo } from '../utils/seo'
import Navbar from './Navbar'
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
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import ScrollToTop from './ScrollToTop'

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

      <Navbar />
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
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </main>
  )
}

export default HomePage
