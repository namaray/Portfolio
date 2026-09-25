export type EvidenceLink = { label: string; href: string }

export type CaseImage = {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
}

export type CaseStudy = {
  id: string
  title: string
  kicker: string
  context: string
  role: string
  problem: string
  did: string[]
  images: CaseImage[]
  beforeAfter?: { before: CaseImage; after: CaseImage }
  stack: string[]
  links: EvidenceLink[]
}

export const workflow = [
  {
    step: 'Understand',
    duty: 'Identify user pain points',
    text: 'Find out where users get stuck, and why, before jumping to a solution.',
  },
  {
    step: 'Specify',
    duty: 'Document feature requirements',
    text: 'Write down what we are building and why, so everyone agrees before work starts.',
  },
  {
    step: 'Prototype',
    duty: 'Wireframes & user flows',
    text: 'Sketch the flow and screens early, while ideas are still cheap to change.',
  },
  {
    step: 'Build',
    duty: 'Develop web applications',
    text: 'Turn the plan into a working web app that is simple and accessible to use.',
  },
  {
    step: 'Verify',
    duty: 'UAT, bugs & fixes',
    text: 'Test it like a user, log bugs clearly, and confirm every fix before closing it.',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'replaycs',
    title: 'ReplayCS',
    kicker: 'EdTech · Self-paced learning · Team of 2',
    context:
      'A live learning platform where students predict what a program will do next before the answer is revealed. Built by a two-person team for a hackathon.',
    role: 'UX redesign and front-end: 7 merged pull requests covering 6 screens plus the theme system.',
    problem:
      'The first screens asked too much of a new learner: a single six-field onboarding form, three competing buttons on the landing page, and a progress dashboard where the next recommended step was buried below the metrics.',
    did: [
      'Split onboarding into a 4-step stepper with one decision per card, a progress bar and a single primary action per step.',
      'Collapsed the landing page to one primary call to action ("Start tracing" / "Continue") with two quiet secondary links.',
      'Moved the "Continue learning" recommendation to the top of the progress dashboard and tucked settings into a collapsed section.',
      'Added "Resume where you left off" and per-lesson state (done / next) to the subject and lab catalogues.',
      'Made a light theme the default with a dark toggle, remapping 32 components to shared colour tokens and fixing low-contrast text.',
      'Kept keyboard and screen-reader users in mind: focus moves to each step heading, and animations respect reduced-motion settings.',
      'Updated the onboarding and production smoke E2E tests to drive the new stepper, and added a forward/back test.',
    ],
    beforeAfter: {
      before: {
        src: '/product/replaycs-landing-before.webp',
        alt: 'ReplayCS landing page before the redesign, with three equally weighted buttons',
        caption: 'Before: three buttons competing for the first click',
        width: 1200,
        height: 728,
      },
      after: {
        src: '/product/replaycs-landing-after.webp',
        alt: 'ReplayCS landing page after the redesign, with one primary button and two text links',
        caption: 'After: one clear next step, light theme by default',
        width: 1200,
        height: 728,
      },
    },
    images: [
      {
        src: '/product/replaycs-onboarding.webp',
        alt: 'ReplayCS onboarding stepper showing step 1 of 4',
        caption: 'Onboarding: one question per step',
        width: 680,
        height: 560,
      },
    ],
    stack: ['SvelteKit', 'TypeScript', 'CSS tokens', 'Playwright', 'Vitest', 'GitHub PRs', 'Vercel'],
    links: [
      { label: 'Live app', href: 'https://replaycs.vercel.app' },
      { label: 'Onboarding PR #23', href: 'https://github.com/meteorboyF/ReplayCS/pull/23' },
      { label: 'Landing PR #26', href: 'https://github.com/meteorboyF/ReplayCS/pull/26' },
      { label: 'Theme PR #33', href: 'https://github.com/meteorboyF/ReplayCS/pull/33' },
      { label: 'Product spec', href: 'https://github.com/meteorboyF/ReplayCS/blob/main/docs/product-spec.md' },
    ],
  },
  {
    id: 'oushudh-bondhu',
    title: 'Oushudh Bondhu',
    kicker: 'HealthTech · Build With Gemma @ Bangladesh · Team of 4',
    context:
      'A prescription reader for patients in Bangladesh: photograph a handwritten prescription, get each medicine explained in plain Bangla with a dose timetable and duplicate-drug warnings.',
    role: 'Product documentation and diagrams: the submission write-up, the architecture diagram and the user-flow diagram.',
    problem:
      'Judges and teammates needed one clear account of what the product does, what it will never do (diagnose or change a dose), and how it behaves when the AI model fails or the handwriting is unreadable.',
    did: [
      'Wrote the submission write-up: problem in the Bangladesh context, solution overview, architecture, impact, limitations and future work.',
      'Reported validation honestly: what had been verified, what had not, and a measurement protocol instead of invented accuracy numbers.',
      'Drew the user flow as a three-step wizard (Scan → Verify → Result) with the data shape at each step and a human confirmation gate.',
      'Mapped every failure path (model unreachable, malformed output, illegible handwriting, no internet) to what the user sees.',
    ],
    images: [
      {
        src: '/product/oushudh-user-flow.webp',
        alt: 'Oushudh Bondhu user flow diagram: Scan, Verify and Result steps with failure paths and history loop',
        caption: 'User flow & failure paths (my diagram)',
        width: 2000,
        height: 1475,
      },
    ],
    stack: ['Requirements writing', 'User flows', 'SVG diagrams', 'Python', 'Streamlit', 'Gemma 4'],
    links: [
      {
        label: 'Write-up',
        href: 'https://github.com/meteorboyF/GemmaTeamProteinPowder/blob/documentation/KAGGLE_WRITEUP.md',
      },
      {
        label: 'Architecture diagram',
        href: 'https://github.com/meteorboyF/GemmaTeamProteinPowder/blob/documentation/media/architecture.png',
      },
      { label: 'Product spec', href: 'https://github.com/meteorboyF/GemmaTeamProteinPowder/blob/main/SPEC.md' },
    ],
  },
  {
    id: 'heaven-furniture-mart',
    title: 'Heaven Furniture Mart',
    kicker: 'Client brief · RACDOX Hackathon · Solo',
    context:
      'A conversion-focused landing page for a bespoke furniture brand in Chattogram, built from a one-page company brief in two days.',
    role: 'Everything: layout, copy structure, imagery, front-end build and deployment.',
    problem:
      'The brief asked for a page that feels like walking into a luxury interior studio, not an online shop, and that turns visitors into quote requests.',
    did: [
      'Structured the page around one action, "Request a quote", repeated at natural decision points.',
      'Pre-filled WhatsApp quote messages per collection, plus tap-to-call and email, so customers can reach the shop through the channels they already use.',
      'Built it in plain HTML, CSS and JavaScript with self-hosted fonts, lazy-loaded images, a skip link and reduced-motion support.',
      'Iterated section order and layout in small commits (for example, moving Collections above "Why choose us") and deployed to Vercel.',
    ],
    images: [
      {
        src: '/product/heaven-hero.webp',
        alt: 'Heaven Furniture Mart landing page hero: Furniture, Crafted Around You',
        caption: 'Hero section with the quote request as the single action',
        width: 1440,
        height: 900,
      },
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive design', 'Accessibility', 'Vercel'],
    links: [
      { label: 'Live page', href: 'https://heaven-furniture-mart-landing-page-five.vercel.app' },
      { label: 'Source', href: 'https://github.com/namaray/Heaven-Furniture-Mart-LandingPage' },
    ],
  },
  {
    id: 'sharestrength',
    title: 'ShareStrength',
    kicker: 'Accessibility · Full-stack · University project',
    context:
      'A platform connecting people with disabilities to verified helpers: task posting, helper matching, messaging, payments and a marketplace.',
    role: 'Requirements (SRS) and full-stack development.',
    problem:
      'Users with motor or visual impairments cannot rely on a mouse, and families need to trust the helpers they hire.',
    did: [
      'Captured the requirements in a Software Requirements Specification before building.',
      'Built the web app in PHP and MySQL: helper dashboards, task tracking, applications, reviews, trusted contacts and payments.',
      'Added voice and eye-tracking controls so the site can be used without a mouse.',
    ],
    images: [
      {
        src: '/Sharestrength.png',
        alt: 'ShareStrength platform screenshot',
        width: 1365,
        height: 559,
      },
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'SRS'],
    links: [
      { label: 'SRS document', href: 'https://github.com/namaray/ShareStrength/tree/master/SRS' },
      { label: 'Source', href: 'https://github.com/namaray/ShareStrength' },
    ],
  },
]

export const toolbox = [
  { group: 'Build', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SvelteKit', 'React', 'PHP / Laravel', 'MySQL', 'Python'] },
  { group: 'Test & ship', items: ['Playwright E2E', 'Unit tests', 'Git & pull requests', 'Vercel'] },
  { group: 'Plan & communicate', items: ['Product specs & SRS', 'User-flow diagrams', 'Technical write-ups', 'Public speaking'] },
]
