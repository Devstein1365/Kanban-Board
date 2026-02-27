import { BsKanban } from "react-icons/bs";
import { TYPE_META } from "../data/constants";

export default function Kanban({ state, dayData, checks }) {
  const getTm = (t) => TYPE_META[t.type] || TYPE_META.personal;

  // Build columns: split unchecked (non-break) into todo vs in-progress
  const unchecked = dayData.tasks.filter(
    (t, i) => !checks[i] && t.type !== "break",
  );
  // take first 2 as in-progress, rest as todo
  const inProgress = unchecked.slice(0, Math.min(2, unchecked.length));
  const todo = unchecked.slice(Math.min(2, unchecked.length));
  const done = dayData.tasks.filter((t, i) => checks[i]);

  const cols = [
    { label: "To Do", color: "var(--text3)", dot: "#555", items: todo },
    {
      label: "In Progress",
      color: "var(--accent)",
      dot: "var(--accent)",
      items: inProgress,
    },
    { label: "Done", color: "var(--green)", dot: "var(--green)", items: done },
  ];

  return (
    <div className="page">
      <div className="rule-banner" style={{ marginBottom: 12 }}>
        <div className="rule-icon">
          <BsKanban />
        </div>
        <div>
          <div className="rule-title">Kanban Rule</div>
          <div className="rule-desc">
            Max 2 cards In Progress at once. Move cards as you work.
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--text3)",
          marginBottom: 8,
        }}
      >
        DAY {state.currentDay} — {dayData.focus.toUpperCase()}
      </div>

      <div className="kanban-cols">
        {cols.map((col) => (
          <div key={col.label} className="k-col">
            <div className="k-col-header">
              <div className="k-col-title">
                <div className="k-col-dot" style={{ background: col.dot }} />
                <span style={{ color: col.color }}>{col.label}</span>
              </div>
              <div className="k-col-count">{col.items.length}</div>
            </div>

            <div className="k-col-body">
              {col.items.map((t, i) => {
                const tm = getTm(t);
                return (
                  <div key={i} className="k-card">
                    {/* left accent */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 3,
                        background: tm.color,
                        borderRadius: "6px 0 0 6px",
                      }}
                    />
                    <div className="k-card-name">{t.activity}</div>
                    <div className="k-card-meta">
                      <span
                        className="type-badge"
                        style={{
                          background: tm.bg,
                          color: tm.color,
                          fontFamily: "var(--font-mono)",
                          fontSize: "9px",
                          padding: "1px 6px",
                          borderRadius: "99px",
                        }}
                      >
                        {tm.label}
                      </span>
                      <span className="k-card-time">{t.time}</span>
                    </div>
                  </div>
                );
              })}

              {col.items.length === 0 && (
                <div
                  style={{
                    textAlign: "center",
                    color: "var(--text3)",
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    padding: "20px 0",
                  }}
                >
                  empty
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
