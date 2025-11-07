export function Certificates() {
  const items = [
    { title: 'Google UX Design', org: 'Coursera', year: '2023' },
    { title: 'Frontend Developer', org: 'Meta', year: '2024' },
    { title: 'JavaScript Algorithms', org: 'freeCodeCamp', year: '2022' },
  ]
  return (
    <section id="certificates" className="relative py-24 bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-1/3 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Certificates</h2>
        <p className="mt-2 text-white/60">A selection of achievements that reflect my craft.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform hover:scale-[1.02]">
              <div className="absolute -inset-px bg-gradient-to-br from-fuchsia-500/10 via-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-lg font-medium text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-white/60">{c.org}</p>
                <p className="mt-4 text-xs text-white/50">{c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Work() {
  const projects = [
    {
      title: 'Neon Interface Kit',
      description: 'A luxury UI system with luminous accents and motion.',
    },
    {
      title: 'Immersive Landing',
      description: 'Responsive hero with interactive 3D and parallax.',
    },
    {
      title: 'Design System',
      description: 'Tokens, components, and typography for premium apps.',
    },
  ]
  return (
    <section id="work" className="relative py-24 bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-20 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">My Work</h2>
        <p className="mt-2 text-white/60">Selected projects blending code and aesthetics.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-fuchsia-500/10 via-blue-500/10 to-emerald-500/10" />
              <div className="relative">
                <div className="h-36 rounded-xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10" />
                <h3 className="mt-4 text-lg font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Gallery</h2>
        <p className="mt-2 text-white/60">Visual explorations, motion studies, and style frames.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/20 via-blue-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
