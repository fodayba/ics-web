import { useEffect, useRef, useState } from 'react'

// Animates a numeric value like "120+" from zero when it scrolls into view.
export default function CountUp({ value, duration = 1400, className = '' }) {
  const match = String(value).match(/^([^0-9]*)([0-9][0-9,.]*)(.*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? Number(match[2].replace(/,/g, '')) : 0
  const suffix = match ? match[3] : String(value)

  const ref = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return undefined
    let frame = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 4)
          setCurrent(Math.round(target * eased))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  )
}
