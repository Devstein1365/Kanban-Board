# Kanban Board

A mobile-first PWA for running your personal 30-day coding sprint. Plan daily tasks, track projects, log progress, and stay consistent — all offline, no account needed.

---

## Features

- **Daily Task View** — Add, edit, complete, and delete tasks for each day. Set a focus note for the day.
- **Weekly Progress** — Visual calendar showing completed days across 4 weeks with per-week and overall percentage.
- **Projects Board** — Kanban-style board to track the projects you're building during the sprint.
- **Progress Log** — Free-text daily journal. Write what you shipped, what you learned, what's next.
- **Field Guide** — In-app how-to guide covering daily workflow, projects, mindset, and a reset option.
- **Milestones** — Day 7, 14, 21, and 30 completion overlays with stats.
- **Light / Dark theme** — Toggle in the top bar, persists across sessions.
- **PWA** — Installable on Android and iOS. Works fully offline after first load.
- **No account, no backend** — All data lives in `localStorage`.

---

## Tech Stack

| Layer           | Tool                         |
| --------------- | ---------------------------- |
| UI              | React 19                     |
| Build           | Vite 8                       |
| Styling         | Tailwind CSS v4 + custom CSS |
| Icons           | react-icons (Bootstrap set)  |
| PWA             | vite-plugin-pwa + Workbox    |
| Icon generation | sharp                        |

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## PWA / Install

The app is configured as a fully installable PWA:

- **Android (Chrome)** — tap the browser menu → _Add to Home Screen_, or wait for the native install prompt.
- **iOS (Safari)** — tap the Share button → _Add to Home Screen_.

Icons: `icon-192.png`, `icon-512.png` (maskable), `apple-touch-icon.png` (180 px) are all in `public/`.

---

## Project Structure

```
src/
  App.jsx               # Root: theme, routing between tabs
  index.css             # All styles (dark + light theme vars, animations)
  hooks/
    useRoadmap.js       # All state logic + localStorage persistence
  components/
    TopBar.jsx          # Header with day counter, progress %, theme toggle
    NavTabs.jsx         # Bottom navigation
    Onboarding.jsx      # 9-step first-run onboarding
    Logo.jsx
    ui/Button.jsx
  pages/
    Today.jsx           # Daily tasks, focus note, completion banner, milestones
    Weeks.jsx           # 4-week calendar grid
    Kanban.jsx          # Projects board view
    Projects.jsx        # Project CRUD
    Log.jsx             # Daily progress journal
    Guide.jsx           # Field guide + Danger Zone (reset)
public/
  icon.svg
  icon.png
  icon-192.png
  icon-512.png
  apple-touch-icon.png
```

---

## Data & Reset

Everything is stored in `localStorage` under the key `roadmap-app-v2`. To wipe and start fresh, go to the **Guide** tab → scroll to **Danger Zone** → tap **Reset All Data**.

---

## Planned

- Push notifications for daily reminders
- Streak counter
- Export progress as image / markdown
