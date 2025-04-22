import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Snapbite from "./Components/Snapbite.png";
import SocialClub from "./Components/SocialClub.png";
import HelpingBuddies from "./Components/HelpingBuddies.png";

const Info = {
  name: "Sehajbir Singh",
  stack: [
    "Full Stack Developer",
    "Ethical Hacker",
    "Freelancer",
    "Open Source Contributor",
  ],
  bio: "I'm a passionate Full Stack Web Developer with a strong focus on building robust, user-friendly web applications from the ground up. I specialize in both frontend and backend technologies, ensuring seamless integration, high performance, and clean code. Whether it's developing dynamic websites, solving complex backend challenges, or creating pixel-perfect UI/UX, I’m all about delivering results that exceed expectations. I also take on freelance projects and love collaborating with visionary clients and teams.",
};

const ProjectInfo = [
  {
    title: "SnapBite",
    desc: "SnapBite is a modern, full-stack food ordering web application that enhances the user experience of discovering, customizing, and securely ordering meals online. The frontend is built with React.js and Tailwind CSS for a sleek, responsive UI, while the backend is powered by Node.js and MongoDB, ensuring reliable data handling and scalability. The platform features secure JWT-based authentication, real-time cart updates with Redux, and seamless Stripe integration for payment processing.",
    image: Snapbite,
    live: true,
    technologies: [
      "React",
      "Tailwind CSS",
      "Redux",
      "Heroicons",
      "Headless UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe API",
      "Render",
      "RESTful APIs",
    ],
    link: "https://food-del-frontend-fsqe.onrender.com",
    github: "https://github.com/SehajbirSinghPadam/food-del",
  },

  {
    title: "Social Club",
    desc: "Social Club is a PHP & MySQL-based web platform designed to connect volunteers with social service initiatives. The system allows users to register as volunteers, log their services, track their impact, and communicate directly with administrators. Admins can manage service tasks, monitor volunteer activity, and generate insightful reports. Designed with scalability, accessibility, and usability in mind, the platform includes secure authentication, responsive layouts, and real-time dashboards to support both mobile and desktop users.",
    image: SocialClub,
    live: false,
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "MVC Architecture",
      "Responsive Design",
      "Admin Dashboard",
      "Email Notifications",
    ],
    link: "https://socialclub.kesug.com/login.php",
    github: "https://github.com/SehajbirSinghPadam/Social-Club",
  },
  {
    title: "Helping Buddies",
    desc: "Helping-Buddies is a community-driven web platform aimed at connecting individuals with mobility impairments to local volunteers for assistance. The platform empowers users to request help for daily mobility needs and enables nearby volunteers to respond in real time. Developed with a focus on accessibility and social impact, it features a secure and intuitive interface, real-time messaging, and efficient volunteer-user matching.",
    image: HelpingBuddies,
    live: true,
    technologies: [
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Chakra UI",
      "JavaScript",
      "Vercel",
      "Real-time Communication",
      "REST APIs",
    ],
    link: "https://int-219.vercel.app", // Update this if deployed under a different domain
    github: "https://github.com/SehajbirSinghPadam/INT-219",
  },
  // {
  //     title: "Travel Tracker",
  //     desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
  //     image: "Travel.png",
  //     live: false,
  //     technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
  //     link: "https://github.com/Code-Mars/Travel-Tracker",
  //     github: "https://github.com/Code-Mars/Travel-Tracker"
  // },
  // {
  //     title: "Instagram Clone",
  //     desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
  //     image: "Instagram.png",
  //     live: false,
  //     technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
  //     link: "https://github.com/Code-Mars/Instagram-Clone",
  //     github: "https://github.com/Code-Mars/Instagram-Clone"
  // },
  // {
  //     title: "CodeX Code Editor",
  //     desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
  //     image: "CodeX.png",
  //     live: false,
  //     technologies: ["React", "Tailwind", "Ace Editor"],
  //     link: "https://github.com/Code-Mars/CodeX",
  //     github: "https://github.com/Code-Mars/CodeX"
  // }
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Angular",
      "Redux",
      "Tailwind CSS",
      "GSAP",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Springboot",
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgresSQL",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "Spring Tool Suite",
    ],
  },
];
const socialLinks = [
  { link: "https://github.com/SehajbirSinghPadam", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/sehajbirsingh-padam-a308a0225",
    icon: IconBrandLinkedin,
  },
  { link: "https://www.instagram.com", icon: IconBrandInstagram },
  { link: "https://www.youtube.com/", icon: IconBrandYoutube },
  { link: "https://leetcode.com/u/singhsehajbir1906", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "🛠️ GRD Induction - Trainee Engineer",
    company: "Duration",
    date: "1 July 2022 - 20 May 2023",
    desc: "During my tenure at GRD Induction as a Trainee Engineer, I acquired valuable hands-on experience with induction heating systems, with a strong emphasis on both hardware components and operational workflows. My core responsibilities involved the preparation and assembly of induction machine mainboards and driver units, addressing and resolving technical issues to enhance overall system performance, and participating in industrial visits to gain insights into on-site integration and client-specific requirements. Additionally, I worked collaboratively with cross-functional teams, which significantly honed my communication and problem-solving abilities, contributing to the efficient execution of assigned tasks.",
    skills: [
      "Circuit Assembly & Troubleshooting",
      "Basic PLC Concepts",
      "Industrial Machinery Operation",
      "Technical Documentation",
      "Field Visit Coordination",
      "Electric Wiring",
      "Microservices",
    ],
  },
  {
    role: "🪖 Under Officer - 2 Punjab Battalion NCC",
    company: "National Cadet Corps (Indian Army)",
    date: "Nov 2020  Sep 2022",
    desc: `As an NCC Under Officer, I had the privilege of leading with responsibility, discipline, and integrity. This role honed my leadership, crisis management, and public speaking abilities while instilling a deep sense of social responsibility. I underwent rigorous training in drills, weapon handling, disaster management, and community outreach programs, transforming me into a confident, action-oriented leader prepared for real-world challenges.`,
    skills: [
      "Leadership & Command",
      "Discipline & Punctuality",
      "Public Speaking",
      "Teamwork & Collaboration",
      "Crisis Management",
      "Physical & Mental Endurance",
      "Community Service",
      "Event Coordination"
    ],
  },
];




