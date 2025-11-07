import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks, I will get back to you soon.'), 900)
  }

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact Me</h2>
        <p className="mt-2 text-white/60">Let’s create something elegant and futuristic together.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input
            required
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
          />
          <textarea
            required
            rows={5}
            placeholder="Message"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-blue-500 to-emerald-500 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02]"
          >
            Send Message
          </button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  )
}
