import { useState } from "react";
import { BsPencilSquare, BsCheck, BsX } from "react-icons/bs";
import { WEEKS } from "../data/constants";

function WeekTitleEditor({ value, onSave, onCancel }) {
  const [val, setVal] = useState(value);
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center", flex: 1 }}>
      <input
        className="form-input"
        style={{ padding: "4px 8px", fontSize: 13, flex: 1 }}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") onSave(val);
          if (e.key === "Escape") onCancel();
        }}
      />
      <button
        className="task-action-btn"
        onClick={() => onSave(val)}
        title="Save"
      >
        <BsCheck size={14} />
      </button>
      <button
        className="task-action-btn danger"
        onClick={onCancel}
        title="Cancel"
      >
        <BsX size={14} />
      </button>
    </div>
  );
}

export default function Weeks({ state, week, goDay, updateWeekMeta }) {
  const [editingWeek, setEditingWeek] = useState(null); // weekNum being edited

  const getWeekTitle = (w) =>
    state.customWeeks?.["w" + w.num]?.title || w.title;
  const getWeekSubtitle = (w) =>
    state.customWeeks?.["w" + w.num]?.subtitle || w.subtitle;

  return (
    <div className="page">
      <div className="section-label">Select Week</div>

      {/* Week Strip */}
      <div className="week-strip">
        {WEEKS.map((w) => (
          <button
            key={w.num}
            className={`week-pill${week.num === w.num ? " active" : ""}`}
            style={
              week.num === w.num
                ? { background: w.color, borderColor: "transparent" }
                : {}
            }
            onClick={() => goDay(w.days[0])}
          >
            W{w.num} · {getWeekTitle(w)}
          </button>
        ))}
      </div>

      {/* Week Cards */}
      {WEEKS.map((w) => {
        const doneDays = w.days.filter((d) =>
          state.completedDays.includes(d),
        ).length;
        const pct = Math.round((doneDays / w.days.length) * 100);
        const isEditing = editingWeek === w.num;

        return (
          <div key={w.num} className="card" style={{ marginBottom: 10 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--text3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Week {w.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: w.color,
                }}
              >
                {pct}%
              </div>
            </div>

            {/* Editable week title */}
            {isEditing ? (
              <WeekTitleEditor
                value={getWeekTitle(w)}
                onSave={(title) => {
                  updateWeekMeta(w.num, title, getWeekSubtitle(w));
                  setEditingWeek(null);
                }}
                onCancel={() => setEditingWeek(null)}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--text)",
                    flex: 1,
                  }}
                >
                  {getWeekTitle(w)}
                </div>
                <button
                  className="task-action-btn"
                  onClick={() => setEditingWeek(w.num)}
                  title="Rename week"
                  style={{ flexShrink: 0 }}
                >
                  <BsPencilSquare size={11} />
                </button>
              </div>
            )}

            {/* Editable week subtitle */}
            <div
              style={{
                fontSize: 11,
                color: "var(--text3)",
                marginBottom: 10,
                cursor: "text",
              }}
              onClick={() => !isEditing && setEditingWeek(w.num)}
              title="Click week title to rename"
            >
              {getWeekSubtitle(w)}
            </div>

            {/* Day dots */}
            <div className="day-dots-row">
              {w.days.map((d) => {
                const isDone = state.completedDays.includes(d);
                const isToday = d === state.currentDay;
                const focus = state.customFocus?.["d" + d];
                return (
                  <button
                    key={d}
                    className={`day-dot-btn${isDone ? " done" : isToday ? " today" : ""}`}
                    onClick={() => goDay(d)}
                    title={focus || "Day " + d}
                  >
                    {d}
                  </button>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="p-bar">
              <div
                className="p-bar-fill"
                style={{ width: pct + "%", background: w.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
