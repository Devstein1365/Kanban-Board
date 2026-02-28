import { useState } from "react";
import {
  BsLightningChargeFill,
  BsCheck,
  BsCheckLg,
  BsPlus,
  BsPencilSquare,
  BsTrash,
  BsCalendarPlus,
} from "react-icons/bs";
import { TYPE_META } from "../data/constants";
import { WEEKS } from "../data/constants";
import TaskModal from "../components/TaskModal";

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
