'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 h-[3px] origin-left z-50 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
    />
  )
}
