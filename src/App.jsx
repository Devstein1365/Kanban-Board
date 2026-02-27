import { useState } from "react";
import { useRoadmap } from "./hooks/useRoadmap";
import TopBar from "./components/TopBar";
import NavTabs from "./components/NavTabs";
import Today from "./pages/Today";
import Weeks from "./pages/Weeks";
import Kanban from "./pages/Kanban";
import Projects from "./pages/Projects";
import Log from "./pages/Log";
import Guide from "./pages/Guide";

export default function App() {
  const [tab, setTab] = useState("today");
  const roadmap = useRoadmap();

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
    updateProject,
    saveLog,
  } = roadmap;

  return (
    <div className="app">
      <TopBar currentDay={state.currentDay} overallPct={overallPct} />
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
        />
      )}
      {tab === "kanban" && (
        <Kanban state={state} dayData={dayData} checks={checks} />
      )}
      {tab === "weeks" && <Weeks state={state} week={week} goDay={goDay} />}
      {tab === "projects" && (
        <Projects state={state} updateProject={updateProject} />
      )}
      {tab === "log" && <Log state={state} saveLog={saveLog} />}
      {tab === "guide" && <Guide />}
    </div>
  );
}
