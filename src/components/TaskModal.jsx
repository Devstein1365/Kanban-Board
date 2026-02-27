import { useState, useEffect } from "react";
import { TYPE_META } from "../data/constants";
import { BsX } from "react-icons/bs";

const EMPTY = { activity: "", time: "", type: "learning", detail: "" };

export default function TaskModal({ isOpen, onClose, onSave, initialData }) {
  const [form, setForm] = useState(EMPTY);

  useEffect(() => {
    if (isOpen) setForm(initialData ? { ...EMPTY, ...initialData } : EMPTY);
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.activity.trim()) return;
    onSave({ ...form, activity: form.activity.trim() });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span>{initialData ? "Edit Task" : "Add Task"}</span>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <BsX size={22} />
          </button>
        </div>

        <div className="modal-body">
          <label className="form-label">Activity *</label>
          <input
            className="form-input"
            placeholder="e.g. Read MDN Flexbox docs"
            value={form.activity}
            onChange={(e) => set("activity", e.target.value)}
            autoFocus
          />

          <label className="form-label">Time</label>
          <input
            className="form-input"
            placeholder="e.g. 9:00–10:00 AM"
            value={form.time}
            onChange={(e) => set("time", e.target.value)}
          />

          <label className="form-label">Type</label>
          <select
            className="form-select"
            value={form.type}
            onChange={(e) => set("type", e.target.value)}
          >
            {Object.entries(TYPE_META).map(([key, meta]) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>

          <label className="form-label">Detail</label>
          <textarea
            className="form-textarea"
            rows={3}
            placeholder="Optional notes or links…"
            value={form.detail}
            onChange={(e) => set("detail", e.target.value)}
          />
        </div>

        <div className="modal-footer">
          <button className="btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-primary"
            onClick={handleSave}
            disabled={!form.activity.trim()}
          >
            {initialData ? "Save Changes" : "Add Task"}
          </button>
        </div>
      </div>
    </div>
  );
}
