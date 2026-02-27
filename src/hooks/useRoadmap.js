import { useState, useCallback } from "react";
import { ALL_DAYS, WEEKS } from "../data/constants";
import { loadState, defaultState, STORAGE_KEY } from "../utils/storage";

export function useRoadmap() {
  const [state, setState] = useState(() => loadState() || defaultState());

  const update = useCallback((fn) => {
    setState((prev) => {
      const next = fn({ ...prev });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  // ── Derived values ──────────────────────────────────────────────────────────
  const dayData =
    ALL_DAYS.find((d) => d.day === state.currentDay) || ALL_DAYS[0];
  const week = WEEKS.find((w) => w.days.includes(state.currentDay)) || WEEKS[0];
  const checks = state.taskChecks?.["d" + state.currentDay] || {};
  const doneCount = Object.values(checks).filter(Boolean).length;
  const totalCount = dayData.tasks.length;
  const overallPct = Math.round((state.completedDays.length / 30) * 100);

  // ── Actions ─────────────────────────────────────────────────────────────────
  const toggleTask = (idx) => {
    update((s) => {
      const key = "d" + s.currentDay;
      const c = { ...(s.taskChecks[key] || {}) };
      c[idx] = !c[idx];
      const newChecks = { ...s.taskChecks, [key]: c };
      const doneTasks = Object.values(c).filter(Boolean).length;
      const allDone =
        doneTasks >= dayData.tasks.filter((t) => t.type !== "break").length;
      const completedDays =
        allDone && !s.completedDays.includes(s.currentDay)
          ? [...s.completedDays, s.currentDay]
          : s.completedDays;
      const streak = completedDays.length;
      return { ...s, taskChecks: newChecks, completedDays, streak };
    });
  };

  const goDay = (d) =>
    update((s) => ({ ...s, currentDay: Math.max(1, Math.min(30, d)) }));

  const updateProject = (p, val) =>
    update((s) => ({
      ...s,
      projects: { ...s.projects, [p]: parseInt(val) },
    }));

  const saveLog = (weekNum, key, val) =>
    update((s) => ({
      ...s,
      logs: {
        ...s.logs,
        ["w" + weekNum]: { ...(s.logs?.["w" + weekNum] || {}), [key]: val },
      },
    }));

  return {
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
  };
}
