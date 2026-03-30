import { GITHUB_PROFILES } from "@/config/social";

export const logotext = "<SOFTCRUDER />";

export const meta = {
  title: "Nasirullah Oladipo",
  subtitle: "Software Engineer | Retool Platform Admin",
  description:
    "Software Developer at Raenest: internal tools, Retool, Next.js, TS, JS, PostgreSQL, and APIs.",
  notDescription:
    "Software Engineer at Raenest. Building internal tools and workflows with Retool, Next.js, and JavaScript, Agile delivery, APIs, and full-stack frontend focus.",
  updateWork: "Raenest",
  favicon: "/favicon.png",
};

export const introData = {
  title: "Nasirullah Oladipo",
  subtitle: "Software Engineer | Retool Platform Admin",
  animated: {
    first: "I love building tools",
    second: "I ship internal apps and workflows",
    third: "JavaScript, Next.js, Retool, PostgreSQL, React, and more.",
  },
  workingDescription:
    "I'm a Software Developer at Raenest, building internal tools, Retool apps, and integrations with several APIs in an Agile team.",
  notWorkingDescription:
    "I'm a Software Developer with a background in frontend and a passion for efficient web applications. At Raenest I build internal tools and workflows with Retool, Next.js, JavaScript, PostgreSQL, and HTTP integrations. I hold a Diploma in Software Engineering from AltSchool Africa and a B.Tech in Computer Science from the Federal University of Technology, Minna.",
  update_work: "<Link href={https://raenest.com}>Raenest</Link>",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

export const dataAbout = {
  title: "My Story",
  aboutmeWork:
    "I'm a Software Developer with a background in Frontend development, building efficient web applications with JavaScript, TypeScript, Next.js, Retool, PostgreSQL, Tailwind CSS, and related stack at Raenest. I build internal tools and workflows and integrate with APIs for internal tooling. I graduated from AltSchool Africa with a diploma in Software Engineering (Frontend major), and I completed a B.Tech in Computer Science at the Federal University of Technology Minna, Nigeria.",
  aboutme:
    "I'm a Junior Software Developer with a background in Frontend development and a passion for creating efficient web applications. Proficient in JavaScript, Next.js, Retool, PostgreSQL, and various frontend technologies. At Raenest I build internal tools and workflows and integrate with several APIs for internal tooling, working in an Agile software development team. I graduated from AltSchool Africa after earning a diploma in Software Engineering (Frontend Engineering major), and I completed a B.Tech in Computer Science at the Federal University of Technology Minna, Nigeria. I'm passionate about leveraging modern technologies to build solutions for real-world challenges.",
};

export const proficientSkills = [
  { name: "JavaScript" },
  { name: "Next.js" },
  { name: "Retool" },
  { name: "PostgreSQL" },
  { name: "React" },
  { name: "REST APIs" },
  { name: "Agile" },
  { name: "SQL" },
];

export const otherSkills = [
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Vue.js" },
  { name: "Email Templates (Sengrid | React Email | MJML)" },
  { name: "Git" },
];

export type ExperienceJob = {
  jobtitle: string;
  where: string;
  type?: string;
  duration?: string;
  startDate: string;
  endDate: string;
};

export type ExperienceAward = {
  jobtitle: string;
  where: string;
  date: string;
};

export type ExperienceEntry = ExperienceJob | ExperienceAward;

/** LinkedIn-aligned timeline: https://www.linkedin.com/in/nasirullah-oladipo */
export const experience: ExperienceEntry[] = [
  {
    jobtitle: "Software Developer",
    where: "Raenest",
    type: "Full-time · Engineering",
    startDate: "Nov 2023",
    endDate: "Present",
  },
  {
    jobtitle: "Software Development Intern",
    where: "Raenest Inc. (Techstars '22)",
    type: "Intern · Engineering",
    startDate: "May 2023",
    endDate: "Oct 2023",
  },
];

export const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

export const dataPortfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    title: "",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    github: "",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    title: "",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    github: "",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    title: "",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    github: "",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    title: "",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    github: "",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    title: "",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    github: "",
    link: "#",
  },
];

export const contactConfig = {
  YOUR_EMAIL: "hey@softcruder.me",
  YOUR_FONE: "(234)90 106 067 48",
  description:
    "Send me a message and I'll get back to you as soon as possible.",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

export const socialProfiles = {
  github: GITHUB_PROFILES.map((p) => p.href),
  facebook: "https://facebook.com/nasirullah-oladipo",
  linkedin: "https://linkedin.com/in/nasirullah-oladipo",
  twitter: "https://twitter.com/NasirOladipo",
};
