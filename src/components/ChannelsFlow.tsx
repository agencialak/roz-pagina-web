import { useId } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, MessageCircle, Infinity as InfinityIcon, DollarSign } from 'lucide-react'

const channels = [
  { Icon: Facebook, label: 'Facebook', bg: 'bg-[#1877F2]', x: 8 },
  {
    Icon: Instagram,
    label: 'Instagram',
    bg: 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
    x: 36,
  },
  { Icon: MessageCircle, label: 'WhatsApp', bg: 'bg-[#25D366]', x: 64 },
  { Icon: InfinityIcon, label: 'Meta Ads', bg: 'bg-[#0668E1]', x: 92 },
]

const ChannelsFlow = () => {
  const uid = useId()

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3"
        >
          <span className="text-ink">Gestionamos tus canales. </span>
          <span className="gradient-text-purple">Los convertimos en resultados.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-ink-muted mb-14 max-w-xl mx-auto"
        >
          Facebook, Instagram, WhatsApp y Meta Ads trabajando juntos para que cada
          interacción termine convirtiéndose en una venta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-52 sm:h-60 max-w-xl mx-auto"
        >
          {/* Líneas conectoras + puntos que fluyen hacia el dinero */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {channels.map((c, i) => {
              const pathId = `${uid}-path-${i}`
              return (
                <g key={c.label}>
                  <path
                    id={pathId}
                    d={`M ${c.x} 16 L 50 86`}
                    fill="none"
                    stroke="rgba(109,40,255,0.22)"
                    strokeWidth="0.6"
                    strokeDasharray="2.2 2.2"
                  />
                  <circle r="1.3" fill="#22c55e">
                    <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.5}s`}>
                      <mpath xlinkHref={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              )
            })}
          </svg>

          {/* Logos de los canales */}
          {channels.map((c) => {
            const Icon = c.Icon
            return (
              <div
                key={c.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                style={{ left: `${c.x}%`, top: '16%' }}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-md ${c.bg}`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-ink-muted whitespace-nowrap">
                  {c.label}
                </span>
              </div>
            )
          })}

          {/* Nodo de dinero / resultados */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
            style={{ left: '50%', top: '86%' }}
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-xl"
            >
              <DollarSign size={28} className="text-white" />
            </motion.div>
            <span className="text-xs sm:text-sm font-semibold text-ink">Resultados</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChannelsFlow
