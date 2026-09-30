import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown, ArrowUpRight } from 'lucide-react'
import ScrollRevealText from './ScrollRevealText'
import RevealHeading from './RevealHeading'
import { useCountUp } from '../hooks/useCountUp'

const StatCard = ({ number, label, countUp = true }: { number: string; label: string; countUp?: boolean }) => {
  const { ref, display } = useCountUp(number)
  return (
    <div className="px-3 sm:px-6 py-3 sm:py-4 text-center">
      <span ref={ref} className="block text-xl sm:text-4xl font-semibold tracking-tight text-ink tabular-nums">
        {countUp ? display : number}
      </span>
      <div className="text-[9.5px] sm:text-xs uppercase tracking-[0.04em] sm:tracking-[0.14em] text-ink-subtle mt-1 sm:mt-2">
        {label}
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden pt-24 sm:pt-32 pb-4 sm:pb-8 px-3 sm:px-0">
      {/* Fondo: resplandor morado + retícula fina que se desvanece */}
      <div aria-hidden className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 -top-40 w-[900px] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,255,0.18),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(24,20,34,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,20,34,0.06) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 60% 55% at 50% 35%, #000 20%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 55% at 50% 35%, #000 20%, transparent 75%)',
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-5xl mx-auto w-full text-center"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-ink/10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary-600 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-ink-muted">
              Bienvenido a ROZ Social Media
            </span>
          </div>
        </motion.div>

        <RevealHeading
          as="h1"
          immediate
          delay={0.15}
          className="text-[2.1rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-ink mb-5 sm:mb-6"
          lines={[
            'Construimos marcas',
            <span className="accent-serif gradient-text-purple text-[1.12em]">que venden.</span>,
          ]}
        />

        <ScrollRevealText
          text="Estrategia digital que convierte atención en crecimiento real. Posicionamiento, autoridad y resultados medibles para tu marca."
          className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
        />

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center w-full px-2 sm:px-0"
        >
          <motion.a
            href="https://wa.me/573218515587"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group w-full sm:w-auto pl-7 pr-2 py-2 bg-ink text-white font-medium text-sm sm:text-base rounded-full flex items-center justify-between sm:justify-center gap-4 shadow-[0_10px_30px_-10px_rgba(109,40,255,0.6)] hover:shadow-[0_14px_40px_-10px_rgba(109,40,255,0.75)] transition-shadow min-h-[52px]"
          >
            Agenda una reunión
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={18} />
            </span>
          </motion.a>

          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-ink hover:text-primary-700 transition-colors"
          >
            <span className="relative">
              Ver proyectos
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300" />
            </span>
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>

          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-ink hover:text-primary-700 transition-colors"
          >
            <span className="relative">
              Leer el blog
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300" />
            </span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 sm:mt-14 grid grid-cols-3 max-w-2xl mx-auto divide-x divide-ink/10 border-y border-ink/10"
        >
          <StatCard number="120M+" label="Visualizaciones" />
          <StatCard number="300+" label="Proyectos" />
          <StatCard number="9 cifras" label="Generadas" countUp={false} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
