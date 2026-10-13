import Button from './Button'
import Reveal from './Reveal'

// Section header: eyebrow, heading and copy on the left, optional action on the right.
export default function SectionHeading({ eyebrow, title, text, action, light = false, className = '' }) {
  const titleColor = light ? 'text-white' : 'text-ink'
  const textColor = light ? 'text-white/70' : 'text-grey-500'
  return (
    <Reveal className={`flex flex-col gap-8 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-2xl">
        {eyebrow && <p className={`eyebrow mb-4 ${light ? 'text-cobalt-400' : 'text-cobalt-600'}`}>{eyebrow}</p>}
        <h2 className={`text-3xl font-bold tracking-tightest md:text-5xl ${titleColor}`}>{title}</h2>
        {text && <p className={`mt-5 text-base leading-relaxed md:text-lg ${textColor}`}>{text}</p>}
      </div>
      {action && (
        <Button to={action.to} variant={light ? 'light' : 'primary'} className="shrink-0">
          {action.label}
        </Button>
      )}
    </Reveal>
  )
}
