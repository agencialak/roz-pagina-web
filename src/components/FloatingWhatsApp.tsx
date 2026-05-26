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
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-2xl flex items-center justify-center hover:shadow-2xl transition-shadow"
      title="Contacta con nosotros por WhatsApp"
    >
      <svg
        className="w-7 h-7"
        fill="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.8-1.588-3.853-1.587-5.953.003-6.465 5.265-11.726 11.727-11.726 3.13 0 6.078 1.235 8.334 3.488 2.256 2.254 3.496 5.2 3.495 8.329-.003 6.465-5.266 11.726-11.729 11.726h-.056c-1.979 0-3.915-.495-5.664-1.463l-6.464 1.702zm8.782-13.624c.306-.098.616.515.964 1.117.347.602.827 1.506 1.152 1.826.325.32.787.305 1.148 0 .36-.306.72-1.324 1.224-2.269.504-.945.98-1.711 1.296-1.686.317.024.833.67 1.351 1.604.517.933.894 1.707 1.128 2.194.234.487.035 1.053-.277 1.468-.313.415-.873.827-1.493.984-.622.157-1.288.352-2.178-.236-.891-.588-2.143-2.088-3.128-3.758-.984-1.67-1.457-2.787-1.631-3.288-.174-.502-.203-.901.153-1.227.357-.327.79-.247 1.047.128z" />
      </svg>
    </motion.a>
  )
}

export default FloatingWhatsApp
