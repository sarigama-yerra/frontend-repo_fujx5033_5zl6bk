function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
        <p className="mt-4 text-slate-100/90 leading-relaxed">
          We believe digital education should be engaging, accessible, and sustainable. This experience blends a futuristic aesthetic with practical tools to help you launch and grow your catalog of e‑books, course packages, and other downloadable resources.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
            <h3 className="text-white font-semibold">Interactive</h3>
            <p className="text-slate-200 text-sm mt-1">Immersive 3D hero and smooth UX to keep visitors exploring.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
            <h3 className="text-white font-semibold">Educational</h3>
            <p className="text-slate-200 text-sm mt-1">Curated library draws from Amazon, YouTube, and major streaming platforms.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
            <h3 className="text-white font-semibold">Environment‑minded</h3>
            <p className="text-slate-200 text-sm mt-1">Digital products reduce shipping and waste while scaling globally.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
