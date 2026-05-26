import { motion } from 'framer-motion'
import { fadeUpVariants, containerVariants, itemVariants } from '../utils/animations'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section id="contacto" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-600 to-primary-900 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-700 to-primary-950 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-8"
          >
            <div className="glass px-4 py-2 rounded-full border border-primary-600/30">
              <span className="text-sm font-medium text-primary-300">
                PRÓXIMO PASO
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={fadeUpVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tight"
          >
            <span className="text-white">¿LISTO PARA</span>
            <span className="block gradient-text-purple">ESCALAR TU MARCA?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            No esperes más. Las marcas que escalan son las que actúan hoy. Déjanos mostrarte cómo podemos transformar tu estrategia digital.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="https://wa.me/573218515587"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(109, 40, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-bold text-lg rounded-lg flex items-center gap-3 hover:shadow-xl transition-shadow group"
            >
              TRABAJEMOS JUNTOS
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={24} />
              </motion.span>
            </motion.a>

          </motion.div>

          {/* Trust Elements */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <p className="text-gray-400 mb-6">
              Confían en ROZ
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['Startup', 'E-Commerce', 'Brand', 'Sector Salud', 'Restaurantes'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="glass px-4 py-2 rounded-lg border border-white/10 text-sm font-semibold text-gray-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
