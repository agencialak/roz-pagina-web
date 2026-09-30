import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

interface RevealHeadingProps {
  as?: 'h1' | 'h2' | 'h3'
  lines: ReactNode[]
  className?: string
  /** Anima al montar en vez de al entrar en pantalla (para el Hero, que ya está visible) */
  immediate?: boolean
  delay?: number
}

const RevealHeading = ({ as = 'h2', lines, className = '', immediate = false, delay = 0 }: RevealHeadingProps) => {
  const Tag = as
  const trigger = immediate
    ? { animate: { y: '0%' } }
    : { whileInView: { y: '0%' }, viewport: { once: true, margin: '-80px' } }

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        // pb/-mb dan aire a descendentes e itálicas sin que la máscara las corte
        <span key={i} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            {...trigger}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

export default RevealHeading
