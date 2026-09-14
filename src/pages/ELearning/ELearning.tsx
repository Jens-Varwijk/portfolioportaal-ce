import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import ContentOriginBadge from "../../components/ContentOriginBadge";
import StatusBadge from "../../components/StatusBadge";
import { officialLearningModules } from "../../data/officialData";
import "./ELearning.css";

export default function ELearning() {
  return (
    <div className="elearning">
      <div className="elearning-header">
        <div>
          <h1>E-learning</h1>
          <p>
            Deze minor werkt niet met klassieke E-learningmodules (video/quiz), maar met terugkerende contactmomenten
            en 18 hulpmiddelen per fase. Hieronder staan de terugkerende lessessies uit het rooster als "modules",
            met een voortgang die objectief is afgeleid uit de datum (geweest = afgerond). Voor de downloadbare
            hulpmiddelen zelf, zie{" "}
            <Link to="/toetsmateriaal">Materialen</Link>.
          </p>
        </div>
        <ContentOriginBadge origin="OFFICIAL_CONTENT" />
      </div>

      <div className="elearning-grid">
        {officialLearningModules.map((m) => (
          <Card key={m.id} className="elm-card">
            <div className="elm-top">
              <div className="elm-title">{m.title}</div>
              <StatusBadge status={m.status} />
            </div>
            <p className="elm-desc">{m.description}</p>
            {m.materials && m.materials.length > 0 && (
              <p className="elm-people">Docenten: {m.materials.join(", ")}</p>
            )}
            <div className="elm-progress">
              <div className="elm-progress-bar">
                <div className="elm-progress-fill" style={{ width: `${m.progressPercent}%` }} />
              </div>
              <span>{m.progressPercent}%</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
