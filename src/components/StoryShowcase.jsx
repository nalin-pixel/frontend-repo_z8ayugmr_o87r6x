export default function StoryShowcase() {
  const stories = [
    {
      id: 1,
      title: 'Pit wall: decision-making under pressure',
      excerpt:
        'Tyre degradation vs. stint length: how radio calls and timing loops shape the story of a race. Notes from trackside sessions.',
      cover:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Winglets and wake: photographing airflow',
      excerpt:
        'From condensation trails to tire squirt — techniques to visualize invisible motion with light and shutter.',
      cover:
        'https://images.unsplash.com/photo-1436459826008-8f926ccdbff5?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Airbase mornings: texture study',
      excerpt:
        'Aluminum, primer, and panels — cataloging the materials language of military aviation before golden hour.',
      cover:
        'https://images.unsplash.com/photo-1520681358364-1c0b4c7066b3?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">Stories & Notes</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Journal entries that add context to the images. Tactics, equipment, inspiration, and the patterns I look for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <article key={s.id} className="group rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition bg-white">
              <div className="h-52 overflow-hidden">
                <img src={s.cover} alt={s.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.excerpt}</p>
                <button className="mt-4 text-sm font-medium text-gray-900 hover:underline">Read</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
