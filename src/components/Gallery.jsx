export default function Gallery() {
  const projects = [
    {
      tag: 'GT Racing',
      title: 'Night stint at Spa',
      caption: 'Long exposure pans, brake glow, and an emphasis on rhythm over noise.'
    },
    {
      tag: 'Open Wheel',
      title: 'Monocoque geometry study',
      caption: 'Black-on-black studio set exploring surface transitions and aero packaging.'
    },
    {
      tag: 'Aviation',
      title: 'Approach, RWY 25L',
      caption: 'Late golden hour with layered clouds and motion-blur props for a painterly effect.'
    },
    {
      tag: 'Heritage',
      title: 'Group C silhouettes',
      caption: 'Contrast-first compositions with archival typography cues.'
    }
  ]

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Selected Work</h2>
          <p className="mt-2 max-w-2xl text-gray-600">A rotating selection of sets. Each project pairs visuals with a clear point-of-view.</p>
        </div>
        <a href="#" className="hidden text-sm font-medium text-gray-900 hover:opacity-80 sm:block">View all</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <figure key={p.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
            <figcaption className="mt-3">
              <span className="text-xs uppercase tracking-wide text-gray-500">{p.tag}</span>
              <h3 className="mt-1 text-base font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
