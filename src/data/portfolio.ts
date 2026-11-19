export const profile = {
  name: "Zeyad Mohamed",
  role: "Full-Stack Developer",
  tagline:
    "Computer Science student crafting modern, high-performance web experiences with React, Next.js and TypeScript — from pixel-perfect interfaces to robust backend systems.",
  location: "Cairo, Egypt",
  email: "zeyad.mo7amed.work@gmail.com",
  github: "https://github.com/Zeyadd106",
  linkedin:
    "https://www.linkedin.com/in/ziad-mohamed-116bb9327/",
  avatar: "https://avatars.githubusercontent.com/u/201388108?v=4",
};

export const stats: {
  value: number;
  suffix: string;
  label: string;
  note?: string;
}[] = [
  {
    value: 9,
    suffix: "+",
    label: "Completed Projects",
    note: "Delivered with precision & scalability",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years of Experience",
    note: "Building modern web applications",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    note: "Focus on performance & UX detail",
  },
  { value: 10, suffix: "K+", label: "Lines of Code", note: "Clean, maintainable & production-ready" },
];

export type Project = {
  title: string;
  category: string;
  status: "live" | "in-development" | "completed";
  description: string;
  whyBuilt: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
};

export function projectSlug(repoUrl: string) {
  return repoUrl.split("/").pop()!.toLowerCase().replace(/_/g, "-");
}

export function repoImage(repoUrl: string) {
  const parts = repoUrl.replace("https://github.com/", "").split("/");
  return `https://opengraph.githubassets.com/1/${parts[0]}/${parts[1]}`;
}

export const projects: Project[] = [
  {
    title: "Unique Studios",
    category: "Creative Studio Platform",
    status: "live",
    description:
      "A modern digital studio website built with TypeScript and Next.js, featuring polished animations and a clean, responsive design system.",
    whyBuilt:
      "Built to give a creative studio a premium digital presence that reflects the quality of its work — fast loads, smooth motion and a design system that scales.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://unique-studios-mocha.vercel.app",
    repoUrl: "https://github.com/Zeyadd106/Unique-Studios",
  },
  {
    title: "Egypt Tech Company",
    category: "Corporate Website",
    status: "live",
    description:
      "A corporate website for an Egyptian tech company, engineered with a component-driven architecture and TypeScript for type safety.",
    whyBuilt:
      "Created to establish a credible corporate web presence for an emerging tech company, with typed components that make the codebase easy to extend.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/Zeyadd106/Egypt_Tech-Company",
  },
  {
    title: "Rex Cinema",
    category: "Cinema Booking Platform",
    status: "live",
    description:
      "A cinema booking experience built with TypeScript and modern React patterns, featuring an immersive interface for browsing and reserving seats.",
    whyBuilt:
      "Designed to modernize the cinema-going experience with a fast, visual-first booking flow that works flawlessly on mobile.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://rex-cinema.vercel.app",
    repoUrl: "https://github.com/Zeyadd106/Rex-Cinema",
  },
  {
    title: "Aurex",
    category: "Web Application",
    status: "live",
    description:
      "A full-featured web application built with JavaScript and modern frontend tooling, deployed on Vercel.",
    whyBuilt:
      "Built as a fast, modern web application to demonstrate full-stack fundamentals — component architecture, API integration and production deployment.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://aurex-six-xi.vercel.app",
    repoUrl: "https://github.com/Zeyadd106/aurex",
  },
  {
    title: "MediConnect",
    category: "Healthcare Platform",
    status: "in-development",
    description:
      "A healthcare connectivity platform connecting patients and providers through a modern JavaScript-based web interface.",
    whyBuilt:
      "Started to solve the fragmentation between patients and healthcare providers by creating a single, intuitive platform for communication.",
    tags: ["React", "JavaScript", "REST API"],
    repoUrl: "https://github.com/Zeyadd106/MediConnect",
  },
  {
    title: "Pharmacy Project",
    category: "E-Commerce & Healthcare",
    status: "in-development",
    description:
      "A pharmacy management and e-commerce application built with TypeScript, focusing on clean architecture and maintainable code.",
    whyBuilt:
      "Aimed to digitize pharmacy operations — product browsing, ordering and management — with a codebase structured for long-term maintenance.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    repoUrl: "https://github.com/Zeyadd106/pharmacy-project",
  },
  {
    title: "MediCare Hub",
    category: "Healthcare Management",
    status: "in-development",
    description:
      "A medical care hub built with Laravel and Blade, featuring server-rendered interfaces for managing healthcare workflows.",
    whyBuilt:
      "Developed to streamline clinic administration — patient records, scheduling and reporting — using Laravel's robust server-side rendering.",
    tags: ["Laravel", "PHP", "Blade", "MySQL"],
    repoUrl: "https://github.com/Zeyadd106/MediCare-Hub",
  },
  {
    title: "SmartParking AI",
    category: "AI & Computer Vision",
    status: "completed",
    description:
      "An AI-powered smart parking system using Python, applying computer vision and machine learning to optimize parking space detection.",
    whyBuilt:
      "An academic exploration into applied AI — using Python and computer vision to detect and classify parking space occupancy in real time.",
    tags: ["Python", "OpenCV", "Machine Learning", "AI"],
    repoUrl: "https://github.com/Zeyadd106/SmartParking-AI",
  },
  {
    title: "Forest Fire Smoke Detection",
    category: "Machine Learning",
    status: "completed",
    description:
      "A machine learning project for detecting forest fires and smoke using image classification, developed in Jupyter Notebook.",
    whyBuilt:
      "Built to classify satellite/aerial imagery into fire, smoke and non-fire scenarios — an early-warning application of deep learning for environmental safety.",
    tags: ["Python", "Jupyter", "TensorFlow", "ML"],
    repoUrl:
      "https://github.com/Zeyadd106/Forest-Fire-Smoke-Non-Fire-Detection",
  },
];

export const techGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "PHP", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Laravel",
      "Node.js",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git / GitHub",
      "Vercel",
      "VS Code",
      "Jupyter",
      "REST APIs",
      "Figma",
    ],
  },
];

export const focusAreas = [
  "Full-Stack Development",
  "Responsive Design",
  "UI/UX Implementation",
  "Machine Learning",
  "RESTful APIs",
];

export const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Laravel",
  "Framer Motion",
  "Git & GitHub",
];
