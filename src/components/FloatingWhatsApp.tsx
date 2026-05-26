import { motion } from 'framer-motion'

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
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-2xl transition-shadow"
      title="Contacta con nosotros por WhatsApp"
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/930/564/non_2x/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
        alt="WhatsApp"
        className="w-14 h-14 object-contain"
      />
    </motion.a>
  )
}

export default FloatingWhatsApp
