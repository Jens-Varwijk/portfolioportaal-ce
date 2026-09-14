import type { ReactNode } from "react";
import { Construction } from "lucide-react";
import "./EmptyState.css";

export default function EmptyState({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icon ?? <Construction size={22} />}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
