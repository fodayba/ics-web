import { useState } from 'react'
import InnerPage, { PageSection, Card } from '../components/InnerPage'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { firm, visiting, otherEnquiries, images } from '../data/site'

const sections = [
  { id: 'enquiry', label: 'Enquiry' },
  { id: 'office', label: 'Office' },
  { id: 'visiting', label: 'Visiting' },
  { id: 'other', label: 'Other enquiries' },
]

const fieldClass =
  'w-full border border-white/25 bg-navy-950 px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors focus:border-white focus:outline-none'

const nextSteps = [
  'We acknowledge your enquiry within one working day.',
  'A senior engineer calls to understand the brief.',
  'You receive a scoped proposal, usually within a week.',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', organisation: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const phoneHref = `tel:${firm.phone.replace(/\s/g, '')}`

  // Opens the visitor's mail client with the message prefilled.
  // Replace with a form backend (e.g. Formspree, Netlify Forms) when available.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name}${form.organisation ? `, ${form.organisation}` : ''}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.organisation}\n${form.email}`)
    window.location.href = `mailto:${firm.email}?subject=${subject}&body=${body}`
    setSent(true)
  }
  const mapQuery = encodeURIComponent(`${firm.address.line1}, ${firm.address.city}, ${firm.address.country}`)

  const featured = [{
    title: 'Let us talk about your project.',
    text: 'Write to us, call the office, or visit us on Bathurst Street in central Freetown. A senior engineer reads every enquiry.',
    to: '#enquiry', cta: 'Send an enquiry', image: images.banners.contact,
    facts: [
      { label: 'Office', value: `${firm.address.line1}, ${firm.address.city}` },
      { label: 'Hours', value: firm.hours },
      { label: 'Phone', value: <a href={phoneHref} className="link-underline">{firm.phone}</a> },
      { label: 'Email', value: <a href={`mailto:${firm.email}`} className="link-underline">{firm.email}</a> },
    ],
  }]

  return (
    <InnerPage
      current="/contact"
      intro={{ trail: [{ label: 'Contact' }], title: 'Start a conversation.', lead: 'A few lines about the site, the scope and the timeline is enough to begin.' }}
      featured={featured}
      featuredLabel="Contact details"
      sections={sections}
      cta={{ title: 'Prefer to talk first?', text: 'Call the office during working hours and ask for the duty engineer.' }}
    >
      <PageSection id="enquiry" eyebrow="Enquiry" title="Tell us about the project">
        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            {sent ? (
              <div className="bg-navy-900 p-8 md:p-10">
                <h3 className="text-2xl font-bold tracking-tightest">Thank you, {form.name.split(' ')[0]}.</h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  Your mail client should have opened with the enquiry ready to send. If it did not, email us directly at{' '}
                  <a href={`mailto:${firm.email}`} className="link-underline font-medium text-white">{firm.email}</a>.
                </p>
                <button type="button" onClick={() => setSent(false)} className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-cobalt-400 hover:text-white">Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-navy-900 p-8 md:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block"><span className="eyebrow mb-2 block text-white/50">Name</span>
                    <input name="name" required value={form.name} onChange={update} className={fieldClass} placeholder="Your full name" autoComplete="name" /></label>
                  <label className="block"><span className="eyebrow mb-2 block text-white/50">Organisation</span>
                    <input name="organisation" value={form.organisation} onChange={update} className={fieldClass} placeholder="Company or agency" autoComplete="organization" /></label>
                  <label className="block sm:col-span-2"><span className="eyebrow mb-2 block text-white/50">Email</span>
                    <input type="email" name="email" required value={form.email} onChange={update} className={fieldClass} placeholder="you@example.com" autoComplete="email" /></label>
                  <label className="block sm:col-span-2"><span className="eyebrow mb-2 block text-white/50">Message</span>
                    <textarea name="message" required rows={6} value={form.message} onChange={update} className={`${fieldClass} resize-none`} placeholder="Tell us about the site, the scope and the timeline." /></label>
                </div>
                <div className="mt-8"><Button type="submit" variant="light">Send enquiry</Button></div>
              </form>
            )}
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4">
            <Card meta="What happens next">
              <ol className="mt-5 space-y-4">
                {nextSteps.map((step) => <li key={step} className="border-t border-white/10 pt-4 text-sm leading-relaxed text-white/80 first:border-t-0 first:pt-0">{step}</li>)}
              </ol>
            </Card>
          </Reveal>
        </div>
      </PageSection>

      <PageSection id="office" eyebrow="Office" title={firm.address.line1}>
        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Card>
              <dl className="space-y-5">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Address</dt>
                  <dd className="mt-1.5 text-base leading-relaxed">{firm.address.line1}<br />{firm.address.city}, {firm.address.country}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Phone</dt>
                  <dd className="mt-1.5 text-base leading-relaxed"><a href={phoneHref} className="link-underline">{firm.phone}</a></dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Email</dt>
                  <dd className="mt-1.5 text-base leading-relaxed"><a href={`mailto:${firm.email}`} className="link-underline">{firm.email}</a></dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Hours</dt>
                  <dd className="mt-1.5 text-base leading-relaxed">{firm.hours}</dd>
                </div>
              </dl>
            </Card>
          </Reveal>
          <Reveal delay={100} className="min-h-80 lg:col-span-8">
            <iframe title="Map showing the ICS (SL) Ltd office at 28 Bathurst Street, Freetown" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} className="h-80 w-full lg:h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
      </PageSection>

      <PageSection id="visiting" eyebrow="Visiting" title="Finding us">
        <ul className="grid gap-4 md:grid-cols-3">
          {visiting.map((v, i) => <Reveal as="li" key={v.title} delay={i * 90}><Card title={v.title} text={v.text} /></Reveal>)}
        </ul>
      </PageSection>

      <PageSection id="other" eyebrow="Other enquiries" title="Not a project enquiry?" intro={`Use the same address, ${firm.email}, and mention the subject in the first line so it reaches the right person.`}>
        <ul className="grid gap-4 md:grid-cols-3">
          {otherEnquiries.map((o, i) => <Reveal as="li" key={o.title} delay={i * 90}><Card title={o.title} text={o.text} /></Reveal>)}
        </ul>
      </PageSection>
    </InnerPage>
  )
}
