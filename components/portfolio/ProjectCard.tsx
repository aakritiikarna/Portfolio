'use client'

import { motion } from 'framer-motion'
import { Calendar, ChevronRight, Github, ExternalLink } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  title: string
  time: string
  stack: string[]
  points: string[]
  accent: string
  image: string
  icon: React.ReactNode
}

export default function ProjectCard({ title, time, stack, points, accent, image, icon }: ProjectCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <Card className="glass border-white/10 overflow-hidden h-full group hover:border-fuchsia-500/40 transition">
        <div className="relative h-44 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition group-hover:scale-110 duration-700"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0820] via-[#0a0820]/40 to-transparent" />
          <div className={`absolute inset-0 mix-blend-multiply bg-gradient-to-br ${accent} opacity-30`} />
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs">
            <Calendar className="h-3 w-3" /> {time}
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${accent} grid place-items-center shadow-lg`}>{icon}</div>
              <h3 className="text-lg font-bold drop-shadow font-display">{title}</h3>
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <ul className="space-y-2">
            {points.map((p, i) => (
              <li key={i} className="text-sm text-zinc-300 flex gap-2">
                <ChevronRight className="h-4 w-4 text-fuchsia-400 mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <Badge key={s} variant="secondary" className="bg-white/5 border border-white/10 text-zinc-200">
                {s}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <Button size="sm" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
              <Github className="mr-1.5 h-3.5 w-3.5" /> Code
            </Button>
            <Button size="sm" variant="ghost" className="text-zinc-300 hover:bg-white/5">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
