/**
 * Résumé: synced with public LinkedIn profile.
 * @see https://www.linkedin.com/in/nasirullah-oladipo
 */
export type ResumeCert = {
  name: string;
  issuer?: string;
  year?: string;
  url?: string;
};

export const resume = {
  name: "Nasirullah Oladipo",
  headline: "Software Engineer | Retool Platform Admin",
  location: "Ilorin | Kaduna | Lagos, Nigeria. | Remote",
  email: "softcruder@gmail.com",
  phone: "(234) 90 106 067 48",
  linkedin: "https://www.linkedin.com/in/nasirullah-oladipo",
  /** Personal and work GitHub accounts (see src/config/social.ts). */
  githubProfiles: [
    { label: "Personal", url: "https://github.com/softcruder" },
    { label: "Work", url: "https://github.com/softcruder-rn" },
  ],
  website: "https://softcruder.github.io",
  summary:
    "Software Developer with a background in frontend and a passion for efficient web applications. Proficient in JavaScript, Next.js, Retool, PostgreSQL, and related technologies. At Raenest I build internal tools and workflows, integrate with APIs for internal tooling, and work in an Agile engineering team. Diploma in Software Engineering (Frontend) from AltSchool Africa; B.Tech in Computer Science from the Federal University of Technology, Minna, Nigeria.",

  experience: [
    {
      role: "Software Developer",
      company: "Raenest",
      type: "Full-time · Engineering",
      start: "Nov 2023",
      end: "Present",
      highlights: [
        "Build and maintain internal tools and Retool applications.",
        "Expand admin backoffice to various departments across operations, finance, liquidity, and engineering.",
        "Integrate with REST APIs, Database, Internal tools and collaborate in an Agile team.",
        "Implement and maintain user-facing products and flows including Cards, Onboarding, Payments, and more.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Raenest Inc (Techstars '22)",
      type: "Internship",
      start: "May 2023",
      end: "Oct 2023",
      highlights: [
        "Developed an admin panel with permission-based access, REST API integration, and UI for Customer Support and Compliance.",
        "Delivered in Agile sprints with measurable impact on service delivery and operational efficiency.",
      ],
    },
  ],

  education: [
    {
      school: "Federal University of Technology Minna, Nigeria",
      credential: "B.Tech, Computer Science",
      detail:
        "Nov, 2019 to Dec, 2025. Professional experience concurrent with studies.",
    },
    {
      school: "AltSchool Africa",
      credential: "Diploma, Software Engineering (Frontend Engineering major)",
      detail:
        "Apr, 2022 to June, 2023. Frontend Engineering track: React, Vue, CSS, Redux, Next.js.",
    },
  ],

  skills: {
    core: [
      "JavaScript",
      "Next.js",
      "Retool",
      "PostgreSQL",
      "SQL",
      "React",
      "REST APIs",
      "Agile",
    ],
    also: [
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Git",
      "Web applications",
      "Internal tooling",
    ],
  },

  certifications: [
    {
      name: "Retool Platform Admin",
      issuer: "Retool",
      year: "2024",
      url: "https://credly.com/badges/5e0122c5-7c58-4bb1-aed4-0da946721831/public_url",
    },
    {
      name: "Retool Platform Developer",
      issuer: "Retool",
      year: "2024",
      url: "https://credly.com/badges/d09d17df-b22c-4f74-9ebd-750e2ae249f6/public_url",
    },
    {
      name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      issuer: "The Hong Kong University of Science and Technology",
      year: "2021",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2021",
      url: "https://freecodecamp.org/certification/softcruder/responsive-web-design",
    },
    {
      name: "HTML5 Application Development Fundamentals",
      issuer: "Eduonix Learning Solutions",
      year: "2020",
    },
  ],
};
