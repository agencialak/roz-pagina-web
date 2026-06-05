import { motion, AnimatePresence } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'
import { useEffect, useState } from 'react'

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const clients = [
    {
      id: 1,
      name: 'Anato Eje Cafetero',
      logo: '/clients/Anato Eje Cafetero Blanco.png',
      instagram: 'https://www.instagram.com/anatoejecafetero/',
    },
    {
      id: 2,
      name: 'Bariatric Care',
      logo: '/clients/Bariatric care.PNG',
      instagram: 'https://www.instagram.com/bariatriccare/',
    },
    {
      id: 3,
      name: 'Clínica San Rafael',
      logo: '/clients/Clinica san rafael.png',
      instagram: 'https://www.instagram.com/clinicasanrafael/',
    },
    {
      id: 4,
      name: 'Dr Romero',
      logo: '/clients/Dr romero.png',
      instagram: 'https://www.instagram.com/drromero/',
    },
    {
      id: 5,
      name: 'Dr Steer',
      logo: '/clients/Dr steer.png',
      instagram: 'https://www.instagram.com/drsteer/',
    },
    {
      id: 6,
      name: 'Latam Mobility',
      logo: '/clients/Latam Mobility.png',
      instagram: 'https://www.instagram.com/latammobility/',
    },
    {
      id: 7,
      name: 'Media Maratón Pereira',
      logo: '/clients/Media maraton pereira.png',
      instagram: 'https://www.instagram.com/mediamaratonpereira/',
    },
    {
      id: 8,
      name: 'Odento',
      logo: '/clients/Odento.png',
      instagram: 'https://www.instagram.com/odento/',
    },
    {
      id: 9,
      name: 'Sayonara',
      logo: '/clients/SAYONARA.png',
      instagram: 'https://www.instagram.com/sayonara/',
    },
    {
      id: 10,
      name: 'Troncos',
      logo: '/clients/troncos.png',
      instagram: 'https://www.instagram.com/troncos/',
    },
  ]

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [clients.length])

  // Desktop: 4 logos
  const desktopCount = 4
  // Mobile: 3 logos
  const mobileCount = 3

  const getDesktopLogos = () => {
    return Array.from({ length: desktopCount }).map((_, i) => {
      const index = (currentIndex + i) % clients.length
      return clients[index]
    })
  }

  const getMobileLogos = () => {
    return Array.from({ length: mobileCount }).map((_, i) => {
      const index = (currentIndex + i) % clients.length
      return clients[index]
    })
  }

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
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            Marcas que han confíado en nuestra estrategia digital
          </motion.h2>
        </motion.div>

        {/* Desktop Carousel - 4 logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="hidden md:flex justify-center items-center gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {getDesktopLogos().map((client, idx) => (
              <motion.div
                key={`desktop-${currentIndex}-${idx}`}
                variants={itemVariants}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex items-center justify-center h-24 lg:h-28 flex-1 min-w-0"
              >
                <a
                  href={client.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-full h-full flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} - Cliente de ROZ Social Media`}
                    className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Carousel - 3 logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="md:hidden flex justify-center items-center gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {getMobileLogos().map((client, idx) => (
              <motion.div
                key={`mobile-${currentIndex}-${idx}`}
                variants={itemVariants}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex items-center justify-center h-20 sm:h-24 flex-1 min-w-0"
              >
                <a
                  href={client.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-full h-full flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} - Cliente de ROZ Social Media`}
                    className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients
