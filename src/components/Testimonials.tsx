import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Brian Lopez',
      role: '@troncos05',
      content: 'Gracias por el acompañamiento y crecimiento que hemos tenido juntos 👏🔥👏 Cracks',
      rating: 5,
    },
    {
      id: 2,
      name: 'Paula Posada',
      role: '@odentoco',
      content: '¡Ellos son mi agencia favorita! Estuve mucho tiempo buscándolos, pero ahora que los encontré, no los suelto. Los recomiendo al 100%. ¡Gracias por tanto, team!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Camilo Arango',
      role: '@dr.camiloarango',
      content: 'Excelente equipo, producciones impecables con ellos 🎬😍😍',
      rating: 5,
    },
    {
      id: 4,
      name: 'Sara Alzate',
      role: '@anamorapereira',
      content: 'Triplicando en ventas gracias al acompañamiento de todo el equipo 👌🏼🔥',
      rating: 5,
    },
    {
      id: 5,
      name: 'Katherine Muñoz',
      role: '@opticalet18perreira',
      content: 'Son los mejores 😍💛😍 súper recomendados 😍😍😍 Muchas gracias 💙❤️',
      rating: 5,
    },
  ]

  return (
    <section id="testimonios" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-96 h-96 border border-primary-600/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            <span className="text-white">LO QUE DICEN</span>
            <span className="block gradient-text-purple">NUESTROS CLIENTES</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Marcas que escalaron con ROZ comparten su experiencia.
          </motion.p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                whileHover={{
                  boxShadow: '0 0 60px rgba(109, 40, 255, 0.3)',
                }}
                className="glass rounded-2xl p-8 border border-primary-600/30 h-full flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-primary-400 text-primary-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-bold">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-sm"
          >
            <motion.div
              whileHover={{
                boxShadow: '0 0 60px rgba(109, 40, 255, 0.3)',
              }}
              className="glass rounded-2xl p-8 border border-primary-600/30 flex flex-col justify-between min-h-96"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary-400 text-primary-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-bold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-3 glass rounded-lg border border-primary-600/30 hover:border-primary-600/60 transition-all"
            >
              <ChevronLeft size={24} className="text-primary-400" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="p-3 glass rounded-lg border border-primary-600/30 hover:border-primary-600/60 transition-all"
            >
              <ChevronRight size={24} className="text-primary-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
