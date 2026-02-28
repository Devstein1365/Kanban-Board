import { useState } from "react";

const SECTIONS = [
  {
    label: "Getting Started",
    color: "#4f8ef7",
    items: [
      {
        title: "Plan your 30 days before Day 1",
        desc: "Open the Weeks tab and rename each week to match your goal phases — e.g. Foundations, Build Sprint, Polish, Launch. This gives every week a clear mission.",
      },
      {
        title: "Set a daily focus before adding tasks",
        desc: "Tap the focus line at the top of the Today tab and type a one-sentence intention — e.g. Build the auth flow. It anchors your energy for the day before you dive into tasks.",
      },
      {
        title: "Add 3-6 tasks per day, not 12",
        desc: "Fewer tasks done completely beats a long list half-done. Use the + button on Today to add tasks. Give each one a realistic time estimate and a type so your Board view stays readable.",
        tip: "If a task takes more than 3 hours, split it into two.",
      },
    ],
  },
  {
    label: "Daily Workflow",
    color: "#a78bfa",
    items: [
      {
        title: "Morning (5 min) — set up your day",
        desc: "Navigate to the day you are on, set your focus, and add today's tasks if you have not already. Do not spend 20 minutes planning.",
        code: "1. Check what week/phase you are in\n2. Set today's focus heading\n3. Add tasks with times and types\n4. Open Board view — start working",
      },
      {
        title: "During the day — use the Board",
        desc: "Switch to the Board tab to drag tasks from To Do to In Progress to Done as you work. Seeing cards move is motivating. Do not just check boxes — move the cards.",
      },
      {
        title: "Evening (5 min) — log honestly",
        desc: "Open the Log tab, pick the current week, and fill in the five prompts. Be brief and honest. What actually got done? What clicked? What are you carrying into tomorrow?",
        tip: "A short log entry beats no log entry. Even one sentence per prompt is enough.",
      },
    ],
  },
  {
    label: "Projects",
    color: "#34d399",
    items: [
      {
        title: "Add a project card the moment you start building",
        desc: "Go to the Projects tab and tap +. Add the name, a one-line description, relevant tags, and pick a color. Do not wait until it is polished — add it on Day 1 of that project.",
      },
      {
        title: "Update progress honestly, not optimistically",
        desc: "Drag the progress slider on each project card to reflect where it actually is. 10% means you set up the repo. 50% means core features work. 90% means it is deployed but rough. 100% means you would show it to a recruiter today.",
        tip: "A project stuck at 70% for too many days usually means you have hit a real blocker. Log it and ask for help.",
      },
    ],
  },
  {
    label: "Staying on Track",
    color: "#f59e0b",
    items: [
      {
        title: "Guard your streak, but do not worship it",
        desc: "The streak counter rewards consistency. Missing one day is not failure — picking back up the next day is what counts. But if you are skipping tasks just to protect the number, slow down and reset your task list.",
      },
      {
        title: "Do a proper weekly review every Sunday",
        desc: "The Log tab has five prompts for a reason. Answer all five at the end of each week. The What clicked and Most proud of prompts remind you that you are making progress even when it feels slow.",
        code: "Review checklist:\n- Did I hit this week's focus?\n- Which tasks kept slipping, and why?\n- What did I learn that surprised me?\n- Is my project progress bar accurate?\n- What is next week about?",
      },
      {
        title: "Rename weeks mid-challenge if your plan changes",
        desc: "Tap the pencil icon on any week card in the Weeks tab to rename it. If Week 3 ends up being about fixing debt instead of Shipping Features, rename it. Your plan should reflect reality.",
      },
    ],
  },
  {
    label: "Mindset",
    color: "#f87171",
    items: [
      {
        title: "Shipping ugly beats not shipping",
        desc: "A live app that works imperfectly is more valuable than a local project with perfect code. Deploy early, iterate after. The goal of 30 days is to build the habit of finishing, not the habit of perfecting.",
      },
      {
        title: "Every break task is still a task",
        desc: "When you schedule a break, actually take it. Step away from the screen. The brain solves problems in the background — your best debugging insights often arrive during a walk.",
      },
      {
        title: "Day 30 is not the end",
        desc: "The habit you build in 30 days is the real deliverable. The apps are proof. Use this tracker again for the next sprint, with harder projects and tighter deadlines. Clear your data and go again.",
      },
    ],
  },
];

