import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Inicio', href: '/', type: 'route' },
    { label: 'Servicios', href: '#servicios', type: 'anchor' },
    { label: 'Estrategia', href: '#filosofia', type: 'anchor' },
    { label: 'Equipo', href: '#equipo', type: 'anchor' },
    { label: 'Resultados', href: '#resultados', type: 'anchor' },
    { label: 'Testimonios', href: '#testimonios', type: 'anchor' },
    { label: 'Blog', href: '/blog', type: 'route' },
    { label: 'Contacto', href: '#contacto', type: 'anchor' },
  ]

  const handleNavClick = (item: { label: string; href: string; type: string }) => {
    setIsOpen(false)
    if (item.type === 'route') {
      navigate(item.href)
    } else {
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const socialIcons = [
    { icon: 'ig', href: 'https://www.instagram.com/agenciaroz/' },
    { icon: 'ws', href: 'https://wa.me/573218515587' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => {
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer bg-none border-none p-0"
          >
            <img src="/logo.png" alt="ROZ" className="h-10 w-auto" />
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.label === 'Blog' ? (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm font-semibold text-primary-400 bg-primary-600/15 border border-primary-500/40 rounded-full px-4 py-1.5 cursor-pointer hover:bg-primary-600/30 hover:text-primary-300 transition-colors"
                >
                  {item.label}
                </motion.button>
              ) : (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ color: '#6D28FF' }}
                  className="text-sm font-medium text-gray-300 transition-colors bg-none border-none p-0 cursor-pointer"
                >
                  {item.label}
                </motion.button>
              )
            )}
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-3">
            {socialIcons.map((social) => (
              <motion.a
                key={social.icon}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <img
                  src={social.icon === 'ig' ? '/instagram-icon.png' : '/whatsapp-icon.png'}
                  alt={social.icon === 'ig' ? 'Instagram' : 'WhatsApp'}
                  className="w-full h-full object-contain"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-6 border-t border-white/10"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) =>
                item.label === 'Blog' ? (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-semibold text-primary-400 bg-primary-600/15 border border-primary-500/40 rounded-full px-4 py-1.5 cursor-pointer hover:bg-primary-600/30 transition-colors self-start"
                  >
                    {item.label}
                  </motion.button>
                ) : (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-medium text-gray-300 hover:text-primary-600 transition-colors text-left bg-none border-none p-0 cursor-pointer"
                  >
                    {item.label}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
