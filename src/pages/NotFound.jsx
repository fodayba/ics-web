import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="bg-navy-950 text-white">
      <div className="container-x flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="eyebrow mb-5 text-cobalt-400">Error 404</p>
        <h1 className="text-4xl font-bold tracking-tightest md:text-6xl">This page does not exist.</h1>
        <p className="mt-5 max-w-md text-base text-white/60 md:text-lg">The link may be out of date, or the page may have moved.</p>
        <div className="mt-10"><Button to="/" variant="light">Back to home</Button></div>
      </div>
    </section>
  )
}
