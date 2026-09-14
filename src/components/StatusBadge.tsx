import type { Status } from "../types/entities";
import "./StatusBadge.css";

const labels: Record<Status, string> = {
  niet_gestart: "Niet gestart",
  bezig: "Bezig",
  bijna_klaar: "Bijna klaar",
  ingeleverd: "Ingeleverd",
  afgerond: "Afgerond",
  te_laat: "Te laat",
};

export default function StatusBadge({ status }: { status: Status }) {
  return <span className={`status-badge status-${status}`}>{labels[status]}</span>;
}
