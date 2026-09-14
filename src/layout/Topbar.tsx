import { Search, Bell, HelpCircle, Menu } from "lucide-react";
import "./Topbar.css";

export default function Topbar({ onMenuClick, unreadNotifications }: { onMenuClick: () => void; unreadNotifications: number }) {
  return (
    <header className="topbar">
      <button className="topbar-menu-btn" onClick={onMenuClick} aria-label="Open menu">
        <Menu size={20} />
      </button>

      <div className="topbar-search">
        <Search size={16} />
        <input aria-label="Zoeken" placeholder="Zoek naar opdrachten, documenten, mails, leerdoelen..." />
      </div>

      <div className="topbar-actions">
        <button className="icon-btn" aria-label="Notificaties">
          <Bell size={18} />
          {unreadNotifications > 0 && <span className="icon-dot" />}
        </button>
        <button className="icon-btn" aria-label="Help">
          <HelpCircle size={18} />
        </button>
        <div className="avatar avatar-sm">JV</div>
      </div>
    </header>
  );
}