const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];



const CertificationInfo = [
  {
    category: "Algorithm & Programming",
    certifications: [
      "Dynamic Programming, Greedy Algorithms - Coursera (2024)",
      "Algorithms on Strings - Coursera (2024)",
      "Certificate of Completion in C++ - Coursera (2024)",
      "Certificate of Completion in Data Structures & Algorithms (DSA) - Coursera (2024)",
    ],
  },
  {
    category: "Web Development & JavaScript",
    certifications: [
      "HTML, CSS, and JavaScript for Web Developers - Coursera (2024)",
      "Server-side JavaScript with Node.js - Coursera (2024)",
    ],
  },
  {
    category: "Cybersecurity & Ethical Hacking",
    certifications: [
      "Foundations of Cybersecurity - Coursera (2024)",
      "Certification in Cyber Security & Ethical Hacking - Coursera (2024)",
      "The Bits and Bytes of Computer Networking - Coursera (2024)",
    ],
  },
  {
    category: "AI & Generative AI",
    certifications: [
      "Introduction to Generative AI - Coursera (2024)",
      "Generative AI Primer - Coursera (2024)",
      "Generative AI for Everyone - Coursera (2024)",
      "Introduction to Large Language Models - Coursera (2024)",
      "Prompt Engineering for ChatGPT - Coursera (2024)",
      "ChatGPT Playground for Beginners: Intro to NLP AI - Coursera (2024)",
      "GenAI for Everyone - Coursera (2024)",
      "Learn to Code with AI - Coursera (2024)",
      "ChatGPT for Beginners: Save Time with Microsoft Excel - Coursera (2024)",
    ],
  },
  {
    category: "National Certifications",
    certifications: [
      "NCC B Certificate  -Indian Army (2021)",
      "NCC C Certificate - Indian Army (2022)",
    ],
  },
];

export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs,CertificationInfo };
