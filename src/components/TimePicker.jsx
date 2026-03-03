import { useState, useRef, useEffect, useCallback } from "react";

const HOURS = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const MINUTES = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
];
const PERIODS = ["AM", "PM"];
const ITEM_H = 42; // px per row

/* ── parse existing time string ─────────────────────── */
function parseTime(str) {
  const def = {
    fromH: "9",
    fromM: "00",
    fromP: "AM",
    toH: "10",
    toM: "00",
    toP: "AM",
  };
  if (!str) return def;
  // "9:00–10:00 AM"  (same period, en-dash or hyphen)
  let m = str.match(/^(\d+):(\d+)\s*[-–]+\s*(\d+):(\d+)\s+(AM|PM)$/i);
  if (m)
    return {
      fromH: m[1],
      fromM: m[2],
      fromP: m[5].toUpperCase(),
      toH: m[3],
      toM: m[4],
      toP: m[5].toUpperCase(),
    };
  // "9:00 AM–10:00 PM"  (different periods)
  m = str.match(/^(\d+):(\d+)\s+(AM|PM)\s*[-–]+\s*(\d+):(\d+)\s+(AM|PM)$/i);
  if (m)
    return {
      fromH: m[1],
      fromM: m[2],
      fromP: m[3].toUpperCase(),
      toH: m[4],
      toM: m[5],
      toP: m[6].toUpperCase(),
    };
  return def;
}

/* ── format state → display string ─────────────────── */
function fmtTime(s) {
  if (s.fromP === s.toP)
    return `${s.fromH}:${s.fromM}–${s.toH}:${s.toM} ${s.toP}`;
  return `${s.fromH}:${s.fromM} ${s.fromP}–${s.toH}:${s.toM} ${s.toP}`;
}

/* ── single scrollable drum column ─────────────────── */
function ScrollCol({ items, value, onChange }) {
  const ref = useRef(null);
  const tRef = useRef(null);

  // scroll to current value on first render
  useEffect(() => {
    const idx = items.indexOf(value);
    if (ref.current && idx >= 0) ref.current.scrollTop = idx * ITEM_H;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = useCallback(() => {
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => {
      if (!ref.current) return;
      const idx = Math.round(ref.current.scrollTop / ITEM_H);
      const safe = Math.max(0, Math.min(idx, items.length - 1));
      ref.current.scrollTo({ top: safe * ITEM_H, behavior: "smooth" });
      onChange(items[safe]);
    }, 120);
  }, [items, onChange]);

  return (
    <div className="tp-col" ref={ref} onScroll={onScroll}>
      <div className="tp-pad" />
      {items.map((it) => (
        <div
          key={it}
          className={`tp-item${it === value ? " tp-sel" : ""}`}
          onClick={() => {
            const idx = items.indexOf(it);
            ref.current?.scrollTo({ top: idx * ITEM_H, behavior: "smooth" });
            onChange(it);
          }}
        >
          {it}
        </div>
      ))}
      <div className="tp-pad" />
    </div>
  );
}

/* ── one full time panel (h : m  am/pm) ─────────────── */
function TimePanel({ h, m, p, onH, onM, onP }) {
  return (
    <div className="tp-panel">
      {/* center highlight band */}
      <div className="tp-highlight-bar" />
      <div className="tp-cols">
        <ScrollCol items={HOURS} value={h} onChange={onH} />
        <div className="tp-colon">:</div>
        <ScrollCol items={MINUTES} value={m} onChange={onM} />
        <div className="tp-colon" />
        <ScrollCol items={PERIODS} value={p} onChange={onP} />
      </div>
    </div>
  );
}

/* ── main exported component ────────────────────────── */
export default function TimePicker({ value, onChange }) {
  const [st, setSt] = useState(() => parseTime(value));
  const [which, setWhich] = useState(null); // "from" | "to" | null

  const update = (prefix, key, val) => {
    // prefix = "from" | "to", key = "H" | "M" | "P"
    const field = prefix + key; // e.g. "fromH"
    setSt((prev) => {
      const next = { ...prev, [field]: val };
      onChange(fmtTime(next));
      return next;
    });
  };

  const toggle = (id) => setWhich((w) => (w === id ? null : id));

  return (
    <div className="time-picker">
      {/* ── slot buttons row ── */}
      <div className="tp-slots">
        <button
          type="button"
          className={`tp-slot${which === "from" ? " tp-slot-active" : ""}`}
          onClick={() => toggle("from")}
        >
          <span className="tp-slot-label">From</span>
          <span className="tp-slot-val">
            {st.fromH}:{st.fromM}
            <span className="tp-slot-period">{st.fromP}</span>
          </span>
        </button>

        <div className="tp-dash">→</div>

        <button
          type="button"
          className={`tp-slot${which === "to" ? " tp-slot-active" : ""}`}
          onClick={() => toggle("to")}
        >
          <span className="tp-slot-label">To</span>
          <span className="tp-slot-val">
            {st.toH}:{st.toM}
            <span className="tp-slot-period">{st.toP}</span>
          </span>
        </button>
      </div>

      {/* ── drum panels ── */}
      {which === "from" && (
        <TimePanel
          h={st.fromH}
          m={st.fromM}
          p={st.fromP}
          onH={(v) => update("from", "H", v)}
          onM={(v) => update("from", "M", v)}
          onP={(v) => update("from", "P", v)}
        />
      )}
      {which === "to" && (
        <TimePanel
          h={st.toH}
          m={st.toM}
          p={st.toP}
          onH={(v) => update("to", "H", v)}
          onM={(v) => update("to", "M", v)}
          onP={(v) => update("to", "P", v)}
        />
      )}
    </div>
  );
}
