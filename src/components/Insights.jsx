export default function Insights() {
  const items = [
    {
      title: 'Racecraft Analysis',
      desc: 'Short-form breakdowns of strategy, tire degradation, and telemetry-inspired visuals.'
    },
    {
      title: 'Aviation Notes',
      desc: 'Airframe design, liveries, and flight dynamics translated into approachable diagrams.'
    },
    {
      title: 'Photo Essays',
      desc: 'Minimal, editorial-style sets pairing images with narrative context and data callouts.'
    }
  ]

  return (
    <section id="insights" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Editorial Focus</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Concise, data-aware storytelling across motorsport and aviation with a clean, magazine-forward layout.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article key={it.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            <div className="mt-4 h-1 w-10 origin-left scale-x-0 rounded bg-gray-900 transition-all group-hover:scale-x-100" />
          </article>
        ))}
      </div>
    </section>
  )
}
