
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
import accenture from "../assets/company/accenture.png";
import wiu from "../assets/company/wiu.png";
// Placeholder logos for Discover and Charles River
import meta from "../assets/company/meta.png";
import shopify from "../assets/company/shopify.png";


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
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Cloud Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: nodejs,
  },
  {
    name: "Spring Boot",
    icon: express,
  },
  {
    name: "Spring Security",
    icon: backend,
  },
  {
    name: "REST APIs",
    icon: backend,
  },
  {
    name: "Microservices",
    icon: web,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: javascript,
  },
  {
    name: "PostgreSQL",
    icon: mysql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: mongodb,
  },
  {
    name: "Apache Kafka",
    icon: backend,
  },
  {
    name: "GCP",
    icon: aws,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Kubernetes",
    icon: backend,
  },
  {
    name: "Docker",
    icon: backend,
  },
  {
    name: "Terraform",
    icon: backend,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Discover",
    icon: meta, // Placeholder - replace with Discover logo
    iconBg: "#FF6B35",
    date: "November 2024 - Present",
    points: [
      "Built and maintained backend microservices using Java Spring Boot to support Discover's Network Authorizations domain.",
      "Worked on Toolbox, a configuration-management service responsible for hydrating Discover data centers and POP servers globally.",
      "Developed scheduled batch workflows that publish daily configuration updates to authorization systems worldwide.",
      "Supported core transaction validation processes, ensuring accurate routing, integrity checks, and fraud detection.",
      "Deployed services to PCF and managed operational tasks across virtual machine–based environments.",
      "Integrated backend components with GCP Pub/Sub to enable asynchronous message processing.",
      "Added system monitoring and logging through Google Cloud Logging, improving visibility into production issues.",
      "Improved API reliability by refining request handling, error responses, and database interactions.",
      "Wrote automated unit tests using JUnit 5, helping maintain code quality and stability.",
      "Participated in Agile/Scrum ceremonies and collaborated with cross-functional teams for feature delivery.",
    ],
  },
  {
    title: "Full Stack Java Developer",
    company_name: "Accenture (Walmart - Remote)",
    icon: accenture,
    iconBg: "#A100FF",
    date: "October 2021 - August 2023",
    points: [
      "Developed cloud-native order fulfillment microservices using Java 17 & Spring Boot 3, improving reliability and reducing downtime during peak retail traffic.",
      "Designed and secured REST APIs with Spring Security & JWT, strengthening authentication and reducing unauthorized access issues.",
      "Streamlined data persistence by implementing Spring Data JPA and optimized PostgreSQL queries, improving response times for high-volume order lookups.",
      "Implemented distributed messaging using Kafka, enabling near real-time inventory updates across Walmart's global retail systems.",
      "Built Pub/Sub event pipelines on GCP, reducing latency for cross-region order status propagation.",
      "Designed and automated ETL workflows in GCP Composer (Airflow), ensuring timely ingestion and transformation of sales and logistics data.",
      "Optimized analytics workloads in BigQuery, enabling faster reporting for inventory and fulfillment insights.",
      "Integrated Redis caching to reduce API read times, improving user-facing dashboard performance.",
      "Modernized legacy services by migrating them to Cloud Run, lowering operational cost and improving autoscaling behavior.",
      "Deployed and managed microservices on GKE using Terraform & Helm, standardizing deployments and reducing manual configuration effort.",
      "Implemented CI/CD pipelines with GitHub Actions, CircleCI & Argo CD, improving release frequency and build reliability.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "Charles River Laboratories",
    icon: shopify, // Placeholder - replace with Charles River logo
    iconBg: "#1A1A2E",
    date: "August 2019 - September 2021",
    points: [
      "Developed backend components using Java 11 and Spring Boot to support scientific workflows, improving reliability and data throughput.",
      "Built REST APIs integrating with MongoDB, enabling flexible storage of research datasets and experiment metadata.",
      "Designed automated ETL workflows using Apache Airflow, reducing manual data processing effort and improving pipeline consistency.",
      "Implemented ML preprocessing modules using Python and OpenCV, improving accuracy of anomaly detection and image classification tasks.",
      "Built internal visualization dashboards using D3.js, enabling researchers to analyze experimental trends more efficiently.",
      "Deployed backend services to AWS EC2, utilizing S3 for secure experiment file storage and retrieval.",
      "Created batch jobs to validate, enrich, and transform scientific data, improving downstream analytics performance.",
      "Enhanced code quality by writing unit tests with JUnit, reducing regressions in data-processing logic.",
      "Tuned APIs and background jobs for performance, ensuring reliable operation during high-volume research workloads.",
      "Set up monitoring using Prometheus, enabling early detection of performance bottlenecks in lab processing services.",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school_name: "Western Illinois University",
    location: "Macomb, Illinois",
    date: "Aug 2023 - May 2025",
    gpa: "3.6/4.0",
    icon: wiu,
    iconBg: "#1A1A2E",
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
    name: "Smart Waste Management & Recycling Tracker",
    description:
      "Developed a full-stack web application using Java Spring Boot, React, and MongoDB. Implemented AI-based waste classification using barcode and image recognition. Enabled real-time garbage collection alerts and recycling center mapping. Gamified user participation through an eco-score system and leaderboard. Provided analytics for city officials to monitor recycling habits and performance.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "white-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "AI/ML",
        color: "blue-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sivasiri",
  },
];

export { services, technologies, experiences, education, testimonials, projects };


