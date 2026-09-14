import type { ReactNode } from "react";
import EmptyState from "../components/EmptyState";

export default function PlaceholderPage({
  title,
  blocker,
  icon,
}: {
  title: string;
  blocker: string;
  icon?: ReactNode;
}) {
  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 4 }}>{title}</h1>
      <p style={{ color: "var(--text-muted)", marginTop: 0, marginBottom: 20, fontSize: 13.5 }}>
        Technische structuur (route, layout, states) staat klaar. Functionaliteit wordt gevuld zodra de
        onderstaande blocker is opgelost.
      </p>
      <EmptyState title="Nog geen data beschikbaar" description={blocker} icon={icon} />
    </div>
  );
}
