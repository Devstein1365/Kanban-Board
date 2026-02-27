import { BsRocketTakeoff, BsCheckCircleFill } from "react-icons/bs";

const PROJECTS_DATA = [
  {
    id: "p1",
    num: "01",
    title: "AI Invoice & Payment Platform",
    desc: "Freelancers create invoices, clients pay via Paystack. AI queries invoice data in plain English.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Paystack", "OpenAI", "Prisma"],
    color: "var(--accent)",
  },
  {
    id: "p2",
    num: "02",
    title: "CollabSpace",
    desc: "Real-time team workspace: Kanban boards, live chat, collaborative docs, AI summarization.",
    tags: ["Next.js", "NestJS", "MongoDB", "Socket.io", "OpenAI", "Tailwind"],
    color: "var(--purple)",
  },
  {
    id: "p3",
    num: "03",
    title: "DevHire Africa",
    desc: "Job board for African devs targeting remote work. AI matches profiles to jobs by skill similarity.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "pgvector", "Paystack", "OpenAI"],
    color: "var(--teal)",
  },
];

const getStatus = (val) => {
  if (val === 0) return { label: "Not Started", cls: "locked", check: false };
  if (val < 100) return { label: "Building...", cls: "building", check: false };
  return { label: "Deployed", cls: "done", check: true };
};

export default function Projects({ state, updateProject }) {
  return (
    <div className="page">
      <div className="rule-banner" style={{ marginBottom: 12 }}>
        <div className="rule-icon">
          <BsRocketTakeoff />
        </div>
        <div>
          <div className="rule-title">Week 4 Projects</div>
          <div className="rule-desc">
            These 3 projects will get you hired. Update progress as you build in
            Week 4.
          </div>
        </div>
      </div>

      {PROJECTS_DATA.map((p) => {
        const val = state.projects?.[p.id] || 0;
        const status = getStatus(val);

        return (
          <div key={p.id} className="project-card">
            <div className="p-header">
              <span className="p-num">Project {p.num}</span>
              <span
                className={`p-status ${status.cls}`}
                style={{ display: "flex", alignItems: "center", gap: 4 }}
              >
                {status.check && (
                  <BsCheckCircleFill style={{ flexShrink: 0 }} />
                )}
                {status.label}
              </span>
            </div>

            <div className="p-title">{p.title}</div>
            <div className="p-desc">{p.desc}</div>

            <div className="p-tags">
              {p.tags.map((t) => (
                <span key={t} className="p-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="p-bar-label">
              <span>Progress</span>
              <span style={{ color: p.color }}>{val}%</span>
            </div>
            <div className="p-bar">
              <div
                className="p-bar-fill"
                style={{ width: val + "%", background: p.color }}
              />
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={val}
              className="p-slider"
              onChange={(e) => updateProject(p.id, e.target.value)}
            />
          </div>
        );
      })}
    </div>
  );
}
