/** Projects section copy and the project list. Projects are placeholders until replaced with real work. */

/** One portfolio project. */
export type Project = {
  /** Project name, shown as the card heading. */
  title: string;
  /** One or two sentences on what it is and who it is for. */
  summary: string;
  /** What you did on it, e.g. "Solo, full-stack". */
  role: string;
  /** Technical choices worth explaining, one sentence each. */
  decisions: string[];
  /** Languages, frameworks and services used, shown as text tags. */
  stack: string[];
  /** Deployed site, if public. */
  liveUrl?: string;
  /** Source repository, if public. */
  repoUrl?: string;
};

/** Section heading and the labels shared by every project card. */
export const projectsSection = {
  heading: "Projects",
  decisionsLabel: "Decisions",
  stackLabel: "Stack",
  liveLabel: "Live site",
  repoLabel: "Source code",
};

export const projects: Project[] = [
  {
    title: "Opening Drill",
    summary:
      "A chess openings trainer that schedules lines with spaced repetition, so players review the moves they keep getting wrong.",
    role: "Solo, full-stack",
    decisions: [
      "Ran Stockfish as WebAssembly in a Web Worker, so analysis costs no server time and keeps the board responsive.",
      "Stored repertoires as PGN text in Postgres instead of a move-tree schema, which keeps imports and exports lossless.",
      "Used server actions for writes and kept the board as the only client component.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stockfish WASM", "Tailwind CSS"],
    liveUrl: "https://example.com/opening-drill",
    repoUrl: "https://github.com/your-username/opening-drill",
  },
  {
    title: "Ledgerline",
    summary:
      "A read-only crypto portfolio tracker. Paste wallet addresses and see balances, cost basis and realised gains across chains.",
    role: "Solo, full-stack",
    decisions: [
      "Never asks for keys or signatures: it reads public chain data only, which removes a whole class of security risk.",
      "Indexed transfers into Postgres with a background job, so page loads hit the database rather than the RPC provider.",
      "Kept token amounts as integer strings end to end to avoid floating-point rounding on 18-decimal tokens.",
    ],
    stack: ["Next.js", "TypeScript", "viem", "PostgreSQL", "Redis", "Vercel Cron"],
    liveUrl: "https://example.com/ledgerline",
    repoUrl: "https://github.com/your-username/ledgerline",
  },
  {
    title: "Blitz Rooms",
    summary:
      "Real-time multiplayer chess with clocks, rematches and spectators, built to stay fair on slow connections.",
    role: "Backend and real-time infrastructure",
    decisions: [
      "Made the server the only source of truth for moves and clocks; clients send intents and render what comes back.",
      "Used Redis pub/sub to fan out moves, so any server instance can host either player.",
      "Compensated clocks for measured latency per move instead of trusting client timestamps.",
    ],
    stack: ["Node.js", "TypeScript", "WebSockets", "Redis", "React", "Docker"],
    repoUrl: "https://github.com/your-username/blitz-rooms",
  },
];
