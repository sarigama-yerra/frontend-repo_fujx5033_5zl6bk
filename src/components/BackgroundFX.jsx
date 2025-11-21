import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// BackgroundFX renders fluid, hi-tech parallax orbs and a subtle grid
// that respond to scroll to create a continuous, futuristic backdrop.
export default function BackgroundFX() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: false })

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* subtle animated gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,#0ea5e9_0%,rgba(14,165,233,0.35)_25%,rgba(79,70,229,0.25)_55%,transparent_70%)] opacity-60" />

      {/* hi-tech grid overlay */}
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* floating orbs with depth and parallax */}
      <motion.div style={{ y: y1, rotate, scale }} className="absolute -top-10 -left-10 h-[42vmax] w-[42vmax] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 blur-3xl opacity-25 mix-blend-screen" />
      <motion.div style={{ y: y2, rotate }} className="absolute top-1/3 -right-24 h-[36vmax] w-[36vmax] rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-400 blur-3xl opacity-20 mix-blend-screen" />
      <motion.div style={{ y: y1 }} className="absolute bottom-[-15vmax] left-1/3 h-[32vmax] w-[32vmax] rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-blue-600 blur-3xl opacity-20 mix-blend-screen" />

      {/* animated sheen passing downwards */}
      <div className="absolute inset-x-0 -top-1/3 h-[120vh] bg-gradient-to-b from-white/10 via-transparent to-transparent [mask-image:linear-gradient(to_bottom,white,transparent)] animate-[pulse_8s_ease-in-out_infinite]" />

      {/* noise for texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?><svg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\' viewBox=\'0 0 120 120\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.5\'/></svg>" )' }} />
    </div>
  )
}
