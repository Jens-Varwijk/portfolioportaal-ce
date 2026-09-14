import { Target, ClipboardList, Compass, BarChart3, CheckSquare } from "lucide-react";
import { Card, StatCard } from "../components/Card";
import ContentOriginBadge from "../components/ContentOriginBadge";
import { mockProgress, mockDocuments, mockLearningGoals } from "../data/mockData";
import { officialDeadlines, officialMaterials } from "../data/officialData";
import { formatNL, parseISODate } from "../lib/date";
import "./Dashboard.css";

const materialsByPhase = officialMaterials.reduce<Record<string, number>>((acc, m) => {
  acc[m.phase] = (acc[m.phase] ?? 0) + 1;
  return acc;
}, {});

const upcomingDeadlines = [...officialDeadlines]
  .filter((d) => d.status !== "ingeleverd" && d.status !== "afgerond")
  .sort((a, b) => a.date.localeCompare(b.date))
  .slice(0, 5);

export default function Dashboard() {
  const p = mockProgress;

  return (
    <div className="dashboard">
      <div className="mockdata-banner">
        <ContentOriginBadge origin="OFFICIAL_CONTENT" />
        <span>
          Deadlines en materialen hiernaast komen uit de officiele studentenhandleiding. Voortgang, leerdoelen en
          documenten zijn nog <strong>DEMO/MOCKDATA</strong> zolang Supabase niet gekoppeld is.
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
          sub={`Week ${p.weeksDone + 36} van ${p.weeksTotal} weken`}
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
        <Card title="Eerstvolgende officiele momenten" action={<ContentOriginBadge origin="OFFICIAL_CONTENT" />}>
          <ul className="task-list">
            {upcomingDeadlines.map((d) => (
              <li key={d.id} className="task-row">
                <CheckSquare size={16} className="task-check" />
                <div className="task-body">
                  <div className="task-title">{d.title}</div>
                  <div className="task-meta">Week {d.week}</div>
                </div>
                <span className="task-due">{formatNL(parseISODate(d.date))}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Materialen per fase" action={<ContentOriginBadge origin="OFFICIAL_CONTENT" />}>
          <ul className="module-list">
            {Object.entries(materialsByPhase).map(([phase, count]) => (
              <li key={phase} className="module-row">
                <div className="module-body">
                  <div className="module-title">{phase}</div>
                  <div className="module-meta">{count} hulpmiddel{count === 1 ? "" : "en"}</div>
                </div>
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
