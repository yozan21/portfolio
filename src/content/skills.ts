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
  { name: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { name: "Backend", items: ["Node.js", "Express", "FastAPI", "Django", "REST APIs", "WebSockets"] },
  { name: "Data", items: ["PostgreSQL", "Redis", "MongoDB", "Prisma", "SQLAlchemy"] },
  { name: "Web3", items: ["viem", "ethers.js", "Wallet integrations", "Reading on-chain data"] },
  { name: "Testing and tooling", items: ["Vitest", "pytest", "Git", "Docker", "GitHub Actions", "Vercel", "Linux"] },
];
