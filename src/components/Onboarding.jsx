import { useState } from "react";
import {
  BsStars,
  BsCalendarCheck,
  BsPlusCircle,
  BsCheckCircle,
  BsKanban,
  BsBarChart,
  BsRocketTakeoff,
  BsJournalText,
} from "react-icons/bs";

const STEPS = [
  {
    icon: BsStars,
    color: "var(--accent)",
    title: "Welcome to Kanban Board",
    body: "Your personal 30-day coding journey — track daily tasks, build projects and write weekly reflections, all in one place.",
  },
  {
    icon: BsCalendarCheck,
    color: "var(--green)",
    title: "Today tab",
    body: "Every day starts blank — it's yours to fill. Navigate to any day with the arrows and add your own tasks with the + button.",
  },
  {
    icon: BsPlusCircle,
    color: "var(--accent)",
    title: "Build your daily schedule",
    body: "Tap + to add a task: give it a name, a time slot, a type and optional notes. Tap any task to edit or delete it.",
  },
  {
    icon: BsCheckCircle,
    color: "var(--green)",
    title: "Track your progress",
    body: "Finishing all non-break tasks marks the day complete. Your streak and overall progress update automatically.",
  },
  {
    icon: BsKanban,
    color: "var(--purple)",
    title: "Board view",
    body: "The Board tab shows today's tasks as a Kanban board — To Do, In Progress and Done — so you can see your flow at a glance.",
  },
  {
    icon: BsBarChart,
    color: "var(--orange)",
    title: "Weeks overview",
    body: "The Weeks tab shows your 30-day grid split into 4 weeks. Tap the pencil icon on any week to rename it to match your goals.",
  },
  {
    icon: BsRocketTakeoff,
    color: "var(--teal)",
    title: "Projects tab",
    body: "Add any projects you're building — name them, describe them, pick your tech stack and drag the slider as you make progress.",
  },
  {
    icon: BsJournalText,
    color: "var(--yellow)",
    title: "Weekly log",
    body: "After each week, visit the Log tab to write your wins, blockers, ideas and key lessons. Reflection is how growth compounds.",
  },
  {
    icon: BsStars,
    color: "var(--accent)",
    title: "You're all set!",
    body: "Your data lives on this device. Start from Day 1 or jump to wherever you are. Now go build something great!",
  },
];

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0);
  const isLast = step === STEPS.length - 1;
  const current = STEPS[step];
  const Icon = current.icon;

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-card">
        <div className="onboarding-icon-wrap" style={{ color: current.color }}>
          <Icon size={48} />
        </div>

        <h2 className="onboarding-title">{current.title}</h2>
        <p className="onboarding-body">{current.body}</p>

        {/* Step dots */}
        <div className="onboarding-dots">
          {STEPS.map((_, i) => (
            <span
              key={i}
              className={"onboarding-dot" + (i === step ? " active" : "")}
              onClick={() => setStep(i)}
            />
          ))}
        </div>

        <div className="onboarding-actions">
          {step > 0 && (
            <button
              className="btn-outline"
              onClick={() => setStep((s) => s - 1)}
            >
              Back
            </button>
          )}
          <button
            className="btn-primary"
            style={{ marginLeft: step > 0 ? undefined : "auto" }}
            onClick={isLast ? onComplete : () => setStep((s) => s + 1)}
          >
            {isLast ? "Get Started" : "Next"}
          </button>
        </div>

        {!isLast && (
          <button className="onboarding-skip" onClick={onComplete}>
            Skip tutorial
          </button>
        )}
      </div>
    </div>
  );
}
