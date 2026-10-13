import { useMemo, useState } from 'react'
import { ChevronDown, Search, ArrowDown, ArrowUp, X } from 'lucide-react'
import InnerPage, { PageSection, Card } from '../components/InnerPage'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects, sectors, sectorSummaries, deliveryRoles, testimonials } from '../data/site'

const PAGE_SIZE = 9
const selectClass =
  'appearance-none border border-white/30 bg-transparent py-2.5 pl-4 pr-10 font-mono text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:border-white focus:border-white focus:outline-none [&>option]:bg-navy-950'

function Select({ label, value, onChange, options }) {
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={selectClass} aria-label={label}>
        {options.map((o) => <option key={o} value={o}>{o === 'All' ? label : o}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 h-3.5 w-3.5 text-white/70" strokeWidth={2} aria-hidden="true" />
    </label>
  )
}

export default function Projects() {
  const [sector, setSector] = useState('All')
  const [location, setLocation] = useState('All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('desc')
  const [page, setPage] = useState(1)

  const locations = useMemo(() => ['All', ...new Set(projects.map((p) => p.location))], [])
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects
      .filter((p) => sector === 'All' || p.sector === sector)
      .filter((p) => location === 'All' || p.location === location)
      .filter((p) => !q || `${p.title} ${p.summary} ${p.role} ${p.client}`.toLowerCase().includes(q))
      .sort((a, b) => (sort === 'desc' ? b.year.localeCompare(a.year) : a.year.localeCompare(b.year)))
  }, [sector, location, query, sort])

  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
  const current = Math.min(page, pages)
  const visible = results.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)
  const filtered = sector !== 'All' || location !== 'All' || query
  const reset = () => { setSector('All'); setLocation('All'); setQuery(''); setPage(1) }
  const set = (fn) => (v) => { fn(v); setPage(1) }

  const featured = projects.slice(0, 3).map((p) => ({
    title: p.title, text: p.summary, to: `/projects/${p.slug}`, cta: 'View project', tags: [p.sector], image: p.image,
  }))

  const toolbar = (
    <div className="flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 font-display text-sm font-semibold">Filter by</span>
        <Select label="Sector" value={sector} onChange={set(setSector)} options={sectors} />
        <Select label="Location" value={location} onChange={set(setLocation)} options={locations} />
        {filtered && (
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60 hover:text-white">
            <X className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />Clear all
          </button>
        )}
      </div>
      <label className="relative flex items-center">
        <span className="sr-only">Search projects</span>
        <input type="search" value={query} onChange={(e) => set(setQuery)(e.target.value)} placeholder="Search"
          className="w-full border border-white/30 bg-transparent py-2.5 pl-4 pr-10 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none lg:w-64" />
        <Search className="pointer-events-none absolute right-3 h-4 w-4 text-white/70" strokeWidth={2} aria-hidden="true" />
      </label>
    </div>
  )

  return (
    <InnerPage
      current="/projects"
      intro={{
        trail: [{ label: 'Projects' }],
        title: 'Projects that stand up.',
        lead: 'From district feeder roads and replacement bridges to hospital wings and donor-funded tenders, see how we design, supervise and procure infrastructure across Sierra Leone.',
      }}
      featured={featured}
      featuredLabel="Featured projects"
      toolbar={toolbar}
      cta={{ title: 'See something similar to your project?', text: 'We are glad to share references and discuss comparable work in confidence.' }}
    >
      <section id="portfolio" className="scroll-mt-36">
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">{results.length} {results.length === 1 ? 'item' : 'items'}</p>
          <button type="button" onClick={() => setSort((s) => (s === 'desc' ? 'asc' : 'desc'))} className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60 hover:text-white">
            Sort by date
            {sort === 'desc' ? <ArrowDown className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" /> : <ArrowUp className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />}
          </button>
        </div>
        {visible.length > 0 ? (
          <ul key={`${sector}-${location}-${query}-${sort}-${current}`} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <li key={p.slug} className="animate-rise" style={{ animationDelay: `${i * 60}ms` }}><ProjectCard project={p} /></li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 bg-navy-900 p-10 text-center">
            <p className="text-lg font-semibold">No projects match those filters.</p>
            <button type="button" onClick={reset} className="mt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-cobalt-400 hover:text-white">Clear all filters</button>
          </div>
        )}
        {pages > 1 && (
          <nav className="mt-12 flex justify-center gap-1" aria-label="Pagination">
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button key={n} type="button" onClick={() => setPage(n)} aria-current={n === current ? 'page' : undefined}
                className={`h-10 w-10 font-mono text-[12px] ${n === current ? 'bg-white text-ink' : 'text-white/60 hover:text-white'}`}>{n}</button>
            ))}
          </nav>
        )}
      </section>

      <PageSection id="sectors" eyebrow="Sectors" title="Where the work falls" intro="Most of our commissions fall into three sectors, often with more than one practice working on the same scheme.">
        <ul className="grid gap-4 md:grid-cols-3">
          {sectorSummaries.map((s, i) => (
            <Reveal as="li" key={s.key} delay={i * 90}>
              <Card meta={`${projects.filter((p) => p.sector === s.key).length} projects`} title={s.title} text={s.text}>
                <button type="button" onClick={() => { set(setSector)(s.key); setLocation('All'); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="mt-6 self-start font-mono text-[12px] uppercase tracking-[0.12em] text-white hover:text-cobalt-400">Show {s.title.toLowerCase()} →</button>
              </Card>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection id="roles" eyebrow="Our role" title="Three ways we are appointed" intro="We never hold the construction contract. Clients engage us in one of three consulting roles, and sometimes all three on the same programme.">
        <ul className="grid gap-4 md:grid-cols-3">
          {deliveryRoles.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 90}><Card title={r.title} text={r.text} /></Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection id="clients" eyebrow="Clients say" title="In their words">
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="flex flex-col bg-navy-900 p-8">
              <blockquote className="flex-1 font-display text-xl font-semibold leading-snug tracking-tight">“{t.quote}”</blockquote>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">{t.name} · {t.org}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>
    </InnerPage>
  )
}
