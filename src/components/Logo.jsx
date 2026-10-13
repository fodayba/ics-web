export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex h-full items-center gap-3 bg-white px-5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-7 w-7 shrink-0" aria-hidden="true">
        <path d="M14 46 L32 16 L50 46" fill="none" stroke="#0b5ed7" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
        <line x1="22" y1="38" x2="42" y2="38" stroke="#0e1116" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[19px] font-bold tracking-tight text-ink">ICS</span>
        <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-grey-500">(SL) Ltd</span>
      </span>
    </span>
  )
}
