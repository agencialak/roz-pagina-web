import { motion } from 'framer-motion'
import { containerVariants, fadeUpVariants } from '../utils/animations'
import { ArrowLeft } from 'lucide-react'

interface PrivacyPolicyProps {
  onBack?: () => void
}

const PrivacyPolicy = ({ onBack }: PrivacyPolicyProps) => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        {onBack && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Volver
          </motion.button>
        )}

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl font-black text-white mb-6"
          >
            Política de Privacidad
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            className="text-lg text-gray-300"
          >
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8 text-gray-300"
        >
          {/* Section 1 */}
          <motion.section variants={fadeUpVariants}>
            <h2 className="text-2xl font-bold text-white mb-4">1. Microsoft Clarity</h2>
            <p className="mb-4">
              Asociados con Microsoft Clarity y Microsoft Advertising capturamos cómo usas nuestro sitio a través de métricas
              de comportamiento, mapas de calor y reproducción de sesiones para mejorar y comercializar nuestros productos/servicios.
            </p>
            <p className="mb-4">
              Los datos de uso del sitio web se capturan utilizando cookies de primera y terceros y otras tecnologías de rastreo
              para determinar la popularidad de productos/servicios y la actividad en línea. Además, utilizamos esta información
              para optimización de sitios, propósitos de fraude/seguridad y publicidad.
            </p>
            <p className="text-sm">
              Para más información sobre cómo Microsoft recopila y utiliza tus datos, visita la{' '}
              <a
                href="https://privacy.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 underline"
              >
                Declaración de Privacidad de Microsoft
              </a>
              .
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={fadeUpVariants}>
            <h2 className="text-2xl font-bold text-white mb-4">2. Google Analytics</h2>
            <p className="mb-4">
              Utilizamos Google Analytics para entender cómo los usuarios interactúan con nuestro sitio web.
              Esta información nos ayuda a mejorar nuestros servicios y contenido.
            </p>
            <p className="text-sm">
              Para más información, visita la{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 underline"
              >
                Política de Privacidad de Google
              </a>
              .
            </p>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={fadeUpVariants}>
            <h2 className="text-2xl font-bold text-white mb-4">3. Meta Pixel</h2>
            <p className="mb-4">
              Utilizamos el Meta Pixel para rastrear conversiones, optimizar anuncios y construir audiencias para nuestras
              campañas publicitarias. Esto nos permite entender mejor el comportamiento de los usuarios y mejorar nuestros servicios.
            </p>
            <p className="text-sm">
              Para más información, visita la{' '}
              <a
                href="https://www.facebook.com/policies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 underline"
              >
                Política de Cookies de Meta
              </a>
              .
            </p>
          </motion.section>

          {/* Section 4 */}
          <motion.section variants={fadeUpVariants}>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
            <p className="mb-4">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web.
              Las cookies nos ayudan a recordar tus preferencias y a entender cómo usas nuestro sitio.
            </p>
            <p>
              Puedes controlar las cookies a través de la configuración de tu navegador. Sin embargo,
              desactivar algunas cookies puede afectar tu experiencia en el sitio.
            </p>
          </motion.section>

          {/* Section 5 */}
          <motion.section variants={fadeUpVariants}>
            <h2 className="text-2xl font-bold text-white mb-4">5. Tus Derechos</h2>
            <p className="mb-4">
              Tienes el derecho a acceder, corregir o eliminar tus datos personales.
              Si tienes preguntas sobre nuestras prácticas de privacidad, puedes contactarnos en:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Email: hola@rozsocial.com</li>
              <li>WhatsApp: +57 321 851 5587</li>
            </ul>
          </motion.section>

          {/* Section 6 */}
          <motion.section variants={fadeUpVariants}>
            <h2 className="text-2xl font-bold text-white mb-4">6. Cambios en esta Política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
              Los cambios serán efectivos inmediatamente después de ser publicados en nuestro sitio web.
            </p>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            variants={fadeUpVariants}
            className="bg-white/5 border border-white/10 rounded-lg p-6 mt-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
            <p className="mb-4">
              Si tienes preguntas o inquietudes sobre nuestra política de privacidad o nuestras prácticas de privacidad,
              no dudes en contactarnos:
            </p>
            <div className="space-y-3">
              <p>
                <span className="text-primary-400 font-semibold">Email:</span> hola@rozsocial.com
              </p>
              <p>
                <span className="text-primary-400 font-semibold">WhatsApp:</span> +57 321 851 5587
              </p>
              <p>
                <span className="text-primary-400 font-semibold">Ubicación:</span> Pereira, Risaralda, Colombia
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
