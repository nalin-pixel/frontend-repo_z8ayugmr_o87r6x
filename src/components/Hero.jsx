import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-white/0" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl rounded-2xl bg-white/70 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Motorsport x Aviation — Visual Journal
          </h1>
          <p className="mt-3 text-base text-gray-700 sm:text-lg">
            A curated portfolio blending race engineering aesthetics with the elegance of flight. Stories, analysis, and photography shaped by speed and precision.
          </p>
        </div>
      </div>
    </section>
  )
}
