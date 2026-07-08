import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import BlogList from './components/BlogList'
import BlogPostDetail from './components/BlogPostDetail'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </Router>
  )
}

export default App
