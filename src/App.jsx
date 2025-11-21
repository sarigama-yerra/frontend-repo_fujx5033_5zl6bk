import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Library from './components/Library'
import About from './components/About'
import Footer from './components/Footer'
import CartSheet from './components/CartSheet'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [busy, setBusy] = useState(false)

  const addToCart = (item) => {
    setCart((c) => [...c, item])
    setCartOpen(true)
  }

  const removeFromCart = (idx) => setCart((c) => c.filter((_, i) => i !== idx))

  const checkout = async () => {
    try {
      setBusy(true)
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        email: 'demo@example.com',
        items: cart.map((c) => ({ product_id: c.id || '', title: c.title, price: c.price, quantity: 1 })),
        total: cart.reduce((s, it) => s + (it.price || 0), 0)
      }
      const res = await fetch(`${base}/api/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) {
        alert(`Success! ${data.message}`)
        setCart([])
        setCartOpen(false)
      } else {
        alert(`Checkout failed: ${data.detail || 'unknown error'}`)
      }
    } catch (e) {
      alert(`Request error: ${e.message}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <Hero />
      <Products onAdd={addToCart} />
      <Library />
      <About />
      <Footer />

      <CartSheet
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onCheckout={checkout}
        busy={busy}
      />
    </div>
  )
}

export default App
