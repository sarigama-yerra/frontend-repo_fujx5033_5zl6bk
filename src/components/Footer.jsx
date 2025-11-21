function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} EduFutura. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#library" className="hover:text-white">Library</a>
          <a href="#products" className="hover:text-white">E‑Products</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
