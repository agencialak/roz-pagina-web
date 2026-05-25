import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'
import { useEffect, useState } from 'react'

const Results = () => {
  const [counts, setCounts] = useState({
    views: 0,
    projects: 0,
    revenue: 0,
  })

  useEffect(() => {
    const targets = {
      views: 80,
      projects: 100,
      revenue: 7,
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        views: Math.floor(targets.views * progress),
        projects: Math.floor(targets.projects * progress),
        revenue: Math.floor(targets.revenue * progress),
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounts(targets)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      number: `$${counts.views}M+ COP`,
      label: 'Invertidos en Meta Ads',
      description: 'Presupuesto total manejado',
    },
    {
      number: `${counts.projects}+`,
      label: 'Marcas Trabajadas',
      description: 'Empresas escaladas con ROZ',
    },
    {
      number: '+8',
      label: 'Países',
      description: 'Presencia global de alcance',
    },
  ]

  return (
    <section id="resultados" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-600/10 to-primary-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            <span className="text-white">RESULTADOS QUE</span>
            <span className="block gradient-text-purple">HABLAN POR SÍ SOLOS</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Números reales de proyectos reales. Cada métrica representa marcas que escalaron con ROZ.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <motion.div
                whileHover={{
                  boxShadow: '0 0 60px rgba(109, 40, 255, 0.5)',
                  borderColor: 'rgba(109, 40, 255, 0.6)',
                }}
                className="glass rounded-3xl p-12 border border-primary-600/30 transition-all h-full text-center"
              >
                {/* Number */}
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                >
                  <div className="text-6xl sm:text-7xl font-black gradient-text-purple">
                    {stat.number}
                  </div>
                </motion.div>

                {/* Label */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400">
                  {stat.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="mt-8 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {[
            { value: '4 meses', label: 'Life time value promedio' },
            { value: 'Mes 1', label: 'Resultados desde el primer mes' },
            { value: '7/7', label: 'Soporte todos los días' },
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass rounded-xl p-4 text-center border border-white/10 hover:border-primary-600/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-2">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Results
