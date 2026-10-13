// Continuous horizontal ticker. Content is duplicated so the loop is seamless.
export default function Marquee({ items, dark = false }) {
  const text = dark ? 'text-white/70' : 'text-grey-500'
  const dot = dark ? 'bg-cobalt-400' : 'bg-cobalt-600'
  const border = dark ? 'border-white/10' : 'border-grey-200'
  const row = [...items, ...items]
  return (
    <div className={`group overflow-hidden border-y ${border}`} aria-label="Sectors we serve">
      <ul className="flex w-max animate-marquee items-center py-4 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <li key={`${item}-${i}`} className={`flex items-center gap-6 pr-6 font-mono text-[12px] uppercase tracking-[0.18em] ${text}`} aria-hidden={i >= items.length}>
            {item}
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}
