import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-zinc-400">
        <div>
          © {new Date().getFullYear()} Aakriti Karna · Built with <span className="text-fuchsia-300">Next.js</span> + ♥
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com" className="hover:text-white transition">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com" className="hover:text-white transition">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:AkreetyKarna123@gmail.com" className="hover:text-white transition">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
