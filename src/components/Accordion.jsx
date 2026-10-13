import { useState } from 'react'
import { Plus } from 'lucide-react'

// Single-open accordion with a smooth height transition using the grid-rows trick.
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <ul className="divide-y divide-grey-200 border-y border-grey-200">
      {items.map((item, i) => {
        const expanded = open === i
        return (
          <li key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(expanded ? -1 : i)}
              aria-expanded={expanded}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg font-semibold tracking-tight md:text-xl">{item.q}</span>
              <Plus
                className={`mt-1 h-5 w-5 shrink-0 text-cobalt-600 transition-transform duration-300 ${expanded ? 'rotate-45' : ''}`}
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-400 ease-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 text-base leading-relaxed text-grey-700">{item.a}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
