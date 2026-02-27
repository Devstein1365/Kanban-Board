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
  const dayKey = "d" + state.currentDay;
  const baseDay =
    ALL_DAYS.find((d) => d.day === state.currentDay) || ALL_DAYS[0];
  // Merge user overrides on top of template data
  const dayData = {
    ...baseDay,
    focus: state.customFocus?.[dayKey] || baseDay.focus,
    tasks: state.customTasks?.[dayKey] || baseDay.tasks,
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
      const tasks =
        s.customTasks?.[key] ||
        (ALL_DAYS.find((d) => d.day === s.currentDay) || ALL_DAYS[0]).tasks;
      const doneTasks = Object.values(c).filter(Boolean).length;
      const allDone =
        doneTasks >= tasks.filter((t) => t.type !== "break").length;
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
      const base = (ALL_DAYS.find((d) => d.day === s.currentDay) || ALL_DAYS[0])
        .tasks;
      const existing = s.customTasks?.[key] || base;
      return {
        ...s,
        customTasks: { ...s.customTasks, [key]: [...existing, task] },
      };
    });

  const editTask = (idx, task) =>
    update((s) => {
      const key = "d" + s.currentDay;
      const base = (ALL_DAYS.find((d) => d.day === s.currentDay) || ALL_DAYS[0])
        .tasks;
      const existing = [...(s.customTasks?.[key] || base)];
      existing[idx] = task;
      return { ...s, customTasks: { ...s.customTasks, [key]: existing } };
    });

  const deleteTask = (idx) =>
    update((s) => {
      const key = "d" + s.currentDay;
      const base = (ALL_DAYS.find((d) => d.day === s.currentDay) || ALL_DAYS[0])
        .tasks;
      const existing = [...(s.customTasks?.[key] || base)];
      existing.splice(idx, 1);
      // Re-index taskChecks: shift all keys > idx down by 1
      const oldChecks = s.taskChecks?.[key] || {};
      const newDayChecks = {};
      Object.entries(oldChecks).forEach(([k, v]) => {
        const n = parseInt(k);
        if (n < idx) newDayChecks[n] = v;
        else if (n > idx) newDayChecks[n - 1] = v;
        // n === idx is dropped
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
    completeOnboarding,
  };
}
