import avatarImg from "./assets/Screenshot.png";

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  period: string;
  gpa: string;
  courses: string[];
  achievements?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile' | 'Systems';
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName: string }[];
}

export interface PortfolioData {
  name: string;
  lastName: string;
  title: string;
  subtitle: string;
  bio: string;
  aboutDetails: {
    story: string;
    avatarUrl: string;
    quickStats: { label: string; value: string }[];
  };
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  careerGoals: {
    aim: string;
    objectives: string[];
  };
  currentlyLearning: {
    topic: string;
    description: string;
    iconName: string;
    status: 'In Progress' | 'Up Next' | 'Exploring';
  }[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
    location: string;
  };
}

export const portfolioData: PortfolioData = {
  name: "Pankaj",
  lastName: "Chaudhary",
  title: "Software Developer",
  subtitle: "Building elegant solutions to complex problems.",
  bio: "A passionate Computer Science student focusing on modern web architecture, cloud systems, and user-centric design. Seeking internship and junior engineering opportunities to apply academic foundations to real-world engineering challenges.",

  aboutDetails: {
    story: "I'm currently pursuing my Bachelor's degree in Computer Science. My journey into programming started with building small script calculators and automating tasks, which quickly blossomed into a deep love for web engineering and systems design. I thrive in collaborative envionments and love learning new technologies, debugging complex problems, and designing clean user experiences.",
    avatarUrl: avatarImg, // High quality professional placeholder avatar

    quickStats: [
      { label: "Current GPA", value: "7.55 / 10.0" },
      { label: "Completed Projects", value: "12+" },
      { label: "Years Coding", value: "3+" }
    ]
  },

  education: [
    {
      degree: "Bachelor of Science",
      major: "Computer Science & Engineering",
      institution: "Thakur College of Enginnering and Technology",
      period: "Sep 2022 - May 2026",
      gpa: "7.71 / 10.0",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering Principles",
        "Operating Systems",
        "Web Application Engineering",
        "Artificial Intelligence"
      ],
      achievements: [
        "NSS volunteer head",
        "Undergraduate Teaching Assistant for Intro to Java Course",
      ]
    },
  ],

  skills: [
    {
      title: "Languages",
      skills: [
        { name: "TypeScript / JavaScript", level: 90, iconName: "Code" },
        { name: "Python", level: 85, iconName: "Terminal" },
        { name: "Java", level: 80, iconName: "Coffee" },
        { name: "C++", level: 70, iconName: "Cpu" },
        { name: "SQL", level: 80, iconName: "Database" }
      ]
    },
    {
      title: "Frontend Frameworks & UI",
      skills: [
        { name: "React / Next.js", level: 92, iconName: "Layout" },
        { name: "Tailwind CSS", level: 95, iconName: "Wind" },
        { name: "HTML5 & CSS3", level: 95, iconName: "FileCode" },
        { name: "Responsive Layouts", level: 90, iconName: "Smartphone" }
      ]
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Node.js / Express", level: 85, iconName: "Server" },
        { name: "PostgreSQL / MongoDB", level: 80, iconName: "Database" },
        { name: "RESTful APIs", level: 90, iconName: "GitMerge" },
        { name: "Docker", level: 75, iconName: "Package" },
        { name: "AWS (S3, EC2)", level: 70, iconName: "Cloud" }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git & GitHub", level: 90, iconName: "GitBranch" },
        { name: "VS Code / IDEs", level: 95, iconName: "PenTool" },
        { name: "Linux / Unix Shell", level: 80, iconName: "Terminal" },
        { name: "Postman", level: 85, iconName: "Activity" }
      ]
    }
  ],

  projects: [
    {
      id: "proj1",
      title: "EduSphere - Collaborative Learning Platform",
      description: "A full-featured virtual workspace for students enabling real-time notes sharing, whiteboards, video calling, and task organization.",
      longDescription: "EduSphere is a modern SaaS platform designed to facilitate real-time study groups. Built with Next.js, WebSockets, and Express, it features rich text collaborative editors, custom virtual classrooms, and a dynamic dashboard to organize coursework assignments. Fully responsive with glassmorphic design and highly optimized database queries.",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/placeholder/edusphere",
      liveUrl: "https://edusphere-demo.vercel.app",
      category: "Full Stack",
      featured: true
    },
    {
      id: "proj2",
      title: "Algoverse - Visual Algorithm Sandbox",
      description: "An interactive, web-based visualization tool for sorting, pathfinding, and graph search algorithms with step-by-step debugger controls.",
      longDescription: "Algoverse is an educational tool constructed to help CS students visualize complex data structures and algorithms. Built with React and TypeScript, it supports sorting algorithms (Quick, Merge, Heap), pathfinding algorithms (Dijkstra, A*, DFS/BFS), and dynamic runtime complexity graphs. Includes speed control, customizable array sizes, and obstacle drawing boards.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "Framer Motion"],
      githubUrl: "https://github.com/placeholder/algoverse",
      liveUrl: "https://algoverse-visuals.netlify.app",
      category: "Frontend",
      featured: true
    },
    {
      id: "proj3",
      title: "DevPulse - GitHub Metrics Dashboard",
      description: "A developer analytics tool tracking repository contributions, code impact, commit frequencies, and automated work reviews.",
      longDescription: "DevPulse interfaces with the GitHub GraphQL API to compile advanced engineering metrics for developer teams. Created to analyze developer performance, code review velocity, and release cycles, presenting results via interactive charts and downloadable PDF reports.",
      technologies: ["React", "GraphQL", "ChartJS", "Node.js", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/placeholder/devpulse",
      liveUrl: "https://devpulse-metrics.vercel.app",
      category: "Full Stack",
      featured: true
    },
    {
      id: "proj4",
      title: "MicroOS Shell & Virtual File System",
      description: "A lightweight Unix-like shell interpreter and hierarchical file system simulator written in C++ for Unix terminals.",
      longDescription: "A systems programming project simulating standard terminal utilities (ls, cd, mkdir, touch, rm, cat) and implementing custom file allocation tables. Handles directory structures, file descriptors, permission nodes, and command piping simulation inside a memory-mapped file block.",
      technologies: ["C++", "Make", "GDB", "Valgrind", "Linux Systems API"],
      githubUrl: "https://github.com/placeholder/micro-shell",
      liveUrl: "https://github.com/placeholder/micro-shell#documentation",
      category: "Systems",
      featured: false
    },
    {
      id: "proj5",
      title: "QuickTask - Kanban Planner App",
      description: "A minimalist desktop-first task management application with drag-and-drop support, subtask checklists, and productivity stats.",
      longDescription: "A frontend task manager focusing on sleek animations and intuitive UX. Built with React and local storage integration, featuring quick-create cards, drag-and-drop swimlanes, tag filters, and customizable color themes.",
      technologies: ["React", "HTML5 Drag-Drop", "CSS Variables", "Local Storage"],
      githubUrl: "https://github.com/placeholder/quicktask",
      liveUrl: "https://quicktask-kanban.netlify.app",
      category: "Frontend",
      featured: false
    }
  ],

  careerGoals: {
    aim: "My core objective is to grow into a versatile Staff Engineer capable of architecting scalable distributed systems and leading cross-functional engineering teams. I aim to bridge the gap between robust system performance and delightful user experience, specifically focus on cloud infrastructure, backend optimization, and interactive web technologies.",
    objectives: [
      "Secure a Summer 2026 / 2027 software engineering internship at a technology-focused organization.",
      "Contribute actively to open-source software libraries, specifically in the JavaScript/TypeScript and Python ecosystems.",
      "Strengthen expertise in cloud systems, system architecture design, and database replication techniques.",
      "Collaborate in cross-disciplinary teams to build solutions resolving real-world societal problems."
    ]
  },

  currentlyLearning: [
    {
      topic: "System Design & Distributed Architectures",
      description: "Studying load balancers, rate limiters, database sharding, replication, microservices design patterns, and caching strategies.",
      iconName: "Network",
      status: "In Progress"
    },
    {
      topic: "AWS Cloud Practitioner & Architecture",
      description: "Preparing for AWS Certified Cloud Practitioner. Learning serverless compute (Lambda), VPC configurations, and IAM controls.",
      iconName: "CloudLightning",
      status: "In Progress"
    },
    {
      topic: "Go (Golang)",
      description: "Exploring Go's concurrency patterns (goroutines, channels), speed performance, and standard libraries for building high-performance APIs.",
      iconName: "Zap",
      status: "Up Next"
    },
    {
      topic: "Machine Learning Foundations",
      description: "Taking academic course covering Linear Regression, Neural Networks, PyTorch basics, and basic model evaluation techniques.",
      iconName: "Brain",
      status: "Exploring"
    }
  ],

  contact: {
    email: "pankajchaudhary0403@gmail.com",
    github: "https://github.com/PChaudhary0403",
    linkedin: "https://www.linkedin.com/in/pankaj-chaudhary-87a78a289/",
    twitter: "https://x.com/Panku0403",
    location: "Mumbai,Maharashtra"
  }
};
