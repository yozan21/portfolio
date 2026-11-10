/** Skill groups for the Skills section. The section heading lives in site.sections. */

/** A named group of related skills. */
export type SkillGroup = {
  /** Group name, e.g. "Backend". */
  name: string;
  /** Skills in this group, most used first. */
  items: string[];
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
      "TanStack Query",
      "RTK",
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
    name: "AI (learning)",
    items: [
      "RAG pipelines",
      "Vector databases",
      "Embeddings",
      "LLM APIs",
      "Tool calling",
      "Agentic workflows",
      "Claude Code",
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
