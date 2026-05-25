import { motion } from 'framer-motion'
import { fadeUpVariants, containerVariants, itemVariants, hoverScaleVariants } from '../utils/animations'
import { Smartphone, Zap, TrendingUp, Palette, Lightbulb, Crown } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Redes Sociales',
      description: 'Gestión estratégica de presencia en todas las plataformas de Meta.',
    },
    {
      icon: Zap,
      title: 'Producción de Contenido',
      description: 'Contenido que genera engagement y convierte audiencia.',
    },
    {
      icon: TrendingUp,
      title: 'Meta Ads',
      description: 'Campañas publicitarias estratégicas con ROI medible.',
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Identidad visual coherente y memorable para tu marca.',
    },
    {
      icon: Lightbulb,
      title: 'Estrategia Creativa',
      description: 'Conceptos innovadores que diferencian tu marca del mercado.',
    },
    {
      icon: Crown,
      title: 'Posicionamiento',
      description: 'Autoridad digital y liderazgo en tu nicho de mercado.',
    },
  ]

  return (
    <section id="servicios" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            <span className="text-white">NUESTROS</span>
            <span className="block gradient-text-purple">SERVICIOS</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Soluciones integrales para posicionar, crecer y dominar digitalmente.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  variants={{
                    initial: { boxShadow: '0 0 20px rgba(109, 40, 255, 0.2)' },
                    hover: { boxShadow: '0 0 40px rgba(109, 40, 255, 0.4)' },
                  }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-8 border border-primary-600/30 group-hover:border-primary-600/60 transition-colors h-full"
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Arrow */}
                  <motion.a
                    href="#contacto"
                    className="mt-6 inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Conocer más →
                  </motion.a>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
