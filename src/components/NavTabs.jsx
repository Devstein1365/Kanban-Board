import { TABS } from "./TopBar";

export default function NavTabs({ activeTab, onTabChange }) {
  return (
    <div className="nav-tabs">
      {TABS.map((t) => (
        <button
          key={t.id}
          className={`nav-tab${activeTab === t.id ? " active" : ""}`}
          onClick={() => onTabChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
