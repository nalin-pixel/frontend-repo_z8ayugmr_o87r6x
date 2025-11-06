import { Camera, Gauge, Plane, Car } from 'lucide-react';

const items = [
  {
    id: 'lmh',
    tag: 'Prototype',
    title: 'Le Mans Hypercar — aero philosophy in motion',
    desc: 'Focus on under-floor venturis, dive planes, and balanced drag for the Mulsanne. Shot during dusk to capture hot brake glow and diffuser vortices.',
    icon: Gauge,
    image:
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'gt3',
    tag: 'GT3',
    title: 'GT3 pitlane — choreography and precision',
    desc: 'Fuel, tires, and timing. The visual language of endurance: tape, scuffs, and team colors under sodium lights.',
    icon: Car,
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'fighter',
    tag: 'Aviation',
    title: 'Fighter canopy highlights — optics and angles',
    desc: 'Surface reflections as data. Reading rivet lines, panel fit, and the glass geometry that defines sightlines.',
    icon: Plane,
    image:
      'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'film',
    tag: 'Process',
    title: 'How I shoot motion — panning at 1/30s',
    desc: 'Technique journal: stance, breathing, and shutter discipline to render speed with intention.',
    icon: Camera,
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function FeaturedGrid() {
  return (
    <section id="cars" className="relative py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">Featured Studies</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Selected images and notes. Each frame is annotated with what caught my eye — aero clues, mechanical stories, and design signatures.
            </p>
          </div>
          <a href="#stories" className="hidden md:inline-flex px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-white shadow-sm">See all stories</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ id, tag, title, desc, icon: Icon, image }) => (
            <article key={id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-xs rounded-full bg-white/90 text-gray-800 font-medium shadow">
                  {tag}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Icon className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wide">Brief</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 leading-snug">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
