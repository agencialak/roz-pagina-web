// "2026-09-15" se interpreta como medianoche UTC; en Colombia (UTC-5) eso cae el día anterior.
// Anclarlo al mediodía local evita que la fecha mostrada se corra un día.
export function formatPostDate(date: string, month: 'long' | 'short' = 'long') {
  return new Date(`${date}T12:00:00`).toLocaleDateString('es-ES', {
    year: 'numeric',
    month,
    day: 'numeric',
  })
}
