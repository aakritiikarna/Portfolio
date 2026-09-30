'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Star, CheckCircle2, ArrowUpRight } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import SectionHead from './SectionHead'
import type { Certification } from '@/types'

const CERTS: Certification[] = [
  { name: 'Azure Cloud Fundamentals', issuer: 'Microsoft Learn', icon: '☁️', color: 'from-sky-500 to-blue-500' },
  { name: 'Introduction to Generative AI', issuer: 'Google Cloud', icon: '✨', color: 'from-amber-500 to-rose-500' },
  { name: 'Introduction to Python', issuer: 'Coursera', icon: '🐍', color: 'from-emerald-500 to-teal-500' },
]

export default function EducationAndCerts() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead kicker="Credentials" title="Education & Certifications" />
        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass border-white/10 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-500 grid place-items-center">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-fuchsia-300 font-mono">2022 – 2026</div>
                    <h3 className="font-bold text-lg mt-0.5 font-display">Vel Tech University</h3>
                    <div className="text-sm text-zinc-300">B.Tech in Computer Science &amp; Engineering</div>
                    <div className="text-xs text-zinc-400 mt-1">Chennai, India</div>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs text-emerald-300">
                      <Star className="h-3 w-3 fill-emerald-400" /> CGPA · 7.3
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {['OOP', 'DSA', 'OS', 'Networks', 'DBMS', 'SE'].map((s) => (
                    <div key={s} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs">
                      {s}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {CERTS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="glass border-white/10 h-full hover:border-fuchsia-500/40 transition group">
                  <CardContent className="p-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center text-2xl shadow-lg group-hover:scale-110 transition`}
                    >
                      {c.icon}
                    </div>
                    <h4 className="mt-4 font-semibold font-display">{c.name}</h4>
                    <div className="text-xs text-zinc-400 mt-1">{c.issuer}</div>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="text-emerald-300 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                      </span>
                      <span className="text-fuchsia-300 flex items-center gap-1">
                        View <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
