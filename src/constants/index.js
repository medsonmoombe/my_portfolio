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
import microverse from "../assets/company/microverse.png"
import self from "../assets/company/self.png"
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
    title: "Mentor(Volunteer)",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#383E56",
    date: "March 2022 - Dec 2022",
    points: [
      "Mentored junior web developers through code reviews and pairing sessions",
      "Improved their understanding of front-end and back-end technologies and best practices",
      "Proposed improvements to code organization to improve code quality and overall performance.",
      "Provided advice and tips on how to maintain motivation to maintain longevity in the program.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Self",
    icon: self,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - present",
    points: [
      "Developed and maintained several personal projects using React, Redux, Ruby, Tailwind CSS, and Firebase/PostgreSQL below are some",
      "Collaborated with cross-functional teams to build and deploy applications using Ruby on Rails, Node js Typescript and React. Maintained a high level of code quality and ensured scalability and security.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

// blogApp,
//   chatApp,
//   jobPortal

const projects = [
  {
    name: "Chatty App",
    description:
      "A real-time messaging web app that allows users to send and receive messages in real-time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      }
    ],
    image: chatApp,
    source_code_link: "https://github.com/medsonmoombe/chat-app-1.git",
    link: "https://chat-app-1-1-5idi.onrender.com/login",
  },
  {
    name: "Personal Blog App",
    description:
      "A personal blog app that allows users Admin to create, edit, and delete blog posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name:'Node js',
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: blogApp,
    source_code_link: "https://github.com/medsonmoombe/blog-app",
    link:"https://blog-app-rt3p.onrender.com",
  },
  {
    name: "Job Portal",
    description:
      "A job portal web app that allows users to search for jobs and apply for them.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: jobPortal,
    source_code_link: "https://github.com/medsonmoombe/jop-partal",
    link: "https://job-client-gt5w-6c2of8phg-emmanuel-moombes-projects.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
