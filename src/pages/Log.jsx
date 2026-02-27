import { useState } from "react";
import {
  BsCheckCircleFill,
  BsXCircleFill,
  BsLightbulbFill,
  BsFire,
  BsPinFill,
} from "react-icons/bs";

const PROMPTS = [
  {
    key: "completed",
    icon: BsCheckCircleFill,
    iconColor: "var(--green)",
    label: "What I completed this week",
    placeholder: "List topics, projects, or tasks you actually finished...",
  },
  {
    key: "skipped",
    icon: BsXCircleFill,
    iconColor: "var(--red)",
    label: "What I skipped & why",
    placeholder: "Be honest. What did you avoid and why?",
  },
  {
    key: "clicked",
    icon: BsLightbulbFill,
    iconColor: "var(--yellow)",
    label: "What clicked / surprised me",
    placeholder: "Any concept that finally made sense?",
  },
  {
    key: "proud",
    icon: BsFire,
    iconColor: "var(--orange)",
    label: "What I'm most proud of",
    placeholder: "One specific win, no matter how small...",
  },
  {
    key: "focus",
    icon: BsPinFill,
    iconColor: "var(--accent)",
    label: "Focus for next week",
    placeholder: "One thing you need to do better...",
  },
];

export default function Log({ state, saveLog }) {
  const [logWeek, setLogWeek] = useState(1);
  const wKey = "w" + logWeek;
  const log = state.logs?.[wKey] || {};

  return (
    <div className="page">
      {/* Week tabs */}
      <div className="log-week-tabs">
        {[1, 2, 3, 4].map((w) => (
          <button
            key={w}
            className={`log-week-btn${logWeek === w ? " active" : ""}`}
            onClick={() => setLogWeek(w)}
          >
            W{w}
          </button>
        ))}
      </div>

      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 16,
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: 14,
        }}
      >
        Week {logWeek} Review
      </div>

      {PROMPTS.map((p) => (
        <div key={p.key} className="log-prompt">
          <div className="log-prompt-label">
            <p.icon style={{ color: p.iconColor, flexShrink: 0 }} />
            {p.label}
          </div>
          <textarea
            className="log-textarea"
            placeholder={p.placeholder}
            value={log[p.key] || ""}
            onChange={(e) => saveLog(logWeek, p.key, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
