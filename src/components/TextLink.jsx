import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TextLink({ to, children, light = false, className = '' }) {
  const color = light ? 'text-white hover:text-cobalt-400' : 'text-ink hover:text-cobalt-600'
  return (
    <Link to={to} className={`group inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.12em] ${color} transition-colors ${className}`}>
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.25} aria-hidden="true" />
    </Link>
  )
}
