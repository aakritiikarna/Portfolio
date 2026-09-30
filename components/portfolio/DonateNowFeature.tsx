'use client'

import { motion } from 'framer-motion'
import {
  Star, HeartHandshake, Wallet, ShieldCheck, BarChart3, Bell, Users,
  ExternalLink, Github, Globe, ArrowUpRight, Zap,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Campaign } from '@/types'

const CAMPAIGNS: Campaign[] = [
  {
    title: 'Books for Rural Schools',
    raised: 78400,
    goal: 100000,
    donors: 312,
    days: 7,
    tag: 'Education',
    img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Meals for Flood Victims',
    raised: 154200,
    goal: 200000,
    donors: 521,
    days: 3,
    tag: 'Disaster',
    img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Cancer Treatment — Priya',
    raised: 89600,
    goal: 250000,
    donors: 198,
    days: 21,
    tag: 'Medical',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=60',
  },
]

function FeaturePill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm">
      <span className="text-fuchsia-300">{icon}</span>
      {text}
    </div>
  )
}

function CampaignCard({ c }: { c: Campaign }) {
  const pct = Math.min(100, Math.round((c.raised / c.goal) * 100))
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-fuchsia-500/40 transition group">
      <div className="relative h-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-500"
          style={{ backgroundImage: `url(${c.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a25] to-transparent" />
        <Badge className="absolute top-2 left-2 bg-black/60 border-white/10 text-[10px]">{c.tag}</Badge>
      </div>
      <div className="p-3">
        <div className="text-sm font-semibold line-clamp-1">{c.title}</div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-zinc-400">
          <span>
            ₹{(c.raised / 1000).toFixed(1)}k <span className="text-zinc-500">/ ₹{(c.goal / 1000).toFixed(0)}k</span>
          </span>
          <span>
            {c.donors} donors · {c.days}d left
          </span>
        </div>
      </div>
    </div>
  )
}

function MiniStat({ icon, label, val }: { icon: React.ReactNode; label: string; val: string }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-violet-500/30 border border-fuchsia-500/30 grid place-items-center text-fuchsia-300">
        {icon}
      </div>
      <div>
        <div className="text-xs text-zinc-400">{label}</div>
        <div className="font-bold">{val}</div>
      </div>
    </div>
  )
}

export default function DonateNowFeature() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative rounded-3xl glass glow-border overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative p-6 md:p-10 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-500/30 px-3 py-1 text-xs text-fuchsia-200">
            <Star className="h-3.5 w-3.5 fill-fuchsia-400 text-fuchsia-400" /> Flagship · 2025
          </div>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display">
            <span className="gradient-text">DonateNow</span>
            <span className="block text-xl md:text-2xl text-zinc-200 font-bold mt-1">
              Donation &amp; Charity Management Platform
            </span>
          </h3>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            A complete <span className="text-fuchsia-300">Next.js + TypeScript</span> platform that empowers NGOs to launch
            campaigns, collect verified donations, and prove impact with transparent ledgers. Designed for trust — built for
            scale.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <FeaturePill icon={<HeartHandshake className="h-4 w-4" />} text="Campaign Management" />
            <FeaturePill icon={<Wallet className="h-4 w-4" />} text="Secure Donations" />
            <FeaturePill icon={<ShieldCheck className="h-4 w-4" />} text="Verified NGOs" />
            <FeaturePill icon={<BarChart3 className="h-4 w-4" />} text="Impact Analytics" />
            <FeaturePill icon={<Bell className="h-4 w-4" />} text="Real-time Updates" />
            <FeaturePill icon={<Users className="h-4 w-4" />} text="Donor Community" />
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {['Next.js 15', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Stripe-ready', 'NextAuth', 'shadcn/ui', 'Framer Motion'].map(
              (t) => (
                <Badge key={t} className="bg-white/5 border border-white/10 text-zinc-200">
                  {t}
                </Badge>
              )
            )}
          </div>

          <div className="mt-6 flex gap-2">
  <Button
    asChild
    variant="outline"
    className="border-white/15 bg-white/5 text-white hover:bg-white/10"
  >
    <a
      href="https://github.com/yourusername/yourrepo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="mr-2 h-4 w-4" />
      Source Code
    </a>
  </Button>
</div>

</div>


        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-[#0c0a25] border border-white/10 shadow-2xl shadow-fuchsia-900/30 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#13102b] border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              <div className="ml-3 px-3 py-1 rounded-md bg-black/40 text-[11px] text-zinc-400 font-mono flex items-center gap-1.5">
                <Globe className="h-3 w-3" /> donatenow.app/campaigns
              </div>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400">Active Campaigns</div>
                  <div className="text-lg font-bold font-display">Help. Heal. Hope.</div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 border border-fuchsia-500/30 text-xs text-fuchsia-200">
                    Total raised: ₹3.2L
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs">1,031 donors</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {CAMPAIGNS.map((c, i) => (
                  <CampaignCard key={i} c={c} />
                ))}
              </div>

              <div className="rounded-xl bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border border-white/10 p-3 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-500 grid place-items-center">
                    <Wallet className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Quick Donate</div>
                    <div className="text-[11px] text-zinc-400">UPI · Card · Net Banking</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {['₹100', '₹500', '₹1000', '₹5000'].map((v) => (
                    <button
                      key={v}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs hover:bg-fuchsia-500/20 hover:border-fuchsia-500/40 transition"
                    >
                      {v}
                    </button>
                  ))}
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white border-0">
                    Donate <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>

                            <div className="grid sm:grid-cols-3 gap-3">
                <MiniStat icon={<HeartHandshake />} label="NGOs Onboarded" val="48" />
                <MiniStat icon={<ShieldCheck />} label="Verified Campaigns" val="126" />
                <MiniStat icon={<Zap />} label="Avg. Payout Time" val="< 24h" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

