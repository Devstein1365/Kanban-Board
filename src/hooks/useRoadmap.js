import { useState, useCallback } from "react";
import { WEEKS } from "../data/constants";
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
  const dayKey = "d" + state.currentDay;
  // Pure user-driven data — no hardcoded fallback tasks
  const dayData = {
    day: state.currentDay,
    focus: state.customFocus?.[dayKey] || "",
    tasks: state.customTasks?.[dayKey] || [],
  };
  const week = WEEKS.find((w) => w.days.includes(state.currentDay)) || WEEKS[0];
  const checks = state.taskChecks?.[dayKey] || {};
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
      const tasks = s.customTasks?.[key] || [];
      const doneTasks = Object.values(c).filter(Boolean).length;
      const nonBreakCount = tasks.filter((t) => t.type !== "break").length;
      // Only mark complete if there are tasks and all non-break ones are done
      const allDone = nonBreakCount > 0 && doneTasks >= nonBreakCount;
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

  // ── Project CRUD ─────────────────────────────────────────────────────────────
  const addProject = (project) =>
    update((s) => ({
      ...s,
      projects: [
        ...(Array.isArray(s.projects) ? s.projects : []),
        { id: Date.now(), progress: 0, ...project },
      ],
    }));

  const editProject = (id, project) =>
    update((s) => ({
      ...s,
      projects: (Array.isArray(s.projects) ? s.projects : []).map((p) =>
        p.id === id ? { ...p, ...project } : p,
      ),
    }));

  const deleteProject = (id) =>
    update((s) => ({
      ...s,
      projects: (Array.isArray(s.projects) ? s.projects : []).filter(
        (p) => p.id !== id,
      ),
    }));

  const updateProjectProgress = (id, val) =>
    update((s) => ({
      ...s,
      projects: (Array.isArray(s.projects) ? s.projects : []).map((p) =>
        p.id === id ? { ...p, progress: parseInt(val) } : p,
      ),
    }));

  const saveLog = (weekNum, key, val) =>
    update((s) => ({
      ...s,
      logs: {
        ...s.logs,
        ["w" + weekNum]: { ...(s.logs?.["w" + weekNum] || {}), [key]: val },
      },
    }));

  // ── Task CRUD ────────────────────────────────────────────────────────────────
  const addTask = (task) =>
    update((s) => {
      const key = "d" + s.currentDay;
      const existing = s.customTasks?.[key] || [];
      return {
        ...s,
        customTasks: { ...s.customTasks, [key]: [...existing, task] },
      };
    });

  const editTask = (idx, task) =>
    update((s) => {
      const key = "d" + s.currentDay;
      const existing = [...(s.customTasks?.[key] || [])];
      existing[idx] = task;
      return { ...s, customTasks: { ...s.customTasks, [key]: existing } };
    });

  const deleteTask = (idx) =>
    update((s) => {
      const key = "d" + s.currentDay;
      const existing = [...(s.customTasks?.[key] || [])];
      existing.splice(idx, 1);
      // Re-index taskChecks: shift all keys > idx down by 1
      const oldChecks = s.taskChecks?.[key] || {};
      const newDayChecks = {};
      Object.entries(oldChecks).forEach(([k, v]) => {
        const n = parseInt(k);
        if (n < idx) newDayChecks[n] = v;
        else if (n > idx) newDayChecks[n - 1] = v;
      });
      return {
        ...s,
        customTasks: { ...s.customTasks, [key]: existing },
        taskChecks: { ...s.taskChecks, [key]: newDayChecks },
      };
    });

  const updateDayFocus = (focus) =>
    update((s) => ({
      ...s,
      customFocus: { ...s.customFocus, ["d" + s.currentDay]: focus },
    }));

  const updateWeekMeta = (weekNum, title, subtitle) =>
    update((s) => ({
      ...s,
      customWeeks: {
        ...s.customWeeks,
        ["w" + weekNum]: { title, subtitle },
      },
    }));

  const completeOnboarding = () =>
    update((s) => ({ ...s, hasSeenOnboarding: true }));

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
  };
}
