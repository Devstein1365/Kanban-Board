import { useState, useEffect } from "react";
import {
  BsLightningChargeFill,
  BsCheck,
  BsCheckLg,
  BsPlus,
  BsPencilSquare,
  BsTrash,
  BsCalendarPlus,
  BsTrophyFill,
  BsGraphUp,
  BsCheckCircleFill,
} from "react-icons/bs";
import { TYPE_META } from "../data/constants";
import { WEEKS } from "../data/constants";
import TaskModal from "../components/TaskModal";

const CONFETTI_COLORS = [
  "#4f8ef7",
  "#22c55e",
  "#a855f7",
  "#eab308",
  "#f97316",
  "#14b8a6",
];
const CONFETTI_DOTS = Array.from({ length: 16 }, (_, i) => ({
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  left: `${4 + i * 6}%`,
  delay: `${(i * 0.09) % 1.0}s`,
  size: i % 3 === 0 ? 7 : 5,
  dur: `${1.2 + (i % 4) * 0.18}s`,
  isCircle: i % 2 === 0,
}));

const MILESTONES = [7, 14, 21, 30];
const MILESTONE_META = {
  7: {
    icon: BsLightningChargeFill,
    color: "#f97316",
    label: "One week in!",
    sub: "7 days of showing up. Consistency is the skill.",
    tag: "Week 1 Done",
  },
  14: {
    icon: BsGraphUp,
    color: "#4f8ef7",
    label: "Halfway there!",
    sub: "14 days done. The habit is forming — keep feeding it.",
    tag: "Week 2 Done",
  },
  21: {
    icon: BsCheckCircleFill,
    color: "#22c55e",
    label: "Three weeks!",
    sub: "21 days. This is where most people quit. You didn't.",
    tag: "Week 3 Done",
  },
  30: {
    icon: BsTrophyFill,
    color: "#eab308",
    label: "Sprint complete!",
    sub: "30 days finished. Ship your projects and run it again.",
    tag: "All 30 Days!",
  },
};

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
  addTask,
  editTask,
  deleteTask,
  updateDayFocus,
}) {
  const [expandedTask, setExpandedTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editingFocus, setEditingFocus] = useState(false);
  const [focusVal, setFocusVal] = useState("");
  const [showMilestone, setShowMilestone] = useState(false);
  const [milestoneDay, setMilestoneDay] = useState(null);

  useEffect(() => {
    if (
      doneCount === totalCount &&
      totalCount > 0 &&
      MILESTONES.includes(state.currentDay)
    ) {
      const seen = JSON.parse(
        localStorage.getItem("roadmap-milestones") || "[]",
      );
      if (!seen.includes(state.currentDay)) {
        setMilestoneDay(state.currentDay);
        setShowMilestone(true);
      }
    }
  }, [doneCount, totalCount, state.currentDay]);

  const closeMilestone = () => {
    const seen = JSON.parse(localStorage.getItem("roadmap-milestones") || "[]");
    if (!seen.includes(milestoneDay)) {
      localStorage.setItem(
        "roadmap-milestones",
        JSON.stringify([...seen, milestoneDay]),
      );
    }
    setShowMilestone(false);
  };

  const milestoneInfo = milestoneDay ? MILESTONE_META[milestoneDay] : null;
  const MilestoneIcon = milestoneInfo?.icon ?? null;

  const openFocusEdit = () => {
    setFocusVal(dayData.focus || "");
    setEditingFocus(true);
  };
  const saveFocus = () => {
    updateDayFocus(focusVal);
    setEditingFocus(false);
  };
  const cancelFocus = () => {
    setEditingFocus(false);
  };

  const openAdd = () => {
    setEditIndex(null);
    setModalOpen(true);
  };
  const openEdit = (i, e) => {
    e.stopPropagation();
    setEditIndex(i);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const handleSave = (task) => {
    if (editIndex === null) addTask(task);
    else editTask(editIndex, task);
    setModalOpen(false);
  };

  const handleDelete = (i, e) => {
    e.stopPropagation();
    if (window.confirm("Delete this task?")) {
      deleteTask(i);
      setExpandedTask(null);
    }
  };

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
          {editingFocus ? (
            <div
              style={{
                display: "flex",
                gap: 6,
                alignItems: "center",
                width: "100%",
              }}
            >
              <input
                className="form-input"
                style={{ padding: "3px 8px", fontSize: 12, flex: 1 }}
                value={focusVal}
                onChange={(e) => setFocusVal(e.target.value)}
                placeholder="What's the focus for today?"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveFocus();
                  if (e.key === "Escape") cancelFocus();
                }}
                onBlur={cancelFocus}
              />
              <button
                className="task-action-btn"
                onMouseDown={(e) => e.preventDefault()}
                onClick={saveFocus}
                title="Save"
              >
                ✓
              </button>
              <button
                className="task-action-btn"
                onMouseDown={(e) => e.preventDefault()}
                onClick={cancelFocus}
                title="Cancel"
                style={{ opacity: 0.6 }}
              >
                ✕
              </button>
            </div>
          ) : (
            <div
              className="day-nav-focus"
              onClick={openFocusEdit}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
              title="Tap to set today's focus"
            >
              {dayData.focus || (
                <span style={{ color: "var(--text3)" }}>
                  Tap to set a focus…
                </span>
              )}
              <BsPencilSquare
                size={10}
                style={{ color: "var(--text3)", flexShrink: 0 }}
              />
            </div>
          )}
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

      {/* Day Complete Banner */}
      {doneCount === totalCount && totalCount > 0 && (
        <div className="day-complete-banner">
          <div className="day-complete-confetti" aria-hidden="true">
            {CONFETTI_DOTS.map((d, i) => (
              <div
                key={i}
                className="confetti-dot"
                style={{
                  left: d.left,
                  background: d.color,
                  width: d.size,
                  height: d.size,
                  borderRadius: d.isCircle ? "50%" : "2px",
                  animationDelay: d.delay,
                  animationDuration: d.dur,
                }}
              />
            ))}
          </div>
          <div className="day-complete-check">
            <BsCheckLg size={26} />
          </div>
          <div className="day-complete-title">
            Day {state.currentDay} Complete
          </div>
          <div className="day-complete-sub">
            {totalCount} task{totalCount !== 1 ? "s" : ""} done · Nice work!
          </div>
        </div>
      )}

      {/* Empty state */}
      {dayData.tasks.length === 0 && (
        <div className="empty-state">
          <BsCalendarPlus
            size={34}
            style={{ color: "var(--text3)", marginBottom: 12 }}
          />
          <div className="empty-state-title">No tasks yet</div>
          <div className="empty-state-body">
            Tap the + button below to add your first task for Day{" "}
            {state.currentDay}. Give it a name, a time slot and a type.
          </div>
        </div>
      )}

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
                  <>
                    <div className="si-detail">{task.detail}</div>
                    <div className="task-actions">
                      <button
                        className="task-action-btn"
                        onClick={(e) => openEdit(i, e)}
                        aria-label="Edit task"
                      >
                        <BsPencilSquare size={13} /> Edit
                      </button>
                      <button
                        className="task-action-btn danger"
                        onClick={(e) => handleDelete(i, e)}
                        aria-label="Delete task"
                      >
                        <BsTrash size={13} /> Delete
                      </button>
                    </div>
                  </>
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

      {/* Milestone Overlay */}
      {showMilestone && milestoneInfo && (
        <div className="milestone-overlay" onClick={closeMilestone}>
          <div className="milestone-card" onClick={(e) => e.stopPropagation()}>
            <div
              className="milestone-tag"
              style={{
                background: milestoneInfo.color + "22",
                color: milestoneInfo.color,
                border: `1px solid ${milestoneInfo.color}44`,
              }}
            >
              {milestoneInfo.tag}
            </div>
            <div
              className="milestone-icon-wrap"
              style={{ background: milestoneInfo.color + "18" }}
            >
              {MilestoneIcon && (
                <MilestoneIcon
                  size={36}
                  style={{ color: milestoneInfo.color }}
                />
              )}
            </div>
            <div className="milestone-title">{milestoneInfo.label}</div>
            <div className="milestone-sub">{milestoneInfo.sub}</div>
            <div className="milestone-stats">
              <div className="milestone-stat">
                <div className="milestone-stat-val">
                  {state.completedDays.length}
                </div>
                <div className="milestone-stat-label">Days done</div>
              </div>
              <div className="milestone-stat-divider" />
              <div className="milestone-stat">
                <div className="milestone-stat-val">{state.streak}</div>
                <div className="milestone-stat-label">Streak</div>
              </div>
              <div className="milestone-stat-divider" />
              <div className="milestone-stat">
                <div className="milestone-stat-val">
                  {state.projects.length}
                </div>
                <div className="milestone-stat-label">Projects</div>
              </div>
            </div>
            <button
              className="milestone-btn"
              style={{ background: milestoneInfo.color }}
              onClick={closeMilestone}
            >
              Keep going →
            </button>
            <div className="milestone-dismiss">Tap anywhere to close</div>
          </div>
        </div>
      )}

      {/* FAB — Add task */}
      <button className="fab" onClick={openAdd} aria-label="Add task">
        <BsPlus size={28} />
      </button>

      {/* Task Modal */}
      <TaskModal
        isOpen={modalOpen}
        onClose={closeModal}
        onSave={handleSave}
        initialData={editIndex !== null ? dayData.tasks[editIndex] : null}
      />
    </div>
  );
}
