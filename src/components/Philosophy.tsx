import { motion } from 'framer-motion'
import { slideInLeftVariants, slideInRightVariants, containerVariants, itemVariants } from '../utils/animations'
import RevealHeading from './RevealHeading'

const Philosophy = () => {
  const pillars = [
    {
      title: 'Estrategia',
      description: 'Cada decisión está fundamentada en data y análisis profundo del mercado.'
    },
    {
      title: 'Posicionamiento',
      description: 'Construimos autoridad digital que diferencia tu marca en el mercado.'
    },
    {
      title: 'Crecimiento',
      description: 'Resultados medibles: más seguidores, más ventas, más impacto.'
    },
    {
      title: 'Escalabilidad',
      description: 'Sistemas que funcionan hoy y mañana, a cualquier escala.'
    },
    {
      title: 'Acompañamiento',
      description: 'Somos consejeros constantes de tu marca. Te asesoramos en cada decisión para que inviertas estratégicamente, no solo gastes presupuesto.'
    },
  ]

  return (
    <section id="filosofia" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-600/10 to-primary-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInLeftVariants}
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-subtle mb-4">Estrategia</p>
            <RevealHeading
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-ink mb-6"
              lines={[<>¿Qué es <span className="accent-serif gradient-text-purple text-[1.15em]">ROZ?</span></>]}
            />
            <p className="text-lg text-ink-muted leading-relaxed mb-6">
              Somos una agencia enfocada en construir marcas que dominan. No hacemos campañas genéricas ni tácticas de corto plazo.
            </p>
            <p className="text-lg text-ink-muted leading-relaxed mb-8">
              Trabajamos en estrategia profunda, posicionamiento sostenible y crecimiento escalable. Cada proyecto es una oportunidad para transformar una marca en lider de su industria.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-4 border border-primary-600/30"
              >
                <div className="text-3xl font-bold gradient-text-purple">+5</div>
                <div className="text-sm text-ink-muted mt-1">Años de experiencia</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-4 border border-primary-600/30"
              >
                <div className="text-3xl font-bold gradient-text-purple">+100</div>
                <div className="text-sm text-ink-muted mt-1">Marcas escaladas</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Visualization */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInRightVariants}
            className="relative h-96 flex items-center justify-center"
          >
            <motion.div className="relative w-full h-full">
              {/* Floating Cards */}
              {[
                { x: 0, y: 0, label: 'Estrategia' },
                { x: 150, y: 50, label: 'Datos' },
                { x: 100, y: 200, label: 'Crecimiento' },
                { x: 200, y: 150, label: 'Autoridad' },
                { x: 50, y: 250, label: 'Conversión' },
                { x: 150, y: 300, label: 'Contenido' },
                { x: 20, y: 120, label: 'Resultados' },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    y: [card.y, card.y - 20, card.y],
                    x: [card.x, card.x + 10, card.x],
                  }}
                  transition={{
                    duration: 6 + idx * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute glass rounded-lg p-4 border border-primary-600/30"
                >
                  <div className="text-sm font-semibold text-primary-700">
                    {card.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Pillars Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <RevealHeading
            as="h3"
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-ink mb-12 text-center"
            lines={[<>Pilares de <span className="accent-serif gradient-text-purple text-[1.1em]">nuestra filosofía</span></>]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="rounded-2xl p-8 bg-surface-card border border-ink/[0.06] hover:border-primary-600/30 hover:shadow-[0_20px_50px_-24px_rgba(109,40,255,0.35)] transition-[border-color,box-shadow] duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <span className="accent-serif text-4xl leading-none text-primary-600/80 tabular-nums pt-1 flex-shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold tracking-tight text-ink mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-ink-muted">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy
