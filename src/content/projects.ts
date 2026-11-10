/** Projects section copy and the project list. */

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

/** Labels shared by every project card. The section heading lives in site.sections. */
export const projectsSection = {
  decisionsLabel: "Decisions",
  stackLabel: "Stack",
  liveLabel: "Live site",
  repoLabel: "Source code",
};

export const projects: Project[] = [
  {
    title: "Gambit",
    summary:
      "A real-time chess game with three ways to play: against a random opponent, a friend or a bot. Games against random opponents are rated with Elo.",
    role: "Solo, full-stack",
    decisions: [
      "Validated each move on the client so the board updates instantly, and again on the server, which saves a move only after confirming it is legal.",
      "Applied Elo rating changes only in random-opponent games, so games against friends or the bot can't be used to farm rating.",
      "Powered the bot with the Stockfish engine, raising its strength with every level.",
      "Gave each bot level five free hints, with more earned by watching an ad.",
    ],
    stack: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Fastify",
      "Socket.IO",
      "MongoDB",
      "Stockfish",
      "Google OAuth",
    ],
    liveUrl: "https://gambit-ruddy.vercel.app/",
    repoUrl: "https://github.com/yozan21/gambit",
  },
  {
    title: "Ghar Sajilo",
    summary:
      "A room rental platform. Renters find rooms by location and popularity or explore listings on a map; landlords manage their listings and see how popular each one is.",
    role: "Solo, full-stack",
    decisions: [
      "Built the map explorer with Leaflet and OpenStreetMap, so renters can pan around and see the listings in each area.",
      "Tracked listing views and offered them as a filter, so renters can find the most popular rooms.",
      "Gave landlords a view of their listings with popularity numbers for each one.",
    ],
    stack: [
      "React",
      "TanStack Query",
      "Leaflet",
      "OpenStreetMap",
      "Express",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://final-year-project-iota-one.vercel.app/",
    repoUrl: "https://github.com/yozan21/final_year_project",
  },
  {
    title: "Monster World",
    summary:
      "A browser game styled after Game Boy Advance RPGs: a pixel-art world to walk around, and battles between your monsters and wild ones.",
    role: "Solo",
    decisions: [
      "Designed the world as layered maps in Tiled and rendered them on an HTML5 canvas.",
      "Built a battle system between the player's monsters and wild monsters.",
    ],
    stack: ["JavaScript", "HTML5 Canvas", "Tiled"],
    liveUrl: "https://yozan-pokemon-game.netlify.app/",
    repoUrl: "https://github.com/yozan21/pokemon-game",
  },
  {
    title: "The Wild Oasis",
    summary:
      "An internal hotel management app for staff: check guests in and out, edit room details, book rooms for walk-in guests, and follow sales and activity on a dashboard.",
    role: "Solo, practice project",
    decisions: [
      "Built a dashboard with charts for sales and recent activity, so staff see how the hotel is doing at a glance.",
      "Let staff create guest accounts for offline bookings, so walk-in and phone bookings live in the same system as online ones.",
    ],
    stack: ["React", "TanStack Query", "Supabase"],
    repoUrl: "https://github.com/yozan21/the-wild-oasis",
    liveUrl: "https://the-wild-oasis-yozan.vercel.app/",
  },
];
