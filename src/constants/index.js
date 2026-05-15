import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  chatApp,
  blogApp,
  jobPortal,
} from "../assets";
import ruby from "../assets/tech/ruby.png"
import sql from "../assets/tech/sql.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Design",
    desc:"Passionate about responsive web design for cross-platform compatibility using mobile-first approach and desktop media queries",
    icon: web,
  },
  {
    title: "Reusable & Minimal code",
    desc:"Efficient coding using CSS Variables, custom utility classes, and reusable components for future use.",
    icon: mobile,
  },
  {
    title: "Great UI/UX",
    desc: "I prioritize simplicity and accessibility in design, and can accurately translate templates into code that is visually flawless and user-friendly.",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Full Stack Software Developer",
    company_name: "CMOS Tech",
    type: "Remote",
    date: "Sept 2022 – June 2023",
    points: [
      "Built complete web features connecting the user interface to the server and database.",
      "Cleaned up and reorganized code to make the system faster and easier to work with.",
      "Mentored the team and set clear technical direction, helping everyone work faster and stay motivated.",
    ],
  },
  {
    title: "Frontend Software Developer",
    company_name: "Bofrak POS",
    type: "Remote",
    date: "Jan 2024 – Nov 2024",
    points: [
      "Made React and Vue work smoothly together in a busy Point-of-Sale system.",
      "Worked with a remote team to build features that met both design and technical requirements.",
      "Helped teammates grow by teaching them better ways to build and structure web components.",
    ],
  },
  {
    title: "Frontend Software Developer",
    company_name: "Chrilan Tech",
    type: "On-site",
    date: "Jan 2025 – July 2025",
    points: [
      "Built the foundation of web apps using React and Vue, keeping them fast and well-organized.",
      "Turned detailed designs into clean, working code that's easy to maintain.",
      "Led internal efforts to help the team level up their skills and work better with the back-end.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SkillPulse",
    featured: true,
    description:
      "A full-stack learning platform that pairs ambitious learners with verified experts using AI-powered matching. Features live video sessions with real-time collaboration tools (shared whiteboard, file sharing, chat), structured learning plans with progress tracking, topic-based community groups, and an expert knowledge feed. Role-based access for learners, experts, and admins — with a credit wallet system for booking paid sessions and notifications throughout.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "LiveKit", color: "green-text-gradient" },
      { name: "Drizzle ORM", color: "pink-text-gradient" },
      { name: "Liveblocks", color: "pink-text-gradient" },
    ],
    image: "/skillpulse.png",
    source_code_link: "https://github.com/medsonmoombe/skillpulse",
    link: "https://skillpulse-gules.vercel.app/",
  },
  {
    name: "SaasForge",
    featured: true,
    description:
      "A full project management platform for teams — create orgs, invite members, and manage work on a Kanban board with priorities, assignees, and due dates. Role-based access lets owners and admins control the workspace while members focus on tasks. Built-in notifications, a full activity timeline, and public read-only project links for clients round out a production-ready tool teams can actually rely on.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
    ],
    image: "/saasforge.png",
    source_code_link: "https://github.com/medsonmoombe/saasforge",
    link: "https://saasforge-web.vercel.app/",
  },
  {
    name: "Chatty — Real-Time Chat",
    description:
      "Full-stack messaging app supporting real-time bi-directional communication via Socket.io. Engineered a Node.js event system that handles concurrent connections cleanly, with a React frontend that updates instantly without page refreshes.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Socket.io", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: "/chattyApp.png",
    source_code_link: "https://github.com/medsonmoombe/chat-app-1.git",
    link: "https://chat-app-1-1-5idi.onrender.com/login",
  },
  {
    name: "Blog CMS",
    description:
      "A headless blog platform with a full admin CMS — create, edit, publish, and delete posts with rich text support. Firebase handles auth and storage, keeping infrastructure costs near zero while delivering a fast, reliable reading experience.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: "/BLOGAPP.png",
    source_code_link: "https://github.com/medsonmoombe/blog-app",
    link: "https://blog-app-rt3p.onrender.com",
  },
  {
    name: "Job Portal",
    description:
      "End-to-end job board connecting candidates and employers. Built a Node.js REST API with role-based access — separate flows for job seekers and recruiters — and a React frontend with filtered search, pagination, and application tracking.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: "/jobPotal.png",
    source_code_link: "https://github.com/medsonmoombe/jop-partal",
    link: "https://job-client-gt5w-6c2of8phg-emmanuel-moombes-projects.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
