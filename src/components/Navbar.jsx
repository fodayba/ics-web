import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { headerNav } from '../data/site'

// Sticky header that tucks away on scroll down and returns on scroll up.
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const close = () => setOpen(false)

  // Lock page scroll while the menu is open. The panel covers the viewport
  // and contains its own overscroll, so touch scrolling cannot reach the page.
  useEffect(() => {
    if (!open) return undefined
    const html = document.documentElement
    html.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      html.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on Escape and when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && close()
    const mq = window.matchMedia('(min-width: 48rem)')
    const onChange = () => mq.matches && close()
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 160 && !open)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  // Let sticky toolbars under the header follow it when it tucks away.
  useEffect(() => {
    document.documentElement.classList.toggle('header-hidden', hidden && !open)
  }, [hidden, open])

  return (
    <header
      className={`sticky top-0 z-40 bg-navy-950 text-white transition-transform duration-500 ease-out ${
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-18">
        <Link to="/" aria-label="Home" className="-ml-6 h-full md:-ml-10" onClick={close}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {headerNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-baseline gap-2 text-[13px] font-medium transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`
              }
            >
              <span className="link-underline">{item.label}</span>
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-cobalt-600 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-cobalt-500"
          >
            Contact us
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
        </button>
      </div>

      {/* The header carries a transform, which turns it into the containing
          block for any `fixed` descendant. Position the panel absolutely
          against the header instead so it reliably fills the rest of the
          viewport below the bar. */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full h-[calc(100vh-4rem)] h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain bg-navy-950 pb-[max(2rem,env(safe-area-inset-bottom))] md:hidden"
        >
          <nav className="container-x flex flex-col pt-4" aria-label="Mobile">
            {headerNav.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={close}
                style={{ animationDelay: `${i * 60}ms` }}
                className={({ isActive }) =>
                  `flex animate-rise items-baseline border-b border-white/10 py-5 font-display text-3xl font-semibold tracking-tight ${
                    isActive ? 'text-white' : 'text-white/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={close}
              className="mt-8 inline-flex items-center justify-center gap-3 bg-cobalt-600 px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
            >
              Contact us
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
