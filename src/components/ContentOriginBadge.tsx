import type { ContentOrigin } from "../types/content";
import "./ContentOriginBadge.css";

const labels: Record<ContentOrigin, string> = {
  OFFICIAL_CONTENT: "Officieel",
  USER_CONTENT: "Eigen invoer",
  GENERATED_CONTENT: "AI-gegenereerd",
  MOCKDATA: "DEMO / MOCKDATA",
};

export default function ContentOriginBadge({ origin }: { origin: ContentOrigin }) {
  return <span className={`origin-badge origin-${origin.toLowerCase()}`}>{labels[origin]}</span>;
}
