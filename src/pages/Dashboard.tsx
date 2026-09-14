import { Target, ClipboardList, Compass, BarChart3, Plus, CheckSquare } from "lucide-react";
import { Card, StatCard } from "../components/Card";
import ContentOriginBadge from "../components/ContentOriginBadge";
import {
  mockProgress,
  mockTasks,
  mockDocuments,
  mockELearning,
  mockLearningGoals,
} from "../data/mockData";
import "./Dashboard.css";

export default function Dashboard() {
  const p = mockProgress;

  return (
    <div className="dashboard">
      <div className="mockdata-banner">
        <ContentOriginBadge origin="MOCKDATA" />
        <span>
          Alle cijfers en items op dit dashboard zijn demodata. Zodra de studiehandleiding is aangeleverd en
          Supabase/Microsoft-integraties zijn geconfigureerd, wordt dit vervangen door echte data.
        </span>
      </div>

      <div className="dashboard-welcome">
        <div>
          <h1>Welkom terug, Jens!</h1>
          <p>Kleine stappen, grote impact.</p>
        </div>
      </div>

      <div className="stat-grid">
        <StatCard
          icon={<Compass size={20} />}
          value={`${p.minorProgressPercent}%`}
          label="Voortgang minor"
          sub={`${p.weeksDone} / ${p.weeksTotal} weken`}
        />
        <StatCard icon={<ClipboardList size={20} />} value={String(p.openDeadlines)} label="Open deadlines" />
        <StatCard
          icon={<Target size={20} />}
          value={`${p.learningGoalsAchieved} / ${p.learningGoalsTotal}`}
          label="Leerdoelen behaald"
        />
        <StatCard
          icon={<BarChart3 size={20} />}
          value={`${p.skillsInProgress} / ${p.skillsTotal}`}
          label="Vaardigheden"
        />
      </div>

      <div className="dashboard-grid">
        <Card
          title="Mijn taken"
          action={
            <button className="btn-primary">
              <Plus size={14} /> Nieuwe taak
            </button>
          }
        >
          <ul className="task-list">
            {mockTasks.map((task) => (
              <li key={task.id} className="task-row">
                <CheckSquare size={16} className="task-check" />
                <div className="task-body">
                  <div className="task-title">{task.title}</div>
                  <div className="task-meta">{task.week}</div>
                </div>
                <span className="task-due">{task.dueDate}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="E-learning voortgang">
          <ul className="module-list">
            {mockELearning.map((m) => (
              <li key={m.id} className="module-row">
                <div className="module-body">
                  <div className="module-title">{m.title}</div>
                  <div className="module-meta">{m.description}</div>
                </div>
                <div className="progress-pill">{m.progressPercent}%</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="dashboard-grid">
        <Card title="Recente documenten">
          <ul className="doc-list">
            {mockDocuments.map((d) => (
              <li key={d.id} className="doc-row">
                <div className="doc-title">{d.fileName}</div>
                <span className="doc-tag">{d.category}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Mijn leerdoelen">
          <ul className="goal-list">
            {mockLearningGoals.map((g) => (
              <li key={g.id} className="goal-row">
                <div className="goal-title">{g.title}</div>
                <div className="goal-bar">
                  <div className="goal-bar-fill" style={{ width: `${g.progressPercent}%` }} />
                </div>
                <span className="goal-percent">{g.progressPercent}%</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
