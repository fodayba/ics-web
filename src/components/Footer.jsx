import { Link } from 'react-router-dom'
import { firm, nav, services } from '../data/site'

const year = new Date().getFullYear()

const quickLinks = [
  { label: 'Email us', href: `mailto:${firm.email}` },
  { label: 'Call us', href: `tel:${firm.phone.replace(/\s/g, '')}` },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-2xl font-semibold tracking-tightest">{firm.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{firm.tagline}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="inline-flex items-center border border-white/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/80 transition-colors hover:border-white hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5 text-white/50">Explore</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/80 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5 text-white/50">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} className="text-sm text-white/80 transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5 text-white/50">Office</p>
            <address className="space-y-3 text-sm not-italic leading-relaxed text-white/80">
              <p>
                {firm.address.line1}
                <br />
                {firm.address.city}, {firm.address.country}
              </p>
              <p>
                <a href={`tel:${firm.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-white">
                  {firm.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${firm.email}`} className="transition-colors hover:text-white">
                  {firm.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} {firm.name}. All rights reserved.</p>
          <p>Registered in Sierra Leone.</p>
        </div>
      </div>
    </footer>
  )
}
