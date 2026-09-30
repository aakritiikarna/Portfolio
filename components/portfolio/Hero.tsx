'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Download, ArrowRight, Rocket } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Typewriter from './Typewriter'
import TiltCard from './TiltCard'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-zinc-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Open to Backend / SDE roles — 2026 batch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] font-display"
            >
              Hi, I&apos;m <span className="gradient-text">Aakriti Karna</span>
            </motion.h1>
            <div className="grid md:grid-cols-2 items-center gap-10">
  <div>
    {/* Text Content */}
  </div>
</div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 text-xl md:text-2xl text-zinc-200 font-display font-medium"
            >
              A <Typewriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 text-zinc-400 max-w-xl leading-relaxed"
            >
              CS graduate (B.Tech 2026) building scalable, production-ready systems with Java backend &amp; Python ML.
              I love turning messy data into reliable APIs and meaningful products — most recently a{' '}
              <span className="text-fuchsia-300">Donation &amp; Charity Management Platform</span> built in Next.js + TypeScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a href="#projects">
                <Button className="bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:opacity-90 text-white border-0 shadow-lg shadow-fuchsia-500/30">
                  <Rocket className="mr-2 h-4 w-4" /> View My Work
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10 text-white">
                  <Mail className="mr-2 h-4 w-4" /> Get In Touch
                </Button>
              </a>
              <a href="mailto:AkreetyKarna123@gmail.com">
                <Button variant="ghost" className="text-zinc-300 hover:bg-white/5">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-4 text-zinc-400"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:AkreetyKarna123@gmail.com" className="hover:text-white transition">
                <Mail className="h-5 w-5" />
              </a>
              <Separator orientation="vertical" className="h-5 bg-white/10" />
              <span className="text-xs">kathmandu,Nepal  +977-9768631071</span>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <TiltCard />
          </div>
        </div>
      </div>
    </section>
  )
}
