import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileDrawer from "./MobileDrawer";
import { mockNotifications } from "../data/mockData";
import "./AppShell.css";

export default function AppShell() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const unread = mockNotifications.filter((n) => !n.read).length;

  return (
    <div className="app-shell">
      <Sidebar />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="app-main">
        <Topbar onMenuClick={() => setDrawerOpen(true)} unreadNotifications={unread} />
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
