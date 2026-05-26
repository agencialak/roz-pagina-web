import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'
import { Star, Send } from 'lucide-react'
import { useState } from 'react'
import { database } from '../config/firebase'
import { ref, push } from 'firebase/database'

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    message: '',
    rating: 5,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRating = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const testimonialsRef = ref(database, 'testimonials')
      await push(testimonialsRef, {
        name: formData.name,
        business: formData.business,
        email: formData.email,
        message: formData.message,
        rating: formData.rating,
        createdAt: new Date().toISOString(),
      })

      setSubmitStatus('success')
      setFormData({ name: '', business: '', email: '', message: '', rating: 5 })

      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error al guardar testimonio:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-16 sm:py-24 px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 border border-primary-600/20 rounded-full"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight"
          >
            <span className="text-white">COMPARTE TU</span>
            <span className="block gradient-text-purple">TESTIMONIO</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto px-2"
          >
            Tu experiencia nos ayuda a crecer. Cuéntanos cómo fue trabajar con ROZ.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-10 border border-primary-600/30"
        >
          {/* Name */}
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-white font-semibold mb-3">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-primary-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 transition-colors"
              placeholder="Tu nombre"
            />
          </motion.div>

          {/* Business */}
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-white font-semibold mb-3">
              Tu negocio / Marca
            </label>
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-primary-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 transition-colors"
              placeholder="Nombre de tu negocio o marca"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-white font-semibold mb-3">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-primary-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 transition-colors"
              placeholder="tu@email.com"
            />
          </motion.div>

          {/* Rating */}
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-white font-semibold mb-3">
              Calificación
            </label>
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => handleRating(i + 1)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition-transform"
                >
                  <Star
                    size={32}
                    className={`${
                      i < formData.rating
                        ? 'fill-primary-400 text-primary-400'
                        : 'text-gray-600'
                    } transition-colors`}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants} className="mb-8">
            <label className="block text-white font-semibold mb-3">
              Tu testimonio
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-black/40 border border-primary-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 transition-colors resize-none"
              placeholder="Cuéntanos tu experiencia trabajando con ROZ..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(109, 40, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  ENVIAR TESTIMONIO
                  <Send size={20} />
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center"
            >
              ¡Gracias! Tu testimonio ha sido enviado exitosamente.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center"
            >
              Hubo un error al enviar el testimonio. Intenta de nuevo.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default TestimonialForm
