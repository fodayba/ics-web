import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const base =
  'group/btn inline-flex items-center justify-center gap-3 px-6 py-3.5 font-mono text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2'

const variants = {
  primary: 'bg-ink text-white hover:bg-cobalt-600',
  accent: 'bg-cobalt-600 text-white hover:bg-cobalt-500',
  light: 'bg-white text-ink hover:bg-cobalt-600 hover:text-white',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-white',
  outlineLight: 'border border-white/70 text-white hover:bg-white hover:text-ink',
}

export default function Button({ to, href, variant = 'primary', children, arrow = true, className = '', ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2} aria-hidden="true" />
      )}
    </>
  )
  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{content}</a>
  return <button type="button" className={classes} {...rest}>{content}</button>
}
