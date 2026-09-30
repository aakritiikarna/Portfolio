'use client'

import { useEffect, useState } from 'react'

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 })
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 transition-opacity"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(192,132,252,0.10), transparent 60%)`,
      }}
    />
  )
}
