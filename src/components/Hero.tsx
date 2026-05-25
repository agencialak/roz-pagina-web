import { motion } from 'framer-motion'
import { fadeUpVariants, containerVariants, itemVariants } from '../utils/animations'
import { ArrowRight } from 'lucide-react'

const Hero = () => {

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary-600 to-primary-900 rounded-full blur-3xl opacity-10"
      />
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-700 to-primary-950 rounded-full blur-3xl opacity-10"
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6"
        >
          <div className="glass px-4 py-2 rounded-full border border-primary-600/30">
            <span className="text-sm font-medium text-primary-300">
              Bienvenido a ROZ Social Media
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="block text-white">
            CONSTRUIMOS
          </span>
          <motion.span
            className="block gradient-text-purple"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            MARCAS
          </motion.span>
          <span className="block text-white">
            QUE VENDEN
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUpVariants}
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Estrategia digital que convierte atención en crecimiento real. Posicionamiento, autoridad y resultados medibles para tu marca.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://wa.me/573218515587"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(109, 40, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-bold rounded-lg flex items-center gap-2 hover:shadow-lg transition-shadow group"
          >
            AGENDA UNA REUNIÓN
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-lg text-white font-bold hover:bg-white/10 transition-all border border-primary-600/30 hover:border-primary-600/60"
          >
            VER PROYECTOS
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '120M+', label: 'Visualizaciones' },
            { number: '300+', label: 'Proyectos' },
            { number: '7 cifras', label: 'Generadas' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass px-6 py-4 rounded-lg border border-white/10"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text-purple">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-primary-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
