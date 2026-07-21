export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  category: 'educativo' | 'casos' | 'estrategia' | 'tendencia'
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
  {
    id: 'investigacion-de-mercado',
    slug: 'investigacion-de-mercado-antes-de-pautar',
    title: 'Investigación de mercado: el paso que la mayoría de campañas se saltan',
    excerpt: 'Antes de crear el primer anuncio, casi nunca hablamos de Meta Ads. Hablamos de quién es el cliente, qué le duele y qué objeciones tiene. Ese paso cambia todo lo que viene después.',
    content: `
# Investigación de mercado: el paso que la mayoría de campañas se saltan

Antes de crear el primer anuncio, casi nunca hablamos de Meta Ads.

Hablamos de quién es el cliente. Qué le duele. Qué objeciones tiene antes de comprar. Qué dice de la marca en internet, sin que nadie le esté vendiendo nada.

Eso es investigación de mercado, y es el paso que la mayoría de campañas se saltan.

## Por qué no armamos una campaña sin esa base

En ROZ Social Media no armamos una campaña sin investigación previa. No porque sea un requisito bonito, sino porque cambia todo lo que viene después:

- **El ángulo del anuncio** — a quién le hablas y con qué tono
- **El nivel de consciencia del público** — si ya conoce el problema, la solución, o ni siquiera sabe que tiene un problema
- **La oferta** — qué gancho realmente mueve a esa audiencia a actuar
- **El destino** — si la conversación cierra mejor por WhatsApp, formulario o en la tienda

## Lo que pasa cuando te saltas este paso

Sin ese trabajo previo, terminas pautando con buen presupuesto pero hablándole a la persona equivocada, del modo equivocado.

El anuncio es solo la punta del iceberg: es lo único que ve el cliente, pero debajo de la superficie está todo el trabajo que decide si esa campaña funciona o no.

La pauta no arregla una estrategia mal pensada. **Solo la hace más cara.**

---

*Así trabajamos las campañas de nuestros clientes en ROZ Social Media: investigación primero, anuncios después.*
    `,
    image: '/blog/post_investigacion_mercado.png',
    date: '2026-07-14',
    category: 'estrategia',
    readTime: 3,
    author: 'Nikolas García - ROZ Social Media',
  },
  {
    id: 'trafico-vs-interaccion',
    slug: 'trafico-vs-interaccion-costos-distintos',
    title: 'Tráfico vs. interacción: por qué cuestan distinto (y está bien)',
    excerpt: 'Una visita a Instagram me cuesta en promedio $143 COP. Una conversación de WhatsApp, $1.736 COP. Doce veces más cara. Y está bien que así sea.',
    content: `
# Tráfico vs. interacción: por qué cuestan distinto (y está bien)

Una visita a Instagram me cuesta en promedio $143 COP. Una conversación de WhatsApp, $1.736 COP. Doce veces más cara. Y está bien que así sea.

Cruzando el histórico completo de las cuentas que manejo, esto es lo que veo:

- **Tráfico a Instagram** (seguidores / awareness): ~$143 COP por visita a perfil
- **Interacción a WhatsApp** (venta): ~$1.736 COP por conversación iniciada

La diferencia es de más de 12 veces. No es un problema. Es exactamente lo que se debería esperar.

## Por qué no significan lo mismo

Una visita a perfil es curiosidad. Alguien vio un anuncio, sintió interés, hizo clic. No cuesta casi nada porque no le pide casi nada a cambio.

Una conversación de WhatsApp es intención de compra. La persona ya decidió dar el siguiente paso: escribir, preguntar, avanzar hacia una compra real. Eso vale más, y por eso cuesta más generarlo.

## El error que veo seguido

Comparar estos dos números como si fueran el mismo tipo de resultado. No lo son.

Si el objetivo es awareness, el número que importa es el costo por visita. Si el objetivo es vender, el número que importa es el costo por conversación — y hay que aceptar que ese va a ser más alto.

---

*Cifras del banco de datos histórico: tráfico = 34.549 visitas / $4.955.204 COP invertidos en 13 cuentas. Interacción = 4.031 conversaciones / $6.997.702 COP invertidos en 19 cuentas.*
    `,
    image: '/blog/post_trafico_vs_interaccion.png',
    date: '2026-07-16',
    category: 'educativo',
    readTime: 4,
    author: 'Nikolas García - ROZ Social Media',
  },
  {
    id: 'tendencia-ia-meta',
    slug: 'ia-de-meta-y-el-rol-del-operador',
    title: 'La IA ejecuta. La estrategia sigue siendo humana',
    excerpt: 'Meta Ads en 2026 corre prácticamente solo. Entonces, ¿para qué sirve alguien que gestione campañas si la plataforma ya hace casi todo sola? Esto es lo que he visto cambiar en más de 5 años en esto.',
    content: `
# La IA ejecuta. La estrategia sigue siendo humana

Meta Ads en 2026 corre prácticamente solo.

La IA de Meta decide en tiempo real a quién mostrarle cada anuncio, cuánto pujar por esa persona, y qué versión de un mismo anuncio probar primero. Todo eso, antes, era trabajo manual de quien manejaba la cuenta.

Por eso me preguntan seguido: ¿para qué sirve alguien que gestione campañas de Meta Ads si la plataforma ya hace casi todo sola?

Llevo más de 5 años en esto, y esto es lo que he visto cambiar:

## Lo que la IA sí decide

La IA de Meta optimiza muy bien la distribución — a quién mostrarle el anuncio, cuándo, y con qué frecuencia, dentro de la información que le des.

## Lo que la IA no decide por ti

Esa información: qué oferta estás promocionando, con qué ángulo le hablas al cliente, en qué momento de decisión de compra está esa persona, y a dónde la mandas después del clic.

Si esa parte está mal — la oferta, el mensaje, el destino — no importa qué tan buena sea la IA optimizando: va a optimizar algo que no funciona, cada vez más rápido.

## Mi trabajo no desapareció. Cambió

Antes ajustaba pujas y públicos a mano. Ahora paso más tiempo pensando en la estrategia que le doy a la máquina para que la ejecute bien.

La IA ejecuta. La estrategia sigue siendo humana.
    `,
    image: '/blog/post_tendencia_ia_meta.png',
    date: '2026-07-16',
    category: 'tendencia',
    readTime: 3,
    author: 'Nikolas García - ROZ Social Media',
  },
  {
    id: 'evolucion-cuenta',
    slug: 'evolucion-mensual-dos-campanas-mismo-costo',
    title: 'Dos campañas distintas subieron de costo el mismo mes',
    excerpt: 'En esta cuenta de estética manejamos dos campañas de interacción a WhatsApp, sin presupuesto compartido entre sí. Las dos subieron de costo al mismo tiempo. No fue coincidencia.',
    content: `
# Dos campañas distintas subieron de costo el mismo mes

En esta cuenta de estética manejamos dos campañas de interacción a WhatsApp, una para cada servicio, sin presupuesto compartido entre sí. Esto es lo que vimos mes a mes en cada una:

**Servicio 1:**
- Enero: $3.759 COP por conversación
- Febrero: $1.287 COP
- Marzo: $1.523 COP
- Abril: $2.174 COP
- Mayo: $4.349 COP
- Junio: $3.205 COP

**Servicio 2:**
- Enero: $2.573 COP por conversación
- Febrero: $1.952 COP
- Marzo: $1.800 COP
- Abril: $2.535 COP
- Mayo: $2.642 COP
- Junio: $2.455 COP

## El mes atípico

En mayo, en las dos campañas pausamos los creativos normales y dejamos corriendo solo los de una promoción puntual de día de la madre. El resultado: las dos subieron de costo al mismo tiempo, aunque son servicios distintos y no comparten presupuesto.

Eso no es coincidencia. Cuando una campaña se reduce a una sola oferta, aunque tenga varios creativos, pasan dos cosas a la vez: compites por la misma fecha comercial que el resto del mercado, y el sistema pierde la variedad de ofertas que normalmente usa para encontrar a la audiencia más barata.

## La recuperación

En junio volvimos a correr los creativos normales en ambas — más una campaña nueva de tráfico a Instagram, en reemplazo de una anterior que pausamos — y las dos bajaron otra vez.

Y esto con el presupuesto mensual de la cuenta ya subido cerca de un 31% desde mediados de marzo. No es un tema de menos inversión, sino de qué tan concentrada corre esa inversión.

El costo por resultado no depende solo de cuánta plata metes. Depende de cuántos creativos y ofertas distintas tiene esa campaña corriendo al mismo tiempo.
    `,
    image: '/blog/post_evolucion_cuenta.png',
    date: '2026-07-21',
    category: 'casos',
    readTime: 4,
    author: 'Nikolas García - ROZ Social Media',
  },
  {
    id: 'cliente-potencial-seguimiento',
    slug: 'el-cliente-potencial-se-ve-lo-que-pasa-despues-no',
    title: 'El cliente potencial se ve. Lo que pasa después, no',
    excerpt: 'Genero el cliente potencial. Ahí es donde casi todos mis clientes dejan de medir. Si el costo por resultado es la única métrica, solo estás viendo la mitad de la historia.',
    content: `
# El cliente potencial se ve. Lo que pasa después, no

Genero el cliente potencial. Ahí es donde casi todos mis clientes dejan de medir.

Llevo años armando campañas de interacción a WhatsApp para negocios locales, y hay una pregunta que casi nadie me puede responder cuando la hago: ¿cuántos de esos clientes potenciales terminaron comprando?

Cuando la campaña, la segmentación y el creativo funcionan, la persona escribe — ya no es un desconocido, es alguien que se interesó porque ese anuncio le habló directamente a él. Les pregunto cosas simples: ¿qué cliente cerraste esta semana? ¿En qué momento dejó de responder? ¿Por qué se enfrió? La respuesta más común es "no sé" — no porque no les importe, sino porque nadie está llevando ese registro.

## El costo por resultado solo cuenta la mitad

Si genero 100 clientes potenciales baratos y ninguno cierra, esa campaña no es barata — es una campaña ciega.

Por eso, además de la campaña, a los negocios con los que trabajo también les compartimos un manual de atención por WhatsApp: tiempos de respuesta esperados, qué responder ante las preguntas más comunes, casos prácticos de cómo llevar la conversación hasta el cierre. La campaña entrega el cliente potencial. Lo que pasa después de ese primer mensaje también se puede mejorar, y también es parte del trabajo.

## Cerrar el círculo completo

Mi trabajo no es solo bajar el costo por resultado. Es insistir en cerrar ese círculo completo: qué pasó con ese cliente potencial después, y cómo se atiende, para ajustar la campaña con datos reales de venta, no solo con datos de Meta.

Si generas clientes potenciales pero no sabes qué pasa con ellos después, ese es el primer número que deberías empezar a medir.
    `,
    image: '/blog/post_cliente_potencial.png',
    date: '2026-07-23',
    category: 'estrategia',
    readTime: 4,
    author: 'Nikolas García - ROZ Social Media',
  },
]
