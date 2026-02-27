const TABS = [
  { id: "today", label: "Today" },
  { id: "kanban", label: "Board" },
  { id: "weeks", label: "Weeks" },
  { id: "projects", label: "Projects" },
  { id: "log", label: "Log" },
  { id: "guide", label: "Setup" },
];

export default function TopBar({ currentDay, overallPct }) {
  return (
    <div className="topbar">
      <div className="topbar-row1">
        <div className="app-title">
          <div className="title-dot" />
          30-Day Build
        </div>
        <div className="day-chip">
          Day <span>{currentDay}</span> of 30
        </div>
      </div>
      <div className="overall-bar-wrap">
        <div className="overall-bar-label">
          <span>Overall Progress</span>
          <span>{overallPct}%</span>
        </div>
        <div className="overall-bar">
          <div
            className="overall-bar-fill"
            style={{ width: overallPct + "%" }}
          />
        </div>
      </div>
    </div>
  );
}

export { TABS };
