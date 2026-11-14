import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { initSmoothScroll, resetScroll } from './lib/smoothScroll'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

// La portada va en el paquete principal; el resto de páginas se descarga solo al visitarlas.
const BlogList = lazy(() => import('./components/BlogList'))
const BlogPostDetail = lazy(() => import('./components/BlogPostDetail'))
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const ServicePage = lazy(() => import('./components/ServicePage'))
const NotFound = lazy(() => import('./components/NotFound'))

const ResetScrollOnRoute = () => {
  const { pathname } = useLocation()
  useEffect(() => resetScroll(), [pathname])
  return null
}

function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <Router>
      <ResetScrollOnRoute />
      <CursorGlow />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/servicios/:slug" element={<ServicePage />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </Router>
  )
}

export default App
