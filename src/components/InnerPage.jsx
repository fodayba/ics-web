import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'
import CallToAction from './CallToAction'
import Reveal from './Reveal'
import { nav, pageOrder } from '../data/site'

// Shared architecture for every page except the home page, on a dark ground:
// text intro, featured carousel, sticky toolbar, sections, CTA, next page.

export function Breadcrumb({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
      <Link to="/" className="transition-colors hover:text-white">Home</Link>
      {trail.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span className="text-white/25">/</span>
          {item.to ? <Link to={item.to} className="transition-colors hover:text-white">{item.label}</Link> : <span className="text-white/80">{item.label}</span>}
        </span>
      ))}
    </nav>
  )
}

export function PageIntro({ trail, title, lead }) {
  return (
    <section className="container-x pt-10 pb-12 md:pt-14 md:pb-16">
      <Breadcrumb trail={trail} />
      <h1 className="mt-10 max-w-4xl animate-rise text-4xl font-bold leading-[1.02] tracking-tightest md:mt-14 md:text-6xl">{title}</h1>
      {lead && <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-white/70 [animation-delay:120ms] md:text-xl">{lead}</p>}
    </section>
  )
}

// Large split card carousel: text panel on the left, photo on the right.
export function Featured({ items, label = 'Featured' }) {
  const [index, setIndex] = useState(0)
  const count = items.length
  useEffect(() => {
    if (count < 2) return undefined
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 9000)
    return () => window.clearInterval(id)
  }, [count])
  const item = items[index]
  const go = (d) => setIndex((i) => (i + d + count) % count)
  return (
    <section className="container-x pb-14 md:pb-20" aria-roledescription={count > 1 ? 'carousel' : undefined} aria-label={label}>
      <div className="grid overflow-hidden bg-navy-900 lg:grid-cols-2">
        <div key={index} className="flex animate-rise flex-col justify-between p-8 md:p-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tightest md:text-4xl">{item.title}</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">{item.text}</p>
            {item.facts && (
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                {item.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">{f.label}</dt>
                    <dd className="mt-1 text-sm font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            {item.to && (
              <Link to={item.to} className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-white hover:text-cobalt-400">
                {item.cta || 'View'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
              </Link>
            )}
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((t) => <span key={t} className="chip border-transparent bg-white text-ink">{t}</span>)}
              </div>
            )}
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[480px]">
          <img key={item.image.src} src={item.image.src} alt={item.image.alt} className="absolute inset-0 h-full w-full animate-fade-in object-cover" loading={index === 0 ? 'eager' : 'lazy'} />
        </div>
      </div>
      {count > 1 && (
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Featured items">
            {items.map((it, i) => (
              <button key={it.title} type="button" role="tab" aria-selected={i === index} aria-label={`Item ${i + 1}`} onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => go(-1)} aria-label="Previous" className="inline-flex h-11 w-11 items-center justify-center border border-white/30 transition-colors hover:border-white hover:bg-white hover:text-ink">
              <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next" className="inline-flex h-11 w-11 items-center justify-center border border-white/30 transition-colors hover:border-white hover:bg-white hover:text-ink">
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

// Sticky bar under the header. Pages pass filters or the on-page section nav.
export function Toolbar({ children }) {
  return (
    <div className="sticky top-16 z-20 border-y border-white/10 bg-navy-950/90 backdrop-blur md:top-18">
      <div className="container-x">{children}</div>
    </div>
  )
}

export function SectionNav({ sections }) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections])
  const active = useActiveSection(ids)
  return (
    <nav aria-label="On this page" className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] md:-mx-10 md:px-10">
      <ul className="flex gap-1 py-3">
        {sections.map((s) => {
          const on = s.id === active
          return (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} aria-current={on ? 'location' : undefined}
                className={`inline-block px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${on ? 'bg-white text-ink' : 'text-white/60 hover:text-white'}`}>
                {s.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export function PageSection({ id, eyebrow, title, intro, children, action }) {
  return (
    <section id={id} className="scroll-mt-36">
      <Reveal className="flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          {eyebrow && <p className="eyebrow text-cobalt-400">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-bold tracking-tightest md:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">{intro}</p>}
        </div>
        {action}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}

// Standard dark card used across inner pages.
export function Card({ title, text, meta, children, className = '' }) {
  return (
    <div className={`ticks flex h-full flex-col bg-navy-900 p-7 text-white transition-colors hover:bg-navy-800 ${className}`}>
      {meta && <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">{meta}</p>}
      {title && <h3 className={`text-xl font-semibold tracking-tight ${meta ? 'mt-5' : ''}`}>{title}</h3>}
      {text && <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{text}</p>}
      {children}
    </div>
  )
}

function NextPage({ current }) {
  const idx = pageOrder.indexOf(current)
  const next = nav.find((n) => n.to === pageOrder[(idx + 1) % pageOrder.length])
  if (!next) return null
  return (
    <section className="border-t border-white/10">
      <Link to={next.to} className="group container-x flex items-center justify-between gap-6 py-12 md:py-16">
        <div>
          <p className="eyebrow text-white/50">Next</p>
          <p className="mt-2 font-display text-4xl font-bold tracking-tightest transition-colors group-hover:text-cobalt-400 md:text-6xl">{next.label}</p>
        </div>
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center border border-white/40 transition-all duration-300 group-hover:bg-white group-hover:text-ink md:h-20 md:w-20">
          <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden="true" />
        </span>
      </Link>
    </section>
  )
}

export default function InnerPage({ current, intro, featured, featuredLabel, toolbar, sections, cta, children }) {
  return (
    <div className="bg-navy-950 text-white">
      <PageIntro {...intro} />
      {featured && <Featured items={featured} label={featuredLabel} />}
      <Toolbar>{toolbar ?? <SectionNav sections={sections} />}</Toolbar>
      <div className="container-x space-y-20 py-16 md:space-y-24 md:py-20">{children}</div>
      <CallToAction {...cta} />
      <NextPage current={current} />
    </div>
  )
}
