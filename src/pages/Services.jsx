import InnerPage, { PageSection, Card } from '../components/InnerPage'
import Reveal from '../components/Reveal'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import { services, serviceDetails, approach, standards, faqs } from '../data/site'

const sections = [
  { id: 'overview', label: 'Overview' },
  ...services.map((s) => ({ id: s.slug, label: s.title.replace(' & Infrastructure', '') })),
  { id: 'process', label: 'How we work' },
  { id: 'standards', label: 'Standards' },
  { id: 'faq', label: 'Questions' },
]

const List = ({ items }) => (
  <ul className="mt-5 divide-y divide-white/10">
    {items.map((c) => <li key={c} className="py-2.5 text-sm text-white/85">{c}</li>)}
  </ul>
)

export default function Services() {
  const featured = services.map((s) => ({ title: s.headline, text: s.description, to: `#${s.slug}`, cta: 'View service', tags: [s.title], image: s.image }))
  return (
    <InnerPage
      current="/services"
      intro={{
        trail: [{ label: 'Services' }],
        title: 'Engineering advice you can build on.',
        lead: 'Three consulting practices, each led by senior engineers. We design, we prepare the documents contractors build from, and we supervise on our clients\' behalf. We do not build.',
      }}
      featured={featured}
      featuredLabel="Featured services"
      sections={sections}
      cta={{ title: 'Not sure which service you need?', text: 'Describe the problem and we will tell you honestly whether and how we can help.' }}
    >
      <PageSection id="overview" eyebrow="Overview" title="What we do" intro="Our practices are organised around the three questions clients bring us most often: how do we connect this place, will this building stand, and how do we buy this work properly.">
        <ul className="grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 90}>
              <Card title={s.title} text={s.summary}>
                <a href={`#${s.slug}`} className="mt-6 self-start font-mono text-[12px] uppercase tracking-[0.12em] text-white hover:text-cobalt-400">Read more →</a>
              </Card>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      {services.map((s) => {
        const d = serviceDetails[s.slug]
        return (
          <PageSection key={s.slug} id={s.slug} eyebrow={s.headline} title={s.title} intro={s.description}
            action={<Button to="/contact" variant="light" className="shrink-0">Discuss a brief</Button>}>
            <div className="grid gap-4 lg:grid-cols-12">
              <Reveal className="relative min-h-72 lg:col-span-7">
                <img src={s.image.src} alt={s.image.alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              </Reveal>
              <Reveal delay={90} className="lg:col-span-5"><Card meta="Capabilities"><List items={s.capabilities} /></Card></Reveal>
              <Reveal delay={140} className="lg:col-span-6"><Card meta="Who it is for"><List items={d.clients} /></Card></Reveal>
              <Reveal delay={190} className="lg:col-span-6"><Card meta="What you receive"><List items={d.deliverables} /></Card></Reveal>
            </div>
          </PageSection>
        )
      })}

      <PageSection id="process" eyebrow="How we work" title="From first site visit to final certificate" intro="A clear sequence that clients can follow and contractors can build from. The same four stages apply whether the job is a culvert or a hospital.">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90}><Card title={step.title} text={step.text} /></Reveal>
          ))}
        </ol>
      </PageSection>

      <PageSection id="standards" eyebrow="Standards" title="Codes, procedures and checks" intro="Every deliverable is produced to a named standard and checked by an engineer who did not produce it.">
        <div className="grid gap-4 md:grid-cols-3">
          {standards.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}><Card meta={g.title}><List items={g.items} /></Card></Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection id="faq" eyebrow="Questions" title="Frequently asked" intro="Straight answers to the questions clients raise most often.">
        <Reveal><Accordion items={faqs} dark /></Reveal>
      </PageSection>
    </InnerPage>
  )
}
