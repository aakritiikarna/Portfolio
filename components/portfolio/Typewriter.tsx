'use client'

import { useEffect, useState } from 'react'

const ROLES = ['Backend Engineer', 'Java + Spring Boot', 'Python ML Practitioner', 'Next.js Builder', 'Problem Solver']

export default function Typewriter() {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const full = ROLES[i % ROLES.length]
    const speed = del ? 40 : 80
    const timer = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, text.length + 1)
        setText(next)
        if (next === full) setTimeout(() => setDel(true), 1200)
      } else {
        const next = full.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDel(false)
          setI(i + 1)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [text, del, i])

  return (
    <span className="text-fuchsia-300">
      {text}
      <span className="caret">|</span>
    </span>
  )
}
