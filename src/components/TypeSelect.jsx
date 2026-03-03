import { useState, useRef, useEffect } from "react";
import { TYPE_META } from "../data/constants";
import { BsChevronDown } from "react-icons/bs";

export default function TypeSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const meta = TYPE_META[value] || TYPE_META.learning;

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const pick = (key) => {
    onChange(key);
    setOpen(false);
  };

  return (
    <div className="type-select" ref={ref}>
      {/* trigger button */}
      <button
        type="button"
        className={`ts-trigger${open ? " ts-trigger-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="ts-dot" style={{ background: meta.color }} />
        <span className="ts-trigger-label">{meta.label}</span>
        <BsChevronDown
          size={12}
          className="ts-chevron"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* dropdown menu */}
      {open && (
        <div className="ts-menu">
          {Object.entries(TYPE_META).map(([key, m]) => {
            const active = key === value;
            return (
              <button
                key={key}
                type="button"
                className={`ts-option${active ? " ts-option-active" : ""}`}
                onClick={() => pick(key)}
              >
                {/* colour pill */}
                <span
                  className="ts-option-pill"
                  style={{ background: m.bg, borderColor: m.color }}
                >
                  <span className="ts-dot" style={{ background: m.color }} />
                  <span className="ts-option-label">{m.label}</span>
                </span>
                {active && <span className="ts-check">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
