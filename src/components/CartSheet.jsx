import { useMemo } from 'react'

function CartSheet({ open, items, onClose, onRemove, onCheckout, busy }) {
  const total = useMemo(() => items.reduce((s, it) => s + (it.price || 0), 0), [items])

  return (
    <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`}>
      {/* overlay */}
      <div onClick={onClose} className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />
      {/* panel */}
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-slate-900 border-l border-white/10 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-white font-semibold">Your Cart</h3>
          <button onClick={onClose} className="text-slate-300 hover:text-white">Close</button>
        </div>
        <div className="p-5 space-y-3 overflow-y-auto h-[calc(100%-180px)]">
          {items.length === 0 ? (
            <p className="text-slate-400">Your cart is empty.</p>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-800/60 border border-white/10 rounded-lg p-3">
                {it.cover_image && <img src={it.cover_image} alt={it.title} className="h-12 w-12 rounded object-cover" />}
                <div className="flex-1">
                  <div className="text-white text-sm font-medium">{it.title}</div>
                  <div className="text-slate-400 text-xs">${'{'}(it.price||0).toFixed(2){'}'}</div>
                </div>
                <button onClick={() => onRemove && onRemove(idx)} className="text-red-400 hover:text-red-300 text-sm">Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="p-5 border-t border-white/10">
          <div className="flex items-center justify-between text-white mb-3">
            <span>Total</span>
            <span className="font-bold">${'{'}total.toFixed(2){'}'}</span>
          </div>
          <button disabled={busy || items.length===0} onClick={onCheckout} className="w-full py-2.5 rounded-md bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white hover:bg-blue-500">
            {busy ? 'Processing…' : 'Checkout'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSheet
