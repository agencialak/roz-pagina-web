import { motion } from 'framer-motion'
import { fadeUpVariants, containerVariants, itemVariants } from '../utils/animations'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Smartphone, Zap, TrendingUp, Palette, Lightbulb, Crown, ArrowRight } from 'lucide-react'
import RevealHeading from './RevealHeading'
import TiltCard from './TiltCard'

const services: { icon: typeof Smartphone; title: string; description: string; href?: string }[] = [
  { icon: Smartphone, title: 'Redes Sociales', description: 'Gestión estratégica de presencia en todas las plataformas de Meta.', href: '/servicios/gestion-redes-sociales' },
  { icon: Zap, title: 'Producción de Contenido', description: 'Contenido que genera engagement y convierte audiencia.', href: '/servicios/produccion-audiovisual' },
  { icon: TrendingUp, title: 'Meta Ads', description: 'Campañas publicitarias estratégicas con ROI medible.', href: '/servicios/meta-ads' },
  { icon: Palette, title: 'Branding', description: 'Identidad visual coherente y memorable para tu marca.' },
  { icon: Lightbulb, title: 'Estrategia Creativa', description: 'Conceptos innovadores que diferencian tu marca del mercado.' },
  { icon: Crown, title: 'Posicionamiento', description: 'Autoridad digital y liderazgo en tu nicho de mercado.' },
]

const CardLink = ({ href, children }: { href?: string; children: ReactNode }) =>
  href ? <Link to={href} className="block h-full">{children}</Link> : <>{children}</>

const Services = () => {
  return (
    <section id="servicios" className="relative py-28 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-subtle mb-4">Servicios</p>
          <RevealHeading
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-ink mb-6"
            lines={[<>Nuestros <span className="accent-serif gradient-text-purple text-[1.1em]">servicios</span></>]}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-lg text-ink-muted max-w-2xl mx-auto"
          >
            Soluciones integrales para posicionar, crecer y dominar digitalmente.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={itemVariants} className="h-full">
                <TiltCard className="rounded-2xl">
                  <CardLink href={service.href}>
                  <div className="group h-full rounded-2xl bg-surface-card p-8 border border-ink/[0.06] shadow-[0_1px_2px_rgba(24,20,34,0.04)] hover:border-primary-600/30 hover:shadow-[0_20px_50px_-20px_rgba(109,40,255,0.35)] transition-[border-color,box-shadow] duration-300">
                    <div className="flex items-start justify-between mb-10">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-600/10 flex items-center justify-center text-primary-700 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-primary-800 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium tabular-nums text-ink-subtle">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink mb-3">
                      {service.title}
                    </h3>
                    <p className="text-ink-muted leading-relaxed">
                      {service.description}
                    </p>
                    {service.href && (
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-primary-700 transition-colors">
                        Ver servicio <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    )}
                  </div>
                  </CardLink>
                </TiltCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
