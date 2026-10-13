import { useState } from 'react'
import HeroCarousel from '../components/HeroCarousel'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import TextLink from '../components/TextLink'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import Marquee from '../components/Marquee'
import CallToAction from '../components/CallToAction'
import { firm, services, stats, approach, projects, testimonials, sectorsServed, images } from '../data/site'

export default function Home() {
  const [active, setActive] = useState(0)
  const featuredService = services[active]
  const featuredProjects = projects.slice(0, 3)

  const slides = [
    {
      eyebrow: `${firm.address.line1}, ${firm.address.city}`,
      title: 'Engineering the infrastructure Sierra Leone is built on.',
      text: 'Independent civil engineering consultancy. We design, we supervise, and we make sure what is built matches the design.',
      cta: 'Explore our services',
      to: '/services',
      image: images.hero[0],
    },
    ...services.map((s, i) => ({ eyebrow: s.title, title: s.headline, text: s.summary, cta: 'Find out more', to: `/services#${s.slug}`, image: images.hero[i + 1] })),
  ]

  return (
    <>
      <HeroCarousel slides={slides} />
      <Marquee items={sectorsServed} />

      <section className="container-x section-y">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-4 text-cobalt-600">Who we are</p>
            <h2 className="text-3xl font-bold tracking-tightest md:text-5xl">Local knowledge.<br />International standards.</h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="text-base leading-relaxed text-grey-700 md:text-lg">
              {firm.name} is a Freetown-based civil engineering consultancy. We plan and design roads, bridges and buildings, we supervise the contractors who build them on our clients' behalf, and we run procurement for public bodies and development partners who need every step to be transparent and defensible. We do not build. We design, and we make sure what is built matches the design.
            </p>
            <div className="mt-6"><TextLink to="/about">About the firm</TextLink></div>
          </Reveal>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-4 md:mt-16 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} as="div" delay={i * 90} className="ticks flex flex-col bg-grey-100 p-6 text-ink md:p-8">
              <dd className="order-1 font-display text-4xl font-bold tracking-tightest md:text-5xl"><CountUp value={s.value} /></dd>
              <dt className="order-2 mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-grey-500">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="bg-grey-50">
        <div className="container-x section-y">
          <SectionHeading eyebrow="Services" title="Services that solve complex challenges" text="We bring together the right engineers, methods and local experience to design infrastructure that is built to last." action={{ to: '/services', label: 'All services' }} />
          <Reveal className="mt-12 grid md:mt-16 md:grid-cols-2" delay={100}>
            <div className="flex flex-col justify-between bg-navy-950 p-8 text-white md:p-12">
              <div key={featuredService.slug} className="animate-rise">
                <p className="eyebrow text-cobalt-400">{featuredService.headline}</p>
                <h3 className="mt-4 text-2xl font-bold tracking-tightest md:text-3xl">{featuredService.title}</h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 md:text-base">{featuredService.description}</p>
              </div>
              <div className="mt-12"><TextLink to={`/services#${featuredService.slug}`} light>View service</TextLink></div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
              <img key={featuredService.slug} src={featuredService.image.src} alt={featuredService.image.alt} className="absolute inset-0 h-full w-full animate-fade-in object-cover" loading="lazy" />
            </div>
          </Reveal>
          <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max border-b border-grey-200 sm:grid sm:min-w-0 sm:grid-cols-3" role="tablist" aria-label="Services">
            {services.map((s, i) => {
              const selected = i === active
              return (
                <button key={s.slug} type="button" role="tab" aria-selected={selected} onClick={() => setActive(i)}
                  className={`relative shrink-0 px-4 py-5 text-left font-mono text-[11px] uppercase tracking-[0.14em] whitespace-nowrap transition-colors ${selected ? 'text-ink' : 'text-grey-500 hover:text-ink'}`}>
                  <span className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-cobalt-600 transition-transform duration-500 ease-out ${selected ? 'scale-x-100' : 'scale-x-0'}`} />
                  {s.title}
                </button>
              )
            })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 text-white">
        <div className="container-x section-y">
          <SectionHeading light eyebrow="Projects" title="Projects that deliver impact" text="How we bring complex schemes to life, delivering practical, lasting outcomes for the communities and clients we serve." action={{ to: '/projects', label: 'All projects' }} />
          <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 100}><ProjectCard project={p} /></Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHeading eyebrow="How we work" title="Simple process. Serious rigour." text="A clear sequence that clients can follow and contractors can build from." />
        <ol className="mt-12 grid gap-px border border-grey-200 bg-grey-200 md:mt-16 md:grid-cols-4">
          {approach.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100} className="flex flex-col bg-white p-7 transition-colors hover:bg-grey-50 md:p-8">
              <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grey-500">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-grey-50">
        <div className="container-x section-y">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <Reveal className="relative min-h-72 md:col-span-5">
              <img src={images.why.src} alt={images.why.alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </Reveal>
            <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 150} className={i > 0 ? 'mt-12 border-t border-grey-200 pt-12' : ''}>
                  <blockquote className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">“{t.quote}”</blockquote>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-grey-500">{t.name} · {t.org}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
