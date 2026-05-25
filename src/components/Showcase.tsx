import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'
import { ImageIcon } from 'lucide-react'

const Showcase = () => {
  const projects = [
    {
      id: 1,
      title: 'Velandia capital',
      category: 'Finanzas',
      views: '',
      video: '/project-1.mp4',
    },
    {
      id: 2,
      title: 'Curso Smile Pro Final',
      category: 'Educación',
      views: '',
      video: '/Curso-Smile-Pro-Final_1.mp4',
    },
    {
      id: 3,
      title: 'Fuego Burger',
      category: 'F&B Marketing',
      views: '',
      video: '/fuego burguer.mp4',
    },
    {
      id: 4,
      title: 'Testimonio',
      category: 'sector salud',
      views: '',
      video: '/el cielo testimonio.mp4',
    },
    {
      id: 5,
      title: 'casos reales',
      category: 'distribuidor',
      views: '',
      video: '/testimonio odento.mp4',
    },
    {
      id: 6,
      title: 'startup',
      category: 'personalizables',
      views: '',
      video: '/¡Colombia está en la final.mp4',
    },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-600/20 rounded-full"
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
            <span className="text-white">GALERÍA DE</span>
            <span className="block gradient-text-purple">PROYECTOS</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Casos de éxito que demuestran nuestra capacidad de transformar marcas.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{
                  boxShadow: '0 0 60px rgba(109, 40, 255, 0.5)',
                }}
                className="relative overflow-hidden rounded-2xl border border-primary-600/30 aspect-square"
              >
                {/* Video or Image */}
                {project.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-primary-600/20 to-primary-900/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageIcon className="w-16 h-16 text-primary-600/30" />
                  </motion.div>
                )}

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-300 mb-3">
                    {project.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold gradient-text-purple">
                      {project.views}
                    </span>
                  </div>
                </motion.div>

                {/* Shine Effect */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Showcase
