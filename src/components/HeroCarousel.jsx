import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Button from './Button'

const INTERVAL = 8000

// Full-bleed hero with a dark text panel. Slides auto-advance with a progress
// bar, pause on hover, and each image drifts slowly while active.
export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length

  useEffect(() => {
    if (paused || count < 2) return undefined
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL)
    return () => window.clearInterval(id)
  }, [paused, count])

  const go = (delta) => setIndex((i) => (i + delta + count) % count)
  const slide = slides[index]

  return (
    <section
      className="relative isolate overflow-hidden bg-navy-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((s, i) => (
        <img
          key={s.image.src}
          src={s.image.src}
          alt={s.image.alt}
          className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? 'animate-kenburns opacity-100' : 'opacity-0'
          }`}
          style={i === index ? { animationPlayState: paused ? 'paused' : 'running' } : undefined}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/70 via-navy-950/25 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

      <div className="container-x flex min-h-[600px] items-end py-10 md:min-h-[720px] md:py-14">
        <div className="relative w-full max-w-xl overflow-hidden bg-navy-950/90 p-8 backdrop-blur-sm md:p-12">
          <div key={index} className="animate-rise">
            <p className="eyebrow text-cobalt-400">{slide.eyebrow}</p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tightest md:text-[2.9rem]">{slide.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">{slide.text}</p>
            <div className="mt-8">
              <Button to={slide.to} variant="light">
                {slide.cta}
              </Button>
            </div>
          </div>

          {count > 1 && (
            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous slide"
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next slide"
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
              <div className="flex gap-2" role="tablist" aria-label="Slides">
                {slides.map((s, i) => (
                  <button
                    key={s.title}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1 w-6 transition-colors ${i === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Autoplay progress */}
          {count > 1 && (
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10">
              <span
                key={index}
                className="block h-full animate-progress bg-cobalt-500"
                style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: paused ? 'paused' : 'running' }}
              />
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
