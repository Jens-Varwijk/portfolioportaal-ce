import { NavLink } from "react-router-dom";
import {
  Home, Calendar, Clock, Target, BarChart3, FileText, PenLine, Folder,
  BookOpen, FileCheck2, GraduationCap, Users, Mail, Settings, Leaf, ListChecks,
} from "lucide-react";
import { primaryNav, secondaryNav, type NavItem } from "../config/navigation";
import "./Sidebar.css";

const icons: Record<string, React.ComponentType<{ size?: number }>> = {
  home: Home,
  calendar: Calendar,
  clock: Clock,
  target: Target,
  bars: BarChart3,
  doc: FileText,
  pen: PenLine,
  folder: Folder,
  book: BookOpen,
  "file-check": FileCheck2,
  cap: GraduationCap,
  users: Users,
  mail: Mail,
  check: ListChecks,
};

function NavList({ items }: { items: NavItem[] }) {
  return (
    <ul className="sidebar-list">
      {items.map((item) => {
        const Icon = icons[item.icon] ?? Home;
        return (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")}
              end={item.path === "/"}
            >
              <Icon size={18} />
              <span>{item.label}</span>
              {item.badge ? <span className="sidebar-badge">{item.badge}</span> : null}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Leaf size={22} />
        <div>
          <div className="sidebar-brand-title">Circulaire Economie</div>
          <div className="sidebar-brand-sub">Mijn Portfolio</div>
        </div>
      </div>

      <nav>
        <NavList items={primaryNav} />
        <div className="sidebar-divider" />
        <NavList items={secondaryNav} />
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/instellingen" className="sidebar-link">
          <Settings size={18} />
          <span>Instellingen</span>
        </NavLink>
        <div className="sidebar-user">
          <div className="avatar">JV</div>
          <div>
            <div className="sidebar-user-name">Jens Varwijk</div>
            <div className="sidebar-user-role">Student</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
