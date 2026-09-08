import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

/**
 * Cuenta de 0 hasta `end` cuando el elemento entra en pantalla.
 * `end` puede traer texto alrededor (ej. "120M+", "300+", "9") — se anima
 * solo la parte numérica y se conserva el resto tal cual.
 */
export function useCountUp(value: string, duration = 1.8) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState<string>(value.replace(/[\d.,]+/, '0'))

  const match = value.match(/[\d.,]+/)
  const numeric = match ? parseFloat(match[0].replace(/\./g, '').replace(',', '.')) : null
  const prefix = match ? value.slice(0, match.index) : ''
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : value

  useEffect(() => {
    if (!isInView || numeric === null) return

    const controls = animate(0, numeric, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const rounded = numeric % 1 === 0 ? Math.round(v) : Math.round(v * 10) / 10
        setDisplay(`${prefix}${rounded}${suffix}`)
      },
    })

    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return { ref, display }
}
