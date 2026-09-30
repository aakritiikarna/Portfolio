'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface SectionHeadProps {
  kicker: string
  title: string
  subtitle?: string
}

export default function SectionHead({ kicker, title, subtitle }: SectionHeadProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-fuchsia-300">
        <Sparkles className="h-3.5 w-3.5" /> {kicker}
      </div>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight font-display">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl mx-auto text-zinc-400">{subtitle}</p>}
    </motion.div>
  )
}
