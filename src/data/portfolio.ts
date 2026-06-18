export type SocialLink = {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "telegram" | "discord";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  category: string;
  status: "completed" | "in-progress" | "archived";
  year: string;
  role: string;
  features: string[];
};

export type Role = {
  title: string;
  type: string; // "Full-time" | "Internship" | "Freelance" | ...
  period: string; // e.g. "Jan 2026 – Present"  (edit these freely)
  current?: boolean;
  description?: string;
  achievements: string[];
  technologies: string[];
};

export type Experience = {
  id: string;
  company: string;
  location?: string;
  current?: boolean;
  companyWebsite?: string;
  companyLogo?: string;
  roles: Role[]; // most recent first
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description: string;
  location: string;
  gpa: string;
  major: string;
  logo?: string;
};

export const profile = {
  name: "Eahtasham Ummam",
  role: "Software Engineer & AI Automation Builder",
  tagline: "Building elegant experiences for the web.",
  greeting: "Hello! I'm",
  bio: "Love to build cool stuff — full-stack apps, AI tools & workflow automations.",
  email: "eahtashamummam@gmail.com",
  location: "Kolkata, India",
  avatar: "/images/avatar.png",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=14UTyzujJnJv_DKPdxMpuf1Xc0Q-hTp8j",
  highlights: [
    "Speed Optimization",
    "Workflow Automations",
    "AI Tools",
    "Data Driven Tools",
  ],
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Eahtasham", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eahtasham-ummam/",
    icon: "linkedin",
  },
  { name: "Twitter", url: "https://x.com/Eahtasham_", icon: "twitter" },
  { name: "Telegram", url: "https://t.me/Eahtasham", icon: "telegram" },
  { name: "Email", url: "mailto:eahtashamummam@gmail.com", icon: "mail" },
];