export default function Guide() {
  const [confirming, setConfirming] = useState(false);

  const handleReset = () => {
    localStorage.removeItem("roadmap-app-v2");
    localStorage.removeItem("roadmap-theme");
    window.location.reload();
  };

  return (
    <div className="page">
      <div className="card" style={{ marginBottom: 10, padding: "14px 16px" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 4,
          }}
        >
          Field Guide
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            lineHeight: 1.3,
          }}
        >
          How to run your 30-day build sprint
        </div>
        <div
          style={{
            fontSize: 12,
            color: "var(--text2)",
            marginTop: 6,
            lineHeight: 1.6,
          }}
        >
          A practical guide to using this tracker — from setting up your first
          day to reviewing your last week.
        </div>
      </div>

      {SECTIONS.map((section) => (
        <div key={section.label} style={{ marginBottom: 6 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: section.color,
              padding: "8px 4px 4px",
            }}
          >
            {section.label}
          </div>
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            {section.items.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 16px",
                  borderBottom:
                    i < section.items.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: section.color,
                      flexShrink: 0,
                      marginTop: 6,
                    }}
                  />
                  <div
                    style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.4 }}
                  >
                    {item.title}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    lineHeight: 1.65,
                    color: "var(--text2)",
                    paddingLeft: 16,
                  }}
                >
                  {item.desc}
                </div>
                {item.code && (
                  <div
                    className="code-block"
                    style={{ marginTop: 10, marginLeft: 16 }}
                  >
                    {item.code}
                  </div>
                )}
                {item.tip && (
                  <div
                    style={{
                      marginTop: 10,
                      marginLeft: 16,
                      padding: "8px 10px",
                      background: section.color + "18",
                      borderLeft: "3px solid " + section.color,
                      borderRadius: "0 6px 6px 0",
                      fontSize: 11,
                      lineHeight: 1.6,
                      color: section.color,
                    }}
                  >
                    {item.tip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ── Reset App Data ── */}
      <div style={{ marginTop: 10, marginBottom: 6 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--red)",
            padding: "8px 4px 4px",
          }}
        >
          Danger Zone
        </div>
        <div className="card" style={{ padding: "16px" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 6,
              color: "var(--text)",
            }}
          >
            Reset all app data
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text2)",
              lineHeight: 1.65,
              marginBottom: 14,
            }}
          >
            This permanently deletes all your tasks, projects, logs and
            progress. Use this to start a fresh 30-day sprint. This cannot be
            undone.
          </div>

          {!confirming ? (
            <button
              onClick={() => setConfirming(true)}
              style={{
                width: "100%",
                padding: "10px 16px",
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.35)",
                borderRadius: "var(--rs)",
                color: "var(--red)",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              Reset App Data
            </button>
          ) : (
            <div
              style={{
                background: "rgba(239,68,68,0.06)",
                border: "1px solid rgba(239,68,68,0.3)",
                borderRadius: "var(--rs)",
                padding: "14px",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--red)",
                  marginBottom: 6,
                }}
              >
                Are you sure?
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text2)",
                  marginBottom: 14,
                  lineHeight: 1.5,
                }}
              >
                All your data will be gone. There is no going back.
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={handleReset}
                  style={{
                    flex: 1,
                    padding: "9px 12px",
                    background: "var(--red)",
                    border: "none",
                    borderRadius: "var(--rs)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Yes, reset everything
                </button>
                <button
                  onClick={() => setConfirming(false)}
                  style={{
                    flex: 1,
                    padding: "9px 12px",
                    background: "var(--s3)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--rs)",
                    color: "var(--text2)",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
