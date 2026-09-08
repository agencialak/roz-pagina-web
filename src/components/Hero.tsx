import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUpVariants, containerVariants, itemVariants } from '../utils/animations'
import { ArrowRight } from 'lucide-react'
import ScrollRevealText from './ScrollRevealText'
import { useCountUp } from '../hooks/useCountUp'

const StatCard = ({ number, label }: { number: string; label: string }) => {
  const { ref, display } = useCountUp(number)
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass px-3 sm:px-6 py-3 sm:py-4 rounded-lg"
    >
      <span ref={ref} className="block text-lg sm:text-3xl font-bold gradient-text-purple">
        {display}
      </span>
      <div className="text-xs text-ink-muted mt-1 sm:mt-2">
        {label}
      </div>
    </motion.div>
  )
}

const Hero = () => {

  return (
    <section className="relative w-full overflow-hidden pt-20 sm:pt-24 pb-2 sm:pb-4 px-3 sm:px-0">
      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-5xl mx-auto w-full text-center"
      >
        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-4"
        >
          <div className="glass px-4 py-2 rounded-full border border-primary-600/30">
            <span className="text-sm font-medium text-primary-700">
              Bienvenido a ROZ Social Media
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-2xl sm:text-4xl lg:text-6xl font-black mb-3 sm:mb-4 tracking-tight"
        >
          <span className="block text-ink">
            CONSTRUIMOS MARCAS
          </span>
          <motion.span
            className="block gradient-text-purple"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            QUE VENDEN
          </motion.span>
        </motion.h1>

        {/* Description */}
        <ScrollRevealText
          text="Estrategia digital que convierte atención en crecimiento real. Posicionamiento, autoridad y resultados medibles para tu marca."
          className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
        />

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full px-2 sm:px-0"
        >
          <motion.a
            href="https://wa.me/573218515587"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(109, 40, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-bold text-sm sm:text-base rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow group min-h-[48px]"
          >
            AGENDA UNA REUNIÓN
            <motion.span
              className="inline-block hidden sm:inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </motion.a>

          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 glass rounded-lg text-ink font-bold text-sm sm:text-base hover:bg-white/90 transition-all border border-primary-600/30 hover:border-primary-600/60 min-h-[48px] flex items-center justify-center"
          >
            VER PROYECTOS
          </motion.a>

          <Link to="/blog" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 bg-primary-600/10 rounded-lg text-primary-700 font-bold text-sm sm:text-base hover:bg-primary-600/20 transition-all border border-primary-500/40 hover:border-primary-400/60 min-h-[48px] flex items-center justify-center"
            >
              BLOG
            </motion.div>
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-8 max-w-2xl mx-auto px-2"
        >
          {[
            { number: '120M+', label: 'Visualizaciones' },
            { number: '300+', label: 'Proyectos' },
            { number: '9 cifras', label: 'Generadas' },
          ].map((stat, idx) => (
            <StatCard key={idx} number={stat.number} label={stat.label} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
