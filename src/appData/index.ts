// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: '[Your First Project Name]',
    shortDescription:
      '[Short description of your project. E.g., Built an image classifier. Tools used: Python, PyTorch, Raspberry Pi]',
    cover:
      'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    livePreview: '#',
    githubLink: '[Link to GitHub repo]',
    type: 'Academic 🎓',
  },
  {
    priority: 2,
    title: '[Your Second Project Name]',
    shortDescription:
      '[Short description of your second project. Tools used: Docker, Linux, OpenCV]',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    livePreview: '#',
    githubLink: '[Link to GitHub repo]',
    type: 'Personal 👨‍💻',
  },
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'Python',
    icon: JavaScriptIcon, // Note: using placeholders for icons, update to real icons in utils/icons.tsx if needed
  },
  {
    name: 'PyTorch',
    icon: TypescriptIcon,
  },
  {
    name: 'Docker',
    icon: ReactIcon,
  },
  {
    name: 'Linux',
    icon: NextjsIcon,
  },
  {
    name: 'OpenCV',
    icon: NodejsIcon,
  },
  {
    name: 'C++',
    icon: ExpressjsIcon,
  },
  {
    name: 'Git',
    icon: NestjsIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
