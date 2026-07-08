export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  category: 'educativo' | 'casos' | 'estrategia'
  readTime: number
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'costo-por-seguidor',
    slug: 'costo-por-seguidor-real',
    title: 'Costo real por seguidor: lo que nadie te cuenta',
    excerpt: 'La diferencia entre costo por visita y costo por seguidor real puede ser de más de 13 veces. Estos son datos de 7 cuentas distintas.',
    content: `
# Costo real por seguidor: lo que nadie te cuenta

Cuando revisamos el costo por seguidor real (no solo visitas a perfil) en 7 cuentas de clientes, la diferencia fue de más de 13 veces entre la mejor y la peor cuenta.

En Meta Ads casi todas las agencias reportan "costo por visita a perfil" en sus campañas de tráfico a Instagram. Nosotros también lo hacíamos así.

Pero una visita a perfil no es lo mismo que un seguidor ganado. Por eso empezamos a cruzar el gasto real de campaña contra los seguidores que cada cuenta ganó de verdad, no solo las visitas.

## Estos son los resultados reales

De 7 cuentas distintas, en los últimos meses:

- **Negocio digital:** $264 COP por seguidor (794 seguidores nuevos en 20 días)
- **Carnicería/restaurante:** $457 COP por seguidor (964 seguidores nuevos en 30 días)
- **Clínica de estética:** $742 COP por seguidor
- **Clínica odontológica:** $934 COP por seguidor
- **Clínica de estética (otra):** $938 COP por seguidor
- **Perfumería:** $2.488 COP por seguidor
- **Renting de vehículos:** $3.552 COP por seguidor

## La clave está en dónde no ves

Lo curioso: el costo por visita a perfil en las 7 cuentas era parecido, entre $70 y $130 COP. La diferencia real está en cuántas de esas visitas se quedan siguiendo la cuenta.

Eso depende de:
- **El nicho** - algunas industrias tienen conversión más alta que otras
- **Qué tan bueno es el perfil** - contenido, fotos de producto, diseño
- **Si la gente ya conocía la marca** - alguien que ya te sigue cuesta menos convertir

## Si a tu negocio solo le reportan "costo por visita a perfil"...

Pide también el costo por seguidor real. Son números distintos, y la diferencia te dice mucho más sobre si la campaña realmente está funcionando.

---

*Datos anonimizados por sector, sin nombres de clientes reales. Fuente: banco de datos histórico de campañas (2023-2026).*
    `,
    image: '/blog/post_costo_por_seguidor.png',
    date: '2026-07-06',
    category: 'educativo',
    readTime: 4,
    author: 'Nikolas García - ROZ Social Media',
  },
  {
    id: 'costo-por-conversacion',
    slug: 'costo-por-conversacion-whatsapp',
    title: 'Costo por conversación de WhatsApp: por qué varían 50 veces',
    excerpt: 'Una conversación de WhatsApp nos costó $375 COP. Otra, en un nicho distinto, casi $20.000 COP. Las dos campañas funcionaron bien. Esto es lo que las diferencia.',
    content: `
# Costo por conversación de WhatsApp: por qué varían 50 veces

Una conversación de WhatsApp nos costó $375 COP. Otra, en un nicho distinto, casi $20.000 COP. Las dos campañas funcionaron bien. Esto es lo que las diferencia.

En Meta Ads todo el mundo se obsesiona con bajar el costo por conversación. Pero comparar ese número entre negocios distintos, sin contexto, es un error.

## Datos reales de campañas de interacción a WhatsApp

Estos son datos de campañas que hemos manejado:

- **Odontología (promoción de fin de año):** $375 COP por conversación
- **Repostería (fecha comercial puntual):** $903 COP por conversación
- **Restaurante (domicilios):** $1.269 COP por conversación
- **Clínica de estética (promoción):** $1.800 COP por conversación
- **Cuidado de mascotas:** $2.495 COP por conversación
- **Renting de vehículos:** $3.124 COP por conversación
- **Odontología (procedimiento de alto ticket):** $19.368 COP por conversación

La diferencia entre el primero y el último es **más de 50 veces**.

## ¿Por qué? Porque no todas las conversaciones valen lo mismo

Una promoción de fin de año, con precio bajo y decisión rápida, genera conversaciones baratas.

Un procedimiento de varios millones de pesos, que la persona piensa durante semanas antes de decidir, genera conversaciones caras — pero cada una vale muchísimo más si se convierte en venta.

## El error más común

Si comparas el costo por conversación de tu negocio contra el de otro sin tener en cuenta:
- El ticket promedio
- Qué tan rápido decide comprar tu cliente
- La complejidad de la venta

...estás comparando cosas que no se pueden comparar.

---

*Datos anonimizados por sector, sin nombres de clientes reales. Fuente: banco de datos histórico de campañas (2023-2026).*
    `,
    image: '/blog/post_costo_por_conversacion.png',
    date: '2026-07-08',
    category: 'educativo',
    readTime: 5,
    author: 'Nikolas García - ROZ Social Media',
  },
]
