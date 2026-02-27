export const STORAGE_KEY = "roadmap-app-v2";

export const loadState = () => {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (!s) return null;
    // Merge with defaultState so newly added fields always exist
    return { ...defaultState(), ...JSON.parse(s) };
  } catch {
    return null;
  }
};

export const defaultState = () => ({
  currentDay: 1,
  completedDays: [],
  taskChecks: {},
  streak: 0,
  projects: [], // array of { id, title, desc, tags, color, progress }
  logs: {},
  lastVisit: null,
  // User-created content
  customTasks: {}, // { "d1": [...tasks] } — overrides that day's task list
  customFocus: {}, // { "d1": "My focus text" } — overrides day's focus heading
  hasSeenOnboarding: false,
});
