import Lenis from 'lenis'

let lenis: Lenis | null = null

export function initSmoothScroll() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || lenis) return () => {}

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    autoRaf: true,
    anchors: { offset: -80 },
  })

  return () => {
    lenis?.destroy()
    lenis = null
  }
}

export function resetScroll() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
  else window.scrollTo(0, 0)
}

export function scrollToTarget(target: string | number) {
  if (lenis) {
    // Tras cambiar de página el alto cambia; sin recalcular, Lenis recorta el destino al alto viejo
    lenis.resize()
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : -80 })
    return
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}

// Los anclas (#servicios, #contacto…) solo existen en la home: desde otra página
// primero volvemos al inicio y luego bajamos a la sección.
export function goToSection(hash: string, navigate: (to: string) => void) {
  if (document.querySelector(hash)) {
    scrollToTarget(hash)
    return
  }
  navigate('/')
  setTimeout(() => scrollToTarget(hash), 450)
}
