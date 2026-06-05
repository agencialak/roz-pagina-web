import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: 'Anato Eje Cafetero',
      logo: '/clients/Anato Eje Cafetero Blanco.png',
    },
    {
      id: 2,
      name: 'Bariatric Care',
      logo: '/clients/Bariatric care.PNG',
    },
    {
      id: 3,
      name: 'Clínica San Rafael',
      logo: '/clients/Clinica san rafael.png',
    },
    {
      id: 4,
      name: 'Dr Romero',
      logo: '/clients/Dr romero.png',
    },
    {
      id: 5,
      name: 'Dr Steer',
      logo: '/clients/Dr steer.png',
    },
    {
      id: 6,
      name: 'Latam Mobility',
      logo: '/clients/Latam Mobility.png',
    },
    {
      id: 7,
      name: 'Media Maratón Pereira',
      logo: '/clients/Media maraton pereira.png',
    },
    {
      id: 8,
      name: 'Odento',
      logo: '/clients/Odento.png',
    },
    {
      id: 9,
      name: 'Sayonara',
      logo: '/clients/SAYONARA.png',
    },
    {
      id: 10,
      name: 'Troncos',
      logo: '/clients/troncos.png',
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10"
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
                className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
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
