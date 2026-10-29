import { STATUSES } from './mockTasks.js';

export default function TaskList({ tasks, onStatusChange }) {
  if (tasks.length === 0) return <p className="empty">No tasks match.</p>;

  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <li key={t.id} className="task-card">
          <div className="task-main">
            <h3>{t.title}</h3>
            <p className="meta">{t.assignee} · {t.hours}h</p>
          </div>
          <select
            value={t.status}
            onChange={(e) => onStatusChange(t.id, e.target.value)}
            className={`status ${t.status.replace(/\s/g, '-').toLowerCase()}`}
            aria-label={`Status for ${t.title}`}
          >
            {STATUSES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </li>
      ))}
    </ul>
  );
}
