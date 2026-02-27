import { WEEKS, ALL_DAYS } from "../data/constants";

export default function Weeks({ state, week, goDay }) {
  return (
    <div className="page">
      <div className="section-label">Select Week</div>

      {/* Week Strip */}
      <div className="week-strip">
        {WEEKS.map((w) => (
          <button
            key={w.num}
            className={`week-pill${week.num === w.num ? " active" : ""}`}
            style={
              week.num === w.num
                ? { background: w.color, borderColor: "transparent" }
                : {}
            }
            onClick={() => goDay(w.days[0])}
          >
            W{w.num} · {w.title}
          </button>
        ))}
      </div>

      {/* Week Cards */}
      {WEEKS.map((w) => {
        const doneDays = w.days.filter((d) =>
          state.completedDays.includes(d),
        ).length;
        const pct = Math.round((doneDays / w.days.length) * 100);

        return (
          <div key={w.num} className="card" style={{ marginBottom: 10 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--text3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Week {w.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: w.color,
                }}
              >
                {pct}%
              </div>
            </div>

            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 4,
              }}
            >
              {w.title}
            </div>
            <div
              style={{ fontSize: 11, color: "var(--text3)", marginBottom: 10 }}
            >
              {w.subtitle}
            </div>

            {/* Day dots */}
            <div className="day-dots-row">
              {w.days.map((d) => {
                const isDone = state.completedDays.includes(d);
                const isToday = d === state.currentDay;
                return (
                  <button
                    key={d}
                    className={`day-dot-btn${isDone ? " done" : isToday ? " today" : ""}`}
                    onClick={() => goDay(d)}
                    title={ALL_DAYS.find((x) => x.day === d)?.focus}
                  >
                    {d}
                  </button>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="p-bar">
              <div
                className="p-bar-fill"
                style={{ width: pct + "%", background: w.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
