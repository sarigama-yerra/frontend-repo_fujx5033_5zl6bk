import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-16 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-500/20 text-blue-200 ring-1 ring-blue-400/30">Technology • Futuristic • Education</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Sell your e‑products with an interactive, modern storefront
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90">
            Launch e‑books, course bundles, and more. Showcase a curated library of recommended books, videos, and streaming picks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition">Browse E‑Products</a>
            <a href="#library" className="px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition ring-1 ring-white/20">Explore Library</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
