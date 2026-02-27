import { useState } from "react";
import { BsLightningChargeFill, BsCheck, BsCheckLg } from "react-icons/bs";
import { TYPE_META } from "../data/constants";
import { WEEKS } from "../data/constants";

export default function Today({
  state,
  dayData,
  week,
  checks,
  doneCount,
  totalCount,
  overallPct,
  toggleTask,
  goDay,
}) {
  const [expandedTask, setExpandedTask] = useState(null);

  return (
    <div className="page">
      {/* Rule Banner */}
      <div className="rule-banner">
        <div className="rule-icon">
          <BsLightningChargeFill />
        </div>
        <div>
          <div className="rule-title">Daily Rule</div>
          <div className="rule-desc">
            Create today's tasks in the morning. Tick them off as you go. Never
            skip the evening review.
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Day</div>
          <div className="stat-value">
            {state.currentDay}
            <span className="unit">/ 30</span>
          </div>
          <div className="stat-sub">Week {week.num}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Today</div>
          <div className="stat-value">
            {doneCount}
            <span className="unit">/ {totalCount}</span>
          </div>
          <div className="stat-sub">
            {doneCount === 0 ? (
              "Let's get started"
            ) : doneCount === totalCount ? (
              <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <BsCheckLg style={{ color: "var(--green)" }} /> All done!
              </span>
            ) : (
              "Keep going!"
            )}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Streak</div>
          <div className="stat-value">
            {state.streak}
            <span className="unit">days</span>
          </div>
          <div className="stat-sub">Don't break it</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Completed</div>
          <div className="stat-value">
            {state.completedDays.length}
            <span className="unit">days</span>
          </div>
          <div className="stat-sub">{overallPct}% overall</div>
        </div>
      </div>

      {/* Day Navigator */}
      <div className="section-label">Navigate Days</div>
      <div className="day-nav" style={{ marginBottom: 12 }}>
        <button
          className="day-nav-btn"
          onClick={() => goDay(state.currentDay - 1)}
          disabled={state.currentDay <= 1}
        >
          ‹
        </button>
        <div className="day-nav-info">
          <div className="day-nav-day">Day {state.currentDay}</div>
          <div className="day-nav-focus">{dayData.focus}</div>
        </div>
        <button
          className="day-nav-btn"
          onClick={() => goDay(state.currentDay + 1)}
          disabled={state.currentDay >= 30}
        >
          ›
        </button>
      </div>

      {/* Schedule */}
      <div className="section-label">Today's Schedule</div>
      <div className="schedule-list">
        {dayData.tasks.map((task, i) => {
          const tm = TYPE_META[task.type] || TYPE_META.personal;
          const done = checks[i] || false;
          const expanded = expandedTask === i;

          return (
            <div key={i} className={`schedule-item${done ? " done" : ""}`}>
              {/* left accent bar */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 3,
                  background: tm.color,
                  borderRadius: "10px 0 0 10px",
                }}
              />

              <div className="si-left">
                <button
                  className={`checkbox-btn${done ? " checked" : ""}`}
                  onClick={() => toggleTask(i)}
                >
                  {done ? <BsCheck /> : ""}
                </button>
              </div>

              <div
                className="si-body"
                onClick={() => setExpandedTask(expanded ? null : i)}
                style={{ cursor: "pointer" }}
              >
                <div className="si-time">{task.time}</div>
                <div className="si-activity">{task.activity}</div>
                {expanded ? (
                  <div className="si-detail">{task.detail}</div>
                ) : (
                  <div
                    className="si-detail"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: "100%",
                    }}
                  >
                    {task.detail}
                  </div>
                )}
              </div>

              <div
                className="type-badge"
                style={{ background: tm.bg, color: tm.color }}
              >
                {tm.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
