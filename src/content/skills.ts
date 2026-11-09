/** Skills section copy and skill groups. Groups are placeholders until trimmed to what you actually use. */

/** A named group of related skills. */
export type SkillGroup = {
  /** Group name, e.g. "Backend". */
  name: string;
  /** Skills in this group, most used first. */
  items: string[];
};

/** Section heading. */
export const skillsSection = {
  heading: "Skills",
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "C++", "Java"],
  },
  {
    name: "Frontend",
    items: [
      "React",
      "Tanstack Query",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express",
      "Fastify",
      "FastAPI",
      "Django",
      "REST APIs",
      "WebSockets",
      "BullMQ",
      "Transactional outbox pattern",
    ],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "Redis", "MongoDB", "Prisma", "SQLAlchemy"],
  },
  {
    name: "Web3",
    items: [
      "viem",
      "ethers.js",
      "Wallet integrations",
      "Reading on-chain data",
    ],
  },
  {
    name: "Security",
    items: [
      "OWASP Top 10",
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Secure authentication (OAuth, JWT)",
    ],
  },
  {
    name: "Testing and tooling",
    items: [
      "Vitest",
      "pytest",
      "Git",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Linux",
    ],
  },
];
