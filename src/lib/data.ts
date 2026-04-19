// ============================================================
// ALL PORTFOLIO CONTENT — Edit this file to update everything
// ============================================================

export const personalInfo = {
  name: "Prajwal Banthiya",
  initials: "PB",
  tagline: "MERN Stack Developer",
  roles: [
    "MERN Stack Developer",
    "Full Stack Engineer",
    "React.js Developer",
    "Node.js Developer",
    "AWS Certified Developer",
  ],
  bio: `I'm a MERN-focused developer with internship experience at IIT Jammu/Techible and Sumago Infotech. I enjoy turning ideas into working products—whether that's a campus marketplace, a lost & found system, or polished React UIs. AWS certified, hackathon participant, and currently pursuing B.Tech in Information Technology at WIT Solapur.`,
  email: "prajwalbanthiya27@gmail.com",
  location: "Maharashtra, India",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/Prajwal-it/",
  /** Local file in /public — professional headshot for About section. */
  profileAvatarUrl: "/profile.png",
  linkedin: "https://linkedin.com/in/prajwalbanthiya",
  twitter: "https://twitter.com/prajwalbanthiya",
  availableForWork: true,
};

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  [category: string]: Skill[];
}

export const skills: SkillCategory = {
  Frontend: [
    { name: "React.js", icon: "SiReact", color: "#61DAFB" },
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
  ],
  Backend: [
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "Express.js", icon: "SiExpress", color: "#ffffff" },
    { name: "REST APIs", icon: "SiPostman", color: "#FF6C37" },
    { name: "JWT Auth", icon: "SiJsonwebtokens", color: "#d63aff" },
  ],
  Database: [
    { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    { name: "Mongoose", icon: "SiMongoose", color: "#AA0000" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
    { name: "Vercel", icon: "SiVercel", color: "#ffffff" },
    { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
  ],
  Tools: [
    { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
    { name: "Linux", icon: "SiLinux", color: "#FCC624" },
    { name: "npm", icon: "SiNpm", color: "#CB3837" },
  ],
};

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  type: string;
  location: string;
  highlights: string[];
  badgeColor: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "IIT Jammu / Techible",
    role: "Software Development Intern",
    duration: "Jan 2026 – Mar 2026",
    type: "Internship",
    location: "Remote / Jammu, India",
    highlights: [
      "Worked on real-world full-stack projects under mentorship at IIT Jammu in collaboration with Techible",
      "Built and integrated REST APIs using Node.js and Express.js",
      "Developed responsive frontend interfaces using React.js and Tailwind CSS",
      "Collaborated in an agile team environment with version control via Git & GitHub",
    ],
    badgeColor: "#6366f1",
  },
  {
    id: 2,
    company: "Sumago Infotech Pvt. Ltd.",
    role: "Web Development Intern",
    duration: "Jan 2024 – Apr 2024",
    type: "Internship",
    location: "Maharashtra, India",
    highlights: [
      "Developed and maintained web applications using the MERN stack",
      "Worked on client projects involving dynamic UI components with React.js",
      "Integrated MongoDB databases with backend Express APIs",
      "Gained hands-on experience in production deployment workflows",
    ],
    badgeColor: "#06b6d4",
  },
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  status: string;
  highlights: string[];
  color: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology — Information Technology",
    institution: "Walchand Institute of Technology (WIT)",
    location: "Solapur, Maharashtra",
    duration: "2024 – Present",
    status: "Pursuing",
    highlights: [
      "Pursuing B.Tech in Information Technology",
      "Active participant in hackathons and technical clubs",
      "Received recognition at Annual Awards Ceremony",
    ],
    color: "#6366f1",
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic Nashik",
    location: "Nashik, Maharashtra",
    duration: "2021 – 2024",
    status: "Completed",
    highlights: [
      "Completed Diploma in Computer Engineering",
      "Built foundational knowledge in programming, networking, and databases",
      "Participated in project competition and won Consolation Prize",
    ],
    color: "#06b6d4",
  },
];

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  type: string;
  highlight: boolean;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Consolation Prize — Project Competition",
    description:
      "Won the Consolation Prize at an inter-college project competition for building an innovative full-stack application recognized for technical depth, UI design, and real-world applicability.",
    icon: "🏅",
    type: "Award",
    highlight: true,
  },
  {
    id: 2,
    title: "Annual Awards Ceremony Recognition",
    description:
      "Received a formal award at the Annual Awards Ceremony at college in recognition of outstanding performance and contributions to the technical community.",
    icon: "🎖️",
    type: "Recognition",
    highlight: true,
  },
  {
    id: 3,
    title: "AWS Certified",
    description:
      "Earned official AWS Certification demonstrating proficiency in cloud computing, core AWS services, architecture best practices, and cloud deployment strategies.",
    icon: "☁️",
    type: "Certification",
    highlight: true,
  },
  {
    id: 4,
    title: "Multiple Hackathon Participant",
    description:
      "Participated in multiple national and college-level hackathons, building full-stack solutions under time pressure and collaborating effectively in team environments.",
    icon: "⚡",
    type: "Hackathon",
    highlight: false,
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  featured: boolean;
  gradient: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CampusCrate",
    description:
      "One campus platform combining a student marketplace with a lost & found flow—list items, report finds, search, and connect with a MERN stack and a focused UI.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    featured: true,
    gradient: "from-indigo-500 to-cyan-500",
    emoji: "📦",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A weather dashboard built with React only—search a city, view conditions, and explore a responsive UI with component-driven state (no extra framework).",
    tags: ["React", "JavaScript", "CSS", "API"],
    category: "Frontend",
    featured: false,
    gradient: "from-sky-500 to-cyan-500",
    emoji: "🌤️",
  },
  {
    id: 3,
    title: "Music Player",
    description:
      "A browser-based music player with playback controls, playlist-style flow, and a polished interface—focused on React state and UX.",
    tags: ["React", "Audio API", "UI"],
    category: "Frontend",
    featured: false,
    gradient: "from-fuchsia-500 to-purple-500",
    emoji: "🎵",
  },
];

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects", value: 3, suffix: "" },
  { label: "Internships", value: 2, suffix: "" },
  { label: "Hackathons", value: 5, suffix: "+" },
];
