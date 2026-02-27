import { useState } from "react";
import {
  BsRocketTakeoff,
  BsCheckCircleFill,
  BsPlus,
  BsPencilSquare,
  BsTrash,
} from "react-icons/bs";
import ProjectModal from "../components/ProjectModal";

const getStatus = (progress) => {
  if (progress === 0)
    return { label: "Not started", cls: "locked", check: false };
  if (progress < 100)
    return { label: "In progress", cls: "building", check: false };
  return { label: "Deployed", cls: "done", check: true };
};

export default function Projects({
  state,
  addProject,
  editProject,
  deleteProject,
  updateProjectProgress,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const projects = Array.isArray(state.projects) ? state.projects : [];

  const openAdd = () => {
    setEditingProject(null);
    setModalOpen(true);
  };
  const openEdit = (p) => {
    setEditingProject(p);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setEditingProject(null);
  };

  const handleSave = (data) => {
    if (editingProject) editProject(editingProject.id, data);
    else addProject(data);
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this project?")) deleteProject(id);
  };

  return (
    <div className="page">
      {/* Banner */}
      <div className="rule-banner" style={{ marginBottom: 12 }}>
        <div className="rule-icon">
          <BsRocketTakeoff />
        </div>
        <div>
          <div className="rule-title">My Projects</div>
          <div className="rule-desc">
            Add the projects you're building during your 30-day journey. Track
            progress as you go.
          </div>
        </div>
      </div>

      {/* Empty state */}
      {projects.length === 0 && (
        <div className="empty-state">
          <BsRocketTakeoff
            size={36}
            style={{ color: "var(--text3)", marginBottom: 12 }}
          />
          <div className="empty-state-title">No projects yet</div>
          <div className="empty-state-body">
            Tap the + button below to add your first project — give it a name,
            describe what you're building, tag your tech stack and track your
            progress.
          </div>
        </div>
      )}

      {/* Project cards */}
      {projects.map((p, idx) => {
        const status = getStatus(p.progress || 0);
        const color = p.color || "var(--accent)";

        return (
          <div key={p.id} className="project-card">
            {/* Accent top bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: color,
                borderRadius: "var(--r) var(--r) 0 0",
              }}
            />

            <div className="p-header">
              <span className="p-num" style={{ color }}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span
                className={`p-status ${status.cls}`}
                style={{ display: "flex", alignItems: "center", gap: 4 }}
              >
                {status.check && (
                  <BsCheckCircleFill style={{ flexShrink: 0 }} />
                )}
                {status.label}
              </span>
              <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
                <button
                  className="task-action-btn"
                  onClick={() => openEdit(p)}
                  aria-label="Edit project"
                >
                  <BsPencilSquare size={12} />
                </button>
                <button
                  className="task-action-btn danger"
                  onClick={() => handleDelete(p.id)}
                  aria-label="Delete project"
                >
                  <BsTrash size={12} />
                </button>
              </div>
            </div>

            <div className="p-title">{p.title}</div>
            {p.desc && <div className="p-desc">{p.desc}</div>}

            {p.tags && p.tags.length > 0 && (
              <div className="p-tags">
                {p.tags.map((t) => (
                  <span key={t} className="p-tag">
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="p-bar-label">
              <span>Progress</span>
              <span style={{ color }}>{p.progress || 0}%</span>
            </div>
            <div className="p-bar">
              <div
                className="p-bar-fill"
                style={{ width: (p.progress || 0) + "%", background: color }}
              />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={p.progress || 0}
              className="p-slider"
              onChange={(e) => updateProjectProgress(p.id, e.target.value)}
            />
          </div>
        );
      })}

      {/* FAB */}
      <button className="fab" onClick={openAdd} aria-label="Add project">
        <BsPlus size={28} />
      </button>

      <ProjectModal
        isOpen={modalOpen}
        onClose={closeModal}
        onSave={handleSave}
        initialData={editingProject}
      />
    </div>
  );
}
