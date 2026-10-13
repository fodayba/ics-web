import { Link } from 'react-router-dom'

// Image-led project card: location chip over the photo, title, sector tags.
export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group flex h-full flex-col bg-navy-900 text-white transition-colors hover:bg-navy-800">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={project.image.src} alt={project.image.alt} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
        <span className="chip absolute top-4 left-4 border-transparent bg-navy-950 text-white">{project.location}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="flex-1 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-cobalt-400 md:text-xl">{project.title}</h3>
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="chip border-white/60 text-white">{project.sector}</span>
          <span className="chip border-white/60 text-white">{project.year}</span>
        </div>
      </div>
    </Link>
  )
}
