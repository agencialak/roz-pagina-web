import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/573218515587"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-2xl flex items-center justify-center hover:shadow-2xl transition-shadow"
      title="Contacta con nosotros por WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />
    </motion.a>
  )
}

export default FloatingWhatsApp
