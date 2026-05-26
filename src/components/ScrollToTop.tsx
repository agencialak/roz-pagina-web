import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 left-8 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-primary-800 shadow-2xl flex items-center justify-center hover:shadow-2xl transition-shadow"
          title="Volver al inicio"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
