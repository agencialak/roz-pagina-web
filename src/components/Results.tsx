import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'
import RevealHeading from './RevealHeading'
import { useCountUp } from '../hooks/useCountUp'

const BigStat = ({ number, label, description }: { number: string; label: string; description: string }) => {
  const { ref, display } = useCountUp(number)
  return (
    <motion.div variants={itemVariants} className="px-2 sm:px-8 py-8 md:py-2 text-center md:text-left">
      <span ref={ref} className="block text-6xl sm:text-7xl font-semibold tracking-[-0.04em] gradient-text-light tabular-nums">
        {display}
      </span>
      <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white">{label}</h3>
      <p className="mt-1 text-white/55">{description}</p>
    </motion.div>
  )
}

const Results = () => {
  return (
    <section id="resultados" className="relative py-6 sm:py-10 px-3 sm:px-6">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-ink px-6 sm:px-12 lg:px-16 py-20 sm:py-28">
        {/* Resplandores internos */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,255,0.35),transparent)]" />
          <div className="absolute -bottom-40 -left-24 w-[460px] h-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(109,40,255,0.25),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000, transparent 80%)',
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-white/45 mb-4">Resultados</p>
            <RevealHeading
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-white mb-6"
              lines={['Resultados que', <span className="accent-serif gradient-text-light text-[1.1em]">hablan por sí solos</span>]}
            />
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Números reales de proyectos reales. Cada métrica representa marcas que escalaron con ROZ.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-16 sm:mb-20"
          >
            <BigStat number="$100M+" label="COP invertidos en Meta Ads" description="Presupuesto total manejado" />
            <BigStat number="100+" label="Marcas trabajadas" description="Empresas escaladas con ROZ" />
            <BigStat number="+8" label="Países" description="Presencia global de alcance" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {[
              { value: '4 meses', label: 'Life time value promedio' },
              { value: 'Mes 1', label: 'Resultados desde el primer mes' },
              { value: '7/7', label: 'Soporte todos los días' },
            ].map((metric) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                className="rounded-2xl p-5 text-center bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-1">{metric.value}</div>
                <div className="text-xs sm:text-sm text-white/55">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Results
