'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { NavItem } from '@/types'

const NAV: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 ${
            scrolled ? 'glass shadow-[0_8px_40px_-12px_rgba(168,85,247,0.35)]' : ''
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 grid place-items-center font-black text-white shadow-lg font-display">
              AK
              <span className="absolute -inset-0.5 rounded-xl bg-fuchsia-500/40 blur opacity-0 group-hover:opacity-100 transition" />
            </div>
            <span className="hidden sm:block font-semibold tracking-tight font-display">
              Aakriti<span className="text-fuchsia-400">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3 py-1.5 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact">
              <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:opacity-90 text-white border-0">
                Hire Me <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-3"
            >
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 rounded-lg"
                >
                  {n.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
