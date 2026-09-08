import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Eye, MousePointerClick, ShoppingBag } from 'lucide-react'

const assumptionSteps = [
  { icon: Eye, label: 'Ven el anuncio' },
  { icon: MousePointerClick, label: 'Hacen clic' },
  { icon: ShoppingBag, label: 'Compran' },
]

const realitySteps = [
  'Ven el anuncio',
  'Se distraen y siguen scrolleando',
  'Se olvidan de la marca',
  'La vuelven a ver días después',
  'Ahí sí, escriben y compran',
]

/**
 * Lista de pasos con una línea punteada y un punto que recorre el camino
 * de forma autónoma (en bucle), resaltando cada parada al llegar a ella.
 * Se pausa cuando la sección no está a la vista.
 */
const RealityPath = ({ steps }: { steps: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const [positions, setPositions] = useState<number[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [dotVisible, setDotVisible] = useState(true)
  const isInView = useInView(containerRef, { margin: '-80px' })

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current
      if (!container) return
      const containerTop = container.getBoundingClientRect().top
      const centers = stepRefs.current.map((el) => {
        if (!el) return 0
        const rect = el.getBoundingClientRect()
        return rect.top - containerTop + rect.height / 2
      })
      setPositions(centers)
    }

    measure()
    // Vuelve a medir en el siguiente frame y ante cualquier cambio de tamaño
    // (fuentes que cargan tarde, texto que se reacomoda, etc.)
    const raf = requestAnimationFrame(measure)
    const container = containerRef.current
    const resizeObserver = container ? new ResizeObserver(measure) : null
    if (container && resizeObserver) resizeObserver.observe(container)
    window.addEventListener('resize', measure)

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver?.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [steps.length])

  const hasPositions = positions.length > 1

  // Recorre los pasos 1→N en bucle continuo, sin depender del scroll.
  // Se pausa mientras la sección no está a la vista.
  useEffect(() => {
    if (!hasPositions || !isInView) return

    const STEP_DELAY = 1100 // tiempo que se queda en cada parada
    const END_PAUSE = 600 // pausa extra al llegar al final
    const FADE = 350 // duración del fundido al reiniciar

    let idx = 0
    let cancelled = false
    let timeoutId: ReturnType<typeof setTimeout>

    setActiveIndex(0)
    setDotVisible(true)

    const goToNext = () => {
      if (cancelled) return
      idx += 1

      if (idx >= steps.length) {
        timeoutId = setTimeout(() => {
          if (cancelled) return
          setDotVisible(false)
          timeoutId = setTimeout(() => {
            if (cancelled) return
            idx = 0
            setActiveIndex(0)
            setDotVisible(true)
            timeoutId = setTimeout(goToNext, STEP_DELAY)
          }, FADE)
        }, END_PAUSE)
        return
      }

      setActiveIndex(idx)
      timeoutId = setTimeout(goToNext, STEP_DELAY)
    }

    timeoutId = setTimeout(goToNext, STEP_DELAY)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [hasPositions, isInView, steps.length])

  return (
    <div ref={containerRef} className="relative max-w-md mx-auto">
      {/* Connecting line */}
      <div
        className="absolute left-4 top-4 bottom-4 w-px border-l-2 border-dashed border-primary-300"
        aria-hidden="true"
      />

      {/* Moving dot: la posición/opacidad se mueven con CSS normal (evita mezclar
          un valor único con una animación de keyframes en bucle en el mismo
          `animate` de Framer Motion); el brillo pulsante va en una capa interna aparte */}
      {hasPositions && (
        <div
          className="absolute left-4 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 z-20 pointer-events-none transition-[top,opacity] duration-500 ease-in-out"
          style={{ top: `${positions[activeIndex] ?? positions[0]}px`, opacity: dotVisible ? 1 : 0 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0px rgba(109,40,255,0.6)',
                '0 0 14px rgba(109,40,255,0.7)',
                '0 0 0px rgba(109,40,255,0.6)',
              ],
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full rounded-full bg-primary-600"
          />
        </div>
      )}

      <div className="space-y-6 sm:space-y-8">
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1
          const isActive = idx <= activeIndex
          const isCurrent = idx === activeIndex
          return (
            <div
              key={step}
              ref={(el) => {
                stepRefs.current[idx] = el
              }}
              className="relative flex items-center gap-4 pl-1"
            >
              <motion.div
                animate={{ scale: isCurrent ? 1.15 : 1 }}
                transition={{ duration: 0.3 }}
                className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                  isActive
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface-card border border-primary-300 text-primary-600'
                }`}
              >
                {isLast ? (isActive ? '✓' : steps.length) : idx + 1}
              </motion.div>
              <span
                className={`text-base sm:text-lg transition-colors duration-300 ${
                  isActive ? 'font-semibold text-ink' : 'text-ink-muted'
                }`}
              >
                {step}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const CustomerJourney = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Assumption (small, muted) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-ink-muted text-center mb-5">
            Lo que muchas marcas{' '}
            <span className="text-red-500 underline decoration-2 underline-offset-4">
              creen
            </span>{' '}
            que pasa
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {assumptionSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div key={step.label} className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-surface-muted border border-ink/10">
                    <Icon size={16} className="text-ink-subtle" />
                    <span className="text-xs sm:text-sm text-ink-muted whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>
                  {idx < assumptionSteps.length - 1 && (
                    <span className="text-ink-subtle text-sm">→</span>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Reality (main, prominent) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-center mb-10"
          >
            <span className="text-ink">Lo que </span>
            <span className="gradient-text-purple">en realidad</span>
            <span className="text-ink"> pasa</span>
          </motion.h2>

          <RealityPath steps={realitySteps} />
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center max-w-xl mx-auto"
        >
          <p className="text-xl sm:text-2xl font-bold mb-4">
            <span className="text-ink">Comprar no es un momento. </span>
            <span className="gradient-text-purple">Es un proceso.</span>
          </p>
          <div className="glass rounded-xl border border-primary-600/20 p-5 sm:p-6">
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Por eso diseñamos estrategias que acompañan todo ese camino — no solo el primer
              clic. <span className="font-semibold text-ink">¿La tuya lo hace, o solo espera que compren a la primera?</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomerJourney
