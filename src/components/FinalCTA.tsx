import { motion } from 'framer-motion'
import RevealHeading from './RevealHeading'
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
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-600 to-primary-900 rounded-full blur-3xl opacity-[0.12]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-700 to-primary-950 rounded-full blur-3xl opacity-[0.12]"
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
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-subtle">
              Próximo paso
            </p>
          </motion.div>

          {/* Main Title */}
          <RevealHeading
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-ink mb-8"
            lines={['¿Listo para', <span className="accent-serif gradient-text-purple text-[1.1em]">escalar tu marca?</span>]}
          />

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg sm:text-xl text-ink-muted mb-12 max-w-2xl mx-auto leading-relaxed"
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
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group pl-8 pr-2 py-2 bg-ink text-white font-medium text-lg rounded-full flex items-center gap-5 shadow-[0_12px_36px_-12px_rgba(109,40,255,0.65)] hover:shadow-[0_16px_46px_-12px_rgba(109,40,255,0.8)] transition-shadow min-h-[60px]"
            >
              Trabajemos juntos
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={20} />
              </span>
            </motion.a>

          </motion.div>

          {/* Trust Elements */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-16 pt-16 border-t border-ink/10"
          >
            <p className="text-ink-muted mb-6">
              Confían en ROZ
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['Startup', 'E-Commerce', 'Brand', 'Sector Salud', 'Restaurantes'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="glass px-4 py-2 rounded-lg border border-ink/10 text-sm font-semibold text-ink-muted"
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
