
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import company logos
import tekisky from "../assets/company/tekisky.png";
// Company logos - add accenture.png and wiu.png to /src/assets/company/ folder
import accenture from "../assets/company/accenture.png";
import wiu from "../assets/company/wiu.png";


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
    title: "Web Content Administrator",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "CMS Specialist",
    icon: creator,
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
    name: "Java",
    icon: nodejs, // Placeholder - replace with Java icon
  },
  {
    name: "Spring Boot",
    icon: express, // Placeholder - replace with Spring Boot icon
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "REST APIs",
    icon: backend,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: css, // Placeholder
  },
  {
    name: "jQuery",
    icon: javascript, // Placeholder
  },
  {
    name: "WordPress",
    icon: web, // Placeholder
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
];

const experiences = [
  {
    title: "Research Assistant - Web Development",
    company_name: "Western Illinois University",
    icon: wiu,
    iconBg: "#1A1A2E",
    date: "Jan 2025 - May 2025",
    points: [
      "Supporting faculty and administration by updating web pages in OU Campus CMS, ensuring content accuracy and accessibility standards.",
      "Designing tutorial pages and interactive forms for student services, improving user experience and engagement.",
      "Editing technical documentation and FAQs, maintaining consistency with university branding and voice guidelines.",
      "Participating in weekly content planning sessions with department heads and marketing staff, aligning web updates with strategic initiatives.",
      "Created responsive design templates for academic program pages, resulting in 25% increase in student inquiries.",
      "Designed interactive sitemap navigation structure, improving first-click accuracy for student users by 30%.",
    ],
  },
  {
    title: "Web Content & Java Developer",
    company_name: "Accenture Pvt. Ltd.",
    icon: accenture,
    iconBg: "#A100FF",
    date: "Oct 2021 - Aug 2023",
    points: [
      "Managed and updated internal content on corporate intranet using custom CMS and structured content taxonomies, improving content findability by 40%.",
      "Developed Java-based modules and RESTful APIs to support backend operations for web applications, reducing processing time by 25%.",
      "Conducted bi-weekly audits to remove ROT (redundant, outdated, trivial) content, streamlining navigation structures and improving user experience.",
      "Managed content publishing requests from internal teams, coordinating project intake, stakeholder updates, and timeline management for 50+ projects.",
      "Monitored web traffic via Google Analytics and Search Console; implemented metadata and SEO strategies that reduced bounce rate by 18%.",
      "Ensured accessibility compliance (WCAG 2.1) and documented SOPs, CMS user manuals, and internal publishing guidelines for non-technical contributors.",
      "Integrated HTML/CSS enhancements and JavaScript to modernize UI components across multiple portals, enhancing visual consistency.",
      "Led weekly review meetings with stakeholders to prioritize intranet content updates aligned with campaign timelines and business objectives.",
      "Optimized multimedia and simplified markup, reducing page load times by 30% and improving overall site performance.",
      "Led migration of intranet knowledge base to structured taxonomy system, significantly increasing content findability and user satisfaction.",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school_name: "Western Illinois University",
    location: "Macomb, IL",
    date: "Aug 2023 - May 2025",
    gpa: "3.6/4.0",
    icon: wiu,
    iconBg: "#1A1A2E",
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    school_name: "Vignan University",
    location: "Guntur, India",
    date: "June 2017 - Aug 2021",
    gpa: null,
    icon: web,
    iconBg: "#383E56",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Surya proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Surya does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Surya optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Campus Portal Redesign",
    description:
      "Revamped Vignan University's internal student portal as Team Lead, restructuring pages for academics, events, and placements. Built backend integration with MySQL and created admin-level content editing functions. Conducted peer usability testing and coordinated deployment with college IT staff.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JSP",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sivasiri",
  },
  {
    name: "Intranet Knowledge Base Migration",
    description:
      "Led migration of corporate intranet knowledge base to structured taxonomy system at Accenture, significantly increasing content findability. Optimized multimedia and simplified markup, reducing page load times by 30%. Implemented SEO strategies that reduced bounce rate by 18%.",
    tags: [
      {
        name: "CMS",
        color: "blue-text-gradient",
      },
      {
        name: "SEO",
        color: "green-text-gradient",
      },
      {
        name: "Analytics",
        color: "pink-text-gradient",
      },
      {
        name: "Accessibility",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/sivasiri",
  },
  {
    name: "Academic Program Pages - Responsive Templates",
    description:
      "Created responsive design templates for academic program pages at Western Illinois University, leading to 25% increase in student inquiries. Designed interactive sitemap navigation structure improving first-click accuracy for student users. Updated web pages in OU Campus CMS with focus on accessibility and user experience.",
    tags: [
      {
        name: "OU Campus",
        color: "blue-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "white-text-gradient",
      },
      {
        name: "UX Design",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sivasiri",
  },
];

export { services, technologies, experiences, education, testimonials, projects };


