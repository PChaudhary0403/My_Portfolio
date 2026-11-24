
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
  category: 'Full Stack' | 'Frontend' | 'Mobile App' | 'Systems';
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
    story: "I'm an Electronics and Computer Science graduate with a strong interest in software engineering, backend systems, and AI-driven applications. My journey into programming began with small scripts and automation, gradually evolving into building full-stack applications and exploring how complex systems work behind the scenes.I enjoy breaking down problems, experimenting with new technologies, and turning ideas into functional products.I'm particularly interested in system design, scalable architectures, and building software where thoughtful engineering meets practical utility.",
    avatarUrl: avatarImg, // High quality professional placeholder avatar

    quickStats: [
      { label: "CGPA", value: "7.7 / 10.0" },
      { label: "Completed Projects", value: "12+" },
      { label: "Years Coding", value: "3+" }
    ]
  },

  education: [
    {
      degree: "Bachelor of Science",
      major: "Electronics and Computer Science Engineering",
      institution: "Thakur College of Engineering and Technology",
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
      title: "ChatterBox - Real-Time Messaging Platform",
      description: "A modern real-time chat application with secure authentication, instant messaging, online presence, and responsive user experience.",
      longDescription: "ChatterBox is a full-stack real-time messaging platform built to replicate the core experience of modern chat applications. It features secure JWT authentication, instant one-to-one messaging powered by WebSockets, user presence indicators, message persistence, and a clean responsive interface. The application is optimized for low-latency communication and provides a seamless chatting experience across desktop and mobile devices.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Socket.io",
        "MongoDB",
        "JWT",
        "Tailwind CSS"
      ],
      githubUrl: "https://github.com/PChaudhary0403/Chatter_Box",
      liveUrl: "https://chatter-box-nu.vercel.app/",
      category: "Full Stack",
      featured: true
    },
    {
      id: "proj2",
      title: "ChessMaster - Interactive Chess Game",
      description: "A feature-rich web-based chess game implementing official chess rules, move validation, and an intuitive user interface for an engaging gameplay experience.",
      longDescription: "ChessMaster is a modern chess application built from the ground up with a focus on game logic and user experience. It accurately implements official chess mechanics including legal move validation, castling, en passant, pawn promotion, check, checkmate, and stalemate detection. The application features a responsive interface, move history, captured pieces tracking, game reset functionality, and smooth piece animations, providing a realistic and enjoyable chess experience across devices.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "Framer Motion"
      ],
      githubUrl: "https://github.com/placeholder/chessmaster",
      liveUrl: "https://ai-chess-dun.vercel.app/",
      category: "Full Stack",
      featured: true
    },
    {
      id: "proj3",
      title: "Breast Cancer Detection using Deep Learning",
      description: "An AI-powered medical image classification system that detects breast cancer from mammogram images using deep learning to assist in early diagnosis.",
      longDescription: "This deep learning application was developed to support the early detection of breast cancer through automated thermal image analysis. The system employs a two-stage deep learning pipeline, utilizing U-Net++ for precise breast region segmentation and EfficientNet-B4 for classifying segmented thermal images into Benign, Malignant, and Non-Medical categories. The model integrates image preprocessing, data augmentation, and transfer learning to improve prediction accuracy and robustness. A user-friendly web interface enables users to upload thermal images and receive real-time classification results, making the solution valuable for research, educational purposes, and AI-assisted healthcare applications.",
      technologies: ["C++", "Make", "GDB", "Valgrind", "Linux Systems API"],
      githubUrl: "https://github.com/PChaudhary0403/BreastCancerdetection",
      liveUrl: "https://breast-cancerdetection.vercel.app/",
      category: "Systems",
      featured: true
    },
    {
      id: "proj4",
      title: "JanSeva - Civic Grievance Portal",
      description: "A full-stack civic grievance management platform enabling citizens to file, track, and manage complaints with automated assignment, escalation, and role-based dashboards.",
      longDescription: "JanSeva is a scalable civic grievance portal designed to streamline communication between citizens and government authorities. The platform features secure role-based authentication for citizens, authorities, and administrators, allowing users to file complaints with evidence, track their status in real time, and provide resolution feedback. It incorporates automatic complaint assignment based on department and location, configurable escalation workflows for overdue cases, and dedicated dashboards with performance metrics. Built using Next.js, PostgreSQL, and Prisma ORM, the application delivers a responsive and production-ready experience across desktop and mobile devices.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "NextAuth.js",
        "Tailwind CSS",
        "Radix UI"
      ],
      githubUrl: "https://github.com/PChaudhary0403/public_portal",
      liveUrl: "https://public-portal-five.vercel.app/",
      category: "Full Stack",
      featured: false
    },
    
    {
      id: "proj5",
      title: "Raahi - Travel Companion Web App",
      description: "A full-stack ride-booking platform that connects passengers with drivers, enabling users to book rides, track drivers in real time, and choose drivers based on their preferences for a more reliable and comfortable travel experience.",
      longDescription: "Raahi is a full-stack ride-booking application designed to simplify and personalize the travel experience. The platform allows passengers to book rides by selecting pickup and destination locations, viewing routes through Google Maps integration, and connecting with available drivers. It features separate user and driver interfaces, role-based authentication, real-time driver location tracking, and interactive ride management. Built with FastAPI and PostgreSQL, the system integrates Supabase for backend services and Google Maps APIs for location-based functionality. Raahi focuses on providing a reliable, transparent, and user-centric transportation experience by allowing passengers to choose drivers based on their preferences and travel requirements.",
      technologies: [
        "React",
        "TypeScript",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Supabase",
        "Google Maps API",
        "WebSockets",
        "JWT Authentication"
      ],
      githubUrl: "https://github.com/PChaudhary0403/RideBookingSystem",
      liveUrl: "https://raahibooking.vercel.app/",
      category: "Full Stack",
      featured: true
    },
    {
      id:"proj6",
      title: "INSIGHT - Adaptive Health & Wellness App",
      description:
        "A personal health and wellness companion that combines daily planning, habit tracking, productivity insights, and digital wellness monitoring to help users build healthier routines.",
    
      longDescription:
        "INSIGHT is a Flutter-based adaptive wellness application designed to help users improve their daily routines through structured planning and behavioral insights. It includes a daily task planner, activity tick sheet, discipline tracking, productivity scoring, and a digital wellness module that monitors screen time and generates behavioral insights. The application also supports personalized reminders, progress visualization, persistent local storage, and light/dark themes, bringing multiple aspects of personal well-being into one platform.",
    
      technologies: [
        "Flutter",
        "Dart",
        "BLoC",
        "Shared Preferences",
        "Flutter Local Notifications",
        "Fl Chart",
        "Go Router",
        "Dio"
      ],
    
      category: "Mobile App",
      featured: false,
    
      liveUrl: "https://insight-fitness.vercel.app/",
      githubUrl: "https://github.com/PChaudhary0403/Insight_Fitness"
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
      topic: "AWS Cloud & Architecture",
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
