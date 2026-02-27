import { useState } from "react";
import {
  BsStars,
  BsCalendarCheck,
  BsPlusCircle,
  BsCheckCircle,
  BsKanban,
  BsBarChart,
  BsJournalText,
  BsRocketTakeoff,
} from "react-icons/bs";

const STEPS = [
  {
    icon: BsStars,
    color: "var(--accent)",
    title: "Welcome to Roadmap Tracker",
    body: "Your personal 30-day coding journey — track tasks, projects and reflections all in one place.",
  },
  {
    icon: BsCalendarCheck,
    color: "var(--green)",
    title: "Today tab",
    body: "See today's schedule, check off tasks as you go, and navigate to any day using the arrow buttons.",
  },
  {
    icon: BsPlusCircle,
    color: "var(--accent)",
    title: "Add your own tasks",
    body: "Tap the blue + button at the bottom of the Today view to add a custom task. You can also edit or delete any task.",
  },
  {
    icon: BsCheckCircle,
    color: "var(--green)",
    title: "Track your progress",
    body: "Each checked task contributes to your daily completion. Finish all non-break tasks to mark the day complete.",
  },
  {
    icon: BsKanban,
    color: "var(--purple)",
    title: "Board view",
    body: "Switch to the Board tab to see today's tasks laid out in a Kanban-style: To do, In progress, and Done.",
  },
  {
    icon: BsBarChart,
    color: "var(--orange)",
    title: "Weeks overview",
    body: "The Weeks tab shows your full 30-day grid, week by week, with colour-coded day chips and overall progress.",
  },
  {
    icon: BsJournalText,
    color: "var(--yellow)",
    title: "Weekly log",
    body: "After each week, head to the Log tab to write reflections: wins, blockers, ideas and key takeaways.",
  },
  {
    icon: BsRocketTakeoff,
    color: "var(--teal)",
    title: "You're all set!",
    body: "Start from Day 1 or jump to any day. Your data is saved locally on this device. Let's build something great!",
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
