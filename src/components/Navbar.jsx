import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

function Navbar({ onOpenCart }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 shadow-lg shadow-cyan-500/30" />
          <span className="text-white font-semibold text-lg">EduFutura</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => scrollTo('home')} className="text-slate-200 hover:text-white">Home</button>
          <button onClick={() => scrollTo('products')} className="text-slate-200 hover:text-white">E‑Products</button>
          <button onClick={() => scrollTo('library')} className="text-slate-200 hover:text-white">Library</button>
          <button onClick={() => scrollTo('about')} className="text-slate-200 hover:text-white">About</button>
          <button onClick={onOpenCart} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-3 py-1.5 rounded-md shadow shadow-cyan-500/20">
            <ShoppingCart size={18} /> Cart
          </button>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-2">
            <button onClick={() => scrollTo('home')} className="block w-full text-left text-slate-200">Home</button>
            <button onClick={() => scrollTo('products')} className="block w-full text-left text-slate-200">E‑Products</button>
            <button onClick={() => scrollTo('library')} className="block w-full text-left text-slate-200">Library</button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left text-slate-200">About</button>
            <button onClick={() => { setOpen(false); onOpenCart && onOpenCart(); }} className="block w-full text-left text-white bg-cyan-500 px-3 py-2 rounded">Open Cart</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
