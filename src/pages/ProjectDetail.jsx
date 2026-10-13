import { useParams, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import InnerPage, { PageSection, Card } from '../components/InnerPage'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import NotFound from './NotFound'
import { projects } from '../data/site'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'scope', label: 'Our role' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'related', label: 'Related work' },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx === -1) return <NotFound />
  const project = projects[idx]
  const nextProject = projects[(idx + 1) % projects.length]
  const related = projects.filter((p) => p.slug !== slug && p.sector === project.sector).slice(0, 3)

  const featured = [{
    title: 'At a glance', text: project.summary, tags: [project.sector, project.location], image: project.image,
    facts: [
      { label: 'Client', value: project.client },
      { label: 'Our role', value: project.role },
      { label: 'Location', value: project.location },
      { label: 'Completed', value: project.year },
    ],
  }]

  return (
    <InnerPage
      current="/projects"
      intro={{ trail: [{ label: 'Projects', to: '/projects' }, { label: project.title }], title: project.title }}
      featured={featured}
      featuredLabel="Project summary"
      sections={sections}
      cta={{ title: 'Planning something similar?', text: 'We are glad to share references and discuss comparable work in confidence.' }}
    >
      <PageSection id="overview" eyebrow="Overview" title="The challenge">
        <Reveal className="max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{project.body[0]}</Reveal>
      </PageSection>

      <PageSection id="scope" eyebrow="Our role" title="What ICS did">
        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="text-base leading-relaxed text-white/75 md:text-lg lg:col-span-7">{project.body[1]}</Reveal>
          <Reveal delay={100} className="relative min-h-64 lg:col-span-5">
            <img src={project.image.src} alt={project.image.alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </PageSection>

      <PageSection id="outcomes" eyebrow="Outcomes" title="What it delivered">
        <ul className="grid gap-4 md:grid-cols-3">
          {project.outcomes.map((o, i) => <Reveal as="li" key={o} delay={i * 90}><Card title={o} /></Reveal>)}
        </ul>
      </PageSection>

      <PageSection id="related" eyebrow="Related work" title={`More ${project.sector.toLowerCase()} projects`}
        action={
          <Link to={`/projects/${nextProject.slug}`} className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-white hover:text-cobalt-400">
            Next project<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
          </Link>
        }>
        {related.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((p, i) => <Reveal key={p.slug} delay={i * 100}><ProjectCard project={p} /></Reveal>)}
          </div>
        ) : <p className="text-sm text-white/60">No other projects in this sector yet.</p>}
      </PageSection>
    </InnerPage>
  )
}
