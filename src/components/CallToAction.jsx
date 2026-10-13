import Button from './Button'
import { images } from '../data/site'

export default function CallToAction({
  title = 'Have a project in mind?',
  text = 'Tell us about the site, the scope and the timeline. We respond within two working days.',
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <img src={images.cta.src} alt={images.cta.alt} className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-navy-950/80" />
      <div className="container-x section-y">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tightest md:text-5xl">{title}</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">{text}</p>
          </div>
          <Button to="/contact" variant="accent" className="shrink-0">
            Start a conversation
          </Button>
        </div>
      </div>
    </section>
  )
}
