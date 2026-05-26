import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Philosophy from './components/Philosophy'
import Team from './components/Team'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import TestimonialForm from './components/TestimonialForm'
import Showcase from './components/Showcase'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {

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
    </main>
  )
}

export default App
