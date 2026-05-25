import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Menú',
      links: [
        { label: 'Inicio', href: '#' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Proyectos', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Documentación', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Newsletter', href: '#' },
        { label: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Contacto', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: 'ig', href: 'https://www.instagram.com/agenciaroz/' },
    { icon: 'ws', href: 'https://wa.me/573218515587' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-black/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <img src="/logo.png" alt="ROZ" className="h-10 w-auto mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Estrategia digital para marcas que dominan.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {social.icon === 'ig' && <img src="/instagram-icon.png" alt="Instagram" className="w-full h-full object-contain" />}
                  {social.icon === 'ws' && <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-full h-full object-contain" />}
                  {!['ig', 'ws'].includes(social.icon) && <span className="text-xs font-bold text-white">{social.icon}</span>}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#6D28FF' }}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors inline-block"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:rozagencia23@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
              >
                <Mail size={18} className="group-hover:text-primary-600 transition-colors" />
                <span className="text-sm">rozagencia23@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://wa.me/573218515587"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
              >
                <Phone size={18} className="group-hover:text-primary-600 transition-colors" />
                <span className="text-sm">+57 321 851 5587</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-gray-400 group"
              >
                <MapPin size={18} className="text-primary-600" />
                <span className="text-sm">Pereira, Risaralda</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
          >
            © {currentYear} ROZ Social Media. Todos los derechos reservados.
          </motion.p>

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 text-center md:text-right italic"
          >
            Construimos marcas que dominan. Estrategia, posicionamiento, resultados.
          </motion.p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-primary-600/10 to-transparent rounded-full blur-3xl"
        />
      </div>
    </footer>
  )
}

export default Footer
