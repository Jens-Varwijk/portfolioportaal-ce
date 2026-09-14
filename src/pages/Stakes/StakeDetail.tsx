import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card } from "../../components/Card";
import StatusBadge from "../../components/StatusBadge";
import ContentOriginBadge from "../../components/ContentOriginBadge";
import EmptyState from "../../components/EmptyState";
import { formatNL, parseISODate } from "../../lib/date";
import { findStake, deadlineFor, documentsFor, learningGoalsFor, skillsFor } from "./stakesUtils";
import type { Midstake } from "../../types/entities";
import "./Stakes.css";

export default function StakeDetail() {
  const { id } = useParams<{ id: string }>();
  const stake = id ? findStake(id) : undefined;

  if (!stake) {
    return (
      <EmptyState
        title="Opdracht niet gevonden"
        description="Deze Lowstake/Midstake bestaat niet (meer). Ga terug naar het overzicht."
      />
    );
  }

  const deadline = deadlineFor(stake.deadlineId);
  const documents = documentsFor(stake.documentIds);
  const learningGoals = learningGoalsFor(stake.learningGoalIds);
  const skills = skillsFor(stake.skillIds);
  const midstake = stake.kind === "midstake" ? (stake as Midstake) : undefined;

  return (
    <div className="stake-detail">
      <Link to="/opdrachten" className="back-link">
        <ArrowLeft size={14} /> Terug naar overzicht
      </Link>

      <div className="stake-detail-header">
        <div>
          <span className={`kind-tag kind-${stake.kind}`}>{stake.kind === "lowstake" ? "Lowstake" : "Midstake"}</span>
          <h1>{stake.title}</h1>
        </div>
        <div className="stake-detail-badges">
          <StatusBadge status={stake.status} />
          <ContentOriginBadge origin={stake.origin ?? "MOCKDATA"} />
        </div>
      </div>

      <div className="stake-detail-grid">
        <Card title="Omschrijving">
          <p>{stake.description ?? "Informatie niet beschikbaar in de aangeleverde studiehandleiding."}</p>
          {stake.goal && (
            <>
              <h4 className="sub-heading">Doel</h4>
              <p>{stake.goal}</p>
            </>
          )}
          {midstake?.assignmentDescription && (
            <>
              <h4 className="sub-heading">Opdrachtomschrijving</h4>
              <p>{midstake.assignmentDescription}</p>
            </>
          )}
          {midstake?.materials && midstake.materials.length > 0 && (
            <>
              <h4 className="sub-heading">Materialen</h4>
              <ul className="plain-list">
                {midstake.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </>
          )}
        </Card>

        <div className="stake-detail-side">
          <Card title="Kerngegevens">
            <dl className="meta-list">
              <div>
                <dt>Startmoment</dt>
                <dd>{stake.startDate ? formatNL(parseISODate(stake.startDate)) : "Onbekend"}</dd>
              </div>
              <div>
                <dt>Deadline</dt>
                <dd>{deadline ? formatNL(parseISODate(deadline.date)) : "Geen gekoppelde deadline"}</dd>
              </div>
            </dl>
          </Card>

          <Card title="Leerdoelen & vaardigheden">
            {learningGoals.length === 0 && skills.length === 0 ? (
              <p className="muted">Nog niet gekoppeld.</p>
            ) : (
              <ul className="plain-list">
                {learningGoals.map((g) => (
                  <li key={g.id}>🎯 {g.title}</li>
                ))}
                {skills.map((s) => (
                  <li key={s.id}>📊 {s.title}</li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </div>

      <Card title="Documenten">
        {documents.length === 0 ? (
          <p className="muted">Nog geen documenten gekoppeld.</p>
        ) : (
          <ul className="plain-list">
            {documents.map((d) => (
              <li key={d.id}>{d.fileName}</li>
            ))}
          </ul>
        )}
      </Card>

      <Card title="Feedback & reflecties">
        <p className="muted">
          Wacht op configuratie van Supabase om feedback en reflecties bij deze opdracht op te slaan en te tonen.
        </p>
      </Card>
    </div>
  );
}
