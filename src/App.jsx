import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Certificates, Work, Gallery } from './components/Sections'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Certificates />
        <Work />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        © {new Date().getFullYear()} Refky — Crafted with a futuristic touch.
      </footer>
    </div>
  )
}

export default App
