import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import StatusBadge from "../../components/StatusBadge";
import ContentOriginBadge from "../../components/ContentOriginBadge";
import { formatNL } from "../../lib/date";
import { allStakes, deadlineFor } from "./stakesUtils";
import type { StakeKind } from "./stakesUtils";
import "./Stakes.css";

type Filter = "alle" | StakeKind;

export default function StakesOverview() {
  const [filter, setFilter] = useState<Filter>("alle");
  const stakes = allStakes().filter((s) => filter === "alle" || s.kind === filter);

  return (
    <div className="stakes">
      <div className="stakes-header">
        <div>
          <h1>Lowstakes & Midstakes</h1>
          <p>Alle opdrachten uit de minor, met status, doel en gekoppelde leerdoelen/vaardigheden.</p>
        </div>
        <ContentOriginBadge origin="MOCKDATA" />
      </div>

      <div className="filter-row">
        {(["alle", "lowstake", "midstake"] as Filter[]).map((f) => (
          <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>
            {f === "alle" ? "Alle" : f === "lowstake" ? "Lowstakes" : "Midstakes"}
          </button>
        ))}
      </div>

      <div className="stakes-list">
        {stakes.map((s) => {
          const deadline = deadlineFor(s.deadlineId);
          return (
            <Link key={s.id} to={`/opdrachten/${s.id}`} className="stake-link">
              <Card className="stake-card">
                <div className="stake-card-top">
                  <div>
                    <span className={`kind-tag kind-${s.kind}`}>{s.kind === "lowstake" ? "Lowstake" : "Midstake"}</span>
                    <div className="stake-title">{s.title}</div>
                  </div>
                  <StatusBadge status={s.status} />
                </div>
                {s.goal && <p className="stake-goal">{s.goal}</p>}
                {deadline && <div className="stake-deadline">Deadline: {formatNL(new Date(deadline.date))}</div>}
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
