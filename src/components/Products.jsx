import { useEffect, useState } from 'react'

function Products({ onAdd }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="products" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">E‑Products</h2>
          <p className="text-slate-300 mt-2">Instant‑delivery digital goods: download links delivered by email after checkout.</p>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading products…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, idx) => (
              <div key={idx} className="group rounded-xl overflow-hidden bg-slate-900/60 border border-white/10">
                {p.cover_image && (
                  <img src={p.cover_image} alt={p.title} className="h-44 w-full object-cover group-hover:opacity-90 transition" />
                )}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="text-slate-300 text-sm mt-1 line-clamp-3">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-white font-bold">${'{'}p.price.toFixed(2){'}'}</span>
                    <button onClick={() => onAdd && onAdd(p)} className="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-500">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
