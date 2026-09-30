'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase, CheckCircle2 } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SectionHead from './SectionHead'

interface TimelineItemProps {
  side: 'left' | 'right'
  role: string
  org: string
  place: string
  time: string
  points: string[]
  tags: string[]
}

function TimelineItem({
  side,
  role,
  org,
  place,
  time,
  points,
  tags,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 mb-12 ${
        side === 'right'
          ? 'md:[&>div:first-child]:order-2'
          : ''
      }`}
    >
      {/* Date & Location */}
      <div
        className={`hidden md:block ${
          side === 'right' ? 'text-left' : 'text-right'
        }`}
      >
        <div className="text-fuchsia-300 text-sm font-mono">
          {time}
        </div>

        <div className="text-xs text-zinc-500 mt-1 flex items-center gap-1.5 justify-end md:justify-start">
          {side === 'left' && <MapPin className="h-3 w-3" />}
          {place}
        </div>
      </div>

      {/* Experience Card */}
      <div className="relative">
        {/* Timeline Icon */}
        <div className="absolute -left-12 md:left-auto md:-translate-x-1/2 md:-ml-[14px] top-2 w-7 h-7 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 grid place-items-center ring-4 ring-[#070617] shadow-lg shadow-fuchsia-500/40">
          <Briefcase className="h-3.5 w-3.5" />
        </div>

        <Card className="glass border-white/10">
          <CardContent className="p-6">

            {/* Mobile Date */}
            <div className="md:hidden text-fuchsia-300 text-xs font-mono mb-2">
              {time} · {place}
            </div>

            {/* Role */}
            <h3 className="text-lg font-bold font-display">
              {role}
            </h3>

            {/* Organization */}
            <div className="text-zinc-400 text-sm">
              {org}
            </div>

            {/* Responsibilities */}
            <ul className="mt-3 space-y-2">
              {points.map((p, idx) => (
                <li
                  key={idx}
                  className="text-sm text-zinc-300 flex gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="bg-white/5 border border-white/10 text-zinc-200 hover:bg-fuchsia-500/20"
                >
                  {t}
                </Badge>
              ))}
            </div>

          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">

        <SectionHead
          kicker="Journey"
          title="Experience"
        />

        <div className="relative max-w-3xl mx-auto">

          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-fuchsia-500/60 via-violet-500/40 to-cyan-400/30" />

          {/* Sayathari Tech */}
          <TimelineItem
            side="left"
            role="Frontend Developer Intern"
            org="Sayathari Tech"
            place="Nepal"
            time="Jun 2026 – Sep 2026"
            points={[
              'Developed and maintained responsive web interfaces using React.js, JavaScript, HTML, and CSS.',
              'Built reusable UI components and integrated REST APIs to create dynamic and user-friendly application features.',
              'Worked with Git and GitHub for version control, collaborative development, and maintaining clean project workflows.',
              'Debugged UI issues, improved responsiveness across devices, and collaborated with the team to deliver frontend features.',
            ]}
            tags={[
              'React.js',
              'JavaScript',
              'HTML',
              'CSS',
              'REST APIs',
              'Git',
              'GitHub',
            ]}
          />

          {/* Codec Technologies */}
          <TimelineItem
            side="right"
            role="Developer Intern"
            org="Codec Technologies"
            place="Remote / Chennai"
            time="Aug 2025 – Sep 2025"
            points={[
              'Preprocessed and cleaned 50,000+ row business datasets, improving data quality and downstream model reliability.',
              'Engineered classification models using Random Forest and Logistic Regression, applying SMOTE oversampling to improve minority-class recall.',
              'Evaluated machine learning models using precision, recall, and F1-score to identify effective predictive approaches.',
            ]}
            tags={[
              'Python',
              'Scikit-learn',
              'Pandas',
              'SMOTE',
            ]}
          />

        </div>
      </div>
    </section>
  )
}