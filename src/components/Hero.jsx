import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] pt-16 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* brighter, smoother gradient veil to blend into the continuous bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-slate-900/60 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-cyan-400/20 text-cyan-100 ring-1 ring-cyan-300/40">
            Technology • Futuristic • Education
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Sell your e‑products with an interactive, modern storefront
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 text-lg sm:text-xl text-slate-100/90">
            Launch e‑books, course bundles, and more. Showcase a curated library of recommended books, videos, and streaming picks.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="px-5 py-3 rounded-md bg-cyan-500 text-white hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20">Browse E‑Products</a>
            <a href="#library" className="px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition ring-1 ring-white/20">Explore Library</a>
          </motion.div>
        </div>
      </div>

      {/* soft glow at the fold for continuity */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-950/80" />
    </section>
  )
}

export default Hero
