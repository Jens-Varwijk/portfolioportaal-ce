import { Routes, Route } from "react-router-dom";
import { Target, BarChart3, FileText, PenLine, Folder, BookOpen, FileCheck2, GraduationCap, Users, Mail, Settings } from "lucide-react";
import AppShell from "./layout/AppShell";
import Dashboard from "./pages/Dashboard";
import Planning from "./pages/Planning/Planning";
import Deadlines from "./pages/Deadlines/Deadlines";
import StakesOverview from "./pages/Stakes/StakesOverview";
import StakeDetail from "./pages/Stakes/StakeDetail";
import PlaceholderPage from "./pages/PlaceholderPage";

const STUDIEGIDS_BLOCKER =
  "Wacht op de officiele studiehandleiding van de minor om deadlines, Lowstakes/Midstakes en E-learningmodules te kunnen invullen (mag niet worden verzonnen).";
const BACKEND_BLOCKER =
  "Wacht op configuratie van Supabase (database/storage) om deze module met echte data te vullen.";
const MS_BLOCKER =
  "Wacht op configuratie van Microsoft Entra ID / Graph API (client ID, tenant, redirect URI) om te koppelen met Outlook en Agenda.";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/deadlines" element={<Deadlines />} />
        <Route path="/opdrachten" element={<StakesOverview />} />
        <Route path="/opdrachten/:id" element={<StakeDetail />} />
        <Route path="/leerdoelen" element={<PlaceholderPage title="Leerdoelen" blocker={BACKEND_BLOCKER} icon={<Target size={22} />} />} />
        <Route path="/vaardigheden" element={<PlaceholderPage title="Vaardigheden" blocker={BACKEND_BLOCKER} icon={<BarChart3 size={22} />} />} />
        <Route path="/documenten" element={<PlaceholderPage title="Documenten" blocker={BACKEND_BLOCKER} icon={<FileText size={22} />} />} />
        <Route path="/reflectie" element={<PlaceholderPage title="Reflectie" blocker={BACKEND_BLOCKER} icon={<PenLine size={22} />} />} />
        <Route path="/portfolio" element={<PlaceholderPage title="Portfolio" blocker={BACKEND_BLOCKER} icon={<Folder size={22} />} />} />
        <Route path="/e-learning" element={<PlaceholderPage title="E-learning" blocker={STUDIEGIDS_BLOCKER} icon={<BookOpen size={22} />} />} />
        <Route path="/toetsmateriaal" element={<PlaceholderPage title="Toetsmateriaal" blocker={STUDIEGIDS_BLOCKER} icon={<FileCheck2 size={22} />} />} />
        <Route path="/samenvattingen" element={<PlaceholderPage title="Samenvattingen" blocker={STUDIEGIDS_BLOCKER} icon={<GraduationCap size={22} />} />} />
        <Route path="/samenwerken" element={<PlaceholderPage title="Samenwerken" blocker={BACKEND_BLOCKER} icon={<Users size={22} />} />} />
        <Route path="/outlook" element={<PlaceholderPage title="Outlook" blocker={MS_BLOCKER} icon={<Mail size={22} />} />} />
        <Route path="/instellingen" element={<PlaceholderPage title="Instellingen" blocker={BACKEND_BLOCKER} icon={<Settings size={22} />} />} />
        <Route path="*" element={<PlaceholderPage title="Pagina niet gevonden" blocker="Deze pagina bestaat niet." />} />
      </Route>
    </Routes>
  );
}
