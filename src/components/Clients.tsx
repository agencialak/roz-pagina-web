import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: 'Brand 1',
      logo: '/clients/brand-1.png',
    },
    {
      id: 2,
      name: 'Brand 2',
      logo: '/clients/brand-2.png',
    },
    {
      id: 3,
      name: 'Brand 3',
      logo: '/clients/brand-3.png',
    },
    {
      id: 4,
      name: 'Brand 4',
      logo: '/clients/brand-4.png',
    },
  ]

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
          >
            Hemos trabajado con las mejores marcas
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base"
          >
            Marcas que confían en nuestra estrategia digital
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              className="flex items-center justify-center h-20 sm:h-24"
            >
              <img
                src={client.logo}
                alt={`${client.name} - Cliente de ROZ Social Media`}
                className="max-h-full max-w-xs object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Clients
