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
import GoogleReviews from './GoogleReviews'
import Showcase from './Showcase'
import FinalCTA from './FinalCTA'

function HomePage() {
  useEffect(() => {
    setPageSeo({ path: '/' })
  }, [])

  return (
    <main className="overflow-hidden relative">
      <Hero />
      <CustomerJourney />
      <Clients />
      <Services />
      <ChannelsFlow />
      <Philosophy />
      <Team />
      <Results />
      <Testimonials />
      <GoogleReviews />
      <TestimonialForm />
      <Showcase />
      <FinalCTA />
    </main>
  )
}

export default HomePage
