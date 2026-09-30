'use client'

import { motion } from 'framer-motion'
import { Briefcase, Award, GraduationCap, HeartHandshake, Terminal } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import SectionHead from './SectionHead'

function Highlight({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
      <div className="flex items-center gap-2 text-fuchsia-300">
        {icon}
        <span className="text-sm font-semibold text-white">{title}</span>
      </div>
      <div className="text-xs text-zinc-400 mt-0.5">{sub}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead
          kicker="About Me"
          title="Engineer who ships."
          subtitle="I build backend systems that don't just work they scale. ML that doesn't just predict it explains."
        />
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-white/10 h-full">
              <CardContent className="p-7">
                <p className="text-zinc-300 leading-relaxed">
                  I&apos;m a Computer Science graduate at <span className="text-fuchsia-300">Vel Tech University.</span>
                   My playground is the intersection of{' '}
                  <span className="text-cyan-300">production backends</span> and{' '}
                  <span className="text-violet-300">applied machine learning</span> — from real-time APIs with Socket.io
                  to imbalanced-class fraud detection with SMOTE.
                </p>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Lately I&apos;ve been crafting <span className="text-fuchsia-300">DonateNow</span> — a Donation &amp; Charity
                  Management platform in Next.js + TypeScript that helps NGOs receive funds, track impact, and give donors
                  transparent receipts.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Highlight icon={<Briefcase className="h-4 w-4" />} title="Intern" sub="Codec Technologies" />
                  <Highlight icon={<Award className="h-4 w-4" />} title="3 Certs" sub="Azure · GenAI · Python" />
                  <Highlight icon={<GraduationCap className="h-4 w-4" />} title="CGPA 7.3" sub="B.Tech CSE" />
                  <Highlight icon={<HeartHandshake className="h-4 w-4" />} title="Open Source" sub="Always shipping" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-white/10 h-full overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?auto=format&fit=crop&w=1200&q=70')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0820]/90 via-[#0a0820]/60 to-transparent" />
              <CardContent className="p-7 relative">
                <div className="text-sm text-fuchsia-300 mb-2 flex items-center gap-2 font-mono">
                  <Terminal className="h-4 w-4" />
                  ~/aakriti --whoami
                </div>
                <pre className="text-xs md:text-sm text-zinc-200 leading-7 whitespace-pre-wrap font-mono">
{`{
  "name": "Aakriti Karna",
  "role": "Backend + ML Engineer",
  "education": "B.Tech CSE @ Vel Tech (2026)",
  "stack": ["Java", "Spring Boot", "Python",
            "Node.js", "Next.js", "MongoDB"],
  "currentlyBuilding": "DonateNow — charity platform",
  "loves": ["clean APIs", "imbalanced datasets",
            "real-time systems"],
  "wantsToWork": "scalable backend / SDE roles"
}`}
                </pre>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
