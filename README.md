# International Consulting Services (SL) Ltd — website

Marketing site for a civil engineering consultancy at 28 Bathurst Street, Freetown.
ICS is a consultancy, not a contractor: copy should describe design, procurement and supervision, never construction by ICS.
Built with React 19, Vite, Tailwind CSS v4, React Router and Lucide icons.

Type: Bricolage Grotesque (display), Instrument Sans (body), IBM Plex Mono (labels and numbers), loaded from Google Fonts in `index.html`.

## Run

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint
```

## Structure

- `src/data/site.js` — all copy, contact details, services, projects, stats, team and image URLs. Edit content here.
- `src/pages/` — Home, Services, Projects, ProjectDetail (`/projects/:slug`), About, Contact, NotFound.
- `src/components/InnerPage.jsx` — the shared template every page except Home uses: `PageIntro`, `Featured` carousel, sticky `Toolbar` (filters or `SectionNav`), `PageSection`, `Card`, then the call to action and a "next page" link. Inner pages sit on the dark navy ground.
- `src/components/` — Navbar, Footer, HeroCarousel (home), ProjectCard, Button, plus motion helpers: `Reveal` (scroll reveal), `CountUp` (animated stats), `Marquee` (ticker), `Accordion` (FAQ), `BackToTop`.
- `src/index.css` — Tailwind theme (navy, cobalt accent, warm greys) and shared utilities.

## Before launch

Search `src/data/site.js` for `PLACEHOLDER` and replace:

- phone number and email address
- founding year and the four headline statistics
- the six illustrative projects, their clients and outcomes
- the two testimonials
- leadership names and roles

Photos are Unsplash stock loaded from `images.unsplash.com`. Replace them with the
firm's own photography by swapping the `src` values (or dropping files into `public/`).

The contact form opens the visitor's mail client via `mailto:`. Wire it to a form
backend (Formspree, Netlify Forms, etc.) in `src/pages/Contact.jsx` when one is available.

Routing is client-side; configure your host to serve `index.html` for all paths.
# ics-web
