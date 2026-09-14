import type { ReactNode } from "react";
import "./Card.css";

export function Card({ title, action, children, className }: { title?: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={"card" + (className ? ` ${className}` : "")}>
      {(title || action) && (
        <header className="card-header">
          {title && <h2 className="card-title">{title}</h2>}
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

export function StatCard({ icon, value, label, sub }: { icon: ReactNode; value: string; label: string; sub?: ReactNode }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        {sub && <div className="stat-sub">{sub}</div>}
      </div>
    </div>
  );
}
