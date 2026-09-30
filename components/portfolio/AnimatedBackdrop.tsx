export default function AnimatedBackdrop() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1240_0%,_#070617_55%,_#04030f_100%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full aurora" />
      <div className="absolute top-20 -left-24 w-[420px] h-[420px] rounded-full bg-fuchsia-600/30 blur-3xl animate-blob" />
      <div
        className="absolute bottom-10 -right-24 w-[460px] h-[460px] rounded-full bg-cyan-500/25 blur-3xl animate-blob"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-[360px] h-[360px] rounded-full bg-violet-600/25 blur-3xl animate-blob"
        style={{ animationDelay: '8s' }}
      />
      <div className="absolute inset-0 bg-grid" />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
    </div>
  )
}
