import { motion, AnimatePresence } from 'framer-motion'
import RevealHeading from './RevealHeading'
import TiltCard from './TiltCard'
import { fadeUpVariants, containerVariants, itemVariants } from '../utils/animations'
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react'
import { useState } from 'react'

// Enlazar el nombre al perfil de LinkedIn le confirma a Google que es la misma persona
const MemberName = ({ name, linkedin }: { name: string; linkedin: string }) =>
  linkedin ? (
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer me"
      className="group/ln inline-flex items-center gap-2 hover:text-primary-700 transition-colors"
      title={`${name} en LinkedIn`}
    >
      {name}
      <Linkedin size={18} className="text-[#0A66C2] opacity-80 group-hover/ln:opacity-100 transition-opacity" />
    </a>
  ) : (
    <>{name}</>
  )

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const teamMembers = [
    {
      id: 1,
      name: 'Santiago Rosales C.',
      role: 'CEO - Estrategia y Productor',
      image: '/team/rosa.png',
      bio: 'Fundador y líder estratégico de ROZ Social Media',
      social: {
        email: 'santiago@rozsocial.com',
        linkedin: '',
      },
    },
    {
      id: 2,
      name: 'Laura Rosales C.',
      role: 'Administradora & Directora de Producción Audiovisual',
      image: '/team/Laura rosales c.png',
      bio: 'Experta en gestión operativa y creación de contenido visual de alto impacto',
      social: {
        email: 'laura@rozsocial.com',
        linkedin: '',
      },
    },
    {
      id: 3,
      name: 'Nikolas Garcia',
      role: 'Co-Fundador & Estratega Digital de Campañas Publicitarias',
      image: '/team/NIko.png',
      bio: 'Especialista en estrategia digital y ejecución de campañas publicitarias de alto rendimiento',
      social: {
        email: 'nikolas@rozsocial.com',
        linkedin: 'https://www.linkedin.com/in/nikolasgarciaroz/',
      },
    },
    {
      id: 4,
      name: 'Kevin Ríos',
      role: 'Camarógrafo / Filmmaker',
      image: '/team/Kevin.png',
      bio: 'Especialista en captura de contenido audiovisual de alta calidad con visión cinematográfica',
      social: {
        email: 'kevin@rozsocial.com',
        linkedin: '',
      },
    },
    {
      id: 5,
      name: 'Paulina Villegas',
      role: 'Especialista en Edición de Video',
      image: '/team/Paulina.png',
      bio: 'Experta en postproducción y edición de video con narrativa visual impactante',
      social: {
        email: 'paulina@rozsocial.com',
        linkedin: '',
      },
    },
    {
      id: 6,
      name: 'Erika Valencia',
      role: 'Diseñadora Gráfica - Especialista en Redes Sociales',
      image: '/team/Erika.png',
      bio: 'Creadora de diseños visuales estratégicos que conectan con audiencias en redes sociales',
      social: {
        email: 'erika@rozsocial.com',
        linkedin: '',
      },
    },
    {
      id: 7,
      name: 'Juan Herrera',
      role: 'Asistente de Producción',
      image: '/team/Herrera.png',
      bio: 'Profesional en logística y coordinación de procesos de producción audiovisual',
      social: {
        email: 'juan@rozsocial.com',
        linkedin: '',
      },
    },
    {
      id: 8,
      name: 'Camila Echeverri',
      role: 'Directora Creativa & Gestora de Negocio',
      image: '/team/Camila.png',
      bio: 'Líder creativa que impulsa la estrategia comercial y establece relaciones clave',
      social: {
        email: 'camila@rozsocial.com',
        linkedin: '',
      },
    },
    {
      id: 9,
      name: 'Lina Gómez',
      role: 'Socia Co-Fundadora - Operaciones USA',
      image: '/team/Lina.png',
      bio: 'Líder estratégica en expansión internacional y operaciones de la agencia en Estados Unidos',
      social: {
        email: 'lina@rozsocial.com',
        linkedin: '',
      },
    },
    {
      id: 10,
      name: 'Valentina Correa',
      role: 'Asistente Administrativo',
      image: '/team/Valen.png',
      bio: 'Coordinadora de procesos administrativos que garantiza eficiencia operativa',
      social: {
        email: 'valentina@rozsocial.com',
        linkedin: '',
      },
    },
  ]

  return (
    <section id="equipo" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-600/10 to-primary-900/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary-700/10 to-primary-950/10 rounded-full blur-3xl"
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
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-subtle mb-4">Equipo</p>
          <RevealHeading
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-ink mb-6"
            lines={[
              'Nuestro equipo,',
              <span className="accent-serif gradient-text-purple text-[1.1em]">expertos en estrategia digital</span>,
            ]}
          />
          <motion.p
            variants={fadeUpVariants}
            className="text-lg text-ink-muted max-w-2xl mx-auto"
          >
            Estrategas, creativos y especialistas dedicados a escalar tu marca. Cada miembro aporta expertise de nivel internacional.
          </motion.p>
        </motion.div>

        {/* Team Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="w-full"
        >
          {/* Team Carousel */}
          <div className="w-full flex flex-col items-center gap-8">
            {/* Desktop Carousel - 3 members with 1-by-1 navigation */}
            <div className="hidden md:w-full md:flex md:flex-col md:items-center md:gap-8">
              <div className="w-full max-w-7xl">
                <motion.div
                  layout
                  className="grid grid-cols-3 gap-6"
                  transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <AnimatePresence mode="popLayout">
                    {[0, 1, 2].map((offset) => {
                      const memberIndex = (currentIndex + offset) % teamMembers.length
                      const member = teamMembers[memberIndex]
                      return (
                        <motion.div
                          key={memberIndex}
                          variants={itemVariants}
                          initial={{ opacity: 0, x: direction === 'right' ? -100 : 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: direction === 'right' ? 100 : -100 }}
                          transition={{
                            duration: 0.4,
                            type: 'spring',
                            stiffness: 300,
                            damping: 30
                          }}
                          className="group"
                        >
                          {/* Card Container - Vertical Layout */}
                          <TiltCard className="rounded-2xl" maxTilt={5}>
                          <div className="flex flex-col items-center gap-4 h-full rounded-2xl bg-surface-card border border-ink/[0.06] p-3 group-hover:border-primary-600/30 group-hover:shadow-[0_24px_60px_-28px_rgba(109,40,255,0.4)] transition-[border-color,box-shadow] duration-300">
                            <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-primary-50 to-surface-muted">
                              <div className="relative w-full h-64 overflow-hidden">
                                <img
                                  src={member.image}
                                  alt={`${member.name} - ${member.role} en ROZ Social Media`}
                                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                                  onError={(e) => {
                                    e.currentTarget.src = ''
                                    e.currentTarget.style.display = 'none'
                                  }}
                                />
                              </div>
                            </div>

                            <div className="w-full px-3 pb-3 flex flex-col justify-center">
                              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-ink mb-1">
                                <MemberName name={member.name} linkedin={member.social.linkedin} />
                              </h3>

                              {/* Role */}
                              <p className="text-primary-600 font-semibold mb-3 text-sm md:text-base">
                                {member.role}
                              </p>

                              <p className="text-ink-muted leading-relaxed text-sm">
                                {member.bio}
                              </p>
                            </div>
                          </div>
                          </TiltCard>
                        </motion.div>
                    )
                  })}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Desktop Navigation */}
              <div className="flex items-center gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setDirection('left')
                    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
                  }}
                  className="p-3 glass rounded-lg border border-primary-600/30 hover:border-primary-600/60 hover:bg-white/90 transition-all"
                >
                  <ChevronLeft size={24} className="text-primary-400" />
                </motion.button>

                <div className="flex gap-2">
                  {teamMembers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 'right' : 'left')
                        setCurrentIndex(idx)
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-primary-600 w-8' : 'bg-ink/20'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setDirection('right')
                    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
                  }}
                  className="p-3 glass rounded-lg border border-primary-600/30 hover:border-primary-600/60 hover:bg-white/90 transition-all"
                >
                  <ChevronRight size={24} className="text-primary-400" />
                </motion.button>
              </div>
            </div>

            {/* Mobile Carousel - 1 member at a time */}
            <div className="md:hidden flex flex-col items-center gap-8 w-full">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={teamMembers[currentIndex].id}
                  variants={itemVariants}
                  initial={{ opacity: 0, x: direction === 'right' ? -150 : 150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 'right' ? 150 : -150 }}
                  transition={{
                    duration: 0.4,
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}
                  className="group w-full max-w-sm"
                >
                  {/* Card Container - Vertical Layout */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-6"
                  >
                    {/* Image Container - Outside Card */}
                    <motion.div
                      whileHover={{
                        boxShadow: '0 0 60px rgba(109, 40, 255, 0.5)',
                      }}
                      className="relative w-full overflow-hidden rounded-2xl"
                    >
                      {/* Image */}
                      <div className="relative w-full h-64 overflow-hidden">
                        <img
                          src={teamMembers[currentIndex].image}
                          alt={`${teamMembers[currentIndex].name} - ${teamMembers[currentIndex].role} en ROZ Social Media`}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src = ''
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Info Container - Inside Card */}
                    <motion.div
                      className="w-full glass rounded-2xl p-6 flex flex-col justify-center border border-primary-600/30 group-hover:border-primary-600/60 transition-colors"
                    >
                      {/* Name */}
                      <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2">
                        <MemberName name={teamMembers[currentIndex].name} linkedin={teamMembers[currentIndex].social.linkedin} />
                      </h3>

                      {/* Role */}
                      <p className="text-primary-600 font-semibold mb-4 text-lg">
                        {teamMembers[currentIndex].role}
                      </p>

                      {/* Bio */}
                      <p className="text-ink-muted leading-relaxed">
                        {teamMembers[currentIndex].bio}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Mobile Navigation */}
              <div className="flex items-center gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setDirection('left')
                    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
                  }}
                  className="p-3 glass rounded-lg border border-primary-600/30 hover:border-primary-600/60 hover:bg-white/90 transition-all"
                >
                  <ChevronLeft size={24} className="text-primary-400" />
                </motion.button>

                <div className="flex gap-2">
                  {teamMembers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 'right' : 'left')
                        setCurrentIndex(idx)
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-primary-600 w-8' : 'bg-ink/20'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setDirection('right')
                    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
                  }}
                  className="p-3 glass rounded-lg border border-primary-600/30 hover:border-primary-600/60 hover:bg-white/90 transition-all"
                >
                  <ChevronRight size={24} className="text-primary-400" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mt-20 pt-20 border-t border-ink/10"
        >
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl">
            {[
              { value: '+5', label: 'Años de experiencia con la agencia' },
              { value: '+8', label: 'Países' },
              { value: '7 dias', label: 'a la semana soporte a clientes' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-6 text-center border border-ink/10 hover:border-primary-600/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text-purple mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-ink-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
