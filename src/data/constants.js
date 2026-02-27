// ─── WEEKS ────────────────────────────────────────────────────────────────────
export const WEEKS = [
  {
    num: 1,
    title: "React + TypeScript",
    subtitle: "Days 1–7 · Build the Foundation",
    color: "#4f8ef7",
    days: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    num: 2,
    title: "Next.js + Backend",
    subtitle: "Days 8–14 · Go Full-Stack",
    color: "#22c55e",
    days: [8, 9, 10, 11, 12, 13, 14],
  },
  {
    num: 3,
    title: "NestJS + AI + Paystack",
    subtitle: "Days 15–21 · Advanced Integrations",
    color: "#a855f7",
    days: [15, 16, 17, 18, 19, 20, 21],
  },
  {
    num: 4,
    title: "Build & Ship Projects",
    subtitle: "Days 22–30 · Pure Execution",
    color: "#f97316",
    days: [22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
];

// ─── TYPE META ────────────────────────────────────────────────────────────────
export const TYPE_META = {
  learning: {
    label: "Learning",
    color: "#4f8ef7",
    bg: "rgba(79,142,247,0.12)",
  },
  practice: { label: "Practice", color: "#22c55e", bg: "rgba(34,197,94,0.12)" },
  project: { label: "Project", color: "#a855f7", bg: "rgba(168,85,247,0.12)" },
  comm: {
    label: "Communication",
    color: "#f97316",
    bg: "rgba(249,115,22,0.12)",
  },
  personal: { label: "Personal", color: "#eab308", bg: "rgba(234,179,8,0.12)" },
  setup: { label: "Setup", color: "#14b8a6", bg: "rgba(20,184,166,0.12)" },
  review: { label: "Review", color: "#ef4444", bg: "rgba(239,68,68,0.12)" },
  break: { label: "Break", color: "#6b7280", bg: "rgba(107,114,128,0.12)" },
};

// ─── ALL DAYS ─────────────────────────────────────────────────────────────────
export const ALL_DAYS = [
  {
    day: 1,
    focus: "Setup + React Deep Dive Begins",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail:
          "Wake up, hydrate, stretch. Write 3 goals for the day in your journal.",
      },
      {
        time: "7:30–8:00 AM",
        activity: "Environment Setup",
        type: "setup",
        detail:
          "VSCode extensions: ESLint, Prettier, TypeScript, Tailwind IntelliSense, GitLens. Create GitHub repo.",
      },
      {
        time: "8:00–10:00 AM",
        activity: "Jonas Course — Fundamentals",
        type: "learning",
        detail:
          "Sections 1–3: How React works, Components, JSX, rendering. Take handwritten notes.",
      },
      {
        time: "10:00–10:15 AM",
        activity: "Break",
        type: "break",
        detail: "Drink water. Short walk.",
      },
      {
        time: "10:15–12:15 PM",
        activity: "Jonas Course — Props & State",
        type: "learning",
        detail:
          "Sections 4–6: Props drilling, useState, controlled vs uncontrolled components.",
      },
      {
        time: "12:15–1:00 PM",
        activity: "Lunch",
        type: "break",
        detail: "Eat properly. Rest. No screens.",
      },
      {
        time: "1:00–3:00 PM",
        activity: "Practice: Counter App",
        type: "practice",
        detail:
          "Build counter with increment/decrement/reset. Add localStorage persistence. 3+ components.",
      },
      {
        time: "3:00–3:15 PM",
        activity: "Break",
        type: "break",
        detail: "Short rest.",
      },
      {
        time: "3:15–5:00 PM",
        activity: "Communication Skill",
        type: "comm",
        detail:
          "Read 1 Dev.to article. 5-sentence summary in own words. Say it aloud. Vocab: 'component lifecycle', 'state management'.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Exercise / Personal",
        type: "personal",
        detail: "Walk, gym, or rest. Mental reset.",
      },
      {
        time: "6:00–7:00 PM",
        activity: "Review & Plan Tomorrow",
        type: "review",
        detail:
          "Review notes. Commit code to GitHub. Write tomorrow's 3 goals.",
      },
    ],
  },
  {
    day: 2,
    focus: "React Hooks Mastery",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail:
          "Recall yesterday's concepts from memory. No notes — force the brain.",
      },
      {
        time: "7:30–9:30 AM",
        activity: "Jonas Course — useEffect",
        type: "learning",
        detail:
          "Sections 7–8: useEffect, cleanup functions, fetch API, dependency arrays. Build movie search.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Jonas Course — useRef/useMemo",
        type: "learning",
        detail:
          "Sections 9–10: Performance hooks, preventing re-renders, DOM access with refs.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "Practice: Weather App UI",
        type: "practice",
        detail:
          "Fetch from open-meteo.com (free, no key). Temperature, humidity, wind. useEffect + useMemo.",
      },
      { time: "2:15–2:30 PM", activity: "Break", type: "break", detail: "" },
      {
        time: "2:30–4:30 PM",
        activity: "Jonas Course — Custom Hooks",
        type: "learning",
        detail:
          "Section 11: Build useFetch, useLocalStorage, useDebounce from scratch.",
      },
      {
        time: "4:30–5:30 PM",
        activity: "STAR Method Practice",
        type: "comm",
        detail:
          "Write a challenge from your internship in STAR format. Read aloud 3 times until smooth.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "GitHub Commit & Review",
        type: "review",
        detail: "Push code. Document hooks in README.",
      },
    ],
  },
  {
    day: 3,
    focus: "React Router + Context API",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "10-min mental recap of yesterday's hooks. No notes.",
      },
      {
        time: "7:30–9:30 AM",
        activity: "React Router v6",
        type: "learning",
        detail:
          "Section 12: Routes, nested routes, dynamic routes, useNavigate, useParams, protected routes.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Practice: Multi-Page Blog",
        type: "practice",
        detail:
          "Home, Post List, Post Detail (dynamic), About, 404 pages. Navigation bar with active link.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "Context API + useReducer",
        type: "learning",
        detail:
          "Sections 13–14: Global state without Redux, Context + useReducer pattern.",
      },
      {
        time: "2:15–4:15 PM",
        activity: "Practice: Cart with Context",
        type: "practice",
        detail:
          "Product page with add-to-cart. Context + useReducer. Add, remove, quantity, cart total.",
      },
      {
        time: "4:15–5:00 PM",
        activity: "Communication Drill",
        type: "comm",
        detail:
          "Record 3-min voice note explaining 'how React state works' to a beginner. Listen back.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Review & GitHub",
        type: "review",
        detail: "Commit. Write README for cart app.",
      },
    ],
  },
  {
    day: 4,
    focus: "TypeScript Foundations",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "Journal: what are you confident about? What needs more work?",
      },
      {
        time: "7:30–9:30 AM",
        activity: "TypeScript Basics",
        type: "learning",
        detail:
          "Types, interfaces, type vs interface, union types, generics. Official TS docs + Matt Pocock YouTube.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "TypeScript in React — Part 1",
        type: "learning",
        detail:
          "Type props, useState, useRef, useContext, event handlers. Convert the cart app to TypeScript.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "TypeScript in React — Part 2",
        type: "learning",
        detail:
          "Generic components, custom hook types, API response types, utility types: Partial, Pick, Omit.",
      },
      {
        time: "2:15–4:15 PM",
        activity: "Practice: TypeScript Todo App",
        type: "practice",
        detail:
          "Full typed CRUD. Todo interface, Status enum, filter types. Rule: zero 'any' allowed.",
      },
      {
        time: "4:15–5:00 PM",
        activity: "Vocabulary Drill",
        type: "comm",
        detail:
          "Write a sentence for each: 'type inference', 'strict mode', 'compile-time error', 'interface contract'.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Review & Commit",
        type: "review",
        detail: "Push everything. Review TS errors you solved today.",
      },
    ],
  },
  {
    day: 5,
    focus: "React Performance + Advanced Patterns",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "Light exercise. Recall TypeScript concepts from memory.",
      },
      {
        time: "7:30–9:30 AM",
        activity: "Jonas Course — Performance",
        type: "learning",
        detail:
          "Section 15: React.memo, code splitting, lazy loading, Suspense, useDeferredValue, useTransition.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Practice: Typed Expense Tracker",
        type: "practice",
        detail:
          "Add expenses by category, totals, date filter. Context + useReducer. Every piece typed — no exceptions.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:30 PM",
        activity: "Advanced Patterns",
        type: "learning",
        detail:
          "Section 16: Compound components, render props, HOCs. These appear in real codebases.",
      },
      {
        time: "2:30–4:00 PM",
        activity: "Project Polish",
        type: "practice",
        detail:
          "Best project from this week: add error boundaries, loading skeletons, empty states, error messages.",
      },
      {
        time: "4:00–5:30 PM",
        activity: "LinkedIn Post Draft",
        type: "comm",
        detail:
          "Write 150–200 word post about what you're building. Professional but authentic. Post it.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Week 1 Review",
        type: "review",
        detail: "What did you master? What is still fuzzy? Write it down.",
      },
    ],
  },
  {
    day: 6,
    focus: "Build Day + Active Rest",
    tasks: [
      {
        time: "8:00–9:00 AM",
        activity: "Slow Morning",
        type: "personal",
        detail: "Sleep in. Journal. Good breakfast.",
      },
      {
        time: "9:00–12:00 PM",
        activity: "Build: Portfolio Landing Page",
        type: "practice",
        detail:
          "React + TypeScript portfolio. Hero, Skills, Projects, Contact sections. Clean and minimal, no templates.",
      },
      {
        time: "12:00–1:00 PM",
        activity: "Lunch + Rest",
        type: "break",
        detail: "",
      },
      {
        time: "1:00–3:00 PM",
        activity: "Revisit Weak Spots",
        type: "learning",
        detail:
          "Go back to unclear concepts. Rewatch a section. Do not move on with gaps.",
      },
      {
        time: "3:00–5:00 PM",
        activity: "Free Code",
        type: "personal",
        detail:
          "Build anything you want for fun. No goals. Keeps creativity alive.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Week 2 Preview",
        type: "review",
        detail:
          "Read Next.js docs intro. Understand SSR, SSG, ISR at high level.",
      },
    ],
  },
  {
    day: 7,
    focus: "Rest + Reflection",
    tasks: [
      {
        time: "8:00–10:00 AM",
        activity: "Full Rest",
        type: "personal",
        detail:
          "No code before 10am. Sleep, pray, meditate. Let the brain consolidate.",
      },
      {
        time: "10:00–12:00 PM",
        activity: "Week Retrospective",
        type: "review",
        detail:
          "Write: what did I learn? What was hard? What clicked? What do I need more practice with?",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–3:00 PM",
        activity: "Light Reading",
        type: "learning",
        detail:
          "Read about Next.js App Router architecture. Read what NestJS is. No coding.",
      },
      {
        time: "3:00–6:00 PM",
        activity: "Personal Time",
        type: "personal",
        detail: "Family, rest, walks. A rested brain learns faster.",
      },
    ],
  },
  {
    day: 8,
    focus: "Next.js App Router — Deep Dive",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "Review Week 1 notes for 15 mins. Set 3 clear goals.",
      },
      {
        time: "7:30–9:30 AM",
        activity: "Next.js — App Router",
        type: "learning",
        detail:
          "File-based routing, layout.tsx, page.tsx, error.tsx, loading.tsx, not-found.tsx.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Server vs Client Components",
        type: "learning",
        detail:
          "Most critical Next.js concept. When to use 'use client', data flow, composition patterns.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "Next.js Data Fetching",
        type: "learning",
        detail:
          "Server-side fetch, caching, revalidation, static vs dynamic rendering, route handlers.",
      },
      {
        time: "2:15–4:15 PM",
        activity: "Practice: Next.js Blog",
        type: "practice",
        detail:
          "Posts from JSON, dynamic routes, category filter, metadata for SEO.",
      },
      {
        time: "4:15–5:00 PM",
        activity: "TailwindCSS Core",
        type: "learning",
        detail:
          "Utility-first, responsive prefixes (sm: md: lg:), hover/focus states, dark mode. Style your blog.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Vocab + Review",
        type: "comm",
        detail:
          "Write sentences using: 'hydration', 'streaming', 'partial prerendering', 'ISR'. Commit code.",
      },
    ],
  },
  {
    day: 9,
    focus: "Next.js Auth + Server Actions + Tailwind Advanced",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "Recall yesterday's Next.js concepts without notes.",
      },
      {
        time: "7:30–9:30 AM",
        activity: "Next.js — Auth with NextAuth",
        type: "learning",
        detail:
          "Session auth, credentials provider, OAuth with GitHub, middleware.ts route protection.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Next.js — Server Actions",
        type: "learning",
        detail:
          "Form submissions without API routes, mutations, revalidatePath, optimistic updates.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "TailwindCSS Advanced",
        type: "learning",
        detail:
          "Flexbox/Grid utilities, custom themes in tailwind.config.ts, building a design system.",
      },
      {
        time: "2:15–4:15 PM",
        activity: "Practice: SaaS Landing Page",
        type: "practice",
        detail:
          "Hero, feature grid, pricing cards (3 tiers), testimonials, footer. Mobile-first.",
      },
      {
        time: "4:15–5:30 PM",
        activity: "Communication Drill",
        type: "comm",
        detail:
          "Explain 'what is SSR and why does it matter?' — 2 mins, no notes. Write it. Compare.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "GitHub push. Plan tomorrow.",
      },
    ],
  },
  {
    day: 10,
    focus: "Node.js + Express REST API",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail:
          "Today you start backend. This changes how you see the whole stack.",
      },
      {
        time: "7:30–9:30 AM",
        activity: "Node.js Fundamentals",
        type: "learning",
        detail:
          "Event loop deep dive, modules (CommonJS vs ESM), streams, file system, process object.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Express.js — REST API",
        type: "learning",
        detail:
          "Routes, middleware, controller pattern, error handling middleware. Build users CRUD.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "Express — JWT Auth",
        type: "learning",
        detail:
          "bcrypt hashing, JWT signing/verification, auth middleware, access vs refresh tokens.",
      },
      {
        time: "2:15–4:15 PM",
        activity: "Practice: Full Auth API",
        type: "practice",
        detail:
          "POST /register, POST /login, GET /profile (protected), PATCH /profile. Test in Thunder Client.",
      },
      {
        time: "4:15–5:30 PM",
        activity: "Backend Vocab Drill",
        type: "comm",
        detail:
          "2-sentence explanations: 'middleware', 'CORS', 'stateless authentication', 'REST constraints'.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review",
        type: "review",
        detail: "Commit. Note what was difficult.",
      },
    ],
  },
  {
    day: 11,
    focus: "MongoDB + Mongoose + PostgreSQL Intro",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "",
      },
      {
        time: "7:30–9:30 AM",
        activity: "MongoDB Fundamentals",
        type: "learning",
        detail:
          "Document model, BSON, Atlas free tier, Compass GUI. NoSQL vs relational philosophy.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Mongoose — Schemas & Models",
        type: "learning",
        detail:
          "Schema, validation, virtuals, pre/post hooks, populate. Build User + Post + Comment models.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "Practice: Blog API MongoDB",
        type: "practice",
        detail:
          "CRUD posts, embedded comments, user auth, pagination with skip/limit, filter by category.",
      },
      {
        time: "2:15–4:15 PM",
        activity: "PostgreSQL + Prisma Intro",
        type: "learning",
        detail:
          "Relational model tradeoffs. Set up Prisma with PostgreSQL (Railway or Neon — free). First migration.",
      },
      {
        time: "4:15–5:30 PM",
        activity: "MongoDB vs PostgreSQL",
        type: "comm",
        detail:
          "Write out: 'When would you use MongoDB vs PostgreSQL?' with specific examples. This is a real interview question.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "",
      },
    ],
  },
  {
    day: 12,
    focus: "Prisma Deep Dive + Full-Stack Connection",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "",
      },
      {
        time: "7:30–9:30 AM",
        activity: "Prisma — Deep Dive",
        type: "learning",
        detail:
          "Relations, migrations, Prisma Studio, transactions, upsert. Schema: User, Post, Comment, Category.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Full-Stack Pipeline",
        type: "learning",
        detail:
          "Connect Next.js → Express → PostgreSQL → Prisma. Full data flow from UI action to DB.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–3:00 PM",
        activity: "Build: Full-Stack Task Manager",
        type: "practice",
        detail:
          "Tasks with user ownership, categories, due dates, priority levels. Next.js + Express + PostgreSQL + Prisma.",
      },
      {
        time: "3:00–4:30 PM",
        activity: "Deploy It",
        type: "practice",
        detail:
          "Frontend → Vercel (free). Backend → Render (free). Connect with env vars. Test live URL.",
      },
      {
        time: "4:30–5:30 PM",
        activity: "README Writing",
        type: "comm",
        detail:
          "Full README: problem statement, tech stack, architecture, screenshots, live URL, setup guide.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Week 2 Review",
        type: "review",
        detail: "What clicked? What needs reinforcement?",
      },
    ],
  },
  {
    day: 13,
    focus: "Consolidation + Polish",
    tasks: [
      {
        time: "8:00–9:00 AM",
        activity: "Slow Morning",
        type: "personal",
        detail: "",
      },
      {
        time: "9:00–12:00 PM",
        activity: "Polish Projects",
        type: "practice",
        detail:
          "Task manager or blog API: add validation, error messages, loading skeletons, empty states, mobile responsive.",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–3:00 PM",
        activity: "Nodemailer Email Setup",
        type: "learning",
        detail:
          "Set up Nodemailer with Gmail SMTP. Send welcome email on user registration.",
      },
      {
        time: "3:00–5:00 PM",
        activity: "Personal Time",
        type: "personal",
        detail: "Rest, social, recharge.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Week 3 Preview",
        type: "review",
        detail:
          "Read NestJS intro docs. Look up OpenAI API reference. Read paystack.com/docs.",
      },
    ],
  },
  {
    day: 14,
    focus: "Full Rest Day",
    tasks: [
      {
        time: "8:00–10:00 AM",
        activity: "Full Rest",
        type: "personal",
        detail: "No screens. Recharge completely.",
      },
      {
        time: "10:00–12:00 PM",
        activity: "Week Retrospective",
        type: "review",
        detail:
          "Write: biggest win? biggest challenge? What do you wish you had more time on?",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–3:00 PM",
        activity: "Light Reading",
        type: "learning",
        detail:
          "Read NestJS architecture. Read how payment webhooks work. No coding.",
      },
      {
        time: "3:00–6:00 PM",
        activity: "Personal Time",
        type: "personal",
        detail: "Full recharge. Protect this time.",
      },
    ],
  },
  {
    day: 15,
    focus: "NestJS Architecture & Foundations",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail:
          "Set Week 3 intentions. You are halfway through. The next two weeks determine everything.",
      },
      {
        time: "7:30–9:30 AM",
        activity: "NestJS — Architecture",
        type: "learning",
        detail:
          "Modules, controllers, providers, dependency injection, decorators. Generate project with NestJS CLI.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "NestJS — Controllers & Services",
        type: "learning",
        detail:
          "Routing decorators, DTO pattern, validation with class-validator, service layer separation.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "NestJS — Guards & JWT",
        type: "learning",
        detail:
          "Auth guard with Passport.js + JWT strategy, RBAC, @Public() decorator for open routes.",
      },
      {
        time: "2:15–4:15 PM",
        activity: "Practice: Auth in NestJS",
        type: "practice",
        detail:
          "Rebuild auth API in NestJS. Users module, Auth module, JWT guard, roles guard. Feel the structure.",
      },
      {
        time: "4:15–5:30 PM",
        activity: "Dependency Injection Drill",
        type: "comm",
        detail:
          "Write: 'What is dependency injection and why does it help?' Say it aloud. Common mid/senior interview question.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "",
      },
    ],
  },
  {
    day: 16,
    focus: "NestJS + Prisma + Exception Handling",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "",
      },
      {
        time: "7:30–9:30 AM",
        activity: "NestJS + Prisma Integration",
        type: "learning",
        detail:
          "PrismaService as injectable module, inject into feature modules, DB connection lifecycle, transactions.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Exception Filters & Pipes",
        type: "learning",
        detail:
          "Global exception filter, custom exceptions, validation pipes, transformation pipes.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–4:00 PM",
        activity: "Build: Full NestJS REST API",
        type: "practice",
        detail:
          "Products, Categories, Orders modules. Auth on admin routes. class-validator DTOs. Prisma + PostgreSQL.",
      },
      {
        time: "4:00–5:30 PM",
        activity: "Swagger API Documentation",
        type: "comm",
        detail:
          "Set up NestJS Swagger. Document with @ApiTags, @ApiOperation, @ApiResponse decorators.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "",
      },
    ],
  },
  {
    day: 17,
    focus: "LLM Integration — OpenAI & Gemini",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail:
          "Today you learn one of the most in-demand skills of 2025/2026.",
      },
      {
        time: "7:30–9:30 AM",
        activity: "LLM Fundamentals",
        type: "learning",
        detail:
          "Tokens, context window, temperature, system prompts, few-shot examples. Set up Gemini free tier.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "OpenAI API — Chat & Streaming",
        type: "learning",
        detail:
          "Chat completions, streaming with SSE, conversation history, system prompts, function calling intro.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "Practice: AI Chat Interface",
        type: "practice",
        detail:
          "Streaming response display, conversation history, system prompt selector, copy button, markdown rendering.",
      },
      {
        time: "2:15–4:15 PM",
        activity: "LLM Embeddings + Semantic Search",
        type: "learning",
        detail:
          "Vector embeddings, OpenAI embeddings API, cosine similarity, basic semantic search over documents.",
      },
      {
        time: "4:15–5:30 PM",
        activity: "Explain LLM to Non-Tech Founder",
        type: "comm",
        detail:
          "'How does an LLM API work?' in 3 clear sentences. Write it, say it. You'll get this question.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "",
      },
    ],
  },
  {
    day: 18,
    focus: "Paystack Payment Integration",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "",
      },
      {
        time: "7:30–9:30 AM",
        activity: "Paystack Fundamentals",
        type: "learning",
        detail:
          "API keys, test mode, dashboard walkthrough, payment initialization, full payment lifecycle.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Paystack — Webhooks (Critical)",
        type: "learning",
        detail:
          "Webhook events, HMAC signature verification (NEVER skip this), charge.success, idempotency.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "Practice: Full Payment Flow",
        type: "practice",
        detail:
          "Product page → Paystack Popup → backend initializes → webhook fires → order marked paid. Full loop.",
      },
      {
        time: "2:15–4:15 PM",
        activity: "Paystack — Subscriptions",
        type: "learning",
        detail:
          "Creating plans, subscriptions, lifecycle management (pause/cancel/resume), webhook events.",
      },
      {
        time: "4:15–5:30 PM",
        activity: "Mock Interview Prep",
        type: "comm",
        detail:
          "Write polished answers: 'Tell me about yourself', 'Why did you leave your internship?', 'What are you building?'",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "",
      },
    ],
  },
  {
    day: 19,
    focus: "WebSockets + File Uploads",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "",
      },
      {
        time: "7:30–9:30 AM",
        activity: "Socket.io — Fundamentals",
        type: "learning",
        detail:
          "WebSocket vs HTTP, rooms, events, broadcasting, namespaces. NestJS WebSocket gateway.",
      },
      {
        time: "9:30–11:30 AM",
        activity: "Practice: Real-Time Chat",
        type: "practice",
        detail:
          "Create rooms, join rooms, send messages, typing indicators, online user count. Socket.io + React.",
      },
      { time: "11:30–12:15 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "12:15–2:15 PM",
        activity: "File Uploads + Cloudinary",
        type: "learning",
        detail:
          "Multer for multipart/form-data, Cloudinary SDK, image transformation, thumbnail URLs.",
      },
      {
        time: "2:15–4:00 PM",
        activity: "Practice: Avatar Upload",
        type: "practice",
        detail:
          "File input with preview → Multer → Cloudinary → save URL in DB → display on profile.",
      },
      {
        time: "4:00–5:30 PM",
        activity: "Record Project Demo",
        type: "comm",
        detail:
          "5-min screen recording: what you built, problem it solves, technical decisions, what you'd improve.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Week 3 Review",
        type: "review",
        detail: "What are you most proud of from this week?",
      },
    ],
  },
  {
    day: 20,
    focus: "Integration Practice + PDF Generation",
    tasks: [
      {
        time: "8:00–9:00 AM",
        activity: "Slow Morning",
        type: "personal",
        detail: "",
      },
      {
        time: "9:00–12:00 PM",
        activity: "Integration Challenge",
        type: "practice",
        detail:
          "'Buy a digital product' app: NestJS + PostgreSQL + Paystack + email confirmation. 3-hour build.",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–3:00 PM",
        activity: "PDF Generation",
        type: "learning",
        detail:
          "Puppeteer (HTML → PDF) or pdf-lib (programmatic). Build invoice PDF generator.",
      },
      {
        time: "3:00–5:00 PM",
        activity: "Personal Time",
        type: "personal",
        detail: "Rest. Week 4 is intense. Be at full energy.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Week 4 Planning",
        type: "review",
        detail:
          "Break all 3 projects into tasks. You should have 10+ items per project listed.",
      },
    ],
  },
  {
    day: 21,
    focus: "Rest + Project Architecture",
    tasks: [
      {
        time: "8:00–11:00 AM",
        activity: "Rest",
        type: "personal",
        detail:
          "Full rest. Brain needs to consolidate 3 weeks of intense learning.",
      },
      {
        time: "11:00–1:00 PM",
        activity: "Project 1 Architecture",
        type: "review",
        detail:
          "DB schema for AI Invoice Platform: Users, Clients, Invoices, LineItems, Payments. All API endpoints. All pages.",
      },
      { time: "1:00–2:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "2:00–4:00 PM",
        activity: "Project 2 & 3 Architecture",
        type: "review",
        detail: "CollabSpace schemas. DevHire schemas. Feature lists for both.",
      },
      {
        time: "4:00–6:00 PM",
        activity: "Personal Time",
        type: "personal",
        detail:
          "Prepare mentally for Week 4. No more learning — pure building starts tomorrow.",
      },
    ],
  },
  {
    day: 22,
    focus: "PROJECT 1: AI Invoice Platform — Backend",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail:
          "Execution mode starts today. No tutorials. You build from memory and docs.",
      },
      {
        time: "7:30–12:00 PM",
        activity: "Project 1 — NestJS Backend",
        type: "project",
        detail:
          "Initialize project. Modules: Auth, Users, Clients, Invoices, Payments. Prisma schema. Migrations. JWT auth.",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–5:00 PM",
        activity: "Project 1 — Invoices + Paystack",
        type: "project",
        detail:
          "Invoice CRUD with line items, auto-totals, status. Paystack payment link per invoice. Webhook to mark paid.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail:
          "Push to GitHub. Write exactly what's completed and what remains.",
      },
    ],
  },
  {
    day: 23,
    focus: "PROJECT 1: AI Feature + PDF + Frontend",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "",
      },
      {
        time: "7:30–10:30 AM",
        activity: "Project 1 — AI Query Feature",
        type: "project",
        detail:
          "Endpoint: receive natural language query → OpenAI converts to Prisma filter → execute → return results.",
      },
      {
        time: "10:30–12:00 PM",
        activity: "Project 1 — PDF Invoice",
        type: "project",
        detail:
          "Professional PDF: company info, client info, line items table, totals, payment instructions.",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–5:30 PM",
        activity: "Project 1 — Next.js Frontend",
        type: "project",
        detail:
          "Dashboard stats, Invoice List with filters, Invoice Detail, Create Invoice form, Client management. Clean Tailwind UI.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "Push. List remaining items.",
      },
    ],
  },
  {
    day: 24,
    focus: "PROJECT 1 Polish + PROJECT 2 Start",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "",
      },
      {
        time: "7:30–10:30 AM",
        activity: "Project 1 — Polish & Deploy",
        type: "project",
        detail:
          "zod + react-hook-form validation, skeleton states, mobile responsive. Deploy Vercel + Render.",
      },
      {
        time: "10:30–12:00 PM",
        activity: "Project 1 — README",
        type: "project",
        detail:
          "Complete README: screenshots (3+), live demo, tech stack badges, architecture, local setup. Make it excellent.",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–5:30 PM",
        activity: "Project 2 — CollabSpace Backend",
        type: "project",
        detail:
          "NestJS. Workspaces, Teams, Boards, Tasks, Messages. Prisma schema. Auth. Invite system. Roles: owner/admin/member.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "",
      },
    ],
  },
  {
    day: 25,
    focus: "PROJECT 2: Real-Time Features + Kanban",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "",
      },
      {
        time: "7:30–10:30 AM",
        activity: "Project 2 — Kanban Board",
        type: "project",
        detail:
          "@dnd-kit/core drag-and-drop. Task cards with assignee, priority, due date. API call on drop. Optimistic UI.",
      },
      {
        time: "10:30–12:00 PM",
        activity: "Project 2 — Real-Time Chat",
        type: "project",
        detail:
          "Socket.io NestJS gateway + React. Workspace rooms, message persistence, typing indicators, online presence.",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–3:00 PM",
        activity: "Project 2 — AI Doc Summary",
        type: "project",
        detail:
          "When doc > 200 words, show 'Summarize with AI' button. OpenAI streaming. Collapsible side panel.",
      },
      {
        time: "3:00–5:30 PM",
        activity: "Project 2 — Frontend Polish",
        type: "project",
        detail:
          "Sidebar nav, workspace switcher, task assignment, priority indicators, due date picker. Mobile responsive.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "",
      },
    ],
  },
  {
    day: 26,
    focus: "PROJECT 2 Deploy + PROJECT 3 Start",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "",
      },
      {
        time: "7:30–10:00 AM",
        activity: "Project 2 — Deploy + README",
        type: "project",
        detail:
          "Deploy CollabSpace. README with Kanban, chat, AI summary screenshots. Confirm all live URLs.",
      },
      {
        time: "10:00–12:00 PM",
        activity: "Project 3 — DevHire Backend",
        type: "project",
        detail:
          "NestJS. Jobs, Companies, Developers, Applications. Paystack for featured listings. Auth for 2 account types.",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–3:30 PM",
        activity: "Project 3 — AI Matching Engine",
        type: "project",
        detail:
          "Embed developer profiles + job descriptions via OpenAI. Store in PostgreSQL + pgvector. Cosine similarity match.",
      },
      {
        time: "3:30–5:30 PM",
        activity: "Project 3 — Next.js Frontend",
        type: "project",
        detail:
          "Job listings (SEO optimized), job detail, developer profile, apply flow, company dashboard.",
      },
      {
        time: "5:30–6:00 PM",
        activity: "Review + Commit",
        type: "review",
        detail: "",
      },
    ],
  },
  {
    day: 27,
    focus: "PROJECT 3 Polish + Portfolio Update",
    tasks: [
      {
        time: "8:00–9:00 AM",
        activity: "Morning",
        type: "personal",
        detail: "",
      },
      {
        time: "9:00–12:00 PM",
        activity: "Project 3 — Finish + Deploy",
        type: "project",
        detail:
          "Skill gap analysis: AI tells dev what's missing vs job requirements. Deploy. Write README.",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–3:30 PM",
        activity: "Portfolio Website Update",
        type: "project",
        detail:
          "All 3 projects on portfolio: title, description, tech stack badges, live link, GitHub link, screenshot.",
      },
      {
        time: "3:30–5:00 PM",
        activity: "Personal Time",
        type: "personal",
        detail: "Rest. Tomorrow is communication and professional prep.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Day 30 Plan",
        type: "review",
        detail:
          "List everything that needs polishing before you start applying.",
      },
    ],
  },
  {
    day: 28,
    focus: "Interview Prep + LinkedIn",
    tasks: [
      {
        time: "8:00–11:00 AM",
        activity: "Rest",
        type: "personal",
        detail: "Full rest morning.",
      },
      {
        time: "11:00–1:00 PM",
        activity: "Interview Prep",
        type: "comm",
        detail:
          "STAR answers to 10 questions. Per project: problem, hardest challenge, what you'd do differently.",
      },
      { time: "1:00–2:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "2:00–4:00 PM",
        activity: "LinkedIn Profile Overhaul",
        type: "comm",
        detail:
          "Headline, About (3 paragraphs), Experience with impact, Skills, add all 3 projects.",
      },
      {
        time: "4:00–6:00 PM",
        activity: "Personal Time",
        type: "personal",
        detail: "",
      },
    ],
  },
  {
    day: 29,
    focus: "Final Polish + CV + Job Research",
    tasks: [
      {
        time: "7:00–7:30 AM",
        activity: "Morning Routine",
        type: "personal",
        detail: "Final push. Today is about presentation and positioning.",
      },
      {
        time: "7:30–11:00 AM",
        activity: "Final Portfolio Audit",
        type: "project",
        detail:
          "Every repo: description, topics, README, pinned. Screenshots high quality. Every live URL works.",
      },
      {
        time: "11:00–12:00 PM",
        activity: "CV Update",
        type: "comm",
        detail:
          "New skills, 3 projects with live URLs + GitHub, strong summary. 1 page. Clean template. Export PDF.",
      },
      { time: "12:00–1:00 PM", activity: "Lunch", type: "break", detail: "" },
      {
        time: "1:00–3:00 PM",
        activity: "Mock Technical Interview",
        type: "comm",
        detail:
          "Out loud: explain Project 1 architecture, how AI query works, how Paystack webhooks are secured. 30+ seconds each.",
      },
      {
        time: "3:00–5:00 PM",
        activity: "Target Company Research",
        type: "comm",
        detail:
          "5 Nigerian targets: Paystack, Flutterwave, Mono, Kuda, Cowrywise. 5 remote foreign. What they do + stack.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Review + Reflect",
        type: "review",
        detail: "Compare Day 1 to Day 29. Look at everything you've built.",
      },
    ],
  },
  {
    day: 30,
    focus: "LAUNCH DAY — You Are Ready",
    tasks: [
      {
        time: "7:00–8:00 AM",
        activity: "Slow Start + Journal",
        type: "personal",
        detail:
          "Who were you on Day 1? Who are you today? What did this month teach you beyond code?",
      },
      {
        time: "8:00–10:00 AM",
        activity: "Final GitHub Audit",
        type: "project",
        detail:
          "Profile: bio, location, website. All repos: description, topics, README, pinned. Green contribution graph.",
      },
      {
        time: "10:00–12:00 PM",
        activity: "Publish & Announce",
        type: "comm",
        detail:
          "LinkedIn post: 30-day challenge complete. List 3 projects with links. Be genuine. Post it — don't just draft it.",
      },
      {
        time: "12:00–1:00 PM",
        activity: "Lunch + Celebration",
        type: "break",
        detail:
          "Eat something special. You completed 30 days of intense intentional growth. Celebrate.",
      },
      {
        time: "1:00–3:00 PM",
        activity: "Start Applying",
        type: "comm",
        detail:
          "Apply to first 3 companies or send 3 cold DMs. Lead with portfolio. Link projects. Be specific about why them.",
      },
      {
        time: "3:00–5:00 PM",
        activity: "Build Your 60-Day Plan",
        type: "review",
        detail:
          "What next? Testing, Docker, Redis, CI/CD, GraphQL? Set goals for 60 days. The growth continues.",
      },
      {
        time: "5:00–6:00 PM",
        activity: "Rest + Reflect",
        type: "personal",
        detail:
          "You did it. 30 days of disciplined, focused growth. Take the rest of the evening for yourself.",
      },
    ],
  },
];
