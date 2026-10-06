import RevealHeading from './RevealHeading'

const clients = [
  { name: 'Anato Eje Cafetero', logo: '/clients/web/Anato Eje Cafetero Blanco.png', instagram: 'https://www.instagram.com/anatoejecafetero/' },
  { name: 'Bariatric Care', logo: '/clients/web/Bariatric care.png', instagram: 'https://www.instagram.com/dra.anapimienta/' },
  { name: 'Clínica San Rafael', logo: '/clients/web/Clinica san rafael.png', instagram: 'https://www.instagram.com/clinica.sanrafael/' },
  { name: 'Dr Romero', logo: '/clients/web/Dr romero.png', instagram: 'https://www.instagram.com/drfabianromero/' },
  { name: 'Dr Steer', logo: '/clients/web/Dr steer.png', instagram: 'https://www.instagram.com/reconstruccionoseasteer/' },
  { name: 'Latam Mobility', logo: '/clients/web/Latam Mobility.png', instagram: 'https://www.instagram.com/' }, // En espera de habilitación
  { name: 'Media Maratón Pereira', logo: '/clients/web/Media maraton pereira.png', instagram: 'https://www.instagram.com/mediamaratonpereira/' },
  { name: 'Odento', logo: '/clients/web/Odento.png', instagram: 'https://www.instagram.com/odentoco/' },
  { name: 'Sayonara', logo: '/clients/web/SAYONARA.png', instagram: 'https://www.instagram.com/sayonara_co/' },
  { name: 'Troncos', logo: '/clients/web/troncos.png', instagram: 'https://www.instagram.com/troncos05/' },
]

const Clients = () => {
  // La lista va duplicada para que el desplazamiento de -50% cierre el ciclo sin salto
  const loop = [...clients, ...clients]

  return (
    <section className="relative py-16 sm:py-20 bg-surface-muted/60 border-y border-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-ink-subtle mb-3">Clientes</p>
        <RevealHeading
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-ink"
          lines={[
            <>Marcas que han confiado en nuestra <span className="accent-serif gradient-text-purple text-[1.1em]">estrategia digital</span></>,
          ]}
        />
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center">
          {loop.map((client, idx) => (
            <a
              key={`${client.name}-${idx}`}
              href={client.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={idx >= clients.length}
              tabIndex={idx >= clients.length ? -1 : undefined}
              className="flex items-center justify-center h-16 sm:h-20 w-40 sm:w-52 mx-5 sm:mx-8 shrink-0"
            >
              <img
                src={client.logo}
                alt={idx < clients.length ? `${client.name} - Cliente de ROZ Social Media` : ''}
                className="max-h-full max-w-full object-contain brightness-0 opacity-45 hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
