import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* RGB soft glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 -right-16 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-sm tracking-widest text-white/60 uppercase">Elegant • Futuristic • Lux</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-white">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-blue-400 to-emerald-400">Refky</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/70">Frontend Developer & Visual Designer</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="#work"
              className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-blue-500 to-emerald-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white/90 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors shadow-[0_0_25px_rgba(147,51,234,0.25)]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative aspect-square w-full">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-black/60">
            <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Subtle overlay gradient to blend with page without blocking interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
