import { useEffect, useState } from 'react'

// Tracks which of the given section ids is currently in the reading band of the viewport.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? null)
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}
