import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const SIZE = 520

const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-SIZE)
  const y = useMotionValue(-SIZE)
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.6 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) return
    setEnabled(true)

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX - SIZE / 2)
      y.set(e.clientY - SIZE / 2)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 -z-[5] rounded-full"
      style={{
        x: springX,
        y: springY,
        width: SIZE,
        height: SIZE,
        background: 'radial-gradient(circle, rgba(139, 92, 255, 0.13) 0%, rgba(139, 92, 255, 0.05) 40%, transparent 70%)',
      }}
    />
  )
}

export default CursorGlow
