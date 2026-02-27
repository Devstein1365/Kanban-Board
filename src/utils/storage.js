export const STORAGE_KEY = "roadmap-app-v2";

export const loadState = () => {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
};

export const defaultState = () => ({
  currentDay: 1,
  completedDays: [],
  taskChecks: {},
  streak: 0,
  projects: { p1: 0, p2: 0, p3: 0 },
  logs: {},
  lastVisit: null,
});
