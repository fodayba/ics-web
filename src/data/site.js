// Central content for the site. Items marked PLACEHOLDER should be replaced
// with the firm's real details before launch. Photos are Unsplash stock and
// should be swapped for the firm's own project photography.

const photo = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const firm = {
  name: 'International Consulting Services (SL) Ltd',
  shortName: 'ICS (SL) Ltd',
  tagline: 'Independent civil engineering consultancy. We design, we supervise, and we make sure what is built matches the design.',
  address: {
    line1: '28 Bathurst Street',
    city: 'Freetown',
    country: 'Sierra Leone',
  },
  phone: '+232 00 000 000', // PLACEHOLDER
  email: 'info@ics-sl.com', // PLACEHOLDER
  hours: 'Monday to Friday, 8:30 to 17:00',
  founded: '2008', // PLACEHOLDER
}

export const nav = [
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

// Header links exclude Contact because the header already carries a Contact button.
export const headerNav = nav.filter((item) => item.to !== '/contact')

// Reading order for the "next page" link at the foot of each inner page.
export const pageOrder = ['/services', '/projects', '/about', '/contact']

export const images = {
  hero: [
    { src: photo('1465447142348-e9952c393450', 2000), alt: 'Aerial view of a highway interchange' },
    { src: photo('1517089596392-fb9a9033e05b', 2000), alt: 'Aerial view of earthworks on a road corridor' },
    { src: photo('1504307651254-35680f356dfd', 2000), alt: 'Engineers fixing reinforcement on a building site' },
    { src: photo('1517048676732-d65bc937f952', 2000), alt: 'Procurement team reviewing tender documents' },
  ],
  why: { src: photo('1503387762-592deb58ef4e', 1200), alt: 'Engineer reviewing a technical drawing' },
  story: { src: photo('1541888946425-d81bb19240f5', 1600), alt: 'Site team walking across a construction slab' },
  cta: { src: photo('1486406146926-c627a92ad1ab', 1600), alt: 'Looking up at high-rise buildings' },
  banners: {
    services: { src: photo('1536895058696-a69b1c7ba34f', 2000), alt: 'Building under construction at night' },
    projects: { src: photo('1565008447742-97f6f38c985c', 2000), alt: 'Tower cranes over a city skyline' },
    about: { src: photo('1600880292203-757bb62b4baf', 2000), alt: 'Colleagues celebrating in an office' },
    contact: { src: photo('1497366216548-37526070297c', 2000), alt: 'Modern office interior' },
  },
}

export const services = [
  {
    slug: 'transportation-infrastructure',
    title: 'Transportation & Infrastructure',
    headline: 'Roads and bridges that keep the country moving.',
    summary:
      'Planning, design and supervision of roads, bridges, drainage and the public works that connect communities.',
    description:
      'We take transportation and infrastructure schemes from feasibility through to handover. Our engineers combine field survey, traffic and hydrological analysis, and pragmatic design to produce assets that are buildable, maintainable and suited to local conditions. We do not build: we design, and we supervise the contractor so that what is built matches the design.',
    capabilities: [
      'Feasibility studies and route selection',
      'Highway and urban road design',
      'Bridge and culvert design',
      'Drainage and stormwater management',
      'Pavement evaluation and rehabilitation',
      'Construction supervision on behalf of the client',
    ],
    image: { src: photo('1535025183041-0991a977e25b', 1400), alt: 'Coastal road winding along a hillside' },
  },
  {
    slug: 'structural-engineering',
    title: 'Structural Engineering',
    headline: 'Buildings designed to stand for generations.',
    summary:
      'Analysis, design and assessment of buildings and civil structures in concrete, steel and masonry.',
    description:
      'From single-storey facilities to multi-storey commercial and institutional buildings, we provide independent structural design and review. We also assess existing structures, advising on strengthening, repair and safe continued use.',
    capabilities: [
      'Reinforced concrete and steel design',
      'Foundation and geotechnical coordination',
      'Structural assessment of existing buildings',
      'Strengthening and rehabilitation schemes',
      'Peer review and third-party checking',
      'Site inspection and compliance reporting',
    ],
    image: { src: photo('1508450859948-4e04fabaa4ea', 1400), alt: 'Reinforced concrete frame under construction' },
  },
  {
    slug: 'procurement',
    title: 'Procurement',
    headline: 'Procurement that is transparent, compliant and defensible.',
    summary:
      'Procurement strategy, tender documentation and bid evaluation aligned with national and donor requirements.',
    description:
      'We support public bodies, donors and private clients through the full procurement cycle. Our documentation is clear and compliant, and our evaluations are rigorous, transparent and defensible.',
    capabilities: [
      'Procurement planning and strategy',
      'Prequalification and tender documents',
      'Bid evaluation and reporting',
      'Contract drafting and negotiation support',
      'Compliance with NPPA and donor procedures',
      'Contract management and claims advice',
    ],
    image: { src: photo('1454165804606-c3d57bc86b40', 1400), alt: 'Reviewing contract documents at a desk' },
  },
]

export const stats = [
  { value: '15+', label: 'Years in practice' }, // PLACEHOLDER
  { value: '120+', label: 'Commissions completed' }, // PLACEHOLDER
  { value: '3', label: 'Core disciplines' },
  { value: '16', label: 'Districts served' }, // PLACEHOLDER
]

export const values = [
  {
    title: 'Integrity',
    text: 'Independent advice, transparent process, and documentation that stands up to scrutiny.',
  },
  {
    title: 'Rigour',
    text: 'Every design is checked. Every assumption is recorded. Every number can be traced.',
  },
  {
    title: 'Local knowledge',
    text: 'We know the ground, the climate, the supply chain and the regulations of Sierra Leone.',
  },
  {
    title: 'Partnership',
    text: 'We work alongside clients, contractors and communities for the life of the project.',
  },
]

// PLACEHOLDER: illustrative projects. Replace with the firm's real portfolio.
export const projects = [
  {
    title: 'Peninsula Road Rehabilitation',
    slug: 'peninsula-road-rehabilitation',
    client: 'Sierra Leone Roads Authority', // PLACEHOLDER
    body: [
      'The Peninsula Road links Freetown with the beach communities and fishing towns along the Western Area coast. Decades of heavy rain, poor drainage and unplanned development had left long sections impassable in the wet season.',
      'ICS carried out condition surveys and hydrological analysis, then produced a full rehabilitation design: reconstructed pavement, new side drains and culverts, and gabion slope protection on the exposed sections. Our resident engineers supervised the contractor through two rainy seasons, certifying that the works matched the design.',
    ],
    outcomes: ['28 km of carriageway designed and supervised', '41 culverts designed for replacement or extension', 'Works certified within the revised programme'],
    sector: 'Transportation',
    location: 'Western Area',
    year: '2023',
    role: 'Design and supervision',
    summary: 'Rehabilitation of a coastal arterial route including pavement reconstruction, drainage and slope protection.',
    image: { src: photo('1494783367193-149034c05e8f', 1000), alt: 'Newly surfaced road stretching to the horizon' },
  },
  {
    title: 'Regional Hospital Expansion',
    slug: 'regional-hospital-expansion',
    client: 'Ministry of Health and Sanitation', // PLACEHOLDER
    body: [
      'A new three-storey clinical wing was required to double the surgical capacity of the regional hospital while the existing hospital remained fully operational.',
      'ICS designed the reinforced concrete frame and foundations, coordinated the geotechnical investigation, and produced construction drawings and specifications. Detailing accounted for wind loading, local seismic provisions and the vibration limits required for operating theatres.',
    ],
    outcomes: ['3,200 m² of clinical floor area designed', 'Frame designed for future vertical extension', 'Phased design kept hospital services running'],
    sector: 'Structural',
    location: 'Bo',
    year: '2022',
    role: 'Structural design',
    summary: 'Reinforced concrete frame for a three-storey clinical wing with wind and seismic detailing.',
    image: { src: photo('1600585154340-be6161a56a0c', 1000), alt: 'Modern low-rise building at dusk' },
  },
  {
    title: 'District Feeder Roads Programme',
    slug: 'district-feeder-roads-programme',
    client: 'Development partner funded programme', // PLACEHOLDER
    body: [
      'Rural feeder roads connect farming communities in Kenema and Kailahun to markets and health centres. The programme packaged more than a dozen roads into lots suitable for local contractors.',
      'ICS prepared the procurement strategy, prequalification and tender documents, managed the bidding period and produced the evaluation reports. Every step followed the funder\'s procedures and the National Public Procurement Authority regulations.',
    ],
    outcomes: ['14 roads across 5 tender lots', 'Evaluation accepted without objection', 'Local contractors won 4 of 5 lots'],
    sector: 'Procurement',
    location: 'Kenema and Kailahun',
    year: '2022',
    role: 'Procurement advisory',
    summary: 'Tender preparation and bid evaluation for a donor-funded package of rural feeder roads.',
    image: { src: photo('1500530855697-b586d89ba3ee', 1000), alt: 'Rural road through hilly terrain' },
  },
  {
    title: 'Market Bridge Replacement',
    slug: 'market-bridge-replacement',
    client: 'Makeni City Council', // PLACEHOLDER
    body: [
      'The single-span timber crossing beside the central market had been load-restricted for years, forcing goods traffic onto a long detour.',
      'ICS designed a reinforced concrete replacement bridge with new abutments, approach embankments and a dedicated pedestrian walkway, then supervised the contractor and administered the construction contract on behalf of the council.',
    ],
    outcomes: ['18 m clear span designed', 'Full highway loading restored', 'Pedestrian walkways designed on both sides'],
    sector: 'Transportation',
    location: 'Makeni',
    year: '2021',
    role: 'Bridge design',
    summary: 'Replacement of a single-span timber crossing with a reinforced concrete bridge and approach works.',
    image: { src: photo('1590069261209-f8e9b8642343', 1000), alt: 'Steel truss structure at night' },
  },
  {
    title: 'Commercial Office Assessment',
    slug: 'commercial-office-assessment',
    client: 'Private landlord', // PLACEHOLDER
    body: [
      'A 1970s reinforced concrete office building in central Freetown was showing cracking and spalling, and the owner needed to know whether it could safely be refurbished and re-let.',
      'ICS carried out a visual and intrusive condition survey, tested concrete and reinforcement, and modelled the existing structure. We recommended a targeted strengthening scheme that avoided demolition and preserved the building\'s rental value.',
    ],
    outcomes: ['Demolition avoided', 'Strengthening scheme limited to two floors', 'Building re-let within twelve months'],
    sector: 'Structural',
    location: 'Freetown',
    year: '2021',
    role: 'Structural assessment',
    summary: 'Condition survey and strengthening scheme for a 1970s reinforced concrete office building.',
    image: { src: photo('1541976590-713941681591', 1000), alt: 'Facade of a concrete office building' },
  },
  {
    title: 'Water Supply Works Tender',
    slug: 'water-supply-works-tender',
    client: 'District Council', // PLACEHOLDER
    body: [
      'Port Loko required a new borehole field, storage tank and reticulation network to serve a growing town.',
      'ICS prepared prequalification criteria, technical specifications, bills of quantities and the tender documents, and supported the council through clarification, evaluation and award.',
    ],
    outcomes: ['Tender issued on programme', 'Six compliant bids received', 'Award within the approved budget'],
    sector: 'Procurement',
    location: 'Port Loko',
    year: '2020',
    role: 'Tender documentation',
    summary: 'Prequalification and tender documents for a borehole and reticulation network.',
    image: { src: photo('1513828583688-c52646db42da', 1000), alt: 'Pipework inside a pumping station' },
  },
]

export const sectors = ['All', 'Transportation', 'Structural', 'Procurement']

// PLACEHOLDER: replace with real leadership details.
export const team = [
  { name: 'Managing Director', role: 'Civil Engineer, MSc', initials: 'MD' },
  { name: 'Head of Structures', role: 'Structural Engineer, CEng', initials: 'HS' },
  { name: 'Head of Transportation', role: 'Highway Engineer, MSc', initials: 'HT' },
  { name: 'Procurement Lead', role: 'Procurement Specialist, MCIPS', initials: 'PL' },
]

export const sectorsServed = [
  'Highways',
  'Feeder roads',
  'Bridges and culverts',
  'Drainage',
  'Hospitals',
  'Schools',
  'Commercial buildings',
  'Water supply',
  'Public procurement',
  'Donor programmes',
]

export const approach = [
  {
    title: 'Understand',
    text: 'We begin with the site, the users and the constraints. Good engineering starts with listening and with data gathered on the ground.',
  },
  {
    title: 'Design',
    text: 'Clear, code-compliant design that can actually be built with the materials, plant and skills available locally.',
  },
  {
    title: 'Deliver',
    text: 'Supervision and contract administration on the client\'s behalf, checking that the contractor builds to the design and keeping quality, cost and programme under control.',
  },
  {
    title: 'Sustain',
    text: 'Maintenance plans, as-built records and training so the asset keeps performing long after we leave site.',
  },
]

// PLACEHOLDER: illustrative quotes. Replace with real client testimonials.
export const testimonials = [
  {
    quote:
      'ICS gave us a design our contractor could actually build, and then stayed on site to make sure it was built to that design.',
    name: 'Director of Works',
    org: 'District Council',
  },
  {
    quote:
      'Their tender documents were the clearest we have reviewed in Sierra Leone. The evaluation was accepted without a single query.',
    name: 'Programme Manager',
    org: 'Development partner',
  },
]

export const faqs = [
  {
    q: 'Do you carry out construction?',
    a: 'No. ICS is a consultancy. We design, we prepare the documents a contractor prices and builds from, and we supervise the contractor on the client\'s behalf so that what is built matches the design. We never hold the construction contract.',
  },
  {
    q: 'What size of project do you take on?',
    a: 'Anything from a single structural assessment or a short procurement review to multi-year road programmes with full-time resident supervision. The team scales to suit the brief.',
  },
  {
    q: 'Do you work with international funders?',
    a: 'Yes. We regularly prepare and evaluate tenders under World Bank, African Development Bank and bilateral donor procedures, alongside National Public Procurement Authority requirements.',
  },
  {
    q: 'Can you review designs produced by others?',
    a: 'Independent checking and peer review is a core service. We provide clear, written findings that clients and funders can act on.',
  },
  {
    q: 'Which design codes do you use?',
    a: 'We design to British Standards and Eurocodes as adopted in Sierra Leone, with reference to the relevant Sierra Leone Roads Authority and ministry guidelines.',
  },
  {
    q: 'How quickly can you mobilise?',
    a: 'For desk-based work, within days. For site-based supervision we can usually mobilise a resident engineer within four to six weeks of appointment.',
  },
]

// Who each service is for, and what the client receives. PLACEHOLDER-light: adjust to taste.
export const serviceDetails = {
  'transportation-infrastructure': {
    clients: ['Sierra Leone Roads Authority', 'District and city councils', 'Development partners', 'Mining and agribusiness operators'],
    deliverables: ['Feasibility and options reports', 'Detailed design drawings and specifications', 'Bills of quantities and cost estimates', 'Monthly supervision and progress reports'],
  },
  'structural-engineering': {
    clients: ['Ministries and public agencies', 'Hospitals, schools and universities', 'Developers and landlords', 'Architects and contractors'],
    deliverables: ['Structural calculations and models', 'Reinforcement and steelwork drawings', 'Condition survey and assessment reports', 'Strengthening and repair specifications'],
  },
  procurement: {
    clients: ['Procuring entities under the NPPA', 'World Bank and AfDB funded programmes', 'Bilateral donor projects', 'Private sector capital programmes'],
    deliverables: ['Procurement plans and strategies', 'Prequalification and bidding documents', 'Bid evaluation reports', 'Draft contracts and award recommendations'],
  },
}

export const standards = [
  { title: 'Design codes', items: ['British Standards and Eurocodes', 'Overseas Road Note series', 'SLRA design guidelines'] },
  { title: 'Procurement', items: ['NPPA Act and regulations', 'World Bank procurement framework', 'AfDB procurement policy'] },
  { title: 'Quality and safety', items: ['Internal design check and review', 'Site safety management plans', 'Environmental and social screening'] },
]

export const sectorSummaries = [
  { key: 'Transportation', title: 'Transportation', text: 'Highways, feeder roads, bridges, culverts and drainage, from feasibility to resident supervision.' },
  { key: 'Structural', title: 'Structural', text: 'New-build frames and foundations, and the assessment and strengthening of existing buildings.' },
  { key: 'Procurement', title: 'Procurement', text: 'Tender documents, evaluations and contract advice for public bodies and donor programmes.' },
]

export const deliveryRoles = [
  { title: 'Design consultant', text: 'We produce the design, drawings and specifications the contractor builds from, and answer queries through construction.' },
  { title: 'Supervising engineer', text: 'Our resident engineers check the contractor\'s work against the design, certify quality and quantities, administer the contract and report monthly to the client.' },
  { title: 'Procurement agent', text: 'We run the tender on the client\'s behalf, from documents through evaluation to a defensible award recommendation.' },
]

// PLACEHOLDER: milestones. Replace with the firm's real history.
export const milestones = [
  { year: '2008', title: 'Founded in Freetown', text: 'Established at 28 Bathurst Street to provide independent civil engineering advice.' },
  { year: '2012', title: 'First donor-funded road programme', text: 'Appointed to supervise a multi-district feeder road package.' },
  { year: '2016', title: 'Structural practice established', text: 'Dedicated structures team formed to serve health and education clients.' },
  { year: '2020', title: 'Procurement advisory launched', text: 'Began supporting procuring entities with tender preparation and evaluation.' },
  { year: '2024', title: 'Sixteen districts served', text: 'Commissions completed in every district of Sierra Leone.' },
]

// PLACEHOLDER: registrations and memberships.
export const affiliations = [
  'Registered company, Sierra Leone',
  'Sierra Leone Institution of Engineers',
  'NPPA registered consultant',
  'Chartered engineers on staff',
]

export const careers = {
  title: 'Join the team',
  text: 'We hire civil, structural and highway engineers, quantity surveyors and procurement specialists at every stage of their careers. Graduates work alongside chartered engineers from the first week.',
}

export const visiting = [
  { title: 'Getting here', text: 'Bathurst Street runs through central Freetown, a short walk from the Cotton Tree and the government offices on Tower Hill.' },
  { title: 'Parking', text: 'Limited street parking is available on Bathurst Street and the surrounding roads. Please ask reception if you need assistance.' },
  { title: 'Appointments', text: 'Visits are by appointment so that the right engineer is available to meet you. Call or email ahead.' },
]

export const otherEnquiries = [
  { title: 'Suppliers and subconsultants', text: 'Surveyors, laboratories and specialist consultants wishing to work with us.' },
  { title: 'Careers', text: 'Send a CV and a short note about the work you want to do.' },
  { title: 'Media and speaking', text: 'Requests for comment, interviews or conference participation.' },
]
