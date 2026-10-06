import { useEffect, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { services } from '../data/services'
import { blogPosts } from '../data/blogPosts'
import { setPageSeo } from '../utils/seo'
import { containerVariants, itemVariants } from '../utils/animations'
import RevealHeading from './RevealHeading'
import BlogCta from './BlogCta'

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-subtle mb-4">{children}</p>
)

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  useEffect(() => {
    if (!service) return
    setPageSeo({
      title: service.metaTitle,
      description: service.metaDescription,
      path: `/servicios/${service.slug}`,
    })
  }, [service])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-ink mb-4">Servicio no encontrado</h1>
          <Link to="/" className="inline-flex items-center gap-2 text-primary-700 font-medium">
            <ArrowLeft size={18} /> Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  const related = service.relatedPosts
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    // key: al saltar entre servicios se remonta todo, si no las animaciones "al aparecer" ya disparadas dejan los bloques nuevos invisibles
    <div key={service.slug} className="relative min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div aria-hidden className="absolute left-1/2 -translate-x-1/2 -top-40 w-[900px] h-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,255,0.16),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <nav aria-label="Ruta" className="flex items-center gap-2 text-sm text-ink-muted mb-10">
          <Link to="/" className="hover:text-ink transition-colors">Inicio</Link>
          <span aria-hidden>/</span>
          <span>Servicios</span>
          <span aria-hidden>/</span>
          <span className="text-ink">{service.name}</span>
        </nav>

        {/* Encabezado */}
        <header className="max-w-3xl mb-16 sm:mb-20">
          <Eyebrow>Servicio</Eyebrow>
          <RevealHeading
            as="h1"
            immediate
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.02] text-ink mb-7"
            lines={[service.heading[0], <span className="accent-serif gradient-text-purple text-[1.08em]">{service.heading[1]}</span>]}
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-lg sm:text-xl text-ink-muted leading-relaxed mb-9"
          >
            {service.intro}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            href="https://wa.me/573218515587"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 pl-7 pr-2 py-2 bg-ink text-white font-medium rounded-full shadow-[0_10px_30px_-10px_rgba(109,40,255,0.6)] hover:-translate-y-0.5 transition-transform min-h-[52px]"
          >
            Cotizar este servicio
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={18} />
            </span>
          </motion.a>
        </header>

        {/* Resultados */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10 border-y border-ink/10 mb-20 sm:mb-28"
        >
          {service.proof.map((p) => (
            <motion.div key={p.label} variants={itemVariants} className="py-8 md:px-8 first:md:pl-0">
              <span className="block text-5xl sm:text-6xl font-semibold tracking-[-0.04em] gradient-text-purple tabular-nums">{p.value}</span>
              <p className="mt-3 text-ink-muted leading-snug">{p.label}</p>
              {p.postSlug && (
                <Link to={`/blog/${p.postSlug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-primary-700 transition-colors">
                  Ver el caso <ArrowRight size={14} />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.section>

        {/* Para quién */}
        <section className="mb-20 sm:mb-28">
          <Eyebrow>Para quién es</Eyebrow>
          <RevealHeading
            className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-ink mb-10"
            lines={[<>Negocios con los que <span className="accent-serif gradient-text-purple text-[1.1em]">ya trabajamos</span></>]}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {service.forWhom.map((f) => (
              <motion.div key={f.title} variants={itemVariants} className="rounded-2xl bg-surface-card border border-ink/[0.06] p-7">
                <h3 className="text-lg font-semibold tracking-tight text-ink mb-2">{f.title}</h3>
                <p className="text-ink-muted leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Qué incluye + Proceso */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 mb-20 sm:mb-28">
          <div>
            <Eyebrow>Qué incluye</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-ink mb-8">
              Todo lo que <span className="accent-serif gradient-text-purple text-[1.1em]">hacemos por ti</span>
            </h2>
            <ul className="space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/80 leading-relaxed">
                  <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-primary-50 text-primary-700 flex items-center justify-center">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-ink mb-8">
              Nuestro <span className="accent-serif gradient-text-purple text-[1.1em]">proceso</span>
            </h2>
            <ol className="relative border-l border-ink/10 ml-3 space-y-8">
              {service.process.map((step, i) => (
                <li key={step.title} className="pl-8 relative">
                  <span className="absolute -left-[13px] top-0 w-[26px] h-[26px] rounded-full bg-surface-card border border-primary-600/30 text-[11px] font-semibold text-primary-700 flex items-center justify-center tabular-nums">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold tracking-tight text-ink">{step.title}</h3>
                  <p className="text-ink-muted leading-relaxed mt-1">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Artículos relacionados */}
        {related.length > 0 && (
          <section className="mb-20 sm:mb-24">
            <Eyebrow>Del blog</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-ink mb-8">
              Datos reales <span className="accent-serif gradient-text-purple text-[1.1em]">detrás del servicio</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-2xl bg-surface-card border border-ink/[0.06] overflow-hidden hover:border-primary-600/25 hover:shadow-[0_20px_50px_-28px_rgba(109,40,255,0.4)] transition-[border-color,box-shadow] duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
                    <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out" />
                  </div>
                  <p className="p-5 font-semibold tracking-tight text-ink leading-snug group-hover:text-primary-700 transition-colors line-clamp-2">
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Otros servicios */}
        <section>
          <Eyebrow>Otros servicios</Eyebrow>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/servicios/${s.slug}`}
                className="group flex items-center justify-between rounded-2xl bg-surface-card border border-ink/[0.06] px-6 py-5 hover:border-primary-600/25 transition-colors"
              >
                <span className="font-semibold tracking-tight text-ink group-hover:text-primary-700 transition-colors">{s.name}</span>
                <ArrowRight size={18} className="text-ink-subtle group-hover:text-primary-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        <BlogCta
          title={<>Hablemos de <span className="accent-serif gradient-text-light text-[1.1em]">tu negocio</span></>}
          text="Cuéntanos qué vendes y a quién. Te decimos con datos reales qué esperar antes de invertir un peso."
        />
      </div>
    </div>
  )
}

export default ServicePage
