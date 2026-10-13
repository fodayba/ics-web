import InnerPage, { PageSection, Card } from '../components/InnerPage'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import Button from '../components/Button'
import { firm, stats, values, team, milestones, affiliations, careers, images } from '../data/site'

const sections = [
  { id: 'story', label: 'Our story' },
  { id: 'principles', label: 'Principles' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'affiliations', label: 'Affiliations' },
  { id: 'careers', label: 'Careers' },
]

export default function About() {
  const featured = [
    { title: 'A Freetown practice with an international standard.', text: `Independent civil engineering advice from ${firm.address.line1} since ${firm.founded}. We design, we supervise, and we make sure what is built matches the design.`, to: '#story', cta: 'Our story', image: images.story },
    { title: 'Senior engineers on every project.', text: 'The engineers who win the work are the engineers who deliver it. Directors and practice leads stay personally responsible for every deliverable.', to: '#leadership', cta: 'Meet the leadership', image: images.why },
    { title: 'Every district in Sierra Leone.', text: 'From the Western Area peninsula to Kailahun, our commissions have taken us to all sixteen districts.', to: '#milestones', cta: 'See the milestones', image: images.banners.projects },
  ]
  return (
    <InnerPage
      current="/about"
      intro={{ trail: [{ label: 'About' }], title: 'Challenging today. Building tomorrow.', lead: 'Who we are, what we hold ourselves to, and how the practice has grown.' }}
      featured={featured}
      featuredLabel="About the firm"
      sections={sections}
      cta={{ title: 'Work with us.', text: 'We welcome enquiries from clients, partners and engineers alike.' }}
    >
      <PageSection id="story" eyebrow="Our story" title="Why the firm exists">
        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="space-y-5 text-base leading-relaxed text-white/75 md:text-lg lg:col-span-7">
            <p>We were founded to give public bodies, development partners and private clients in Sierra Leone access to engineering advice that is both locally grounded and internationally rigorous.</p>
            <p>Our work spans the roads and bridges that connect districts, the buildings that house hospitals, schools and businesses, and the procurement processes that ensure public money is spent well.</p>
            <p>We are a consultancy, not a contractor. We design, we prepare the documents the contractor builds from, and we supervise on the client's behalf so that what is built matches the design.</p>
          </Reveal>
          <dl className="grid grid-cols-2 gap-4 lg:col-span-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} as="div" delay={i * 90} className="ticks bg-navy-900 p-6 text-white">
                <dd className="font-display text-3xl font-bold tracking-tightest md:text-4xl"><CountUp value={s.value} /></dd>
                <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">{s.label}</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </PageSection>

      <PageSection id="principles" eyebrow="Principles" title="What we hold ourselves to" intro="Four commitments that shape every drawing, report and site visit.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => <Reveal as="li" key={v.title} delay={i * 90}><Card title={v.title} text={v.text} /></Reveal>)}
        </ul>
      </PageSection>

      <PageSection id="leadership" eyebrow="Leadership" title="Senior engineers on every project" intro="Our directors and practice leads remain personally responsible for the quality of each deliverable.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 90}>
              <Card meta={m.role} title={m.name}>
                <div className="mt-6 flex h-14 w-14 items-center justify-center bg-white font-mono text-sm text-ink">{m.initials}</div>
              </Card>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection id="milestones" eyebrow="Milestones" title="How the practice has grown">
        <ol className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-5">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.year} delay={i * 80} className="bg-navy-950 p-6">
              <p className="font-display text-3xl font-bold tracking-tightest">{m.year}</p>
              <h3 className="mt-6 text-base font-semibold tracking-tight">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </PageSection>

      <PageSection id="affiliations" eyebrow="Affiliations" title="Registrations and memberships">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {affiliations.map((a, i) => (
            <Reveal as="li" key={a} delay={i * 80} className="border border-white/20 p-5 text-sm font-medium">{a}</Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection id="careers" eyebrow="Careers" title={careers.title} intro={careers.text}>
        <Reveal><Button to="/contact" variant="light">Send us your CV</Button></Reveal>
      </PageSection>
    </InnerPage>
  )
}
