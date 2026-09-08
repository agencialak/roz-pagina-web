import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface ScrollRevealTextProps {
  text: string
  className?: string
  /** Color del texto ya "revelado" (por defecto ink.DEFAULT) */
  activeColor?: string
  /** Color del texto todavía sin revelar (por defecto ink/30) */
  mutedColor?: string
}

const Word = ({
  word,
  range,
  progress,
  activeColor,
  mutedColor,
}: {
  word: string
  range: [number, number]
  progress: MotionValue<number>
  activeColor: string
  mutedColor: string
}) => {
  const opacity = useTransform(progress, range, [0.8, 1])
  const color = useTransform(progress, range, [mutedColor, activeColor])

  return (
    <motion.span style={{ opacity, color }} className="inline-block will-change-[opacity,color]">
      {word}
      &nbsp;
    </motion.span>
  )
}

/**
 * Párrafo donde cada palabra pasa de "apagada" a su color final
 * a medida que el elemento cruza el centro del viewport al hacer scroll.
 */
const ScrollRevealText = ({
  text,
  className = '',
  activeColor = '#181422',
  mutedColor = 'rgba(24, 20, 34, 0.55)',
}: ScrollRevealTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          range={[i / words.length, (i + 1) / words.length]}
          progress={scrollYProgress}
          activeColor={activeColor}
          mutedColor={mutedColor}
        />
      ))}
    </p>
  )
}

export default ScrollRevealText
