import { NavLink } from "react-router-dom";
import { X, Leaf } from "lucide-react";
import { primaryNav, secondaryNav } from "../config/navigation";
import "./MobileDrawer.css";

export default function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const allItems = [...primaryNav, ...secondaryNav];

  return (
    <div className="drawer-overlay" role="dialog" aria-modal="true">
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="drawer-panel">
        <div className="drawer-header">
          <div className="drawer-brand">
            <Leaf size={20} />
            <span>Circulaire Economie</span>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Sluit menu">
            <X size={18} />
          </button>
        </div>
        <nav className="drawer-nav">
          {allItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}
              end={item.path === "/"}
            >
              <span>{item.label}</span>
              {item.badge ? <span className="sidebar-badge">{item.badge}</span> : null}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
