import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Vista para direcciones que no existen. El servidor ya responde 404 (dist/404.html, con
// noindex); aquí solo se muestra un mensaje con salida al inicio y al blog.
const NotFound = () => {
  useEffect(() => {
    document.title = 'Página no encontrada | Agencia Roz'
  }, [])

  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-subtle mb-4">Error 404</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.035em] text-ink mb-6">Página no encontrada</h1>
        <p className="text-lg text-ink-muted leading-relaxed mb-10">
          La página que buscas no existe o cambió de dirección.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-7 py-3 bg-ink text-white font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Volver al inicio
          </Link>
          <Link
            to="/blog"
            className="px-7 py-3 border border-ink/15 text-ink font-medium rounded-full hover:border-primary-600 transition-colors"
          >
            Ir al blog
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
