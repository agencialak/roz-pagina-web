import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { initSmoothScroll, resetScroll } from './lib/smoothScroll'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import BlogList from './components/BlogList'
import BlogPostDetail from './components/BlogPostDetail'
import PrivacyPolicy from './components/PrivacyPolicy'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </Router>
  )
}

export default App
