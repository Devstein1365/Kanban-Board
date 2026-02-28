import { BsSun, BsMoon } from "react-icons/bs";

const TABS = [
  { id: "today", label: "Today" },
  { id: "kanban", label: "Board" },
  { id: "weeks", label: "Weeks" },
  { id: "projects", label: "Projects" },
  { id: "log", label: "Log" },
  { id: "guide", label: "Setup" },
];

export default function TopBar({
  currentDay,
  overallPct,
  theme,
  onToggleTheme,
}) {
  return (
    <div className="topbar">
      <div className="topbar-row1">
        <div className="app-title">
          <div className="title-dot" />
          30-Day Build
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>
          <div className="day-chip">
            Day <span>{currentDay}</span> of 30
          </div>
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
