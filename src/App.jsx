import { useState, useEffect } from "react";
import { useRoadmap } from "./hooks/useRoadmap";
import TopBar from "./components/TopBar";
import NavTabs from "./components/NavTabs";
import Onboarding from "./components/Onboarding";
import Today from "./pages/Today";
import Weeks from "./pages/Weeks";
import Kanban from "./pages/Kanban";
import Projects from "./pages/Projects";
import Log from "./pages/Log";
import Guide from "./pages/Guide";

export default function App() {
  const [tab, setTab] = useState("today");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("roadmap-theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    return saved;
  });
  const roadmap = useRoadmap();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("roadmap-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const {
    state,
    dayData,
    week,
    checks,
    doneCount,
    totalCount,
    overallPct,
    toggleTask,
    goDay,
    addProject,
    editProject,
    deleteProject,
    updateProjectProgress,
    saveLog,
    addTask,
    editTask,
    deleteTask,
    updateDayFocus,
    updateWeekMeta,
    completeOnboarding,
  } = roadmap;

  return (
    <div className="app">
      {/* First-run onboarding tour */}
      {!state.hasSeenOnboarding && (
        <Onboarding onComplete={completeOnboarding} />
      )}

      <TopBar
        currentDay={state.currentDay}
        overallPct={overallPct}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <NavTabs activeTab={tab} onTabChange={setTab} />

      {tab === "today" && (
        <Today
          state={state}
          dayData={dayData}
          week={week}
          checks={checks}
          doneCount={doneCount}
          totalCount={totalCount}
          overallPct={overallPct}
          toggleTask={toggleTask}
          goDay={goDay}
          addTask={addTask}
          editTask={editTask}
          deleteTask={deleteTask}
          updateDayFocus={updateDayFocus}
        />
      )}
      {tab === "kanban" && (
        <Kanban state={state} dayData={dayData} checks={checks} />
      )}
      {tab === "weeks" && (
        <Weeks
          state={state}
          week={week}
          goDay={goDay}
          updateWeekMeta={updateWeekMeta}
        />
      )}
      {tab === "projects" && (
        <Projects
          state={state}
          addProject={addProject}
          editProject={editProject}
          deleteProject={deleteProject}
          updateProjectProgress={updateProjectProgress}
        />
      )}
      {tab === "log" && <Log state={state} saveLog={saveLog} />}
      {tab === "guide" && <Guide />}
    </div>
  );
}
