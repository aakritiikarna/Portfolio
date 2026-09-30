'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Server, BrainCircuit, Database, Layers, MapPin, GraduationCap } from 'lucide-react'

function Stat({ label, val }: { label: string; val: string }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 py-2">
      <div className="text-lg font-bold gradient-text font-display">{val}</div>
      <div className="text-[10px] uppercase tracking-wider text-zinc-400">{label}</div>
    </div>
  )
}

function Chip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-zinc-200">
      <span className="text-fuchsia-300">{icon}</span>
      {text}
    </div>
  )
}

export default function TiltCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [rot, setRot] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setRot({ x: -py * 12, y: px * 16 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}
      className="relative mx-auto max-w-sm rounded-3xl glass glow-border p-6 transition-transform"
    >
      <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-[11px] font-semibold text-white shadow-lg">
        AVAILABLE 2026
      </div>
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 grid place-items-center text-2xl font-black font-display">
          AK
        </div>
        <div>
          <div className="font-semibold font-display">Aakriti Karna</div>
          <div className="text-xs text-zinc-400">Backend & ML · B.Tech CS 2026</div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        <Stat label="Projects" val="6+" />
        <Stat label="APIs Built" val="20+" />
        <Stat label="ML Models" val="5" />
      </div>
      <div className="mt-5 space-y-2">
        <Chip icon={<Server className="h-3.5 w-3.5" />} text="Spring Boot · Node.js · REST" />
        <Chip icon={<BrainCircuit className="h-3.5 w-3.5" />} text="Random Forest · SMOTE · Sklearn" />
        <Chip icon={<Database className="h-3.5 w-3.5" />} text="MongoDB · MySQL · Indexing" />
        <Chip icon={<Layers className="h-3.5 w-3.5" />} text="Next.js · TypeScript · Socket.io" />
      </div>
      <div className="mt-5 flex items-center justify-between text-xs text-zinc-400">
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" /> Chennai, IN
        </span>
        <span className="flex items-center gap-1.5">
          <GraduationCap className="h-3.5 w-3.5" /> Vel Tech University
        </span>
      </div>
    </motion.div>
  )
}
