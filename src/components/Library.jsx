import { useEffect, useState } from 'react'

const isDesktop = () => {
  if (typeof window === 'undefined') return true
  const ua = navigator.userAgent.toLowerCase()
  const isMobile = /android|iphone|ipad|ipod|mobile|tablet/.test(ua)
  return !isMobile
}

function Library() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/library${filter !== 'all' ? `?kind=${filter}` : ''}`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [filter])

  const handleClick = (item) => {
    if (item.kind === 'streaming' && !isDesktop()) {
      alert('Streaming links are available on desktop only.')
      return
    }
    window.open(item.link, '_blank', 'noreferrer')
  }

  return (
    <section id="library" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Library</h2>
            <p className="text-slate-300 mt-2">Curated picks: books on Amazon, videos on YouTube, streaming titles on their platforms.</p>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1">
            {['all','book','video','streaming'].map(k => (
              <button key={k} onClick={() => setFilter(k)} className={`px-3 py-1.5 rounded-md text-sm ${filter===k? 'bg-blue-600 text-white' : 'text-slate-200 hover:text-white'}`}>
                {k.charAt(0).toUpperCase()+k.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden bg-slate-800/60 border border-white/10 hover:border-blue-500/40 transition cursor-pointer" onClick={() => handleClick(item)}>
              {item.thumbnail && (
                <img src={item.thumbnail} alt={item.title} className="h-44 w-full object-cover" />
              )}
              <div className="p-5">
                <div className="text-xs text-blue-300 uppercase tracking-wide">{item.kind} • {item.platform}</div>
                <h3 className="mt-1 text-white font-semibold">{item.title}</h3>
                {item.author_or_channel && <p className="text-slate-300 text-sm">{item.author_or_channel}</p>}
                {item.note && <p className="text-slate-400 text-sm mt-2 line-clamp-2">{item.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Library