// NOTE: dates/types for the newer roles are placeholders — edit `period`,
// `type`, and descriptions below to match your real history.
export const experiences: Experience[] = [
  {
    id: "connect2learn",
    company: "Connect2Learn",
    location: "Remote",
    current: true,
    companyLogo: "/images/logos/connect2learn.jpg",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        period: "June 2026 – Present",
        current: true,
        description:
          "Building and scaling the core learning platform end-to-end, from product features to backend services.",
        achievements: [
          "Own delivery of features across the full stack.",
          "Drive performance, reliability, and DX improvements.",
        ],
        technologies: ["Next.js", "TypeScript", "Node.js", "MySQL"],
      },
      {
        title: "Software Engineer Intern",
        type: "Internship",
        period: "March 2026 – June 2026",
        description:
          "Contributed to feature development and bug fixes across the web application.",
        achievements: [
          "Built reusable, accessible UI components.",
          "Integrated REST APIs and improved test coverage.",
        ],
        technologies: ["React", "TypeScript", "TailwindCSS"],
      },
    ],
  },
  {
    id: "textify",
    company: "Textify AI",
    location: "Remote",
    companyWebsite: "https://analytx.in/",
    companyLogo: "/images/logos/textify.jpg",
    roles: [
      {
        title: "Full Stack Developer Intern",
        type: "Internship",
        period: "July 2025 – April 2026",
        description:
          "Extended the analytics platform across both frontend and backend.",
        achievements: [
          "Implemented Firebase Authentication.",
          "Built chart customization features.",
        ],
        technologies: ["Next.js", "TypeScript", "Firebase", "TailwindCSS"],
      },
      {
        title: "Frontend Developer Intern",
        type: "Internship",
        period: "Feb 2025 – June 2025",
        description:
          "Redesigned and optimized the company's analytics website for speed and engagement.",
        achievements: [
          "Improved page load time by 30%.",
          "Revamped a responsive, accessible UI.",
        ],
        technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      },
    ],
  },
  {
    id: "ilta",
    company: "Indian Leather Technologists' Association",
    location: "Kolkata, India",
    companyLogo: "/images/logos/ILTA.png",
    roles: [
      {
        title: "Java Developer Intern",
        type: "Internship",
        period: "July 2025 – Oct 2025",
        description:
          "Built backend services and internal tools for the association using Java.",
        achievements: [
          "Developed REST APIs and database integrations in Java.",
          "Supported data workflows and internal tooling.",
        ],
        technologies: ["Java", "MySQL", "JavaScript"],
      }
    ],
  },
  {
    id: "icmr",
    company: "Indian Council of Medical Research",
    location: "Kolkata, India",
    companyWebsite: "https://icmr.itech4all.in/",
    companyLogo: "/images/logos/icmr.svg",
    roles: [
      {
        title: "Java Developer Intern",
        type: "Internship",
        period: "Jan 2025 – June 2025",
        description:
          "Developed dynamic web pages and backend services for mental health tools used by medical professionals.",
        achievements: [
          "Built and optimized APIs using Java Servlets.",
          "Designed accessible UIs.",
          "Created an optimized backend for handling patient details.",
        ],
        technologies: ["Java", "HTML5", "CSS3", "MySQL", "jQuery"],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1773342891916",
    title: "OneScript",
    description:
      "An AI-powered SaaS chatbot that learns from website content to answer customer questions, capture leads, and provide 24/7 support.",
    tech: ["Next.js", "TailwindCSS", "PostgreSQL", "Gemini"],
    link: "https://onescript.xyz",
    github: "https://github.com/eahtasham",
    image: "/images/projects/onescript.jpg",
    category: "AI Automation",
    status: "completed",
    year: "2026",
    role: "Founding Engineer",
    features: [
      "Website-Trained AI",
      "24/7 Automated Support",
      "Lead Capture & Human Handoff",
    ],
  },
  {
    id: "1754661874302",
    title: "Samvidhaan",
    description:
      "AI-powered legal assistant focused on Indian laws. Supports semantic search, case law retrieval, and contextual responses using RAG.",
    tech: ["Next.js", "TailwindCSS", "Python", "OpenAI"],
    link: "https://www.samvidhaan.live/",
    github: "https://github.com/Eahtasham/AI-Lawyer-Frontend",
    image: "/images/projects/samvidhaan.png",
    category: "AI",
    status: "completed",
    year: "2026",
    role: "Full Stack Developer",
    features: [
      "Semantic Search",
      "Indian Case Law Retrieval",
      "RAG-based Responses",
    ],
  },
  {
    id: "1",
    title: "AI Mock Interview Platform",
    description:
      "An interactive AI mock interview platform featuring a real-time code editor, voice agent, and analytics dashboard.",
    tech: ["Next.js", "TailwindCSS", "Clerk", "Gemini", "PostgreSQL"],
    link: "https://prep-wise.netlify.app/",
    github: "https://github.com/Eahtasham/PrepWise",
    image: "/images/projects/prepwise.png",
    category: "AI Web App",
    status: "completed",
    year: "2025",
    role: "Full Stack Developer",
    features: ["AI Question Generation", "Code Execution", "Voice-based Feedback"],
  },
  {
    id: "1754240129733",
    title: "SchoolSync",
    description:
      "A full-stack school management platform with RBAC, schedules, announcements, and parent–teacher communication.",
    tech: ["Next.js", "Shadcn", "Prisma", "PostgreSQL", "TailwindCSS"],
    link: "https://schoolsyncdev.vercel.app/",
    github: "https://github.com/Eahtasham/SchoolSync",
    image: "/images/projects/schoolsync.png",
    category: "Education",
    status: "completed",
    year: "2024",
    role: "Full Stack Developer",
    features: ["Role-Based Access", "Scheduling Module", "Secure Messaging"],
  },
  {
    id: "CHATPDF-2025",
    title: "ChatWithPDF",
    description:
      "Upload a PDF and interact with the content via AI chat. Supports chunking, embeddings, and semantic response generation.",
    tech: ["Next.js", "RAG", "Embeddings", "OpenAI"],
    link: "https://github.com/Eahtasham/ChatWithPDF",
    github: "https://github.com/Eahtasham/ChatWithPDF",
    image: "/images/projects/chatwithpdf.png",
    category: "AI",
    status: "completed",
    year: "2025",
    role: "Full Stack Developer",
    features: ["PDF Parsing", "Embeddings", "Contextual AI Chat"],
  },
  {
    id: "JAVA-EMS-2024",
    title: "CU Dept. Management System",
    description:
      "A NAAC-compliant Java MVC education management system featuring student records, attendance, and database-driven workflows.",
    tech: ["Java", "Servlets", "JSP", "MySQL", "JavaScript"],
    link: "https://cucse.itech4all.in/",
    github: "https://cucse.itech4all.in/",
    image: "/images/projects/cu-dept.png",
    category: "Backend / MVC",
    status: "completed",
    year: "2024",
    role: "Backend Developer",
    features: ["MVC Architecture", "Database Layer", "Secure User Access"],
  },
  {
    id: "IOT-DOOR-2024",
    title: "AI Face Recognition Door Lock",
    description:
      "Face-recognition smart lock system using Raspberry Pi and OpenCV, designed for low-power security automation.",
    tech: ["Python", "OpenCV", "IoT", "Raspberry Pi", "React Native"],
    link: "https://github.com/Eahtasham/iot-lock-app",
    github: "https://github.com/Eahtasham/iot-lock-backend",
    image: "/images/projects/iot-lock.png",
    category: "AI + IoT",
    status: "completed",
    year: "2024",
    role: "AI Developer",
    features: [
      "Face Recognition",
      "Hardware Integration",
      "Energy Efficient Processing",
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Shadcn"],
  },
  { label: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { label: "Languages", items: ["JavaScript", "TypeScript", "Java", "C++"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "Firebase"] },
  { label: "Cloud & DevOps", items: ["AWS", "Vercel", "GitHub Actions"] },
  { label: "Tools", items: ["Git", "GitHub", "Vercel", "Netlify"] },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Calcutta",
    degree: "B.Tech in Computer Science",
    year: "2023 – 2026",
    description:
      "Core subjects in software engineering, data structures, and systems design with hands-on full-stack and backend projects.",
    location: "Kolkata, India",
    gpa: "8.7",
    major: "Computer Science",
    logo: "/images/logos/calcutta-university.png",
  },
  {
    id: "2",
    institution: "University of Calcutta",
    degree: "B.Sc Honours in Physics",
    year: "2020 – 2023",
    description:
      "Built a strong analytical foundation through quantum mechanics, mathematics, and problem-solving before transitioning to software.",
    location: "Howrah, India",
    gpa: "7.8",
    major: "Physics",
    logo: "/images/logos/calcutta-university.png",
  },
];

export const about = {
  summary:
    "Full-stack developer blending a Physics background with a passion for clean, scalable web applications. Currently pursuing B.Tech CSE and building real-world tools with Java, Next.js, and PostgreSQL.",
  professional:
    "Skilled in full-stack development with hands-on experience in Java MVC, React, and API design — focused on building fast, user-centric apps with strong backend foundations.",
  personal: {
    age: 22,
    nationality: "Indian",
    languages: ["English", "Urdu", "Hindi", "Bengali"],
    hobbies: ["Coding", "Web Series", "Prompting", "Gaming"],
  },
  achievements: [
    {
      title: "4-Star in C & Problem Solving — HackerRank",
      description:
        "Recognized for consistent problem-solving skills and coding proficiency.",
      year: "2025",
    },
    {
      title: "200+ DSA Problems Solved — GeeksforGeeks",
      description:
        "Strengthened core data structures and algorithms through regular practice.",
      year: "2025",
    },
  ],
  certifications: [
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      year: "2024",
      link: "https://www.udemy.com/certificate/UC-13bb9078-74c7-48db-8a03-872283b847de/",
    },
  ],
};

export const contacts = {
  email: "eahtashamummam@gmail.com",
  twitter: "https://x.com/Eahtasham_",
  github: "https://github.com/Eahtasham",
  linkedin: "https://www.linkedin.com/in/eahtasham-ummam/",
  discord: "eahtasham#2120",
  telegram: "https://t.me/Eahtasham",
};

export const blog = {
  hashnodeHost: "eahtasham.hashnode.dev",
};
