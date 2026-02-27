const STEPS = [
  {
    title: "Create your Notion workspace page",
    desc: "Go to notion.so → New Page → title it '30-Day Self-Build 🔥'. Add a dark cover image from Unsplash.",
  },
  {
    title: "Create the Daily Tasks Database",
    desc: "Type /database → 'Database — Inline' → name it 'Daily Tasks'. Add properties:",
    code: "Status → Select: [ To Do | In Progress | Done ]\nDay → Number (1, 2, 3...)\nType → Select: [ Learning | Practice | Project | Communication | Review | Break ]\nTime Slot → Text\nNotes → Text\nGitHub Link → URL",
  },
  {
    title: "Add Board View (your Kanban)",
    desc: "Click '+ Add a view' → Board → group by Status. You now have 3 columns. Add a filter: Day = [today's number] so you only see today's tasks.",
  },
  {
    title: "Add Table View for history",
    desc: "Add another view → Table → name it 'All Tasks'. No filter here. This is your full 30-day history for weekly reviews.",
  },
  {
    title: "Create Weekly Review pages",
    desc: "Add a sub-page 'Weekly Reviews'. Inside: 4 sub-pages (Week 1–4). Each uses this template:",
    code: "✅ What I completed:\n—\n❌ What I skipped (why):\n—\n💡 What clicked:\n—\n🔥 What I'm most proud of:\n—\n📌 Focus for next week:\n—",
  },
  {
    title: "Create Projects Tracker",
    desc: "Sub-page 'Projects'. One card per project: name, status, live URL, GitHub URL, tech stack, progress %. Update in Week 4.",
  },
  {
    title: "Your daily morning habit",
    desc: "Open timetable → find today → create cards in Daily Tasks → switch to Board view → start working. Drag cards as you progress.",
    code: "Morning (5 min): Create today's cards → To Do\nDuring day: Drag In Progress → Done\nEvening (5 min): Count done → note incomplete\nSunday: Fill Weekly Review honestly",
  },
];

export default function Guide() {
  return (
    <div className="page">
      <div className="card">
        {STEPS.map((step, i) => (
          <div key={i} className="guide-step">
            <div className="g-num">{i + 1}</div>
            <div>
              <div className="g-title">{step.title}</div>
              <div className="g-desc">{step.desc}</div>
              {step.code && <div className="code-block">{step.code}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
