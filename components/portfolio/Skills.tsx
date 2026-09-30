'use client'

import { motion } from 'framer-motion'
import { Code2, Server, BrainCircuit, Database, GitBranch, Cpu } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import SectionHead from './SectionHead'
import type { SkillGroup } from '@/types'

const SKILL_GROUPS: (SkillGroup & { icon: React.ReactNode })[] = [
  {
    title: 'Languages',
    icon: <Code2 className="h-5 w-5" />,
    items: [
      ['Java', 92],
      ['Python', 88],
      ['TypeScript', 80],
      ['SQL', 84],
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="h-5 w-5" />,
    items: [
      ['Spring Boot', 88],
      ['Node.js · Express', 85],
      ['REST APIs', 92],
      ['JWT · bcrypt · Socket.io', 86],
    ],
  },
  {
    title: 'Data & ML',
    icon: <BrainCircuit className="h-5 w-5" />,
    items: [
      ['Scikit-learn', 86],
      ['Pandas · NumPy', 88],
      ['Random Forest · LR', 84],
      ['SMOTE · Feature Eng.', 80],
    ],
  },
  {
    title: 'Database',
    icon: <Database className="h-5 w-5" />,
    items: [
      ['MongoDB', 86],
      ['MySQL', 84],
      ['Schema Design', 80],
      ['Indexing & Aggregation', 78],
    ],
  },
  {
    title: 'Tools',
    icon: <GitBranch className="h-5 w-5" />,
    items: [
      ['Git · GitHub', 90],
      ['VS Code', 92],
      ['Postman', 88],
      ['Linux CLI', 78],
    ],
  },
  {
    title: 'CS Core',
    icon: <Cpu className="h-5 w-5" />,
    items: [
      ['DSA', 86],
      ['OOP', 90],
      ['Operating Systems', 80],
      ['Networks', 78],
    ],
  },
]

const MARQUEE = [
  'Java', 'Spring Boot', 'Python', 'Scikit-learn', 'Node.js', 'Express', 'MongoDB', 'MySQL',
  'Socket.io', 'JWT', 'bcrypt', 'Next.js', 'TypeScript', 'REST', 'Pandas', 'NumPy',
  'Random Forest', 'SMOTE', 'Git', 'GitHub',
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead
          kicker="Tech Arsenal"
          title="Skills & Tools"
          subtitle="A focused stack — picked for shipping reliable systems, not collecting badges."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="glass border-white/10 h-full hover:border-fuchsia-500/40 transition group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-500/30 grid place-items-center text-fuchsia-300 group-hover:scale-110 transition">
                      {g.icon}
                    </div>
                    <h3 className="font-semibold font-display">{g.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {g.items.map(([name, val]) => (
                      <div key={name}>
                        <div className="flex justify-between text-xs text-zinc-400 mb-1">
                          <span className="text-zinc-200">{name}</span>
                          <span>{val}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${val}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden border-y border-white/10 py-4">
          <div className="flex gap-8 w-max animate-marquee">
            {[...MARQUEE, ...MARQUEE].map((s, i) => (
              <span key={i} className="text-zinc-400 hover:text-fuchsia-300 transition text-sm font-mono whitespace-nowrap">
                ✦ {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
