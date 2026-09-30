'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin, Sparkles, Send } from 'lucide-react'
import { toast } from 'sonner'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import SectionHead from './SectionHead'
import type { ContactForm } from '@/types'

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const inner = (
    <div className="flex items-center gap-4 group">
      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-fuchsia-300 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-500/40 transition">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-wider text-zinc-500">{label}</div>
        <div className="text-sm text-zinc-100 group-hover:text-fuchsia-300 transition">{value}</div>
      </div>
    </div>
  )
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  )
}

const INITIAL_FORM: ContactForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM)
  const [loading, setLoading] = useState(false)

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      toast.success('Message sent! Aakriti will reply soon.')
      setForm(INITIAL_FORM)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead kicker="Let's Talk" title="Get In Touch" subtitle="Have a role, a project, or a wild idea? My inbox is open." />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="glass border-white/10 h-full">
              <CardContent className="p-7 space-y-5">
                <ContactRow icon={<Mail />} label="Email" value="AkreetyKarna123@gmail.com" href="mailto:AkreetyKarna123@gmail.com" />
                <ContactRow icon={<Phone />} label="Phone" value="+977-9768631071" href="tel:+977-9768631071" />
                <ContactRow icon={<Linkedin />} label="LinkedIn" value="linkedin.com/in/aakriti-karna" href="https://linkedin.com" />
                <ContactRow icon={<Github />} label="GitHub" value="github.com/aakriti-karna" href="https://github.com" />
                <ContactRow icon={<MapPin />} label="Location" value="Kathmandu,Nepal" />

                <div className="rounded-xl bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border border-white/10 p-4">
                  <div className="text-sm font-semibold flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-fuchsia-300" /> Open to opportunities
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Backend / Full-stack / ML Engineer · 2026 grad · Remote or Nepal</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="glass border-white/10 h-full">
              <CardContent className="p-7">
                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <label className="text-xs text-zinc-400 mb-1.5 block">Your Name</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="bg-white/5 border-white/10 focus-visible:ring-fuchsia-500/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 mb-1.5 block">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="bg-white/5 border-white/10 focus-visible:ring-fuchsia-500/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 mb-1.5 block">Message</label>
                    <Textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the role or idea…"
                      className="bg-white/5 border-white/10 focus-visible:ring-fuchsia-500/40"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:opacity-90 text-white border-0"
                  >
                    {loading ? (
                      'Sending…'
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-[11px] text-zinc-500 text-center">Your message is stored securely. No spam, ever.</p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
