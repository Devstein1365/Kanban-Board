import { useState, useEffect } from "react";
import { BsX } from "react-icons/bs";

const COLORS = [
  { label: "Blue", value: "var(--accent)" },
  { label: "Purple", value: "var(--purple)" },
  { label: "Teal", value: "var(--teal)" },
  { label: "Orange", value: "var(--orange)" },
  { label: "Yellow", value: "var(--yellow)" },
  { label: "Green", value: "var(--green)" },
  { label: "Red", value: "var(--red)" },
];

const EMPTY = { title: "", desc: "", tagsRaw: "", color: "var(--accent)" };

export default function ProjectModal({ isOpen, onClose, onSave, initialData }) {
  const [form, setForm] = useState(EMPTY);

  useEffect(() => {
    if (!isOpen) return;
    if (initialData) {
      setForm({
        title: initialData.title || "",
        desc: initialData.desc || "",
        tagsRaw: (initialData.tags || []).join(", "),
        color: initialData.color || "var(--accent)",
      });
    } else {
      setForm(EMPTY);
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.title.trim()) return;
    const tags = form.tagsRaw
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    onSave({
      title: form.title.trim(),
      desc: form.desc.trim(),
      tags,
      color: form.color,
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span>{initialData ? "Edit Project" : "New Project"}</span>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <BsX size={22} />
          </button>
        </div>

        <div className="modal-body">
          <label className="form-label">Project Name *</label>
          <input
            className="form-input"
            placeholder="e.g. Portfolio Website"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            autoFocus
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-textarea"
            rows={3}
            placeholder="What are you building and why?"
            value={form.desc}
            onChange={(e) => set("desc", e.target.value)}
          />

          <label className="form-label">Tech Stack / Tags</label>
          <input
            className="form-input"
            placeholder="e.g. React, Node.js, MongoDB"
            value={form.tagsRaw}
            onChange={(e) => set("tagsRaw", e.target.value)}
          />
          <span style={{ fontSize: 11, color: "var(--text3)", marginTop: -6 }}>
            Separate with commas
          </span>

          <label className="form-label">Accent Colour</label>
          <div className="color-swatches">
            {COLORS.map((c) => (
              <button
                key={c.value}
                className={
                  "color-swatch" + (form.color === c.value ? " selected" : "")
                }
                style={{ background: c.value }}
                onClick={() => set("color", c.value)}
                title={c.label}
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-primary"
            onClick={handleSave}
            disabled={!form.title.trim()}
          >
            {initialData ? "Save Changes" : "Create Project"}
          </button>
        </div>
      </div>
    </div>
  );
}
